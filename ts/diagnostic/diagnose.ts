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

    switch (dest) {
        case "diagnostik":
            main_container.innerHTML = Handlebars.templates["diagnostik/diagnostik"](data);
            break;
        case "diagnostik.norm_ab":
            data.topbar.subtitle = "Normwerte A/B";
            main_container.innerHTML = Handlebars.templates["diagnostik/norm_ab"](data);
            break;
        case "diagnostik.norm_c":
            data.topbar.subtitle = "Normwerte C";
            main_container.innerHTML = Handlebars.templates["diagnostik/norm_c"](data);
            break;
    }
    register_nav_handlers();
}