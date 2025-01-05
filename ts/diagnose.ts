import {app_settings, main_container, register_nav_handlers, TopbarTemplate} from "./app";
import * as Handlebars from 'handlebars/runtime';
import {PatientSettings} from "./patient_settings";
import {get_percentile} from "../templates/age_percentiles";

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

    //TODO remove and impoement in c for blood pressure
    console.log(get_percentile(app_settings.patient_settings.patient.ChildPatient.age, app_settings.patient_settings.patient.ChildPatient.length));

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