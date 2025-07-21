import * as ps from '../ts/patient_settings';
import {calculateExactAge} from "../ts/patient_settings";

test('test_calculate_exact_age', () => {
    console.log(calculateExactAge("1999-09-11"));
})

test('test_age_from_date_newborn', () => {
    let now = Date.now();
    let date_to_test = new Date(now);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.NEWBORN)
})

test('test_age_from_date_2_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setMonth(now.getMonth() - 2);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS2)
})
test('test_age_from_date_2_months_14_days', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setMonth(now.getMonth() - 2);
    date_to_test.setDate(now.getDate() - 14);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS2)
})
test('test_age_from_date_2_months_16_days', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setMonth(now.getMonth() - 2);
    date_to_test.setDate(now.getDate() - 16);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS3)
})
test('test_age_from_date_24_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setMonth(date_to_test.getMonth() - 23);
    date_to_test.setDate(date_to_test.getDate() - 16);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS24)
})
test('test_age_from_date_24_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear() - 2);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS24)
})

test('test_age_from_date_23_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setMonth(now.getMonth() - 23);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS23)
})

test('test_age_from_date_2_years', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear()-2);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS24)
})

test('test_age_from_date_2_years_plus_5_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear()-2);
    date_to_test.setMonth(now.getMonth() - 5);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.MONTHS24)
})

test('test_age_from_date_2_years_plus_6_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear()-2);
    date_to_test.setMonth(now.getMonth() - 6);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.YEARS3)
})

test('test_age_from_date_3_years', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear()-3);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.YEARS3)
})

test('test_age_from_date_3_years_plus_5_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear()-3);
    date_to_test.setMonth(now.getMonth() - 5);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.YEARS3)
})
test('test_age_from_date_14_years_plus_11_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear()-14);
    date_to_test.setMonth(now.getMonth() - 11);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.YEARS15)
})
test('test_age_from_date_14_years_plus_5_months', () => {
    let now = new Date();
    let date_to_test = new Date(now);
    date_to_test.setFullYear(now.getFullYear()-14);
    date_to_test.setMonth(now.getMonth() - 5);
    expect(ps.convert_birthdate_to_childage(date_to_test.toString())).toBe(ps.ChildAge.YEARS14)
})

test('test_floating_years_1.5', () => {
    let test = new Date();
    // Set to 1 years + 6 months -> expect 1.5 years
    test.setFullYear(test.getFullYear() - 1);
    test.setMonth(test.getMonth() - 6);
    expect(ps.get_age_as_years_float_from_birthday(test.toString())).toBe(1.5)
})

test('test_floating_years_1.75', () => {
    let test = new Date();
    // Set to 1 years + 9 months -> expect 1.75 years
    test.setFullYear(test.getFullYear() - 1);
    test.setMonth(test.getMonth() - 9);
    expect(ps.get_age_as_years_float_from_birthday(test.toString())).toBe(1.75)
})

test('test_floating_years_2.0', () => {
    let test = new Date();
    test.setFullYear(test.getFullYear() - 2);
    expect(ps.get_age_as_years_float_from_birthday(test.toString())).toBe(2)
})

test('test_floating_years_newborn', () => {
    let test = new Date();
    expect(ps.get_age_as_years_float_from_birthday(test.toString())).toBe(0)
})

test('test_floating_years_0.5', () => {
    let test = new Date();
    test.setMonth(test.getMonth() - 6);
    expect(ps.get_age_as_years_float_from_birthday(test.toString())).toBe(0.5)
})