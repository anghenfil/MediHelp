import {app_settings} from "../app";
import {ChildAge} from "../patient_settings";

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

    for(let input of document.querySelectorAll(".score input")){
        input.addEventListener("change", calculate_absi);
        input.addEventListener("input", calculate_absi);
    }
}

function calculate_absi(){
    let result = 0;
    var selected = document.querySelector('input[type=radio][name=sex]:checked');
    if(!selected){
        return;
    }
    if((selected as HTMLInputElement).value === "female"){ // Add 1 point for female
        result = result +1;
    }
    if(app_settings.patient_settings.patient.AdultPatient){ // Add 1 point per 20 years
        if(!app_settings.patient_settings.patient.AdultPatient.age){
            return;
        }
        result = result + Math.floor(app_settings.patient_settings.patient.AdultPatient.age/20)
    }
    let kof_affected = document.getElementById("kof-affected") as HTMLInputElement;
    result = result + Math.floor(parseInt(kof_affected.value)/10);
    if((document.getElementById("inhalation-1") as HTMLInputElement).checked){
        result = result + 1;
    }
    if((document.getElementById("third_degree_burn-1") as HTMLInputElement).checked){
        result = result + 1;
    }

    document.getElementsByClassName("score-result-points")[0].innerHTML = result.toString();
    let interpretation = document.getElementById("score-absi-interpretation");

    if(result <= 3){
        interpretation.innerHTML = "Gute Prognose. Überlebensrate > 99 %";
    }else if(result <= 5){
        interpretation.innerHTML = "Mäßige Prognose. Überlebensrate 90 - 99 %"
    }else if(result <= 7){
        interpretation.innerHTML = "Mäßig-Ernste Prognose. Überlebensrate 80 - 90 %"
    }else if(result <= 9){
        interpretation.innerHTML = "Ernste Prognose. Überlebensrate 50 - 70 %"
    }else if(result <= 11){
        interpretation.innerHTML = "Schlechte Prognose. Überlebensrate 20 - 40 %"
    }else if(result > 12){
        interpretation.innerHTML = "Sehr schlechte Prognose. Überlebensrate < 10 %"
    }
}

function calculate_result(){
    let result;
    if(app_settings.patient_settings.patient.AdultPatient) {
        let paths = [...areas_vorderseite.querySelectorAll("path"), ...areas_rueckseite.querySelectorAll("path")];

        let total = paths.length;
        let selected = 0;
        for (let path of paths) {
            if (path.style.fill === "red") {
                selected = selected + 1;
            }
        }

        result = Math.round((selected / total) * 100);
    }else{
        let front_head = document.getElementById("front_head").style.fill === "red";
        let front_neck = document.getElementById("front_neck").style.fill === "red";
        let front_torso = document.getElementById("front_torso").style.fill === "red";
        let front_upper_arm_right = document.getElementById("front_upper_arm_right").style.fill === "red";
        let front_upper_arm_left = document.getElementById("front_upper_arm_left").style.fill === "red";
        let front_lower_arm_right = document.getElementById("front_lower_arm_right").style.fill === "red";
        let front_lower_arm_left = document.getElementById("front_lower_arm_left").style.fill === "red";
        let front_hand_right = document.getElementById("front_hand_right").style.fill === "red";
        let front_hand_left = document.getElementById("front_hand_left").style.fill === "red";
        let front_upper_leg_right = document.getElementById("front_upper_leg_right").style.fill === "red";
        let front_upper_leg_left = document.getElementById("front_upper_leg_left").style.fill === "red";
        let front_lower_leg_right = document.getElementById("front_lower_leg_right").style.fill === "red";
        let front_lower_leg_left = document.getElementById("front_lower_leg_left").style.fill === "red";
        let front_foot_right = document.getElementById("front_foot_right").style.fill === "red";
        let front_foot_left = document.getElementById("front_foot_left").style.fill === "red";
        let front_genital = document.getElementById("front_genital").style.fill === "red";
        let back_head = document.getElementById("back_head").style.fill === "red";
        let back_neck = document.getElementById("back_neck").style.fill === "red";
        let back_torso = document.getElementById("back_torso").style.fill === "red";
        let back_upper_arm_right = document.getElementById("back_upper_arm_right").style.fill === "red";
        let back_upper_arm_left = document.getElementById("back_upper_arm_left").style.fill === "red";
        let back_lower_arm_right = document.getElementById("back_lower_arm_right").style.fill === "red";
        let back_lower_arm_left = document.getElementById("back_lower_arm_left").style.fill === "red";
        let back_hand_right = document.getElementById("back_hand_right").style.fill === "red";
        let back_hand_left = document.getElementById("back_hand_left").style.fill === "red";
        let back_upper_leg_right = document.getElementById("back_upper_leg_right").style.fill === "red";
        let back_upper_leg_left = document.getElementById("back_upper_leg_left").style.fill === "red";
        let back_lower_leg_right = document.getElementById("back_lower_leg_right").style.fill === "red";
        let back_lower_leg_left = document.getElementById("back_lower_leg_left").style.fill === "red";
        let back_foot_right = document.getElementById("back_foot_right").style.fill === "red";
        let back_foot_left = document.getElementById("back_foot_left").style.fill === "red";
        let back_ass_left = document.getElementById("back_ass_left").style.fill === "red";
        let back_ass_right = document.getElementById("back_ass_right").style.fill === "red";

        let a;
        let b;
        let c;

        if(app_settings.patient_settings.patient.ChildPatient.age <= ChildAge.MONTHS12){
            a = 9.5;
            b = 2.75;
            c = 2.5;
        }else if(app_settings.patient_settings.patient.ChildPatient.age <= ChildAge.YEARS5){
            a = 8.5;
            b = 3.25;
            c = 2.5;
        }else if(app_settings.patient_settings.patient.ChildPatient.age <= ChildAge.YEARS10){
            a = 6.5;
            b = 4;
            c = 2.75;
        }else if(app_settings.patient_settings.patient.ChildPatient.age <= ChildAge.YEARS15){
            a = 5.5;
            b = 4.25;
            c = 3;
        }else{
            a = 4.5;
            b = 4.5;
            c = 3.25;
        }

        result = 0;

        if(front_head){
            result = result + a;
        }
        if(front_neck){
            result = result + 1;
        }
        if(front_torso){
            result = result + 13;
        }
        if(front_upper_arm_left){
            result = result + 2;
        }
        if(front_upper_arm_right){
            result = result + 2;
        }
        if(front_lower_arm_left){
            result = result + 1.5;
        }
        if(front_lower_arm_right){
            result = result + 1.5;
        }
        if(front_hand_left){
            result = result + 1.5;
        }
        if(front_hand_right){
            result = result + 1.5;
        }
        if(front_upper_leg_left){
            result = result + b;
        }
        if(front_upper_leg_right){
            result = result + b;
        }
        if(front_lower_leg_left){
            result = result + c;
        }
        if(front_lower_leg_right){
            result = result + c;
        }
        if(front_foot_left){
            result = result + 1.75;
        }
        if(front_foot_right){
            result = result + 1.75;
        }
        if(front_genital){
            result = result + 1;
        }
        if (back_head) {
            result = result + a;
        }
        if (back_neck) {
            result = result + 1;
        }
        if (back_torso) {
            result = result + 13;
        }
        if (back_upper_arm_left) {
            result = result + 2;
        }
        if (back_upper_arm_right) {
            result = result + 2;
        }
        if (back_lower_arm_left) {
            result = result + 1.5;
        }
        if (back_lower_arm_right) {
            result = result + 1.5;
        }
        if (back_hand_left) {
            result = result + 1.5;
        }
        if (back_hand_right) {
            result = result + 1.5;
        }
        if (back_upper_leg_left) {
            result = result + b;
        }
        if (back_upper_leg_right) {
            result = result + b;
        }
        if (back_lower_leg_left) {
            result = result + c;
        }
        if (back_lower_leg_right) {
            result = result + c;
        }
        if (back_foot_left) {
            result = result + 1.75;
        }
        if (back_foot_right) {
            result = result + 1.75;
        }
        if(back_ass_left){
            result = result + 2.5;
        }
        if(back_ass_right){
            result = result + 2.5;
        }
        if(result > 100){
            result = 100;
        }
    }
    let kof_affected = document.getElementById("kof-affected");
    if(kof_affected){
        (kof_affected as HTMLInputElement).value = result.toString();
    }
    document.getElementById("result_value").innerText = result.toString();
    calculate_absi();
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

    console.log("Saved selected:"+selected);
    if(app_settings.patient_settings.patient.AdultPatient){
        app_settings.patient_settings.patient.AdultPatient.burn_diagram_selected = selected;
    }else{
        app_settings.patient_settings.patient.ChildPatient.burn_diagram_selected = selected;
    }
}

function load_state(){
    let selected: string[] = [];
    if(app_settings.patient_settings.patient.AdultPatient && app_settings.patient_settings.patient.AdultPatient.burn_diagram_selected){
        selected = app_settings.patient_settings.patient.AdultPatient.burn_diagram_selected;
    }else if(app_settings.patient_settings.patient.ChildPatient && app_settings.patient_settings.patient.ChildPatient.burn_diagram_selected){
        selected = app_settings.patient_settings.patient.ChildPatient.burn_diagram_selected;
    }

    console.log("Loading selected:"+selected);

    for(let path_id of selected){
        document.getElementById(path_id).style.fill = "red";
    }
    calculate_result();
}