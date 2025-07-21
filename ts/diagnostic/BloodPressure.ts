import {ChildAge, get_age_as_years_float_from_birthday, child_age_to_float_years} from "../patient_settings";
var quantile = require( '@stdlib/stats-base-dists-normal-quantile' );

interface RRPercentile{
    percentile: number;
    systolic: number;
    diastolic: number;
}

export function calculate_child_bp(sex: boolean, percentiles: number[], height_in_cm: number, age_or_birthday: string|ChildAge): RRPercentile[]{
    let res : RRPercentile[] = [];

    let age_in_years;

    if(typeof age_or_birthday === "string"){
        age_in_years = get_age_as_years_float_from_birthday(age_or_birthday);
    }else{
        console.log("age_or_birthday is a ChildAge:" +age_or_birthday);
        age_in_years = child_age_to_float_years(age_or_birthday);
    }

    console.log("Age in years: " + age_in_years);
    if(age_in_years < 3){
        throw new Error("Age must be at least 3 years!");
    }

    let bp_parameters_systolic: KiggsEntry;
    let bp_parameters_diastolic: KiggsEntry;

    if(!sex){
        let height_parameters_boys = find_best_kiggs_parameter(age_in_years, z_groesse_boys);
        let z_score_height_boys = calc_z_score(height_parameters_boys, height_in_cm);

        let median_systole_boys = 83.37-0.9057*age_in_years+0.05795*Math.pow((age_in_years-10), 2)+0.09447*height_in_cm+0.01101*height_in_cm*age_in_years+0.00006818*height_in_cm*Math.pow((age_in_years-10), 2);
        let median_diastole_boys = 54.22924+0.90280*age_in_years+0.02825*Math.pow((age_in_years-10), 2)+0.52654*z_score_height_boys;
        console.log("Median systole boys: " + median_systole_boys+" Median diastole boys: " + median_diastole_boys);
        bp_parameters_systolic = find_best_kiggs_parameter(age_in_years, rr_systolic_boys);
        bp_parameters_systolic.M = median_systole_boys;
        bp_parameters_diastolic = find_best_kiggs_parameter(age_in_years, rr_diastolic_boys);
        bp_parameters_diastolic.M = median_diastole_boys;
    }else{
        let height_parameters_girls = find_best_kiggs_parameter(age_in_years, z_groesse_girls);
        let z_score_height_girls = calc_z_score(height_parameters_girls, height_in_cm);

        let median_systole_girls = Math.exp((4.163+0.01409*age_in_years+0.003363*Math.pow((age_in_years-10), 2)+0.003189*height_in_cm-0.00007603*height_in_cm*age_in_years-0.00001816*height_in_cm*Math.pow((age_in_years-10), 2)));
        let median_diastole_girls = 55.67887+0.78751*age_in_years+0.01964*Math.pow((age_in_years-10), 2)+0.50944*z_score_height_girls;

        bp_parameters_systolic = rr_systolic_girls;
        bp_parameters_systolic.M = median_systole_girls;
        bp_parameters_diastolic = find_best_kiggs_parameter(age_in_years, rr_diastolic_girls);
        bp_parameters_diastolic.M = median_diastole_girls;
    }

    for(let percentile of percentiles){
        if(percentile > 1 || percentile < 0){
            throw new Error("Percentile must be between 0 and 1!");
        }
        res.push({
            percentile: percentile*100,
            systolic: Math.round(calc_percentile(percentile, bp_parameters_systolic)),
            diastolic: Math.round(calc_percentile(percentile, bp_parameters_diastolic)),
        })
    }

    return res
}

/**
 * Calculates a custom percentile, based on the given Kiggs Parameter
 * @param percentile e.g. 0.97 for Percentile 97
 * @param parameter
 */
function calc_percentile(percentile: number, parameter: KiggsEntry){
    let alpha_quantile = quantile(percentile, 0, 1);
    if(parameter.L === 0){
        return parameter.M*Math.exp(parameter.S*alpha_quantile);
    }else{
        return parameter.M*Math.pow((1+parameter.L*parameter.S*alpha_quantile), (1/parameter.L));
    }
}

function calc_z_score(parameter: KiggsEntry, value: number): number{
    if(parameter.M == null){
        throw new Error("M must not be null to calculate a z_score!");
    }
    if(parameter.L === 0){
        return (1/parameter.S)*Math.log1p((value/parameter.M));
    }else{
        return (Math.pow((value/parameter.M), parameter.L) -1)/(parameter.S*parameter.L);
    }
}

function find_best_kiggs_parameter(age_in_years: number, z_data: KiggsEntry[]): KiggsEntry{
    let last_age_diff: number|null = null;
    let best_entry: KiggsEntry | null = null;

    for(let value of z_data){
        let current_age_diff = Math.abs(value.Alter - age_in_years);
        if(last_age_diff === null || current_age_diff <= last_age_diff){
            last_age_diff = current_age_diff;
            best_entry = value;
        }else{
            if(current_age_diff > last_age_diff){ // diff increases again -> we found the best one
                break;
            }
        }
    }
    return best_entry;
}

interface KiggsEntry{
    Alter?: number;
    M?: number;
    L: number;
    S: number;
}

let rr_systolic_boys : KiggsEntry[] = [
    {
        Alter: 3.5,
        L: -0.4680,
        S: 0.0767,
    },
    {
        Alter: 4.5,
        L: -0.4680,
        S: 0.0735,
    },
    {
        Alter: 5.5,
        L: -0.4680,
        S: 0.0740,
    },
    {
        Alter: 6.5,
        L: -0.4680,
        S: 0.0730,
    },
    {
        Alter: 7.5,
        L: -0.4680,
        S: 0.0724,
    },
    {
        Alter: 8.5,
        L: -0.4680,
        S: 0.0723,
    },
    {
        Alter: 9.5,
        L: -0.4680,
        S: 0.0727,
    },
    {
        Alter: 10.5,
        L: -0.4680,
        S: 0.0734,
    },
    {
        Alter: 11.5,
        L: -0.4680,
        S: 0.0746,
    },
    {
        Alter: 12.5,
        L: -0.4680,
        S: 0.0762,
    },
    {
        Alter: 13.5,
        L: -0.4680,
        S: 0.0780,
    },
    {
        Alter: 14.5,
        L: -0.4680,
        S: 0.0799,
    },
    {
        Alter: 15.5,
        L: -0.4680,
        S: 0.0819,
    },
    {
        Alter: 16.5,
        L: -0.4680,
        S: 0.0839,
    },
    {
        Alter: 17.5,
        L: -0.4680,
        S: 0.0860,
    },
]

let rr_systolic_girls: KiggsEntry =  {
        L: 0,
        S: 0.0763
};

let rr_diastolic_boys: KiggsEntry[] = [
    {
        Alter: 3.5,
        L: 1,
        S: 0.1171
    },
    {
        Alter: 4.5,
        L: 1,
        S: 0.1139
    },
    {
        Alter: 5.5,
        L: 1,
        S: 0.1110,
    },
    {
        Alter: 6.5,
        L: 1,
        S: 0.1085
    },
    {
        Alter: 7.5,
        L: 1,
        S: 0.1067
    },
    {
        Alter: 8.5,
        L: 1,
        S: 0.1054
    },
    {
        Alter: 9.5,
        L: 1,
        S: 0.1046
    },
    {
        Alter: 10.5,
        L: 1,
        S: 0.1045
    },
    {
        Alter: 11.5,
        L: 1,
        S: 0.1048
    },
    {
        Alter: 12.5,
        L: 1,
        S: 0.1053
    },
    {
        Alter: 13.5,
        L: 1,
        S: 0.1060
    },
    {
        Alter: 14.5,
        L: 1,
        S: 0.1065
    },
    {
        Alter: 15.5,
        L: 1,
        S: 0.1069
    },
    {
        Alter: 16.5,
        L: 1,
        S: 0.1072
    },
    {
        Alter: 17.5,
        L: 1,
        S: 0.1074
    },
]

let rr_diastolic_girls: KiggsEntry[] =  [
    {
        Alter: 3.5,
        L: 1,
        S: 0.1173
    },
    {
        Alter: 4.5,
        L: 1,
        S: 0.1137
    },
    {
        Alter: 5.5,
        L: 1,
        S: 0.1106
    },
    {
        Alter: 6.5,
        L: 1,
        S: 0.1079
    },
    {
        Alter: 7.5,
        L: 1,
        S: 0.1056
    },
    {
        Alter: 8.5,
        L: 1,
        S: 0.1037
    },
    {
        Alter: 9.5,
        L: 1,
        S: 0.1022
    },
    {
        Alter: 10.5,
        L: 1,
        S: 0.1011
    },
    {
        Alter: 11.5,
        L: 1,
        S: 0.1003
    },
    {
        Alter: 12.5,
        L: 1,
        S: 0.0998
    },
    {
        Alter: 13.5,
        L: 1,
        S: 0.0997
    },
    {
        Alter: 14.5,
        L: 1,
        S: 0.0999
    },
    {
        Alter: 15.5,
        L: 1,
        S: 0.1005
    },
    {
        Alter: 16.5,
        L: 1,
        S: 0.1013
    },
    {
        Alter: 17.5,
        L: 1,
        S: 0.1026
    },
];

/// Data from KiGGS Study:
let z_groesse_boys = [
    {
        "Alter": 0.33,
        "M": 64.04,
        "L": 0.1285,
        "S": 0.039
    },
    {
        "Alter": 0.42,
        "M": 66.37,
        "L": 0.1119,
        "S": 0.0375
    },
    {
        "Alter": 0.5,
        "M": 68.37,
        "L": 0.0959,
        "S": 0.0363
    },
    {
        "Alter": 0.58,
        "M": 70.1,
        "L": 0.0806,
        "S": 0.0354
    },
    {
        "Alter": 0.67,
        "M": 71.63,
        "L": 0.0661,
        "S": 0.0347
    },
    {
        "Alter": 0.75,
        "M": 73.01,
        "L": 0.0524,
        "S": 0.0341
    },
    {
        "Alter": 0.83,
        "M": 74.28,
        "L": 0.0395,
        "S": 0.0337
    },
    {
        "Alter": 0.92,
        "M": 75.48,
        "L": 0.0276,
        "S": 0.0335
    },
    {
        "Alter": 1,
        "M": 76.63,
        "L": 0.0167,
        "S": 0.0334
    },
    {
        "Alter": 1.25,
        "M": 79.88,
        "L": -0.0111,
        "S": 0.0337
    },
    {
        "Alter": 1.5,
        "M": 82.88,
        "L": -0.032,
        "S": 0.0342
    },
    {
        "Alter": 1.75,
        "M": 85.66,
        "L": -0.0472,
        "S": 0.0348
    },
    {
        "Alter": 2,
        "M": 88.21,
        "L": -0.058,
        "S": 0.0352
    },
    {
        "Alter": 2.5,
        "M": 92.88,
        "L": -0.0698,
        "S": 0.0362
    },
    {
        "Alter": 3,
        "M": 97.14,
        "L": -0.0713,
        "S": 0.0375
    },
    {
        "Alter": 3.5,
        "M": 101,
        "L": -0.0646,
        "S": 0.0385
    },
    {
        "Alter": 4,
        "M": 104.56,
        "L": -0.0512,
        "S": 0.0393
    },
    {
        "Alter": 4.5,
        "M": 107.94,
        "L": -0.032,
        "S": 0.04
    },
    {
        "Alter": 5,
        "M": 111.23,
        "L": -0.0075,
        "S": 0.0407
    },
    {
        "Alter": 5.5,
        "M": 114.51,
        "L": 0.0219,
        "S": 0.0412
    },
    {
        "Alter": 6,
        "M": 117.78,
        "L": 0.0562,
        "S": 0.0416
    },
    {
        "Alter": 6.5,
        "M": 121.13,
        "L": 0.096,
        "S": 0.0417
    },
    {
        "Alter": 7,
        "M": 124.51,
        "L": 0.1413,
        "S": 0.0419
    },
    {
        "Alter": 7.5,
        "M": 127.77,
        "L": 0.1915,
        "S": 0.042
    },
    {
        "Alter": 8,
        "M": 130.79,
        "L": 0.2448,
        "S": 0.0424
    },
    {
        "Alter": 8.5,
        "M": 133.62,
        "L": 0.3008,
        "S": 0.0428
    },
    {
        "Alter": 9,
        "M": 136.35,
        "L": 0.3598,
        "S": 0.0434
    },
    {
        "Alter": 9.5,
        "M": 138.98,
        "L": 0.4219,
        "S": 0.0442
    },
    {
        "Alter": 10,
        "M": 141.55,
        "L": 0.4881,
        "S": 0.0452
    },
    {
        "Alter": 10.5,
        "M": 144.09,
        "L": 0.559,
        "S": 0.0464
    },
    {
        "Alter": 11,
        "M": 146.68,
        "L": 0.6371,
        "S": 0.0478
    },
    {
        "Alter": 11.5,
        "M": 149.35,
        "L": 0.7246,
        "S": 0.0492
    },
    {
        "Alter": 12,
        "M": 152.22,
        "L": 0.8249,
        "S": 0.0505
    },
    {
        "Alter": 12.5,
        "M": 155.43,
        "L": 0.9434,
        "S": 0.0517
    },
    {
        "Alter": 13,
        "M": 159.13,
        "L": 1.083,
        "S": 0.0523
    },
    {
        "Alter": 13.5,
        "M": 163.1,
        "L": 1.2386,
        "S": 0.052
    },
    {
        "Alter": 14,
        "M": 166.93,
        "L": 1.3973,
        "S": 0.0505
    },
    {
        "Alter": 14.5,
        "M": 170.35,
        "L": 1.5454,
        "S": 0.0481
    },
    {
        "Alter": 15,
        "M": 173.12,
        "L": 1.6711,
        "S": 0.0452
    },
    {
        "Alter": 15.5,
        "M": 175.2,
        "L": 1.7691,
        "S": 0.0426
    },
    {
        "Alter": 16,
        "M": 176.66,
        "L": 1.8391,
        "S": 0.0405
    },
    {
        "Alter": 16.5,
        "M": 177.62,
        "L": 1.8857,
        "S": 0.0391
    },
    {
        "Alter": 17,
        "M": 178.24,
        "L": 1.9158,
        "S": 0.0382
    },
    {
        "Alter": 17.5,
        "M": 178.68,
        "L": 1.9374,
        "S": 0.0376
    },
    {
        "Alter": 18,
        "M": 179.04,
        "L": 1.9551,
        "S": 0.0371
    }
]

let z_groesse_girls = [
    {
        "Alter": 0.3333,
        "M": 62.3,
        "L": 1,
        "S": 0.0404
    },
    {
        "Alter": 0.4167,
        "M": 64.54,
        "L": 1,
        "S": 0.0391
    },
    {
        "Alter": 0.5,
        "M": 66.48,
        "L": 1,
        "S": 0.0379
    },
    {
        "Alter": 0.5833,
        "M": 68.19,
        "L": 1,
        "S": 0.0369
    },
    {
        "Alter": 0.6667,
        "M": 69.73,
        "L": 1,
        "S": 0.0361
    },
    {
        "Alter": 0.75,
        "M": 71.16,
        "L": 1,
        "S": 0.0355
    },
    {
        "Alter": 0.8333,
        "M": 72.53,
        "L": 1,
        "S": 0.035
    },
    {
        "Alter": 0.9167,
        "M": 73.84,
        "L": 1,
        "S": 0.0347
    },
    {
        "Alter": 1,
        "M": 75.09,
        "L": 1,
        "S": 0.0344
    },
    {
        "Alter": 1.25,
        "M": 78.54,
        "L": 1,
        "S": 0.0342
    },
    {
        "Alter": 1.5,
        "M": 81.59,
        "L": 1,
        "S": 0.0346
    },
    {
        "Alter": 1.75,
        "M": 84.28,
        "L": 1,
        "S": 0.0351
    },
    {
        "Alter": 2,
        "M": 86.73,
        "L": 1,
        "S": 0.0356
    },
    {
        "Alter": 2.5,
        "M": 91.34,
        "L": 1,
        "S": 0.0364
    },
    {
        "Alter": 3,
        "M": 95.75,
        "L": 1,
        "S": 0.0372
    },
    {
        "Alter": 3.5,
        "M": 99.79,
        "L": 1,
        "S": 0.0379
    },
    {
        "Alter": 4,
        "M": 103.51,
        "L": 1,
        "S": 0.0385
    },
    {
        "Alter": 4.5,
        "M": 107.15,
        "L": 1,
        "S": 0.0393
    },
    {
        "Alter": 5,
        "M": 110.82,
        "L": 1,
        "S": 0.0399
    },
    {
        "Alter": 5.5,
        "M": 114.31,
        "L": 1,
        "S": 0.0404
    },
    {
        "Alter": 6,
        "M": 117.59,
        "L": 1,
        "S": 0.0409
    },
    {
        "Alter": 6.5,
        "M": 120.69,
        "L": 1,
        "S": 0.0414
    },
    {
        "Alter": 7,
        "M": 123.65,
        "L": 1,
        "S": 0.042
    },
    {
        "Alter": 7.5,
        "M": 126.56,
        "L": 1,
        "S": 0.0427
    },
    {
        "Alter": 8,
        "M": 129.49,
        "L": 1,
        "S": 0.0434
    },
    {
        "Alter": 8.5,
        "M": 132.4,
        "L": 1,
        "S": 0.0442
    },
    {
        "Alter": 9,
        "M": 135.28,
        "L": 1,
        "S": 0.045
    },
    {
        "Alter": 9.5,
        "M": 138.18,
        "L": 1,
        "S": 0.0457
    },
    {
        "Alter": 10,
        "M": 141.18,
        "L": 1,
        "S": 0.0462
    },
    {
        "Alter": 10.5,
        "M": 144.33,
        "L": 1,
        "S": 0.0463
    },
    {
        "Alter": 11,
        "M": 147.65,
        "L": 1,
        "S": 0.0461
    },
    {
        "Alter": 11.5,
        "M": 151.04,
        "L": 1,
        "S": 0.0454
    },
    {
        "Alter": 12,
        "M": 154.31,
        "L": 1,
        "S": 0.0443
    },
    {
        "Alter": 12.5,
        "M": 157.22,
        "L": 1,
        "S": 0.043
    },
    {
        "Alter": 13,
        "M": 159.53,
        "L": 1,
        "S": 0.0418
    },
    {
        "Alter": 13.5,
        "M": 161.33,
        "L": 1,
        "S": 0.0409
    },
    {
        "Alter": 14,
        "M": 162.74,
        "L": 1,
        "S": 0.0401
    },
    {
        "Alter": 14.5,
        "M": 163.81,
        "L": 1,
        "S": 0.0395
    },
    {
        "Alter": 15,
        "M": 164.58,
        "L": 1,
        "S": 0.0391
    },
    {
        "Alter": 15.5,
        "M": 165.09,
        "L": 1,
        "S": 0.0389
    },
    {
        "Alter": 16,
        "M": 165.39,
        "L": 1,
        "S": 0.0387
    },
    {
        "Alter": 16.5,
        "M": 165.5,
        "L": 1,
        "S": 0.0387
    },
    {
        "Alter": 17,
        "M": 165.54,
        "L": 1,
        "S": 0.0386
    },
    {
        "Alter": 17.5,
        "M": 165.65,
        "L": 1,
        "S": 0.0386
    },
    {
        "Alter": 18,
        "M": 165.77,
        "L": 1,
        "S": 0.0385
    }
]