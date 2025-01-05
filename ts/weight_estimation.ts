import {child_age_to_months, ChildAge} from "./patient_settings";

export class InputNaNError extends Error{
    constructor(){
        super("Höhe und Armumfang müssen Zahlen sein!");
        this.name = "InputNaN";
    }
}
export class HeightTooShortError extends Error{
    constructor(){
        super("Die angegebene Körperhöhe ist zu kurz für die Schätzung mit PAWPER XL-MAC!");
        this.name = "HeightTooShort";
    }
}
export class HeightTooLargeError extends Error{
    constructor(){
        super("Die angegebene Körperhöhe ist zu groß für die Schätzung mit PAWPER XL-MAC!");
        this.name = "HeightTooLarge";
    }
}

export class TooOldForAgeEstimationError extends Error{
    constructor(){
        super("Die Altersschätzungsmethode ist nur für Kinder bis 14 Jahre geeignet!");
        this.name = "TooOldForAgeEstimation";
    }
}

export function estimate_weight_pawper_xl_mac (height: number, mac: number) : number{
    if (isNaN(height) || isNaN(mac)) {
        throw new InputNaNError();
    }
    if (height < 43) {
        throw new HeightTooShortError();
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
            return 84;
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
        throw new HeightTooLargeError();
    }
}

function child_age_to_years(age: ChildAge): number {
    return Math.round(child_age_to_months(age) / 12);
}

export function estimate_weight_by_age(age: ChildAge): number{
    if(age < ChildAge.MONTHS12){
        return estimate_weight_apls(child_age_to_months(age));
    }else{
        return estimate_weight_best_guess(child_age_to_years(age));
    }
}

function estimate_weight_apls(age_in_months: number): number {
    return (0.5 * age_in_months) + 4;
}

function estimate_weight_best_guess (age_in_years: number): number {
    if (age_in_years < 5) {
        return 2 * (age_in_years + 5)
    } else if (age_in_years > 14) {
        throw new TooOldForAgeEstimationError();
    } else {
        return 4 * age_in_years;
    }
}