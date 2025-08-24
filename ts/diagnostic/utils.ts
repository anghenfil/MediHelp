
export function add_score(html_element: HTMLElement){
    let radios = html_element.querySelectorAll("input[type=radio]");
    for(let radio of radios){
        radio.addEventListener("change", calculate_score);
        let points = radio.getAttribute("data-points");
        radio.closest(".score-radio").querySelector("label").innerHTML += " ("+points+")";
    }
}

function calculate_score(event: Event){
    let score_div = (event.target as HTMLElement).closest(".score");
    let score = 0;

    let checked = score_div.querySelectorAll("input:checked");
    for(let checked_radio of checked){
        if(checked_radio.getAttribute("data-points")){
            score = score+parseInt(checked_radio.getAttribute("data-points"));
        }
    }

    let result_span = score_div.querySelectorAll(".score-result-points")[0] as HTMLElement;
    result_span.innerText = score.toString();

    let result_interpretations = score_div.querySelectorAll(".score-result-interpretation");
    for(let interpretation of result_interpretations){
        let required_points_range = interpretation.getAttribute("data-required-points").split("-");
        let min_points = parseInt(required_points_range[0]);
        let max_points = parseInt(required_points_range[1]);

        if(score >= min_points && score <= max_points){
            interpretation.classList.remove("hide");
        }else{
            interpretation.classList.add("hide");
        }
    }
}

export function add_subnavigation(html_element: HTMLElement, active: string|null = null){
    console.log("active: "+active);
    let children = html_element.querySelectorAll("div");
    for(let child of children){
        child.addEventListener("click", subnavigation_click_listener);
    }
    if(active){
        for(let child of document.getElementsByClassName("subnavigation-target")){
            if(child.id === active){
                child.classList.remove("hide");
            }else{
                child.classList.add("hide");
            }
        }
        for(let child of children){
            if(child.getAttribute("data-show") === "#"+active){
                child.classList.add("active");
            }else{
                child.classList.remove("active");
            }
        }
    }
}

function subnavigation_click_listener(e: Event){
    let target = e.target as HTMLElement;
    let data_show = target.getAttribute("data-show");
    target.classList.add("active");

    let all_divs = target.closest(".subnavigation").children;
    for(let div of all_divs){
        if(div !== target){
            div.classList.remove("active");
        }
    }

    let subnavigation_targets = document.getElementsByClassName("subnavigation-target");
    for(let subnavigation_target of subnavigation_targets){
        subnavigation_target.classList.add("hide");
    }

    document.querySelector(data_show).classList.remove("hide");
}