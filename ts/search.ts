import MiniSearch from "minisearch";
import * as Handlebars from "handlebars/runtime";
import {navigate_to} from "./app";

export interface SearchIndexEntry {
    id?: number,
    title: string,
    synonyms: string[],
    category?: string,
    destination: string, // path to the entry, e.g. diagnostik.norm_ab
}

let search_instance = new MiniSearch({
    fields: ['title', 'synonyms'],
    storeFields: ['destination', 'title', 'category'],
    searchOptions: {
        fuzzy: 0.4,
        boost: {
            title: 3,
        },
        prefix: true,
    }
});

let running_id = 0;

export function add_search_listeners(){
    let search_bar = document.getElementsByClassName("search_bar")[0] as HTMLInputElement;
    let search_bar_entries = document.getElementsByClassName("search_bar_entries")[0] as HTMLElement;

    search_bar.addEventListener("input", function(){
        let query = search_bar.value;
        if(!query.trim()){
            search_bar_entries.innerHTML = "";
            return;
        }

        let results = search_instance.search(query);
        // Filter duplicates
        const destinationMap = new Map();
        results.forEach(result => {
            if (!destinationMap.has(result.destination) ||
                destinationMap.get(result.destination).score < result.score) {
                destinationMap.set(result.destination, result);
            }
        });
        results = Array.from(destinationMap.values());

        search_bar_entries.innerHTML = Handlebars.templates["search_results"](results);

        let search_result_entries = document.querySelectorAll(".search_result_entry");
        for(let entry of search_result_entries){
            (entry as HTMLElement).addEventListener("click", function(event){
                let target = event.target as HTMLElement;
                let destination = target.getAttribute("data-dest");
                navigate_to(destination);
            })
        }
    });

    // Remove search result entries and clear searchbar if clicked outside of search
    window.addEventListener("click", function(e){
        let target = e.target as HTMLElement;
        if(!target.closest(".search")){
            search_bar_entries.innerHTML = "";
            search_bar.value = "";
        }
    })
}

export function add_to_index(entries: SearchIndexEntry[], category: string){
    for (let entry of entries){
        if(!entry.id){
            entry["id"] = running_id;
            running_id = running_id + 1;
        }
        entry["category"] = category;
    }
    search_instance.addAll(entries);
}

export function build_search_index(){
    add_to_index(search_index_diagnostic, "normwerte");
}

const search_index_diagnostic = [
    {
        title: "Normwerte A/B",
        synonyms: ["Atmung", "Beatmung"],
        destination: "diagnostik.norm_ab"
    },
    {
        title: "Atemfrequenz",
        synonyms: ["AF"],
        destination: "diagnostik.norm_ab.af"
    },
    {
        title: "Atemzugvolumen",
        synonyms: ["AZV"],
        destination: "diagnostik.norm_ab.azv"
    },
    {
        title: "Sauerstoffsättigung",
        synonyms: ["SpO2", "SPO2", "Pulsoxymetrie", "Blutsauerstoffsättigung"],
        destination: "diagnostik.norm_ab.spo2"
    },
    {
        title: "Funktionelle Residualkapazität",
        synonyms: ["FRC"],
        destination: "diagnostik.norm_ab.frc"
    },
    {
        title: "Vitalkapazität",
        synonyms: ["VK"],
        destination: "diagnostik.norm_ab.vk"
    },
    {
        title: "Totalkapazität",
        synonyms: ["TK"],
        destination: "diagnostik.norm_ab.tk"
    },
    {
        title: "O2-Partialdruck",
        synonyms: ["pO2"],
        destination: "diagnostik.norm_ab.po2"
    },
    {
        title: "CO2-Partialdruck",
        synonyms: ["pCO2"],
        destination: "diagnostik.norm_ab.pco2"
    },
    {
        title: "Normwerte C",
        synonyms: ["Kreislauf", "Blutdruck", "Rekap", "EKG"],
        destination: "diagnostik.norm_c"
    },
    {
        title: "Herzfrequenz",
        synonyms: ["HF", "Puls", "Pulsfrequenz", "Pulsrate"],
        destination: "diagnostik.norm_c.hf"
    },
    {
        title: "Blutdruck",
        synonyms: ["RR", "NiBP"],
        destination: "diagnostik.norm_c.rr"
    },
    {
        title: "Rekapillarisierungszeit",
        synonyms: ["Rekap", "Fingernagelprobe"],
        destination: "diagnostik.norm_c.rekap"
    },
    {
        title: "EKG Normwerte",
        synonyms: ["EKG", "QT-Zeit", "QTc-Zeit", "P-Welle", "QRS-Komplex"],
        destination: "diagnostik.norm_c.ekg"
    },
    {
        title: "Normwerte D",
        synonyms: ["Neuro", "Blutzucker"],
        destination: "diagnostik.norm_d"
    },
    {
        title: "Blutzucker",
        synonyms: ["BZ", "Glutcose", "Glukose"],
        destination: "diagnostik.norm_d.bz"
    },
    {
        title: "Normwerte E",
        synonyms: ["Körpertemperatur", "Körperkerntemperatur"],
        destination: "diagnostik.norm_e"
    },
    {
        title: "Körperkerntemperatur",
        synonyms: ["Körpertemperatur", "Temp", "°C"],
        destination: "diagnostik.norm_e.temperatur"
    },
    {
        title: "APGAR",
        synonyms: ["Apgar-Score"],
        destination: "diagnostik.apgar"
    },
    {
        title: "Glasgow Coma Scale",
        synonyms: ["GCS", "Glasgow-Koma-Skala", "Glasgow-Skala", "SHT", "Schädel-Hirn-Trauma"],
        destination: "diagnostik.gcs"
    },
    {
        title: "Pediatric Glasgow Coma Scale",
        synonyms: ["PGCS", "Kinder GCS", "GCS", "Pediatric-Glasgow-Koma-Skala", "Pediatric-Glasgow-Skala", "SHT", "Schädel-Hirn-Trauma"],
        destination: "diagnostik.pgcs"
    },
    {
        title: "Frequenzbestimmung",
        synonyms: ["Herzfrequenz", "Atemfrequenz"],
        destination: "diagnostik.frequenzbestimmung"
    },
    {
        title: "SAMPLER-Schema",
        synonyms: ["SAMPLER", "Anamnese"],
        destination: "diagnostik.sampler"
    },
    {
        title: "OPQRST-Schema",
        synonyms: ["OPQRST", "Schmerzanamnese", "Anamnese", "Schmerzen"],
        destination: "diagnostik.opqrst"
    },
    {
        title: "BEFAST-Schema",
        synonyms: ["BEFAST", "Schlaganfall", "Apoplex"],
        destination: "diagnostik.befast"
    },
    {
        title: "Schmerzskalen",
        synonyms: ["NRS", "VAS", "BPS", "CPOT", "Numerische Rating-Skala", "Visuelle Analogskala", "Behavior Pain Scale", "Critical Care Pain Observation Tool"],
        destination: "diagnostik.schmerzskala"
    }
]
