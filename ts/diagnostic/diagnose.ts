import {app_settings, main_container, register_nav_handlers, TopbarTemplate} from "../app";
import * as Handlebars from 'handlebars/runtime';
import {PatientSettings} from "../patient_settings";
import * as Utils from "./utils";
import * as FrequencyTapper from "./frequency_tapper";
import * as Lagetypbestimmung from "./lagetypbestimmung";

interface DiagnoseTemplate{
    topbar: TopbarTemplate,
    patient_settings: PatientSettings
}

export function show(dest: string){
    let data: DiagnoseTemplate = {
        topbar: {
            "title": "Diagnostik",
        },
        patient_settings: app_settings.patient_settings,
    }

    let dest_parts = dest.split(".");

    if (dest_parts[0] !== "diagnostik"){
        return;
    }
    if (dest_parts.length === 1){
        data.topbar.subtitle = "Diagnostik";
        main_container.innerHTML = Handlebars.templates["diagnostik/diagnostik"](data);
    }else {
        if (dest_parts[1] === "norm_ab") {
            data.topbar.subtitle = "Normwerte A/B";
            main_container.innerHTML = Handlebars.templates["diagnostik/norm_ab"](data);
        } else if (dest_parts[1] === "norm_c") {
            data.topbar.subtitle = "Normwerte C";
            main_container.innerHTML = Handlebars.templates["diagnostik/norm_c"](data);
        } else if (dest_parts[1] === "norm_d") {
            data.topbar.subtitle = "Normwerte D";
            main_container.innerHTML = Handlebars.templates["diagnostik/norm_d"](data);
        }else if (dest_parts[1] === "norm_e") {
            data.topbar.subtitle = "Normwerte E";
            main_container.innerHTML = Handlebars.templates["diagnostik/norm_e"](data);
        }else if (dest_parts[1] === "apgar") {
            data.topbar.subtitle = "APGAR";
            main_container.innerHTML = Handlebars.templates["diagnostik/apgar"](data);
            Utils.add_score(document.getElementsByClassName("score")[0] as HTMLElement);
        }else if (dest_parts[1] === "gcs") {
            data.topbar.subtitle = "Glasgow Coma Scale";
            main_container.innerHTML = Handlebars.templates["diagnostik/gcs"](data);
            Utils.add_score(document.getElementsByClassName("score")[0] as HTMLElement);
        }else if (dest_parts[1] === "pgcs") {
            data.topbar.subtitle = "Pediatric Glasgow Coma Scale";
            main_container.innerHTML = Handlebars.templates["diagnostik/pgcs"](data);
            Utils.add_score(document.getElementsByClassName("score")[0] as HTMLElement);
        }else if (dest_parts[1] === "frequenzbestimmung") {
            data.topbar.subtitle = "Frequenzbestimmung";
            main_container.innerHTML = Handlebars.templates["diagnostik/frequenzbestimmung"](data);
            FrequencyTapper.init();
        }else if (dest_parts[1] === "sampler") {
            data.topbar.subtitle = "SAMPLER";
            main_container.innerHTML = Handlebars.templates["diagnostik/sampler"](data);
        }else if (dest_parts[1] === "opqrst") {
            data.topbar.subtitle = "OPQRST";
            main_container.innerHTML = Handlebars.templates["diagnostik/opqrst"](data);
        }else if (dest_parts[1] === "befast") {
            data.topbar.subtitle = "BEFAST";
            main_container.innerHTML = Handlebars.templates["diagnostik/befast"](data);
        }else if (dest_parts[1] === "schmerzskala") {
            data.topbar.subtitle = "Schmerzskalen";
            main_container.innerHTML = Handlebars.templates["diagnostik/schmerzskala"](data);
            Utils.add_subnavigation(document.getElementsByClassName("subnavigation")[0] as HTMLElement);
            document.getElementById("vas-auswertung-btn").addEventListener("click", function(){
                let range_input = document.getElementById("vas-range-input") as HTMLInputElement;
                let val = parseInt(range_input.value);
                let nrs = Math.round(val/10);
                document.getElementById("vas-auswertung").innerText = val+" %, NRS "+nrs+"/10";
            });
            Utils.add_score(document.getElementsByClassName("score")[0] as HTMLElement);
        }
    }

    if (dest_parts.length >= 2){ // handle the third part as id to a html element
        let dest_el = document.getElementById(dest_parts[2]);
        if (dest_el){
            dest_el.scrollIntoView();
        }
    }

    register_show_all_norm_entries_handler();
    register_nav_handlers();
}

function register_show_all_norm_entries_handler(){
    let checkbox = document.getElementById("norm_show_all_values_checkbox") as HTMLInputElement;
    if(!checkbox){
        return;
    }
    checkbox.addEventListener("change", function(){
        let norm_entries = document.getElementsByClassName("norm_extended_values");
        if(checkbox.checked){
            for(let entry of norm_entries){
                entry.classList.remove("hide");
            }
        }else{
            for(let entry of norm_entries){
                entry.classList.add("hide");
            }
        }
    })
}