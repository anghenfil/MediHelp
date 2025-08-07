import {app_settings} from "../app";

let areas_vorderseite: HTMLElement;
let areas_rueckseite: HTMLElement;

export function init(){
    areas_vorderseite = document.getElementById("areas_vorderseite");
    areas_rueckseite = document.getElementById("areas_rueckseite");

    for(let group of document.querySelectorAll("g")){
        console.log("group "+group.id+" has "+group.children.length+" children = "+group.children.length/4);
    }

    if(areas_vorderseite && areas_rueckseite){
        let paths = [...areas_vorderseite.querySelectorAll("path"), ...areas_rueckseite.querySelectorAll("path")];

        for(let path of paths){
            path.style.fill = "transparent";
            path.addEventListener("click", function(e){
                let target = e.target as SVGPathElement;
                if(target.style.fill === "red"){
                    target.style.fill = "transparent";
                }else{
                    target.style.fill = "red";
                }
                save_state();
                calculate_result();
            });
        }
        let quickselectors = document.querySelectorAll(".burns-quickcontrols > button");
        for(let quickselector of quickselectors){
            quickselector.addEventListener("click", function(e){
                let target = e.target as HTMLElement;
                let svg_area_target = target.getAttribute("data-svg-target");

                let paths = document.querySelector("#"+svg_area_target).querySelectorAll("path");
                // Check if all paths are already selected
                let not_selected = false;
                for(let path of paths){
                    if(path.style.fill === "transparent"){
                        not_selected = true;
                        break;
                    }
                }

                if(not_selected){
                    for(let path of paths){
                        path.style.fill = "red";
                    }
                }else{
                    for(let path of paths){
                        path.style.fill = "transparent";
                    }
                }
                save_state();
                calculate_result();
            })
        }
        load_state();
    }
}

function calculate_result(){
    let paths = [...areas_vorderseite.querySelectorAll("path"), ...areas_rueckseite.querySelectorAll("path")];

    let total = paths.length;
    let selected = 0;
    for(let path of paths){
        if(path.style.fill === "red"){
            selected = selected+1;
        }
    }

    let result = Math.round((selected/total)*100);
    document.getElementById("result_value").innerText = result.toString();
}

function save_state(){
    let selected = [];
    let paths_vorderseite = areas_vorderseite.querySelectorAll("path");
    let paths_rueckseite = areas_rueckseite.querySelectorAll("path");

    for(let path of paths_vorderseite){
        if(path.style.fill === "red"){
            selected.push(path.id);
        }
    }

    for(let path of paths_rueckseite){
        if(path.style.fill === "red"){
            selected.push(path.id);
        }
    }

    if(app_settings.patient_settings.patient.AdultPatient){
        app_settings.patient_settings.patient.AdultPatient.burn_diagram_selected = selected;
        console.log("Saved selected:"+selected);
    }
}

function load_state(){
    let selected: string[] = [];
    if(app_settings.patient_settings.patient.AdultPatient && app_settings.patient_settings.patient.AdultPatient.burn_diagram_selected){
        selected = app_settings.patient_settings.patient.AdultPatient.burn_diagram_selected;
    }

    console.log("Loading selected:"+selected);

    for(let path_id of selected){
        document.getElementById(path_id).style.fill = "red";
    }
    calculate_result();
}