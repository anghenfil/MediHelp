import {ActivationDetails, app_settings, main_container, register_nav_handlers} from "./app";
import * as Handlebars from "handlebars/runtime";

export function show_activation_screen(error: null|string = null){
    let data: {
        topbar: { title: string; subtitle: string };
        activation_details: ActivationDetails;
        activated_until: null|string,
        activation_error: null|string,
    };
    data = {
        topbar: {
            "title": "Home",
            "subtitle": "Aktivierung",
        },
        activation_details: app_settings.activation,
        activated_until: null,
        activation_error: error,
    };
    console.log(data);

    if(app_settings.activation && app_settings.activation.activated_until){
        data.activated_until = (new Date(app_settings.activation.activated_until)).toLocaleDateString("de-DE");
    }

    main_container.innerHTML = Handlebars.templates["activation"](data);

    register_nav_handlers();

    let activate_btn = document.getElementById("activate_btn");
    if(activate_btn){
        activate_btn.addEventListener("click", async function(){
        let license_key = document.getElementById("license_code") as HTMLInputElement;
        if(license_key.value.trim()){
            try{
                await activate(license_key.value.trim());
                show_activation_screen();
            }catch(e){
                show_activation_screen(e.message);
            }
        }});
    }
}

export function is_activated(){
    if(app_settings.activation != null){
        let activated_until_parsed = new Date(app_settings.activation.activated_until)
        console.log("Activated until: " + activated_until_parsed.toString());
        if(activated_until_parsed >= new Date()){
            app_settings.activation.activated = true;
            return true;
        }else{
            app_settings.activation.activated = false;
        }
    }

    return false;
}

function parse_error(code: string): string{
    let error_message = "";
    if(code === "license_expired"){
        error_message = "Die Lizenz ist nicht mehr gültig.";
    }else if(code === "license_deactivated"){
        error_message = "Die Lizenz wurde vom Support deaktiviert.";
    }else if(code === "license_not_found"){
        error_message = "Der Lizenzcode ist ungültig.";
    }else if(code === "license_max_activated_exceeded"){
        error_message = "Der Lizenzcode wurde bereits verwendet.";
    }else{
        error_message = "Unbekannter Fehler.";
    }
    return error_message;
}

export async function activate(license_key: string){
    console.log("Platform: " + cordova.platformId);
    if(cordova.platformId === "iOS") {
        let get_platform = await send_check_key(license_key);
        if ('success' in get_platform) {
            if (get_platform.productId !== 57) {
                throw new Error("Dieser Code ist nicht für iOS gültig!");
            }
        } else {
            throw new Error("Fehler bei der Überprüfung: " + parse_error(get_platform.code) + " Bitte erneut probieren oder den Support kontaktieren.");
        }
    }

    const response = await send_activation_request(license_key);
    console.log(response);
    if('success' in response) {
        app_settings.activation = {
            activated_until: response.expiresAt.replace(" ", "T"),
            license_key: license_key,
            activated: true,
        }
    }else{
        throw new Error("Fehler beim Aktivieren: " + parse_error(response.code)+" Bitte den Support kontaktieren.");
    }
}

type ErrorResponse = {
    code: string;
    message: string;
    data: {
        status: number;
    };
};

type SuccessResponse = {
    success: true;
    expiresAt: string;
    productId: number;
};

type ApiResponse = ErrorResponse | SuccessResponse;


async function send_activation_request(license_key: string): Promise<ApiResponse>{
    const response = await fetch(`https://info.medihelp.app/wp-json/api-lmfwc/activate/${license_key}`,
        {
            method: "GET",
        }
    );

    return response.json();
}

async function send_check_key(license_key: string): Promise<ApiResponse>{
    const response = await fetch(`https://info.medihelp.app/wp-json/api-lmfwc/check/${license_key}`,
        {
            method: "GET",
        }
    );

    return response.json();
}