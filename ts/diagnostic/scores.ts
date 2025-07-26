
export function add_score(html_element: HTMLElement){
    let radios = html_element.querySelectorAll("input[type=radio]");
    for(let radio of radios){
        radio.addEventListener("change", calculate_score);
    }
}

function calculate_score(event: Event){
    let score_div = (event.target as HTMLElement).closest(".score");
    let score = 0;

    let checked = score_div.querySelectorAll("input:checked");
    for(let checked_radio of checked){
        score = score+parseInt(checked_radio.getAttribute("data-points"));
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