import {parse_child_age_from_str} from "./patient_settings";

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