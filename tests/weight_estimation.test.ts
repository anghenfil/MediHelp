import * as we from '../ts/weight_estimation';
import {ChildAge} from "../ts/patient_settings";

test('age_based_estimation_newborn', () => {
    expect(we.estimate_weight_by_age(ChildAge.NEWBORN)).toBe(4);
})
test('age_based_estimation_month2', () => {
    expect(we.estimate_weight_by_age(ChildAge.MONTHS2)).toBe(5);
})
test('age_based_estimation_month6', () => {
    expect(we.estimate_weight_by_age(ChildAge.MONTHS6)).toBe(7);
})
test('age_based_estimation_years1', () => {
    expect(we.estimate_weight_by_age(ChildAge.MONTHS12)).toBe(12);
})
test('age_based_estimation_years5', () => {
    expect(we.estimate_weight_by_age(ChildAge.YEARS5)).toBe(20);
})
test('age_based_estimation_years5', () => {
    expect(we.estimate_weight_by_age(ChildAge.YEARS5)).toBe(20);
})
test('age_based_estimation_years10', () => {
    expect(we.estimate_weight_by_age(ChildAge.YEARS10)).toBe(40);
})
test('age_based_estimation_years15', () => {
    expect(() => we.estimate_weight_by_age(ChildAge.YEARS15)).toThrow(we.TooOldForAgeEstimationError);
})
test('estimate_weight_pawper_xl_mac_valid', () => {
    expect(we.estimate_weight_pawper_xl_mac(50, 10)).toBe(3.8);
});

test('estimate_weight_pawper_xl_mac_height_too_short', () => {
    expect(() => we.estimate_weight_pawper_xl_mac(40, 10)).toThrow(we.HeightTooShortError);
});

test('estimate_weight_pawper_xl_mac_height_too_large', () => {
    expect(() => we.estimate_weight_pawper_xl_mac(201, 10)).toThrow(we.HeightTooLargeError);
});

test('estimate_weight_pawper_xl_mac_input_nan', () => {
    expect(() => we.estimate_weight_pawper_xl_mac(NaN, 10)).toThrow(we.InputNaNError);
});