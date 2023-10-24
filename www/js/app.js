let templates;

const ChildAge = {
    Newborn: 1,
    Minutes5: 2,
    Minutes30: 3,
    Hours1: 4,
    Days1: 5,
    Days2: 6,
    Days3: 7,
    Days4: 8,
    Days5: 9,
    Days6: 10,
    Days7: 11,
    Days8: 12,
    Days9: 13,
    Days10: 14,
    Days11: 15,
    Days12: 16,
    Days13: 17,
    Days14: 18,
    Months1: 19,
    Months2: 20,
    Months3: 21,
    Months4: 22,
    Months5: 23,
    Months6: 24,
    Years1: 25,
    Years2: 26,
    Years3: 27,
    Years4: 28,
    Years5: 29,
    Years6: 30,
    Years7: 31,
    Years8: 32,
    Years9: 33,
    Years10: 34,
    Years11: 35,
    Years12: 36,
    Years13: 37,
    Years14: 38,
    Years15: 39,
    Years16: 40,
    Years17: 41,
    get_name: function (age) {
        if (age === "Newborn") {
            return "Neugeborenes";
        } else if (age === "Minutes5") {
            return "5 Minuten";
        } else if (age === "Minutes30") {
            return "30 Minuten";
        } else if (age === "Hours1") {
            return "1 Stunde"
        } else if (age === "Days1") {
            return "1 Tag"
        } else if (age === "Days2") {
            return "2 Tage"
        } else if (age === "Days3") {
            return "3 Tage"
        } else if (age === "Days4") {
            return "4 Tage"
        } else if (age === "Days5") {
            return "5 Tage"
        } else if (age === "Days6") {
            return "6 Tage"
        } else if (age === "Days7") {
            return "7 Tage"
        } else if (age === "Days8") {
            return "8 Tage"
        } else if (age === "Days9") {
            return "9 Tage"
        } else if (age === "Days10") {
            return "10 Tage"
        } else if (age === "Days11") {
            return "11 Tage"
        } else if (age === "Days12") {
            return "12 Tage"
        } else if (age === "Days13") {
            return "13 Tage"
        } else if (age === "Days14") {
            return "14 Tage"
        } else if (age === "Months1") {
            return "1 Monat"
        } else if (age === "Months2") {
            return "2 Monate"
        } else if (age === "Months3") {
            return "3 Monate"
        } else if (age === "Months4") {
            return "4 Monate"
        } else if (age === "Months5") {
            return "5 Monate"
        } else if (age === "Months6") {
            return "6 Monate"
        } else if (age === "Years1") {
            return "1 Jahr"
        } else if (age === "Years2") {
            return "2 Jahre"
        } else if (age === "Years3") {
            return "3 Jahre"
        } else if (age === "Years4") {
            return "4 Jahre"
        } else if (age === "Years5") {
            return "5 Jahre"
        } else if (age === "Years6") {
            return "6 Jahre"
        } else if (age === "Years7") {
            return "7 Jahre"
        } else if (age === "Years8") {
            return "8 Jahre"
        } else if (age === "Years9") {
            return "9 Jahre"
        } else if (age === "Years10") {
            return "10 Jahre"
        } else if (age === "Years11") {
            return "11 Jahre"
        } else if (age === "Years12") {
            return "12 Jahre"
        } else if (age === "Years13") {
            return "13 Jahre"
        } else if (age === "Years14") {
            return "14 Jahre"
        } else if (age === "Years15") {
            return "15 Jahre"
        } else if (age === "Years16") {
            return "16 Jahre"
        } else if (age === "Years17") {
            return "17 Jahre"
        } else {
            return "unbekannt";
        }
    },
    get_by_num: function (num) {
        return Object.keys(ChildAge).find(key => ChildAge[key] === num);
    },
    get_as_months: function (age) {
        if (age === "Newborn") {
            return 0;
        } else if (age === "Minutes5") {
            return 0;
        } else if (age === "Minutes30") {
            return 0;
        } else if (age === "Hours1") {
            return 0;
        } else if (age === "Days1") {
            return 0;
        } else if (age === "Days2") {
            return 0;
        } else if (age === "Days3") {
            return 0;
        } else if (age === "Days4") {
            return 0;
        } else if (age === "Days5") {
            return 0;
        } else if (age === "Days6") {
            return 0;
        } else if (age === "Days7") {
            return 0;
        } else if (age === "Days8") {
            return 0;
        } else if (age === "Days9") {
            return 0;
        } else if (age === "Days10") {
            return 0;
        } else if (age === "Days11") {
            return 0;
        } else if (age === "Days12") {
            return 0;
        } else if (age === "Days13") {
            return 0;
        } else if (age === "Days14") {
            return 0;
        } else if (age === "Months1") {
            return 1;
        } else if (age === "Months2") {
            return 2;
        } else if (age === "Months3") {
            return 3;
        } else if (age === "Months4") {
            return 4;
        } else if (age === "Months5") {
            return 5;
        } else if (age === "Months6") {
            return 6;
        } else if (age === "Years1") {
            return 12;
        } else if (age === "Years2") {
            return 24;
        } else if (age === "Years3") {
            return 36;
        } else if (age === "Years4") {
            return 48;
        } else if (age === "Years5") {
            return 60;
        } else if (age === "Years6") {
            return 72;
        } else if (age === "Years7") {
            return 84;
        } else if (age === "Years8") {
            return 96;
        } else if (age === "Years9") {
            return 108;
        } else if (age === "Years10") {
            return 120;
        } else if (age === "Years11") {
            return 132;
        } else if (age === "Years12") {
            return 144;
        } else if (age === "Years13") {
            return 156;
        } else if (age === "Years14") {
            return 168;
        } else if (age === "Years15") {
            return 180;
        } else if (age === "Years16") {
            return 192;
        } else if (age === "Years17") {
            return 204
        } else {
            return false;
        }
    },
    get_as_years: function (age) {
        return Math.round(this.get_as_months(age) / 12);
    }
};

let navi = {
    previous_target : null,
    previous_document: null,
    return_to_previous: function(){
        if(this.previous_document){
            show_document(this.previous_document);
        }else if(this.previous_target){
            if(this.previous_target === window.localStorage.getItem("active_page")){
                this.set_active("home");
            }
            this.set_active(this.previous_target);
        }else{
            this.set_active("home");
        }
    },
    set_active: function (target) {
        if(window.localStorage.getItem("active_page")){
            this.previous_target = window.localStorage.getItem("active_page");
        }
        document.getElementById("cnavbar-icon-home").style.color = "var(--colour-grey)";
        document.getElementById("cnavbar-icon-norm").style.color = "var(--colour-grey)";
        document.getElementById("cnavbar-icon-medis").style.color = "var(--colour-grey)";
        document.getElementById("cnavbar-icon-sop").style.color = "var(--colour-grey)";
        document.getElementById("cnavbar-icon-lexikon").style.color = "var(--colour-grey)";
        document.getElementById("cnavbar-icon-search").style.color = "var(--colour-grey)";
        document.getElementById("cnavbar-icon-patient-data").style.color = "var(--colour-grey)";

        window.localStorage.setItem("active_page", target);
        window.localStorage.removeItem("active_document");

        if (target === "home") {
            document.getElementById("cnavbar-icon-home").style.color = "var(--colour-black)";
            module_home.load();
        } else if (target === "norm") {
            document.getElementById("cnavbar-icon-norm").style.color = "var(--colour-blue)";
            module_diagnostik.load();
        } else if (target === "medis") {
            document.getElementById("cnavbar-icon-medis").style.color = "var(--colour-violet)";
            module_medis.load();
        } else if (target === "sop") {
            document.getElementById("cnavbar-icon-sop").style.color = "var(--colour-red)";
            module_sop.load();
        } else if (target === "lexikon") {
            document.getElementById("cnavbar-icon-lexikon").style.color = "var(--colour-green)";
            module_lexikon.load();
        } else if (target === "search") {
            document.getElementById("cnavbar-icon-search").style.color = "var(--colour-black)";
            module_search.load();
        } else if (target === "patientsettings") {
            document.getElementById("cnavbar-icon-patient-data").style.color = "var(--colour-black)";
            module_patientsettings.load();
        }
    },
    add_listeners: function () {
        document.getElementById("cnavbar-icon-home").addEventListener("click", function () {
            navi.set_active("home");
        });
        document.getElementById("cnavbar-icon-norm").addEventListener("click", function () {
            navi.set_active("norm");
        });
        document.getElementById("cnavbar-icon-medis").addEventListener("click", function () {
            navi.set_active("medis");
        });
        document.getElementById("cnavbar-icon-sop").addEventListener("click", function () {
            navi.set_active("sop");
        });
        document.getElementById("cnavbar-icon-lexikon").addEventListener("click", function () {
            navi.set_active("lexikon");
        });
        document.getElementById("cnavbar-icon-search").addEventListener("click", function () {
            navi.set_active("search");
        });
        document.getElementById("cnavbar-icon-patient-data").addEventListener("click", function () {
            navi.set_active("patientsettings");
        });
    },
    nav_back_listener: function(){

    }
};

let patient_settings = (function () {
    let data = null;
    let load_data = function () {
        let stored_data = window.localStorage.getItem("patient_settings");
        if (stored_data) {
            data = JSON.parse(stored_data);
        } else {
            data = {
                adult_or_child: null,
                weight: null,
            }
        }
    };
    let save_data = function () {
        window.localStorage.setItem("patient_settings", JSON.stringify(data));
    };
    let get_adult_or_child = function () {
        if (!data) {
            load_data();
        }
        console.log(data);
        return data["adult_or_child"];
    };
    let get_weight = function () {
        if (!data) {
            load_data();
        }
        return data["weight"];
    };
    let set_adult_or_child = function (adult_or_child) {
        if (!data) {
            load_data();
        }
        data["adult_or_child"] = adult_or_child;
        save_data();
    };
    let set_weight = function (weight) {
        if (!data) {
            load_data();
        }
        data["weight"] = weight;
        save_data();
    };
    let set_child_age = function (age) {
        if (!data) {
            load_data();
        }
        data["child_age"] = age;
        save_data();
    };
    let get_child_age = function (age) {
        if (!data) {
            load_data();
        }
        return data["child_age"];
    };
    let set_adult_age = function (age) {
        if (!data) {
            load_data();
        }
        data["adult_age"] = age;
        save_data();
    };
    let get_adult_age = function (age) {
        if (!data) {
            load_data();
        }
        return data["adult_age"];
    };
    let print_summary = function(){
        if(this.get_adult_or_child()){
            let res = "";
            if(this.get_adult_or_child() === "adult"){
                res += "Erwachsener";
                if(this.get_adult_age()){
                    res += ", "+this.get_adult_age()+" Jahre";
                }
            }else{
                res += "Kind";
                if(this.get_child_age()){
                    res += ", "+ChildAge.get_name(this.get_child_age());
                }
            }

            if(this.get_weight()){
                res += ", "+this.get_weight()+" kg";
            }
            return res;
        }else{
            return "Keine Patientendaten angegeben.";
        }
    }
    return {
        get_adult_or_child, get_weight, set_adult_or_child, set_weight, set_child_age, get_child_age, get_adult_age, set_adult_age,print_summary
    };
})();

let miniSearch;

let show_document = function (slug) {
    if(window.localStorage.getItem("active_document")){
        navi.previous_document = window.localStorage.getItem("active_document");
    }
    if(window.localStorage.getItem("active_page")){
        navi.previous_target = window.localStorage.getItem("active_page");
    }
    window.localStorage.setItem("active_document", slug);
    let search_res = miniSearch.search(slug, { fields: ['slug'] });
    if (search_res.length === 0) {
        return false;
    } else {
        let entry = search_res[0];
        console.log(entry);
        if(entry.template){
            document.getElementsByClassName("content")[0].innerHTML = entry.template();
        }
        document.getElementById("subtitle").innerHTML = "—   " + entry.name;
        entry.search_callback();
    }
}

window.addEventListener('load', function () {
    if (window.hasOwnProperty("cordova")) {
        document.addEventListener('deviceready', startup, false);
    } else {
        startup();
    }
});

async function startup() {
    miniSearch = new MiniSearch({
        fields: ['name', 'type', 'alt_names', 'slug'],
        storeFields: ['name', 'type', 'template', 'search_callback', 'slug'],
        searchOptions: {
            boost: {name: 2}
        }
    });
    miniSearch.addAll(search_documents)
    navi.add_listeners();

    let active_page = window.localStorage.getItem("active_page");
    let active_document = window.localStorage.getItem("active_document");
    if (active_page) {
        navi.set_active(active_page);
        if (active_document) {
            show_document(active_document);
        }
    } else {
        navi.set_active("home");
    }
}

let module_home = (function () {
    let load = function () {
        document.getElementsByClassName("app")[0].innerHTML = Handlebars.templates.home();
        module_search.init_search();
    }

    return { load };
})();

let module_diagnostik = (function () {
    let load = function () {
        document.getElementsByClassName("app")[0].innerHTML = Handlebars.templates.diagnostik();
        document.getElementById("nav_back_btn").addEventListener("click", function(){
            navi.return_to_previous(); 
        });
        document.getElementById("norm_a_b_btn").addEventListener("click", function () {
            show_document("diagnostik_norm_a_b");
        });
        document.getElementById("norm_c_btn").addEventListener("click", function () {
            show_document("diagnostik_norm_c");
        });
        document.getElementById("norm_d_btn").addEventListener("click", function () {
            show_document("diagnostik_norm_d");
        });
        document.getElementById("norm_e_btn").addEventListener("click", function () {
            show_document("diagnostik_norm_e");
        });
        document.getElementById("scores_tools_apgar_btn").addEventListener("click", function(){
            show_document("diagnostik_scores_tools_apgar");
        });
        document.getElementById("scores_tools_befast_btn").addEventListener("click", function(){
            show_document("diagnostik_scores_tools_befast");
        });
        document.getElementById("scores_tools_gcs_btn").addEventListener("click", function(){
            show_document("diagnostik_scores_tools_gcs");
        });
        document.getElementById("scores_tools_lagetyp_btn").addEventListener("click", function(){
            show_document("diagnostik_scores_tools_lagetyp");
        });
        document.getElementById("scores_tools_mad_btn").addEventListener("click", function(){
            show_document("diagnostik_scores_tools_mad");
        })
    };
    let calc_apgar_score = function(){
        let appearance = document.querySelector('input[name="apgar_appearance"]:checked');
        let pulse = document.querySelector('input[name="apgar_pulse"]:checked');
        let grimace = document.querySelector('input[name="apgar_grimace"]:checked');
        let activity = document.querySelector('input[name="apgar_activity"]:checked');
        let respiration = document.querySelector('input[name="apgar_respiration"]:checked');

        if(appearance && pulse && grimace && activity && respiration){
            let res = parseInt(appearance.value) + parseInt(pulse.value) + parseInt(grimace.value) + parseInt(activity.value) + parseInt(respiration.value);
            document.getElementById("apgar_result").value = res;
            let interpretation = document.getElementById("apgar_result_interpretation");
            
            interpretation.classList.remove("text-success", "text-warning", "text-danger");

            if(res >= 9){
                interpretation.innerHTML = "Score normal.";
                interpretation.classList.add("text-success");
            }else if(res >= 5){
                interpretation.innerHTML = "Achtung: Score grenzwertig!";
                interpretation.classList.add("text-warning");
            }else{
                interpretation.innerHTML = "Achtung: vitale Bedrohung!";
                interpretation.classList.add("text-danger");
            }
            interpretation.scrollIntoView();
        }
    };
    let scores_tools_apgar_callback = function(){
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_scores_tools_apgar();

        for(let radio of document.getElementsByClassName("apgar_input_radio")){
            radio.addEventListener("change", calc_apgar_score);
        }
    };
    let scores_tools_befast_callback = function(){
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_scores_tools_befast();

    };
    let calc_gcs = function(){
        let eyes = document.querySelector('input[name="gcs_eyes"]:checked');
        let verbal = document.querySelector('input[name="gcs_verbal"]:checked');
        let motoric = document.querySelector('input[name="gcs_motoric"]:checked');

        if(eyes && verbal && motoric){
            let res = parseInt(eyes.value) + parseInt(verbal.value) + parseInt(motoric.value);
            document.getElementById("gcs_result").value = res;

            let interpretation = document.getElementById("gcs_result_interpretation");
            
            interpretation.classList.remove("text-success", "text-warning", "text-danger");

            if(res >= 14){
                interpretation.innerHTML = "keine Bewusstseinsstörung";
                interpretation.classList.add("text-success");
            }else if(res >= 12){
                interpretation.innerHTML = "leichte Bewusstseinsstörung -> Monitoring";
                interpretation.classList.add("text-warning");
            }else if(res >= 9){
                interpretation.innerHTML = "mittelschwere Bewusstseinsstörung -> Intubationsbereitschaft";
                interpretation.classList.add("text-warning");
            }else{
                interpretation.innerHTML = "schwere Bewusstseinsstörung -> Schutzintubation erwägen";
                interpretation.classList.add("text-danger");
            }
            interpretation.scrollIntoView();
        }
    };
    let scores_tools_gcs_callback = function(){
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_scores_tools_gcs();
        for(let radio of document.getElementsByClassName("gcs_input_radio")){
            radio.addEventListener("change", calc_gcs);
        }
    };
    let scores_tools_lagetyp_callback = function(){
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_scores_tools_lagetyp();
        let abltg_1 = null;
        let abltg_2 = null;
        let abltg_3 = null;
        let abltg_i_bigger_iii = null;

        let btn_abltg_1_pos = document.getElementById("lagetyp_abltg_1_pos");
        let btn_abltg_1_neg = document.getElementById("lagetyp_abltg_1_neg");
        let btn_abltg_2_pos = document.getElementById("lagetyp_abltg_2_pos");
        let btn_abltg_2_neg = document.getElementById("lagetyp_abltg_2_neg");
        let btn_abltg_3_pos = document.getElementById("lagetyp_abltg_3_pos");
        let btn_abltg_3_neg = document.getElementById("lagetyp_abltg_3_neg");
        let btn_lagetyp_i_bigger_iii_yes = document.getElementById("lagetyp_i_bigger_iii_yes");
        let btn_lagetyp_i_bigger_iii_no = document.getElementById("lagetyp_i_bigger_iii_no");
        let abltg_2_div = document.getElementById("lagetyp_abltg_2");
        let abltg_3_div = document.getElementById("lagetyp_abltg_3");
        let indifferenz_or_steiltyp_div = document.getElementById("lagetyp_indifferenz_or_steiltyp");

        btn_abltg_1_pos.addEventListener("click", function(){
            btn_abltg_1_pos.classList.remove("btn-not-selected");
            btn_abltg_1_neg.classList.add("btn-not-selected");
            abltg_1 = "pos";
            abltg_2_div.classList.remove("hide");
            if(abltg_2 === "pos" && abltg_3 === "pos"){
                indifferenz_or_steiltyp_div.classList.remove("hide");
            }
            evaluate();
        });
        btn_abltg_1_neg.addEventListener("click", function(){
            btn_abltg_1_neg.classList.remove("btn-not-selected");
            btn_abltg_1_pos.classList.add("btn-not-selected");
            abltg_1 = "neg";
            abltg_2_div.classList.remove("hide");
            indifferenz_or_steiltyp_div.classList.add("hide");
            evaluate();
        });
        btn_abltg_2_pos.addEventListener("click", function(){
            btn_abltg_2_pos.classList.remove("btn-not-selected");
            btn_abltg_2_neg.classList.add("btn-not-selected");
            abltg_2 = "pos";
            abltg_3_div.classList.remove("hide");
            if(abltg_1 === "pos" && abltg_3 === "pos"){
                indifferenz_or_steiltyp_div.classList.remove("hide");
            }
            evaluate();
        });
        btn_abltg_2_neg.addEventListener("click", function(){
            btn_abltg_2_neg.classList.remove("btn-not-selected");
            btn_abltg_2_pos.classList.add("btn-not-selected");
            abltg_2 = "neg";
            abltg_3_div.classList.remove("hide");
            indifferenz_or_steiltyp_div.classList.add("hide");
            evaluate();
        });
        btn_abltg_3_pos.addEventListener("click", function(){
            btn_abltg_3_pos.classList.remove("btn-not-selected");
            btn_abltg_3_neg.classList.add("btn-not-selected");
            abltg_3 = "pos";
            if(abltg_1 === "pos" && abltg_2 === "pos"){
                indifferenz_or_steiltyp_div.classList.remove("hide");
            }
            evaluate();
        });
        btn_abltg_3_neg.addEventListener("click", function(){
            btn_abltg_3_neg.classList.remove("btn-not-selected");
            btn_abltg_3_pos.classList.add("btn-not-selected");
            abltg_3 = "neg";
            indifferenz_or_steiltyp_div.classList.add("hide");
            evaluate();
        });
        btn_lagetyp_i_bigger_iii_yes.addEventListener("click", function(){
            abltg_i_bigger_iii = "yes";
            btn_lagetyp_i_bigger_iii_yes.classList.remove("btn-not-selected");
            btn_lagetyp_i_bigger_iii_no.classList.add("btn-not-selected");
            evaluate();
        });
        btn_lagetyp_i_bigger_iii_no.addEventListener("click", function(){
            abltg_i_bigger_iii = "no";
            btn_lagetyp_i_bigger_iii_no.classList.remove("btn-not-selected");
            btn_lagetyp_i_bigger_iii_yes.classList.add("btn-not-selected");
            evaluate();
        });

        let res = "";
        let evaluate = function(){
            if(abltg_1 && abltg_2 && abltg_3){
                if(abltg_1 === "pos" && abltg_2 === "pos" && abltg_3 === "pos"){
                    if(abltg_i_bigger_iii){
                        if(abltg_i_bigger_iii === "yes"){
                            res = "Indifferenztyp";
                        }else{
                            res = "Steiltyp";
                        }
                    }
                } else if(abltg_1 === "pos" && abltg_2 === "pos" && abltg_3 === "neg"){
                    res = "Linkstyp";
                }else if(abltg_1 === "pos" && abltg_2 === "neg" && abltg_3 === "neg"){
                    res = "überdrehter Linkstyp";
                }else if(abltg_1 === "neg" && abltg_2 === "pos" && abltg_3 === "pos"){
                    res = "Rechtstyp";
                }else if(abltg_1 === "neg" && abltg_2 === "neg" && abltg_3 === "pos"){
                    res = "überdrehter Rechtstyp";
                }else{
                    res = "Position der Elektroden überprüfen."
                }
            }
            if(res){
                document.getElementById("lagetyp_result").innerHTML = res;
            }
        }
    };
    let calc_mad = function(){
        let sys = document.getElementById("mad-sys").value;
        let dias = document.getElementById("mad-dias").value;
        let input_res = document.getElementById("mad-res");

        if(sys && dias){
            let res = Math.round((parseInt(sys)+2*parseInt(dias))/3);
            input_res.value = res+" mmHg"
        }
    };
    let scores_tools_mad_callback = function(){
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_scores_tools_mad();
        let input_sys = document.getElementById("mad-sys");
        let input_dias = document.getElementById("mad-dias");

        input_sys.addEventListener("input", calc_mad);
        input_dias.addEventListener("input", calc_mad);
    };
    let norm_startup = function(){
        document.getElementById("norm_show_all_values_checkbox").addEventListener("change", function(){
            if(document.getElementById("norm_show_all_values_checkbox").checked){
                let hidden = document.getElementsByClassName("norm_extended_values");
                for(let x of hidden){
                    x.classList.remove("hide");
                }
            }else{
                let values = document.getElementsByClassName("norm_extended_values");
                for(let x of values){
                    x.classList.add("hide");
                }
            }
        });
    }
    
    let norm_ab_callback = function () {
        let parameters = {
            patientsettings_summary: patient_settings.print_summary(),
        };
    
        //Atemfrequenz:
        if(patient_settings.get_adult_or_child() === "adult"){
            parameters["af_value"] = "12 - 16 / min";
        }else if(patient_settings.get_adult_or_child() === "child"){
            let age = patient_settings.get_child_age();
            if(ChildAge[age] >= ChildAge.Years13){
                parameters["af_value"] = "16 - 20 / min";
            }else if(ChildAge[age] >= ChildAge.Years7){
                parameters["af_value"] = "18 - 22 / min";
            }else if(ChildAge[age] >= ChildAge.Years1){
                parameters["af_value"] = "19 - 26 / min"; 
            }else if(ChildAge[age] >= ChildAge.Months6){
                parameters["af_value"] = "23 - 29 / min";
            }else if(ChildAge[age] >= ChildAge.Months2){
                parameters["af_value"] = "24 - 34 / min";
            }else if(ChildAge[age] >= ChildAge.Days10){
                parameters["af_value"] = "36 - 42 / min";
            }else{
                parameters["af_value"] = "25 - 60 / min";
            }
        }else{
            parameters["af_value"] = "Für Berechnung bitte Alter angeben.";
        }
    
        //Atemzugvolumen:
        if(patient_settings.get_weight()){
            parameters["azv_value"] = parseInt(6*patient_settings.get_weight()) + " - " + parseInt(8*patient_settings.get_weight())+" ml";
        }else{
            parameters["azv_value"] = "Für Berechnung bitte Gewicht angeben.";
        }
    
        //FRC
        if(patient_settings.get_weight()){
            if(patient_settings.get_adult_or_child() === "adult"){
                parameters["frc_value"] = parseInt(34*patient_settings.get_weight()) + " ml";
            }else{
                if(patient_settings.get_child_age()){
                    if(ChildAge[patient_settings.get_child_age()] <= ChildAge.Years3){
                        parameters["frc_value"] = parseInt(30*patient_settings.get_weight()) + " ml";
                    }else{
                        parameters["frc_value"] = parseInt(34*patient_settings.get_weight()) + " ml";
                    }  
                }else{
                parameters["frc_value"] = "Für Berechnung bitte Alter angeben.";
                }
            }
        }else{
            parameters["frc_value"] = "Für Berechnung bitte Gewicht angeben.";
        }
    
        //Vitalkapazität
        if(patient_settings.get_weight()){
            if(patient_settings.get_adult_or_child() === "adult"){
                parameters["vk_value"] = parseInt(52*patient_settings.get_weight()) + " ml";
            }else{
                if(patient_settings.get_child_age()){
                    if(ChildAge[patient_settings.get_child_age()] <= ChildAge.Years3){
                        parameters["vk_value"] = parseInt(33*patient_settings.get_weight()) + " - " + parseInt(40*patient_settings.get_weight()) + " ml";
                    }else{
                        parameters["vk_value"] = parseInt(52*patient_settings.get_weight()) + " ml";
                    }  
                }else{
                parameters["vk_value"] = "Für Berechnung bitte Alter angeben.";
                }
            }
        }else{
            parameters["vk_value"] = "Für Berechnung bitte Gewicht angeben.";
        }
    
        //Totalkapazität
        if(patient_settings.get_weight()){
            if(patient_settings.get_adult_or_child() === "adult"){
                parameters["tk_value"] = parseInt(86*patient_settings.get_weight()) + " ml";
            }else{
                if(patient_settings.get_child_age()){
                    if(ChildAge[patient_settings.get_child_age()] <= ChildAge.Years3){
                        parameters["tk_value"] = parseInt(63*patient_settings.get_weight()) + " ml";
                    }else{
                        parameters["tk_value"] = parseInt(86*patient_settings.get_weight()) + " ml";
                    }  
                }else{
                parameters["tk_value"] = "Für Berechnung bitte Alter angeben.";
                }
            }
        }else{
            parameters["tk_value"] = "Für Berechnung bitte Gewicht angeben.";
        }
    
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_norm_ab(parameters);
        norm_startup();
    };
    
    let norm_c_callback = function(){
        let parameters = {
            patientsettings_summary: patient_settings.print_summary(),
        };
    
        let adult_or_child = patient_settings.get_adult_or_child();
        
        //HF:
        if(adult_or_child === "adult"){
            parameters["hf_value"] = "50 - 100 / min";
        }else{
            let age = patient_settings.get_child_age();
            if(age){
                if(ChildAge[age] >= ChildAge.Years16){
                    parameters["hf_value"] = "50 - 100 / min";
                }else if(ChildAge[age] >= ChildAge.Years10){
                    parameters["hf_value"] = "60 - 120 / min";
                }else if(ChildAge[age] >= ChildAge.Years5){
                    parameters["hf_value"] = "70 - 140 / min";
                }else if(ChildAge[age] >= ChildAge.Years2){
                    parameters["hf_value"] = "90 - 160 / min";
                }else if(ChildAge[age] >= ChildAge.Years1){
                    parameters["hf_value"] = "100 - 170 / min";
                }else{
                    parameters["hf_value"] = "110 - 180 / min";
                }
            }else{
                parameters["hf_value"] = "Für Berechnung bitte Alter angeben.";
            }
        }
    
        //RR:
        if(adult_or_child === "adult"){
            parameters["rr_value"] = "Norm: 120 / 80 mmHg <br>Hypertonie: >= 140 / 90 mmHg <br>hypertensive Krise/Notfall: Systole >= 180 mmHg <br>MAD: >= 60 mmHg";
        }else{
            let age = patient_settings.get_child_age();
            if(age){
                if(ChildAge[age] >= ChildAge.Years15){
                    parameters["rr_value"] = "120 / 80 mmHg, MAD >= 60 mmHg";
                }else if(ChildAge[age] >= ChildAge.Years13){
                    parameters["rr_value"] = "109 / 70 mmHg, MAD: >= 55 mmHg";
                }else if(ChildAge[age] >= ChildAge.Years11){
                    parameters["rr_value"] = "104 / 66 mmHg, MAD: >= 55 mmHg";
                }else if(ChildAge[age] >= ChildAge.Years9){
                    parameters["rr_value"] = "100 / 61 mmHg, MAD: >= 55 mmHg";
                }else if(ChildAge[age] >= ChildAge.Years7){
                    parameters["rr_value"] = "97 / 58 mmHg, MAD: >= 55 mmHg";
                }else if(ChildAge[age] >= ChildAge.Years5){
                    parameters["rr_value"] = "95 / 58 mmHg, MAD: >= 55 mmHg";
                }else if(ChildAge[age] >= ChildAge.Years3){
                    parameters["rr_value"] = "95 / 59 mmHg, MAD: >= 50 mmHg";
                }else if(ChildAge[age] >= ChildAge.Years1){
                    parameters["rr_value"] = "91 / 63 mmHg, MAD: >= 50 mmHg";
                }else if(ChildAge[age] >= ChildAge.Months6){
                    parameters["rr_value"] = "87 / 64 mmHg, MAD: >= 40 mmHg";
                }else if(ChildAge[age] >= ChildAge.Months2){
                    parameters["rr_value"] = "85 / 64 mmHg, MAD: >= 40 mmHg";
                }else{
                    parameters["rr_value"] = "74 / 51 mmHg, MAD: >= 40 mmHg";
                }
            }else{
                parameters["rr_value"] = "Für Berechnung bitte Alter angeben.";
            }
        }
    
        //EKG:
        if(adult_or_child === "adult"){
            parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_adult();
        }else{
            let age = patient_settings.get_child_age();
            if(age){
                if(ChildAge[age] >= ChildAge.Years16){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_adult();
                }else if(ChildAge[age] >= ChildAge.Years12){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_years12();
                }else if(ChildAge[age] >= ChildAge.Years8){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_years8();
                }else if(ChildAge[age] >= ChildAge.Years5){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_years5();
                }else if(ChildAge[age] >= ChildAge.Years3){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_years3();
                }else if(ChildAge[age] >= ChildAge.Years1){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_years1();
                }else if(ChildAge[age] >= ChildAge.Months6){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_months6();
                }else if(ChildAge[age] >= ChildAge.Months3){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_months3();
                }else if(ChildAge[age] >= ChildAge.Months1){
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_months1();
                }else{
                    parameters["ekg_value"] = Handlebars.partials.diagnostik_norm_c_ekg_newborn();
                }
            }else{
                parameters["ekg_value"] = "Für Berechnung bitte Alter angeben.";
            }
        }
    
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_norm_c(parameters);
        norm_startup();
    };
    
    let norm_d_callback = function(){
        let parameters = {
            patientsettings_summary: patient_settings.print_summary(),
        };
    
        //BZ:
        if(patient_settings.get_adult_or_child() === "adult"){
            parameters["bz_value"] = "60 - 140 mg/dL (nüchtern < 100 mg/dL)";
        }else{
            if(patient_settings.get_child_age()){
                if(ChildAge[patient_settings.get_child_age()] === ChildAge.Newborn){
                    parameters["bz_value"] = "> 45 mg/dL im Plasma";
                }else{
                    parameters["bz_value"] = "60 - 140 mg/dL (nüchtern < 100 mg/dL)";
                }
            }else{
                parameters["bz_value"] = "Für Berechnung bitte Alter angeben.";
            }
        }
    
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_norm_d(parameters);
        norm_startup();
    }
    
    let norm_e_callback = function(){
        let parameters = {
            patientsettings_summary: patient_settings.print_summary(),
        };
    
        document.getElementsByClassName("content")[0].innerHTML = Handlebars.templates.diagnostik_norm_e(parameters);
        norm_startup();
    }
    return { load , scores_tools_mad_callback, scores_tools_lagetyp_callback, scores_tools_gcs_callback, scores_tools_befast_callback, norm_startup, norm_ab_callback, norm_c_callback, norm_d_callback, norm_e_callback, scores_tools_apgar: scores_tools_apgar_callback};
})();

let module_medis = (function () {
    let load = function () {
        document.getElementsByClassName("app")[0].innerHTML = Handlebars.templates.medis();
    }

    return { load };
})();

let module_sop = (function () {
    let load = function () {
        document.getElementsByClassName("app")[0].innerHTML = Handlebars.templates.sop();
    }

    return { load };
})();

let module_lexikon = (function () {
    let load = function () {
        document.getElementsByClassName("app")[0].innerHTML = Handlebars.templates.lexikon();
    }

    return { load };
})();

let module_search = (function () {
    let load = function () {
        document.getElementsByClassName("app")[0].innerHTML = Handlebars.templates.search();
        init_search();
        document.getElementById("nav_back_btn").addEventListener("click", function(){
            navi.return_to_previous(); 
        });
    };
    let handle_click_on_search_res = function(search_res){
        show_document(search_res.target.getAttribute("data-search-target"));
    }
    let init_search = function(){
        let searchbar = document.getElementsByClassName("search_bar")[0];
        let search_reslist = document.getElementsByClassName("search_bar_entries")[0];
        searchbar.addEventListener("input", function(sbar){
            let search_term = sbar.target.value;
            let res = miniSearch.search(search_term, {fuzzy: 0.5});
            if(res.length > 0){
                console.log(res);
                for(el of res){
                    el["type2"] = el["type"].toUpperCase();
                }
                search_reslist.innerHTML = Handlebars.templates.search_result(res);
                for(entry of document.getElementsByClassName("search_bar_entry")){
                    entry.addEventListener("click", handle_click_on_search_res);
                }
            }else{
                search_reslist.innerHTML = "";
            }
        });
    }
    return { load, init_search };
})();

let module_patientsettings = (function () {
    let show_weight_setting = function () {
        document.getElementById("patientsettings_weight").classList.remove("hide");
    };
    let show_weight_estimation = function () {
        document.getElementById("patientsettings_estimation").classList.remove("hide");
    };
    let show_child_age_selector = function () {
        document.getElementById("patientsettings_child_age").classList.remove("hide");
    };
    let hide_child_age_selector = function () {
        document.getElementById("patientsettings_child_age").classList.add("hide");
    };
    let hide_weight_estimation = function () {
        document.getElementById("patientsettings_estimation").classList.add("hide");
    };
    let show_adult_age_selector = function(){
        document.getElementById("patientsettings_adult_age").classList.remove("hide");
    };
    let hide_adult_age_selector = function(){
        document.getElementById("patientsettings_adult_age").classList.add("hide");
    };
    let render_age_selector = function (selector) {
        let value = parseInt(selector.target.value);
        console.log("Age Selector changed value to:" + value);

        let label = document.getElementById("patientsettings_child_age_input_label");
        let age = ChildAge.get_by_num(value);
        label.innerHTML = ChildAge.get_name(age);
        patient_settings.set_child_age(age);
    }
    let load = function () {

        document.getElementsByClassName("app")[0].innerHTML = Handlebars.templates.patientsettings();

        document.getElementById("patientsettings_child_age_input").addEventListener("input", render_age_selector);

        document.getElementById("patientsettings_child").addEventListener("click", function () {
            patient_settings.set_adult_or_child("child");
            document.getElementById("patientsettings_child").classList.add("selected");
            document.getElementById("patientsettings_child").classList.remove("disabled");
            document.getElementById("patientsettings_adult").classList.add("disabled");
            document.getElementById("patientsettings_adult").classList.remove("selected");
            show_weight_setting();
            show_weight_estimation();
            show_child_age_selector();
            hide_adult_age_selector();
        });
        document.getElementById("patientsettings_adult").addEventListener("click", function () {
            patient_settings.set_adult_or_child("adult");
            document.getElementById("patientsettings_adult").classList.add("selected");
            document.getElementById("patientsettings_adult").classList.remove("disabled");
            document.getElementById("patientsettings_child").classList.add("disabled");
            document.getElementById("patientsettings_child").classList.remove("selected");
            show_weight_setting();
            hide_weight_estimation();
            hide_child_age_selector();
            show_adult_age_selector();
        });

        if (patient_settings.get_adult_or_child()) {
            if (patient_settings.get_adult_or_child() === "adult") {
                document.getElementById("patientsettings_child").classList.add("disabled");
                document.getElementById("patientsettings_adult").classList.add("selected");
                show_adult_age_selector();
            } else {
                document.getElementById("patientsettings_child").classList.add("selected");
                document.getElementById("patientsettings_adult").classList.add("disabled");
                show_weight_estimation();
                if (patient_settings.get_child_age) {
                    document.getElementById("patientsettings_child_age_input").value = ChildAge[patient_settings.get_child_age()];
                    document.getElementById("patientsettings_child_age_input_label").innerHTML = ChildAge.get_name(patient_settings.get_child_age());
                } else {
                    patient_settings.set_child_age(ChildAge.Newborn);
                }
                show_child_age_selector();
            }
            show_weight_setting();
        };

        if (patient_settings.get_weight()) {
            document.getElementById("patientsettings_weight_input").value = patient_settings.get_weight();
        }
        
        if(patient_settings.get_adult_age()){
            document.getElementById("patientsettings_adult_age_input").value = patient_settings.get_adult_age();
        }

        document.getElementById("patientsettings_weight_input").addEventListener("input", function () {
            patient_settings.set_weight(this.value);
        });

        document.getElementById("patientsettings_adult_age_input").addEventListener("input", function(){
            patient_settings.set_adult_age(this.value);
        })

        let pawper_card = document.getElementById("patientsettings_estimation_pawper_card");
        let age_card = document.getElementById("patientsettings_estimation_age_card");
        let select_pawper_btn = document.getElementById("patientsettings_estimation_select_pawper");
        let select_age_btn = document.getElementById("patientsettings_estimation_select_age");

        select_pawper_btn.addEventListener("click", function () {
            select_pawper_btn.classList.add("active");
            select_age_btn.classList.remove("active");
            pawper_card.classList.remove("hide");
            age_card.classList.add("hide");
        });
        select_age_btn.addEventListener("click", function () {
            select_age_btn.classList.add("active");
            select_pawper_btn.classList.remove("active");
            age_card.classList.remove("hide");
            pawper_card.classList.add("hide");
        });

        document.getElementById("patientsettings_estimation_pawper_estimate").addEventListener("click", function () {
            let height = document.getElementById("patientsettings_estimation_pawper_height").value;
            let mac = document.getElementById("patientsettings_estimation_pawper_mac").value;

            if (height && mac) {
                try {
                    let estimated_weight = pawper_xl_mac_tape.get_weight(height, mac);
                    patientsettings_weight_input.value = estimated_weight;
                    patient_settings.set_weight(estimated_weight);
                } catch (e) {
                    if (e.message === "HeightTooShort") {
                        alert("Die eingegebene Körperhöhe ist zu klein für PAWPER XL-MAC.");
                    } else if (e.message === "HeightTooLarge") {
                        alert("Die eingegebene Körperhöhe ist zu groß für PAWPER XL-MAC.");
                    } else {
                        alert("Es ist ein Fehler bei der Schätzung aufgetreten: " + e.message);
                    }
                }
            } else {
                alert("Für die Schätzung mit PAWPER XL-MAC müssen Körperhöhe und Armumfang angegeben werden!");
            }
        });

        document.getElementById("patientsettings_estimation_age_estimate").addEventListener("click", function () {
            let age = patient_settings.get_child_age();

            if (!age) {
                patient_settings.set_child_age("Newborn");
                age = "Newborn";
            }

            let estimated_weight;
            if (ChildAge[age] <= ChildAge.Years1) {
                estimated_weight = weight_by_age_estimation.calc_new_apls(ChildAge.get_as_months(age));
                patient_settings.set_weight(estimated_weight);
                document.getElementById("patientsettings_weight_input").value = estimated_weight;
            } else {
                if (ChildAge[age] > ChildAge.Years14) {
                    alert("Die altersbasierte Gewichtsschätzung funktioniert nur bis einschließlich 14 Jahren.");
                } else {
                    estimated_weight = weight_by_age_estimation.calc_best_guess(ChildAge.get_as_years(age));
                    patient_settings.set_weight(estimated_weight);
                    document.getElementById("patientsettings_weight_input").value = estimated_weight;
                }
            }

        });
    }

    return { load };
})();

let pawper_xl_mac_tape = (function () {
    let get_weight = function (height, mac) {
        if (height < 43) {
            throw new Error("HeightTooShort")
        }
        if (height < 49.3) {
            if (mac < 9.4) {
                return 2.5;
            } else if (mac < 10.4) {
                return 2.8;
            } else if (mac < 11.6) {
                return 3;
            } else if (mac < 12.8) {
                return 3.2;
            } else if (mac < 14) {
                return 3.5;
            } else if (mac < 15.2) {
                return 4;
            } else {
                return 4.5;
            }
        } else if (height < 54.8) {
            if (mac < 9.6) {
                return 3.5;
            } else if (mac < 10.5) {
                return 3.8;
            } else if (mac < 11.8) {
                return 4;
            } else if (mac < 13) {
                return 4.5;
            } else if (mac < 14.2) {
                return 5;
            } else if (mac < 15.5) {
                return 6;
            } else {
                return 7;
            }
        } else if (height < 59.2) {
            if (mac < 11) {
                return 4;
            } else if (mac < 11.5) {
                return 4.5;
            } else if (mac < 12.5) {
                return 5;
            } else if (mac < 13.5) {
                return 5.5;
            } else if (mac < 15.5) {
                return 6;
            } else if (mac < 16.5) {
                return 7;
            } else {
                return 8;
            }
        } else if (height < 62.9) {
            if (mac < 11.5) {
                return 5;
            } else if (mac < 12) {
                return 5.5;
            } else if (mac < 13.2) {
                return 6;
            } else if (mac < 14.3) {
                return 6.5;
            } else if (mac < 15.3) {
                return 7;
            } else if (mac < 16.5) {
                return 8;
            } else {
                return 9;
            }
        } else if (height < 66.4) {
            if (mac < 11.3) {
                return 6;
            } else if (mac < 13) {
                return 6.5;
            } else if (mac < 14.5) {
                return 7;
            } else if (mac < 15.4) {
                return 7.5;
            } else if (mac < 16.5) {
                return 8;
            } else if (mac < 17.5) {
                return 9;
            } else {
                return 10;
            }
        } else if (height < 70.1) {
            if (mac < 13.1) {
                return 7;
            } else if (mac < 13.7) {
                return 7.5;
            } else if (mac < 14.5) {
                return 8;
            } else if (mac < 15.5) {
                return 8.5;
            } else if (mac < 17) {
                return 9.5;
            } else if (mac < 18.5) {
                return 10;
            } else {
                return 11;
            }
        } else if (height < 73.9) {
            if (mac < 12.6) {
                return 7.5;
            } else if (mac < 14.2) {
                return 8.5;
            } else if (mac < 15.5) {
                return 9;
            } else if (mac < 16.3) {
                return 10;
            } else if (mac < 18.2) {
                return 11;
            } else if (mac < 20) {
                return 12;
            } else {
                return 13;
            }
        } else if (height < 78.2) {
            if (mac < 12.7) {
                return 8.5;
            } else if (mac < 14.5) {
                return 9.5;
            } else if (mac < 15.5) {
                return 10;
            } else if (mac < 17.1) {
                return 11;
            } else if (mac < 19) {
                return 12;
            } else if (mac < 20.5) {
                return 13;
            } else {
                return 14;
            }
        } else if (height < 83.1) {
            if (mac < 12.4) {
                return 9;
            } else if (mac < 14.7) {
                return 10;
            } else if (mac < 15.5) {
                return 11;
            } else if (mac < 17.1) {
                return 12;
            } else if (mac < 19) {
                return 13;
            } else if (mac < 20.5) {
                return 14;
            } else {
                return 15;
            }
        } else if (height < 88) {
            if (mac < 13) {
                return 10;
            } else if (mac < 14.9) {
                return 11;
            } else if (mac < 15.8) {
                return 12;
            } else if (mac < 17) {
                return 13;
            } else if (mac < 18.7) {
                return 14;
            } else if (mac < 20.3) {
                return 16;
            } else {
                return 18;
            }
        } else if (height < 92.6) {
            if (mac < 13.5) {
                return 11;
            } else if (mac < 14.9) {
                return 12;
            } else if (mac < 15.9) {
                return 13;
            } else if (mac < 16.8) {
                return 14;
            } else if (mac < 19.1) {
                return 15;
            } else if (mac < 22.5) {
                return 17;
            } else {
                return 19;
            }
        } else if (height < 96.8) {
            if (mac < 14.4) {
                return 12;
            } else if (mac < 15.2) {
                return 13;
            } else if (mac < 16.6) {
                return 14;
            } else if (mac < 17.7) {
                return 15;
            } else if (mac < 19.4) {
                return 17;
            } else if (mac < 20.5) {
                return 19;
            } else {
                return 21;
            }
        } else if (height < 100.6) {
            if (mac < 14.2) {
                return 13;
            } else if (mac < 15.8) {
                return 14;
            } else if (mac < 16.5) {
                return 15;
            } else if (mac < 17.7) {
                return 16;
            } else if (mac < 19.5) {
                return 18;
            } else if (mac < 21.5) {
                return 20;
            } else {
                return 22;
            }
        } else if (height < 103.9) {
            if (mac < 14.8) {
                return 14;
            } else if (mac < 15.7) {
                return 15;
            } else if (mac < 17.3) {
                return 16;
            } else if (mac < 17.6) {
                return 17;
            } else if (mac < 21) {
                return 19;
            } else if (mac < 22.5) {
                return 21;
            } else {
                return 23;
            }
        } else if (height < 107) {
            if (mac < 15.3) {
                return 15;
            } else if (mac < 16) {
                return 16;
            } else if (mac < 17.5) {
                return 17;
            } else if (mac < 18.1) {
                return 18;
            } else if (mac < 20) {
                return 20;
            } else if (mac < 21.5) {
                return 22;
            } else {
                return 24;
            }
        } else if (height < 110) {
            if (mac < 15.6) {
                return 16;
            } else if (mac < 16.7) {
                return 17;
            } else if (mac < 17.9) {
                return 18;
            } else if (mac < 18.7) {
                return 19;
            } else if (mac < 23) {
                return 21;
            } else if (mac < 27.5) {
                return 24;
            } else {
                return 26;
            }
        } else if (height < 113.2) {
            if (mac < 15.3) {
                return 16;
            } else if (mac < 16.5) {
                return 18;
            } else if (mac < 17.9) {
                return 19;
            } else if (mac < 20.3) {
                return 21;
            } else if (mac < 22.5) {
                return 23;
            } else if (mac < 24.5) {
                return 25;
            } else {
                return 28;
            }
        } else if (height < 116.5) {
            if (mac < 15.6) {
                return 17;
            } else if (mac < 17.6) {
                return 19;
            } else if (mac < 18.5) {
                return 20;
            } else if (mac < 20.3) {
                return 22;
            } else if (mac < 21.7) {
                return 24;
            } else if (mac < 23.5) {
                return 26;
            } else {
                return 29;
            }
        } else if (height < 120.6) {
            if (mac < 16.3) {
                return 20;
            } else if (mac < 17.8) {
                return 21;
            } else if (mac < 19.2) {
                return 22;
            } else if (mac < 21.3) {
                return 24;
            } else if (mac < 23.2) {
                return 27;
            } else if (mac < 24.9) {
                return 29;
            } else {
                return 32;
            }
        } else if (height < 125.4) {
            if (mac < 16.5) {
                return 21;
            } else if (mac < 18.3) {
                return 23;
            } else if (mac < 19.5) {
                return 24;
            } else if (mac < 21.9) {
                return 26;
            } else if (mac < 23) {
                return 29;
            } else if (mac < 24.6) {
                return 32;
            } else {
                return 35;
            }
        } else if (height < 129.6) {
            if (mac < 17.9) {
                return 23;
            } else if (mac < 18.6) {
                return 25;
            } else if (mac < 20.5) {
                return 26;
            } else if (mac < 22.1) {
                return 28;
            } else if (mac < 24.5) {
                return 31;
            } else if (mac < 25.5) {
                return 34;
            } else {
                return 37;
            }
        } else if (height < 133.3) {
            if (mac < 17.8) {
                return 24;
            } else if (mac < 18.8) {
                return 26;
            } else if (mac < 20) {
                return 28;
            } else if (mac < 22.4) {
                return 30;
            } else if (mac < 25.7) {
                return 33;
            } else if (mac < 26.7) { return 36; } else {
                return 40;
            }
        } else if (height < 136.6) {
            if (mac < 17.5) {
                return 25;
            } else if (mac < 19.5) {
                return 28;
            } else if (mac < 22.1) {
                return 30;
            } else if (mac < 23) {
                return 33;
            } else if (mac < 24.7) {
                return 36;
            } else if (mac < 26.7) { return 40; } else {
                return 44;
            }
        } else if (height < 139.8) {
            if (mac < 19.2) {
                return 28;
            } else if (mac < 20.5) {
                return 30;
            } else if (mac < 22.4) {
                return 32;
            } else if (mac < 24) {
                return 35;
            } else if (mac < 25.6) {
                return 39;
            } else if (mac < 27) { return 42; } else {
                return 47;
            }
        } else if (height < 143.2) {
            if (mac < 19.2) {
                return 29;
            } else if (mac < 21.5) {
                return 32;
            } else if (mac < 23.3) {
                return 34;
            } else if (mac < 24.7) {
                return 38;
            } else if (mac < 26.6) {
                return 42;
            } else if (mac < 28.3) { return 46; } else {
                return 50;
            }
        } else if (height < 146.5) {
            if (mac < 19.5) {
                return 29;
            } else if (mac < 20.8) {
                return 33;
            } else if (mac < 22.4) {
                return 36;
            } else if (mac < 23.7) {
                return 39;
            } else if (mac < 27) {
                return 43;
            } else if (mac < 30) { return 48; } else {
                return 52;
            }
        } else if (height < 149.8) {
            if (mac < 20.2) {
                return 33;
            } else if (mac < 21.7) {
                return 36;
            } else if (mac < 23.4) {
                return 38;
            } else if (mac < 24) {
                return 41;
            } else if (mac < 26.3) {
                return 45;
            } else if (mac < 28.7) { return 50; } else {
                return 58;
            }
        } else if (height < 153.1) {
            if (mac < 21.4) {
                return 36;
            } else if (mac < 22.6) {
                return 39;
            } else if (mac < 24.2) {
                return 40;
            } else if (mac < 26.2) {
                return 48;
            } else if (mac < 27.9) {
                return 52;
            } else if (mac < 30) { return 57; } else {
                return 65;
            }
        } else if (height < 158) {
            if (mac < 21.1) {
                return 38;
            } else if (mac < 23.5) {
                return 43;
            } else if (mac < 25.6) {
                return 45;
            } else if (mac < 28.2) {
                return 55;
            } else if (mac < 31.6) {
                return 64;
            } else if (mac < 35.2) { return 72; } else {
                84;
            }
        } else if (height < 165) {
            if (mac < 22) {
                return 40;
            } else if (mac < 23.9) {
                return 45;
            } else if (mac < 26.2) {
                return 50;
            } else if (mac < 30.2) {
                return 60;
            } else if (mac < 32.8) {
                return 72;
            } else if (mac < 35.4) { return 79; } else {
                return 87;
            }
        } else if (height < 170) {
            if (mac < 22.7) {
                return 45;
            } else if (mac < 23.8) {
                return 49;
            } else if (mac < 27.5) {
                return 55;
            } else if (mac < 30.5) {
                return 65;
            } else if (mac < 33.8) {
                return 75;
            } else if (mac < 36.7) { return 85; } else {
                return 99;
            }
        } else if (height < 174) {
            if (mac < 23.2) {
                return 46;
            } else if (mac < 25.3) {
                return 54;
            } else if (mac < 30.3) {
                return 60;
            } else if (mac < 33.4) {
                return 77;
            } else if (mac < 35.6) {
                return 83;
            } else if (mac < 39.9) { return 91; } else {
                return 105;
            }
        } else if (height < 177) {
            if (mac < 24.2) {
                return 52;
            } else if (mac < 27.5) {
                return 59;
            } else if (mac < 30.1) {
                return 65;
            } else if (mac < 35.2) {
                return 80;
            } else if (mac < 39.4) {
                return 89;
            } else if (mac < 44) { return 98; } else {
                return 108;
            }
        } else if (height < 200) {
            if (mac < 25.7) {
                return 55;
            } else if (mac < 28.3) {
                return 63;
            } else if (mac < 32.7) {
                return 70;
            } else if (mac < 36.1) {
                return 87;
            } else if (mac < 39.6) {
                return 95;
            } else if (mac < 41.4) { return 105; } else {
                return 116;
            }
        } else {
            throw new Error("HeightTooLarge")
        }
    }

    return { get_weight };
})();

let weight_by_age_estimation = (function () {
    let calc_new_apls = function (age_in_months) {
        console.log("months: " + parseInt(age_in_months));
        return (0.5 * parseInt(age_in_months)) + 4;
    };
    let calc_best_guess = function (age_in_years) {
        if (age_in_years < 5) {
            return 2 * (parseInt(age_in_years) + 5)
        } else if (age_in_years > 14) {
            return false;
        } else {
            return 4 * parseInt(age_in_years);
        }
    };
    return { calc_new_apls, calc_best_guess }
})();

let search_documents = [
    {
        id: 1,
        type: "sop",
        name: "Akutes Coronar Syndrom",
        alt_names: "ACS",
        slug: "sop_acs",
        template: Handlebars.templates.sop,
        search_callback: function () { alert("Test") }
    },
    {
        id: 2,
        type: "norm",
        name: "A/B Normwerte",
        alt_names: "Atmung Beatmung Atemvolumina Atemfrequenz AF",
        slug: "diagnostik_norm_a_b",
        search_callback: module_diagnostik.norm_ab_callback,
    },
    {
        id: 3,
        type: "norm",
        name: "C Normwerte",
        alt_names: "Kreislauf EKG HF Herzfrequenz Blutdruck RR",
        slug: "diagnostik_norm_c",
        search_callback: module_diagnostik.norm_c_callback,
    },
    {
        id: 4,
        type: "norm",
        name: "D Normwerte",
        alt_names: "Bewusstsein Disability BZ Blutzucker",
        slug: "diagnostik_norm_d",
        search_callback: module_diagnostik.norm_d_callback,
    },
    {
        id: 5,
        type: "norm",
        name: "E Normwerte",
        alt_names: "Temperatur",
        slug: "diagnostik_norm_e",
        search_callback: module_diagnostik.norm_e_callback,
    },
    {
        id: 6,
        type: "scores-tools",
        name: "APGAR-Score",
        alt_names: "Apgar",
        slug: "diagnostik_scores_tools_apgar",
        search_callback: module_diagnostik.scores_tools_apgar,
    },
    {
        id: 7,
        type: "scores-tools",
        name: "BEFAST",
        alt_names: "schlaganfall",
        slug: "diagnostik_scores_tools_befast",
        search_callback: module_diagnostik.scores_tools_befast_callback,
    },
    {
        id: 8,
        type: "scores-tools",
        name: "GCS",
        alt_names: "Glasgow Coma Score Glasgow-Coma-Score Glasgow-Coma-Scale Glasgow Koma Skala",
        slug: "diagnostik_scores_tools_gcs",
        search_callback: module_diagnostik.scores_tools_gcs_callback,
    },
    {
        id: 9,
        type: "scores-tools",
        name: "Lagetypbestimmung",
        alt_names: "EKG Lagetyp Herz",
        slug: "diagnostik_scores_tools_lagetyp",
        search_callback: module_diagnostik.scores_tools_lagetyp_callback,
    },
    {
        id: 10,
        type: "scores-tools",
        name: "MAD Berechnung",
        alt_names: "mittlerer aterieller Druck Blutdruck",
        slug: "diagnostik_scores_tools_mad",
        search_callback: module_diagnostik.scores_tools_mad_callback,
    }
]