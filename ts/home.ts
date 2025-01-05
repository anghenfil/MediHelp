import {main_container, register_nav_handlers, TopbarTemplate} from "./app";
import * as Handlebars from "handlebars/runtime";

interface HomeTemplate{
    topbar: TopbarTemplate
}

export function show(){
    let data: HomeTemplate = {
        topbar: {
            "title": "Home",
        },
    }
    main_container.innerHTML = Handlebars.templates["home"](data);
    register_nav_handlers();
}