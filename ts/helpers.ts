import {ChildAge, parse_child_age_from_str} from "./patient_settings";
import {calculate_child_bp} from "./diagnostic/BloodPressure";

export function compare_if (v1: any, operator: string, v2: any, v3: any, options: any) {
    if (!options){
        options = v3;
    }

    if(typeof v2 === 'string' || v2 instanceof String) {
        if (v2.startsWith("ChildAge:")) {
            // Convert String to ChildAge number
            v2 = v2.split(":")[1];
            v2 = parse_child_age_from_str(v2);
        }
    }

    if(typeof v3 === 'string' || v3 instanceof String) {
        if (v3.startsWith("ChildAge:")) {
            // Convert String to ChildAge number
            v3 = v3.split(":")[1];
            v3 = parse_child_age_from_str(v3);
        }
    }

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        case 'between':
            return (v1 >= v2 && v1 < v3) ? options.fn(this) : options.inverse(this);
        case 'between_inclusive':
            return (v1 >= v2 && v1 <= v3) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
}

export function calcnum(v1: number, operator: string, v2: number) {
    switch (operator) {
        case '+':
            return Math.round(v1 + v2);
        case '-':
            return Math.round(v1 - v2);
        case '*':
            return Math.round(v1 * v2);
        case '/':
            return Math.round(v1 / v2);
    }
}

export function rr_percentiles(height: number, age_or_birthdate: number|string, sex: boolean, percentiles: string){
    let age : ChildAge | string;

    console.log("Parameters: height="+height+" age_or_birthdate="+age_or_birthdate+" sex="+sex+" percentiles="+percentiles);

    if (typeof age_or_birthdate === 'number') {
        age = age_or_birthdate as ChildAge;
    }else{
        age = age_or_birthdate;
    }

    let percentiles_res: number[] = [];
    percentiles.split(",").forEach(function(percentile){
        percentiles_res.push(parseFloat(percentile.trim()));
    });

    return calculate_child_bp(sex, percentiles_res, height, age)
}