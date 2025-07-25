import {ChildAge, parse_child_age_from_str, PatientSettings} from "./patient_settings";
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

/**
 * Only render block if all parameters aren't null, otherweise return notice
 */
export function requirePatientData(patientSettings: PatientSettings, requiredFieldsChildren: string, requiredFieldsAdults: string, options: any) {
    if (!patientSettings?.patient) {
        return "Zur Berechnung bitte Patientendaten angeben.";
    }

    const adult = patientSettings.patient.AdultPatient;
    const child = patientSettings.patient.ChildPatient;

    const missing_fields: string[] = [];
    
    if(adult){
        const fields_adults = requiredFieldsAdults.split(',').map(f => f.trim());

        fields_adults.forEach(field => {
            const value = (adult as Record<string, any>)[field];
            if (value === null || value === undefined) {
                if(field === "age"){
                    missing_fields.push("Alter");
                }else if(field === "birthdate"){
                    missing_fields.push("Geburtsdatum");
                }else if(field === "weight"){
                    missing_fields.push("Gewicht");
                }else if(field === "length"){
                    missing_fields.push("Körpergröße");
                }else if(field !== ""){
                    missing_fields.push(field);
                }
            }
        });
    }else if(child){
        const fields_children = requiredFieldsChildren.split(',').map(f => f.trim());
        console.log("Required fields_children:")
        console.log(fields_children);
        fields_children.forEach(field => {
            const value = (child as Record<string, any>)[field];
            if (value === null || value === undefined) {
                if(field === "age"){
                    missing_fields.push("Alter");
                }else if(field === "birthdate"){
                    missing_fields.push("Geburtsdatum");
                }else if(field === "weight"){
                    missing_fields.push("Gewicht");
                }else if(field === "length"){
                    missing_fields.push("Körpergröße");
                }else if(field !== ""){
                    missing_fields.push(field);
                }
            }
        });
    }else{
        return "Zur Berechnung bitte Patientendaten angeben.";
    }

    console.log("Missing fields: ");
    console.log(missing_fields);

    if(missing_fields.length === 0){
        return options.fn(this);
    }else if(missing_fields.length === 1){
        return "Zur Berechnung bitte "+missing_fields[0]+" angeben.";
    }else if(missing_fields.length === 2){
        return "Zur Berechnung bitte "+missing_fields[0]+" und "+missing_fields[1]+" angeben.";
    }else{
        let last = missing_fields.pop();
        return "Zur Berechnung bitte "+missing_fields.join(", ")+" und "+last+" angeben.";
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

export function convert_to_unit(value: number, unit_from: string, unit_to: string){
    if(unit_from === "mmol/l" && unit_to === "mg/dl"){
        return Math.round(value*18)
    }else if(unit_from === "mg/dl" && unit_to === "mmol/l"){
        let res = value*0.0555;

        return  res.toLocaleString("de-DE", {
            maximumFractionDigits: 2,
        })
    }else{
        throw new Error("Unimplemented conversion!");
    }
}