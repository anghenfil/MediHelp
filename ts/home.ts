import {ActivationDetails, app_settings, main_container, register_nav_handlers, TopbarTemplate} from "./app";
import * as Handlebars from "handlebars/runtime";
import {add_search_listeners} from "./search";

interface HomeTemplate{
    topbar: TopbarTemplate,
    activation_details: ActivationDetails
}

export function show(){
    let data: HomeTemplate = {
        topbar: {
            "title": "Home",
        },
        activation_details: app_settings.activation
    }
    main_container.innerHTML = Handlebars.templates["home"](data);
    register_nav_handlers();
    add_search_listeners();
}