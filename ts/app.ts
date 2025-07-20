import './patient_settings';
import show_patient_settings, {PatientSettings} from "./patient_settings";
import * as Diagnose from "./diagnostic/diagnose";
import * as Home from "./home";
import * as Handlebars from "handlebars/runtime";
import {calcnum, compare_if} from "./helpers";

enum Page{
    HOME,
    DIAGNOSTIK,
    MEDIS,
    SOP,
    LEXIKON,
    SEARCH,
    PATIENT_DATA
}

interface AppSettings{
    patient_settings: PatientSettings,
    current_page: string,
    nav_history: string[],
    age_based_estimation_method_selected: boolean,
    age_via_birth_date_selected: boolean,
}

export let main_container = document.getElementById("app");

function createNestedProxy<T extends object>(obj: T): T {
    return new Proxy(obj, {
        set(target, property, value) {
            // Falls der neue Wert ein Objekt ist, in einen Proxy umwandeln
            if (value && typeof value === "object" && !Array.isArray(value)) {
                value = createNestedProxy(value);
            }

            // Setze die Property im Original-Objekt
            (target as any)[property] = value;

            // Speichere das gesamte Objekt in localStorage
            window.localStorage.setItem("app_settings", JSON.stringify(app_settings));

            return true;
        },

        get(target, property) {
            const value = target[property as keyof T];

            // Falls der Wert ein Objekt ist, sicherstellen, dass es ein Proxy ist
            if (value && typeof value === "object" && !Array.isArray(value)) {
                return createNestedProxy(value);
            }

            return value;
        }
    });
}

function loadAppSettings(): AppSettings {
    const rawSettings = window.localStorage.getItem("app_settings");
    return rawSettings
        ? createNestedProxy(JSON.parse(rawSettings))
        : createNestedProxy({ patient_settings: {patient: null}, current_page: "home", nav_history: [], age_based_estimation_method_selected: false });
}

export let app_settings: AppSettings = createNestedProxy(loadAppSettings())

export default function show_app(){
    loadAppSettings();

    // @ts-ignore
    Handlebars.partials = Handlebars.templates;

    // Add Handlebars helpers
    Handlebars.registerHelper("comp", compare_if);
    Handlebars.registerHelper("calcnum", calcnum);
    build_navigation();

    // Show the current page
    console.log("Current page: " + app_settings.current_page);
    navigate_to(app_settings.current_page);
}

/** Registers the navigation back handler + handlers for all elements with a data-link-to attribute
*/
export function register_nav_handlers(){
    // Reigster navigation back handler
    let back_button = document.getElementById("nav-back");
    if(back_button) {
        back_button.addEventListener("click", back_button_handler);
    }

    // Register data-link-to handlers
    // Get all elements with a data-link-to attribute
    let elements = document.querySelectorAll("[data-link-to]");
    elements.forEach(function(element){
        element.addEventListener("click", link_to_handler);
    });
}

function back_button_handler(){
    console.log("Back button clicked");
    console.log(app_settings.nav_history);
    app_settings.nav_history.pop();
    let last_page = app_settings.nav_history.pop();

    if (!last_page){
        navigate_to("home");
    }else{
        navigate_to(last_page);
    }

}

function link_to_handler(event: Event){
    let target = event.target as HTMLElement;
    target = target.closest("[data-link-to]");
    let dest = target.getAttribute("data-link-to");
    navigate_to(dest);
}

/** Navigate to a different page
 *
 * @param dest String with the destination page (e.g. "diagnose.norm.ab")
 *
 * */
function navigate_to(dest: string){
    console.log("Navigating to " + dest);
    if(dest === undefined){
        console.error("No destination specified");
        return;
    }
    let parts = dest.split(".");
    let page = parts[0];

    // Combine the parts to a path
    let path = parts.join(".");

    // Save the current page in the app settings
    app_settings.current_page = dest;

    // If top level page, reset the history
    if(parts.length === 1){
        app_settings.nav_history = [dest];
    }else {
        if (app_settings.nav_history[app_settings.nav_history.length - 1] !== dest) {
            app_settings.nav_history.push(dest);
        }
    }
    console.log(app_settings.nav_history);

    console.log("Navigating to " + page + " with path " + path);

    switch(page){
        case "home":
            mark_active_nav_button(Page.HOME);
            Home.show();
            break;
        case "diagnostik":
            mark_active_nav_button(Page.DIAGNOSTIK);
            Diagnose.show(path);
            break;
        case "medis":
            mark_active_nav_button(Page.MEDIS);
            break;
        case "sop":
            mark_active_nav_button(Page.SOP);
            break;
        case "lexikon":
            mark_active_nav_button(Page.LEXIKON);
            break;
        case "search":
            mark_active_nav_button(Page.SEARCH);
            break;
        case "patient_data":
            mark_active_nav_button(Page.PATIENT_DATA);
            show_patient_settings();
            break;
    }
}

function mark_active_nav_button(active: Page){
    let nav_buttons = Array.from(document.getElementsByClassName("cnavbar-entry"));
    nav_buttons.forEach(function (button){
        button.classList.remove("active");
    });

    if (active === Page.HOME){
        document.getElementById("cnavbar-icon-home").classList.add("active");
    }else if(active === Page.DIAGNOSTIK){
        document.getElementById("cnavbar-icon-diagnose").classList.add("active");
    }else if(active === Page.MEDIS){
        document.getElementById("cnavbar-icon-medis").classList.add("active");
    }else if(active === Page.SOP){
        document.getElementById("cnavbar-icon-sop").classList.add("active");
    }else if(active === Page.LEXIKON) {
        document.getElementById("cnavbar-icon-lexikon").classList.add("active");
    }else if(active === Page.SEARCH) {
        document.getElementById("cnavbar-icon-search").classList.add("active");
    }else if(active === Page.PATIENT_DATA) {
        document.getElementById("cnavbar-icon-patient-data").classList.add("active");
    }
}

function build_navigation(){
    let nav_buttons = Array.from(document.getElementsByClassName("cnavbar-entry"));
    nav_buttons.forEach(function (button){
        button.addEventListener("click", nav_button_handler);
    });
}

function nav_button_handler(event: Event){
    let target = event.target as HTMLElement;
    target = target.closest(".cnavbar-entry");
    console.log("Clicked on " + target.id);

    if (target.id === "cnavbar-icon-home") {
        navigate_to("home");
    } else if (target.id === "cnavbar-icon-diagnose") {
        navigate_to("diagnostik");
    } else if (target.id === "cnavbar-icon-medis") {
        navigate_to("medis")
    } else if (target.id === "cnavbar-icon-sop") {
        navigate_to("sop")
    } else if (target.id === "cnavbar-icon-lexikon") {
        navigate_to("lexikon")
    } else if (target.id === "cnavbar-icon-search") {
        navigate_to("search")
    } else if (target.id === "cnavbar-icon-patient-data") {
        navigate_to("patient_data")
    }
    show_app();
}

export interface TopbarTemplate{
    title: string
    subtitle?: string
}
