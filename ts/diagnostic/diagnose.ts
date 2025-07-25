import {app_settings, main_container, register_nav_handlers, TopbarTemplate} from "../app";
import * as Handlebars from 'handlebars/runtime';
import {PatientSettings} from "../patient_settings";

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