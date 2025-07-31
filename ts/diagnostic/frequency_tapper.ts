let tap_area: HTMLElement;
let result_span: HTMLElement;
let tap_timestamps : number[]= [];

export function init(){
    tap_timestamps = [];
    tap_area = document.getElementsByClassName("tap_area")[0] as HTMLElement;
    result_span = document.getElementsByClassName("tap_result_value")[0] as HTMLElement;
    tap_area.addEventListener("click", add_tap);
}

function add_tap(){
    let timestamp = Date.now();
    tap_timestamps.push(timestamp);

    if(tap_timestamps.length > 10){ // Remove old taps
        tap_timestamps.shift();
    }

    if(tap_timestamps.length > 3){
        let frequency = calculate_frequency();
        result_span.innerText = Math.round(frequency*60)+" / min";
    }else{
        result_span.innerText = "Weiter Tippen für Frequenzbestimmung!";
    }
}

/**
 *  Returns the frequency in Hz (1/s)
 */
function calculate_frequency(){
    let diffs = [];
    let diffs_sum = 0;
    for(let i = 1; i < tap_timestamps.length;i++){
        let diff = tap_timestamps[i]-tap_timestamps[i-1];
        diffs.push(diff);
        diffs_sum += diff;
    }
    // calculate mittelwert
    let mittelwert = diffs_sum/diffs.length;
    console.log("Unkorrigierter Mittelwert: "+mittelwert);

    let abweichungen_sum = 0;

    for(let diff of diffs){
        let abweichung = Math.pow((diff-mittelwert),2);
        abweichungen_sum += abweichung;
    }
    let standardabweichung = Math.sqrt(abweichungen_sum/(diffs.length-1));
    console.log("Standardabweichung: "+standardabweichung);

    let accepted_values = [];
    let accepted_values_sum = 0;
    for(let diff of diffs){
        if(Math.abs(diff-mittelwert) <= 2*standardabweichung){
            accepted_values.push(diff);
            accepted_values_sum += diff;
        }
    }
    let mittelwert_korrigiert = accepted_values_sum/accepted_values.length;
    console.log("Korrigierter Mittelwert: "+mittelwert_korrigiert+"ms");

    let frequence = 1/(mittelwert_korrigiert/1000);
    return frequence;
}