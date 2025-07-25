import {main_container, app_settings, TopbarTemplate, register_nav_handlers} from "./app";
import * as Handlebars from 'handlebars/runtime';
import '../templates/templates.js';
import {estimate_weight_by_age, estimate_weight_pawper_xl_mac} from "./weight_estimation";

let last_scroll_top: number = 0;
let template : PatientSettingsTemplate;

interface PatientSettingsTemplate{
    topbar: TopbarTemplate,
    patient_settings: PatientSettings,
    age_based_estimation_selected: boolean,
    age_via_birth_date_selected: boolean,
}

interface AdultPatient{
    age?: number,
    weight?: number,
}

interface ChildPatient{
    age?: ChildAge,
    birthdate?: string,
    /// Weight in kg
    weight?: number,
    /// Length in cm
    length?: number
}


export enum ChildAge{
    NEWBORN = 1,
    MINUTES5 = 2,
    MINUTES30 = 3,
    HOURS1 = 4,
    DAYS1 = 5,
    DAYS2 = 6,
    DAYS3 = 7,
    DAYS4 = 8,
    DAYS5 = 9,
    DAYS6 = 10,
    DAYS7 = 11,
    DAYS8 = 12,
    DAYS9 = 13,
    DAYS10 = 14,
    DAYS11 = 15,
    DAYS12 = 16,
    DAYS13 = 17,
    DAYS14 = 18,
    MONTHS1 = 19,
    MONTHS2 = 20,
    MONTHS3 = 21,
    MONTHS4 = 22,
    MONTHS5 = 23,
    MONTHS6 = 24,
    MONTHS7 = 25,
    MONTHS8 = 26,
    MONTHS9 = 27,
    MONTHS10 = 28,
    MONTHS11 = 29,
    MONTHS12 = 30,
    MONTHS13 = 31,
    MONTHS14 = 32,
    MONTHS15 = 33,
    MONTHS16 = 34,
    MONTHS17 = 35,
    MONTHS18 = 36,
    MONTHS19 = 37,
    MONTHS20 = 38,
    MONTHS21 = 39,
    MONTHS22 = 40,
    MONTHS23 = 41,
    MONTHS24 = 42,
    YEARS3 = 43,
    YEARS4 = 44,
    YEARS5 = 45,
    YEARS6 = 46,
    YEARS7 = 47,
    YEARS8 = 48,
    YEARS9 = 49,
    YEARS10 = 50,
    YEARS11 = 51,
    YEARS12 = 52,
    YEARS13 = 53,
    YEARS14 = 54,
    YEARS15 = 55,
    YEARS16 = 56,
    YEARS17 = 57,
}

/**
 * Returns the age as years with floating point (3 years + 6 months -> 3.5 years)
 * @param age
 */
export function child_age_to_float_years(age: ChildAge): number{
    switch (age) {
        case ChildAge.NEWBORN:
            return 0;
        case ChildAge.MINUTES5:
            return 5 / (24 * 60 * 365);
        case ChildAge.MINUTES30:
            return 30 / (24 * 60 * 365);
        case ChildAge.HOURS1:
            return 1 / (24 * 365);
        case ChildAge.DAYS1:
            return 1 / 365;
        case ChildAge.DAYS2:
            return 2 / 365;
        case ChildAge.DAYS3:
            return 3 / 365;
        case ChildAge.DAYS4:
            return 4 / 365;
        case ChildAge.DAYS5:
            return 5 / 365;
        case ChildAge.DAYS6:
            return 6 / 365;
        case ChildAge.DAYS7:
            return 7 / 365;
        case ChildAge.DAYS8:
            return 8 / 365;
        case ChildAge.DAYS9:
            return 9 / 365;
        case ChildAge.DAYS10:
            return 10 / 365;
        case ChildAge.DAYS11:
            return 11 / 365;
        case ChildAge.DAYS12:
            return 12 / 365;
        case ChildAge.DAYS13:
            return 13 / 365;
        case ChildAge.DAYS14:
            return 14 / 365;
        case ChildAge.MONTHS1:
            return 1 / 12;
        case ChildAge.MONTHS2:
            return 2 / 12;
        case ChildAge.MONTHS3:
            return 3 / 12;
        case ChildAge.MONTHS4:
            return 4 / 12;
        case ChildAge.MONTHS5:
            return 5 / 12;
        case ChildAge.MONTHS6:
            return 6 / 12;
        case ChildAge.MONTHS7:
            return 7 / 12;
        case ChildAge.MONTHS8:
            return 8 / 12;
        case ChildAge.MONTHS9:
            return 9 / 12;
        case ChildAge.MONTHS10:
            return 10 / 12;
        case ChildAge.MONTHS11:
            return 11 / 12;
        case ChildAge.MONTHS12:
            return 1;
        case ChildAge.MONTHS13:
            return 13 / 12;
        case ChildAge.MONTHS14:
            return 14 / 12;
        case ChildAge.MONTHS15:
            return 15 / 12;
        case ChildAge.MONTHS16:
            return 16 / 12;
        case ChildAge.MONTHS17:
            return 17 / 12;
        case ChildAge.MONTHS18:
            return 18 / 12;
        case ChildAge.MONTHS19:
            return 19 / 12;
        case ChildAge.MONTHS20:
            return 20 / 12;
        case ChildAge.MONTHS21:
            return 21 / 12;
        case ChildAge.MONTHS22:
            return 22 / 12;
        case ChildAge.MONTHS23:
            return 23 / 12;
        case ChildAge.MONTHS24:
            return 2;
        case ChildAge.YEARS3:
            return 3;
        case ChildAge.YEARS4:
            return 4;
        case ChildAge.YEARS5:
            return 5;
        case ChildAge.YEARS6:
            return 6;
        case ChildAge.YEARS7:
            return 7;
        case ChildAge.YEARS8:
            return 8;
        case ChildAge.YEARS9:
            return 9;
        case ChildAge.YEARS10:
            return 10;
        case ChildAge.YEARS11:
            return 11;
        case ChildAge.YEARS12:
            return 12;
        case ChildAge.YEARS13:
            return 13;
        case ChildAge.YEARS14:
            return 14;
        case ChildAge.YEARS15:
            return 15;
        case ChildAge.YEARS16:
            return 16;
        case ChildAge.YEARS17:
            return 17;
    }
}

export function parse_child_age_from_str(age: string) : ChildAge{
    switch (age) {
        case "NEWBORN":
            return ChildAge.NEWBORN;
        case "MINUTES5":
            return ChildAge.MINUTES5;
        case "MINUTES30":
            return ChildAge.MINUTES30;
        case "HOURS1":
            return ChildAge.HOURS1;
        case "DAYS1":
            return ChildAge.DAYS1;
        case "DAYS2":
            return ChildAge.DAYS2;
        case "DAYS3":
            return ChildAge.DAYS3;
        case "DAYS4":
            return ChildAge.DAYS4;
        case "DAYS5":
            return ChildAge.DAYS5;
        case "DAYS6":
            return ChildAge.DAYS6;
        case "DAYS7":
            return ChildAge.DAYS7;
        case "DAYS8":
            return ChildAge.DAYS8;
        case "DAYS9":
            return ChildAge.DAYS9;
        case "DAYS10":
            return ChildAge.DAYS10;
        case "DAYS11":
            return ChildAge.DAYS11;
        case "DAYS12":
            return ChildAge.DAYS12;
        case "DAYS13":
            return ChildAge.DAYS13;
        case "DAYS14":
            return ChildAge.DAYS14;
        case "MONTHS1":
            return ChildAge.MONTHS1;
        case "MONTHS2":
            return ChildAge.MONTHS2;
        case "MONTHS3":
            return ChildAge.MONTHS3;
        case "MONTHS4":
            return ChildAge.MONTHS4;
        case "MONTHS5":
            return ChildAge.MONTHS5;
        case "MONTHS6":
            return ChildAge.MONTHS6;
        case "MONTHS7":
            return ChildAge.MONTHS7;
        case "MONTHS8":
            return ChildAge.MONTHS8;
        case "MONTHS9":
            return ChildAge.MONTHS9;
        case "MONTHS10":
            return ChildAge.MONTHS10;
        case "MONTHS11":
            return ChildAge.MONTHS11;
        case "MONTHS12":
            return ChildAge.MONTHS12;
        case "MONTHS13":
            return ChildAge.MONTHS13;
        case "MONTHS14":
            return ChildAge.MONTHS14;
        case "MONTHS15":
            return ChildAge.MONTHS15;
        case "MONTHS16":
            return ChildAge.MONTHS16;
        case "MONTHS17":
            return ChildAge.MONTHS17;
        case "MONTHS18":
            return ChildAge.MONTHS18;
        case "MONTHS19":
            return ChildAge.MONTHS19;
        case "MONTHS20":
            return ChildAge.MONTHS20;
        case "MONTHS21":
            return ChildAge.MONTHS21;
        case "MONTHS22":
            return ChildAge.MONTHS22;
        case "MONTHS23":
            return ChildAge.MONTHS23;
        case "MONTHS24":
            return ChildAge.MONTHS24;
        case "YEARS3":
            return ChildAge.YEARS3;
        case "YEARS4":
            return ChildAge.YEARS4;
        case "YEARS5":
            return ChildAge.YEARS5;
        case "YEARS6":
            return ChildAge.YEARS6;
        case "YEARS7":
            return ChildAge.YEARS7;
        case "YEARS8":
            return ChildAge.YEARS8;
        case "YEARS9":
            return ChildAge.YEARS9;
        case "YEARS10":
            return ChildAge.YEARS10;
        case "YEARS11":
            return ChildAge.YEARS11;
        case "YEARS12":
            return ChildAge.YEARS12;
        case "YEARS13":
            return ChildAge.YEARS13;
        case "YEARS14":
            return ChildAge.YEARS14;
        case "YEARS15":
            return ChildAge.YEARS15;
        case "YEARS16":
            return ChildAge.YEARS16;
        case "YEARS17":
            return ChildAge.YEARS17;
        default:
            throw new Error("Unknown ChildAge: " + age);
    }
}

interface Patient{
    AdultPatient?: AdultPatient,
    ChildPatient?: ChildPatient
}

export interface PatientSettings{
    patient: Patient | null,
}

export function calculateExactAge(birthdateStr: string): { years: number; months: number; days: number } {
    const birth = new Date(birthdateStr);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        // Hole Tage des Vormonats
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days };
}

/**
 * Takes the birthdate as Date string and returns the age as years as a floating number
 * e.g. 5 years + 6 months -> returns 5.5 years
 * This isn't 100 % exact since we ignore months != 30 days and leap years but exact enough
 *
 * @param birthdate_str
 *
 * @return age as floating number
 */
export function get_age_as_years_float_from_birthday(birthdate_str: string): number{
    let {years, months, days} = calculateExactAge(birthdate_str);

    if(days > 0){
        months = months + (days/30)
    }
    if(months > 0){
        years = years + (months/12)
    }
    return years;
}

export function convert_birthdate_to_childage(birthdate_str: string): ChildAge{
    let {years, months, days} = calculateExactAge(birthdate_str);

    if(years < 1 && months < 1 && days < 1){
        return ChildAge.NEWBORN;
    }
    if(years < 1 && months < 1){
        if(days <= 14){
            return ChildAge[`DAYS${days}` as keyof typeof ChildAge];
        }else{
            return ChildAge.MONTHS1
        }
    }
    if(years < 1){
        if(days <= 15){ // e.g. 10 months + 10 days -> return 10
            return ChildAge[`MONTHS${months}` as keyof typeof ChildAge];
        }else { // e.g. 10 months + 29 days -> return 11
            return ChildAge[`MONTHS${months+1}` as keyof typeof ChildAge];
        }
    }
    if(years < 3){ // 1 <= years < 3
        let sum_months = months+(12*years) // add months from previous years
        console.log("sum month:"+sum_months);
        if(sum_months < 24){
            console.log("days:"+days);
            if(days <= 15){
                return ChildAge[`MONTHS${sum_months}` as keyof typeof ChildAge];
            }else{
                return ChildAge[`MONTHS${sum_months+1}` as keyof typeof ChildAge];
            }
        }else if(sum_months < 30){
            return ChildAge.MONTHS24;
        }else{
            return ChildAge.YEARS3;
        }
    }
    if(years <= 17){
        if(months <= 6){
            return ChildAge[`YEARS${years}` as keyof typeof ChildAge];
        }else{
            return ChildAge[`YEARS${years+1}` as keyof typeof ChildAge];
        }
    }else{
        throw new Error("Alter ist über 18, bitte Erwachsenenmodus benutzen.");
    }
}


export default function show_patient_settings(){
    last_scroll_top = window.scrollY;
    template = {
        age_via_birth_date_selected: app_settings.age_via_birth_date_selected,
        topbar: {
            title: "Referenzpatient*in"
        },
        patient_settings: app_settings.patient_settings,
        age_based_estimation_selected: app_settings.age_based_estimation_method_selected
    }
    main_container.innerHTML = Handlebars.templates["patient_settings"](template);

    register_nav_handlers();
    window.scrollTo(0, last_scroll_top);

    // Add event listeners
    document.getElementById("patientsettings_adult").addEventListener("click", function(){
        if(app_settings.patient_settings.patient?.AdultPatient != null){ // return if adult already selected
            return;
        }
        app_settings.patient_settings.patient =  {
            AdultPatient: {
                age: null,
                weight: null
            }

        }
        show_patient_settings();
    });
    document.getElementById("patientsettings_child").addEventListener("click", function(){
        if(app_settings.patient_settings.patient?.ChildPatient != null){
            return;
        }
        app_settings.patient_settings.patient =  {
            ChildPatient: {
                age: ChildAge.NEWBORN,
            },
        }
        show_patient_settings();
    });
    let adult_age_input = document.getElementById("patientsettings_adult_age_input") as HTMLInputElement;

    if(adult_age_input){
        adult_age_input.addEventListener("input", function () {
            app_settings.patient_settings.patient.AdultPatient.age = parseInt(adult_age_input.value);
        })
    }

    let weight_input = document.getElementById("patientsettings_weight_input") as HTMLInputElement;

    if(weight_input){
        weight_input.addEventListener("input", function () {
            if (app_settings.patient_settings.patient.ChildPatient) {
                app_settings.patient_settings.patient.ChildPatient.weight = parseInt(weight_input.value);
            }else {
                app_settings.patient_settings.patient.AdultPatient.weight = parseInt(weight_input.value);
            }
        })
    }

    if(app_settings.patient_settings.patient?.ChildPatient != null) {

        // Child specific listeners
        let child_age_input = document.getElementById("patientsettings_child_age_input") as HTMLInputElement;
        let child_length_input = document.getElementById("patientsettings_child_length_input") as HTMLInputElement;
        let child_birthdate_input = document.getElementById("patientsettings_child_age_birth_date") as HTMLInputElement;
        let age_via_slider = document.getElementById("patientsettings_age_via_slider") as HTMLButtonElement;
        let age_via_birth_date = document.getElementById("patientsettings_age_via_date") as HTMLButtonElement;


        age_via_slider.addEventListener("click", function () {
            app_settings.age_via_birth_date_selected = false;
            show_patient_settings();
        });
        age_via_birth_date.addEventListener("click", function () {
            app_settings.age_via_birth_date_selected = true;
            show_patient_settings();
        });


        if (app_settings.age_via_birth_date_selected) {
            child_birthdate_input.addEventListener("input", function () {
                try{
                    app_settings.patient_settings.patient.ChildPatient.age = convert_birthdate_to_childage(child_birthdate_input.value);
                    app_settings.patient_settings.patient.ChildPatient.birthdate = child_birthdate_input.value;
                    show_patient_settings(); //refresh view to show calculated age
                }catch(e){
                    console.error(e);
                    alert(e);
                }
            });
        }
        if (child_age_input) {
            child_age_input.addEventListener("input", function () {
                app_settings.patient_settings.patient.ChildPatient.age = parseInt(child_age_input.value); //TODO handle NaN
                app_settings.patient_settings.patient.ChildPatient.birthdate = null;
                // Refresh the label
                document.getElementById("patientsettings_child_age_input_label").innerHTML = Handlebars.templates["patient_settings_child_age"](template);
            });
        }

        // Estimation method switcher:
        document.getElementById("patientsettings_estimation_select_pawper").addEventListener("click", function () {
            app_settings.age_based_estimation_method_selected = false;
            show_patient_settings();
        });
        document.getElementById("patientsettings_estimation_select_age").addEventListener("click", function () {
            app_settings.age_based_estimation_method_selected = true;
            show_patient_settings();
        });

        if (child_length_input) {
            child_length_input.addEventListener("input", function () {
                app_settings.patient_settings.patient.ChildPatient.length = parseInt(child_length_input.value); //TODO handle NaN
            })
        }

        let pawper_estimate_button = document.getElementById("patientsettings_estimation_pawper_estimate");
        if (pawper_estimate_button) pawper_estimate_button.addEventListener("click", estimate_pawper);

        let age_estimate_button = document.getElementById("patientsettings_estimation_age_estimate");
        if (age_estimate_button) age_estimate_button.addEventListener("click", estimate_age);
    }
}

function estimate_pawper(){
    let height_input = document.getElementById("patientsettings_estimation_pawper_height") as HTMLInputElement;
    let mac_input = document.getElementById("patientsettings_estimation_pawper_mac") as HTMLInputElement;

    if(!height_input || !mac_input){
        navigator.notification.alert("Bitte füllen Sie alle Felder aus.", null, "Schätzung nicht möglich!", "OK");
        return;
    }

    let height = parseFloat(height_input.value);
    let mac = parseFloat(mac_input.value);

    try{
        let weight = estimate_weight_pawper_xl_mac(height, mac);
        app_settings.patient_settings.patient.ChildPatient.weight = weight;
        show_patient_settings();
    }catch(e){
        navigator.notification.alert(e.message, null, "Schätzung nicht möglich!", "Ok");
    }
}

function estimate_age(){
    if(!app_settings.patient_settings.patient.ChildPatient.age){
        navigator.notification.alert("Bitte geben Sie zuerst ein Alter ein.", null, "Schätzung nicht möglich!", "Ok");
        return;
    }
    try{
        let weight = estimate_weight_by_age(app_settings.patient_settings.patient.ChildPatient.age);
        app_settings.patient_settings.patient.ChildPatient.weight = weight;
        show_patient_settings();
    }catch(e){
        navigator.notification.alert(e.message, null, "Schätzung nicht möglich!", "Ok");
    }
}

export function child_age_to_months(age: ChildAge): number {
    switch (age) {
        case ChildAge.NEWBORN:
            return 0;
        case ChildAge.MINUTES5:
            return 0;
        case ChildAge.MINUTES30:
            return 0;
        case ChildAge.HOURS1:
            return 0;
        case ChildAge.DAYS1:
            return 0;
        case ChildAge.DAYS2:
            return 0;
        case ChildAge.DAYS3:
            return 0;
        case ChildAge.DAYS4:
            return 0;
        case ChildAge.DAYS5:
            return 0;
        case ChildAge.DAYS6:
            return 0;
        case ChildAge.DAYS7:
            return 0;
        case ChildAge.DAYS8:
            return 0;
        case ChildAge.DAYS9:
            return 0;
        case ChildAge.DAYS10:
            return 0;
        case ChildAge.DAYS11:
            return 0;
        case ChildAge.DAYS12:
            return 0;
        case ChildAge.DAYS13:
            return 0;
        case ChildAge.DAYS14:
            return 0;
        case ChildAge.MONTHS1:
            return 1;
        case ChildAge.MONTHS2:
            return 2;
        case ChildAge.MONTHS3:
            return 3;
        case ChildAge.MONTHS4:
            return 4;
        case ChildAge.MONTHS5:
            return 5;
        case ChildAge.MONTHS6:
            return 6;
        case ChildAge.MONTHS7:
            return 7;
        case ChildAge.MONTHS8:
            return 8;
        case ChildAge.MONTHS9:
            return 9;
        case ChildAge.MONTHS10:
            return 10;
        case ChildAge.MONTHS11:
            return 11;
        case ChildAge.MONTHS12:
            return 12;
        case ChildAge.MONTHS13:
            return 13;
        case ChildAge.MONTHS14:
            return 14;
        case ChildAge.MONTHS15:
            return 15;
        case ChildAge.MONTHS16:
            return 16;
        case ChildAge.MONTHS17:
            return 17;
        case ChildAge.MONTHS18:
            return 18;
        case ChildAge.MONTHS19:
            return 19;
        case ChildAge.MONTHS20:
            return 20;
        case ChildAge.MONTHS21:
            return 21;
        case ChildAge.MONTHS22:
            return 22;
        case ChildAge.MONTHS23:
            return 23;
        case ChildAge.MONTHS24:
            return 24;
        case ChildAge.YEARS3:
            return 36;
        case ChildAge.YEARS4:
            return 48;
        case ChildAge.YEARS5:
            return 60;
        case ChildAge.YEARS6:
            return 72;
        case ChildAge.YEARS7:
            return 84;
        case ChildAge.YEARS8:
            return 96;
        case ChildAge.YEARS9:
            return 108;
        case ChildAge.YEARS10:
            return 120;
        case ChildAge.YEARS11:
            return 132;
        case ChildAge.YEARS12:
            return 144;
        case ChildAge.YEARS13:
            return 156;
        case ChildAge.YEARS14:
            return 168;
        case ChildAge.YEARS15:
            return 180;
        case ChildAge.YEARS16:
            return 192;
        case ChildAge.YEARS17:
            return 204;
    }
}