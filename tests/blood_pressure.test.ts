import * as bp from '../ts/diagnostic/BloodPressure';

test('test_calculate_exact_age', () => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 17);
    date.setMonth(date.getMonth() - 6);

    console.log(date.toString());

    //bp.calculate_child_bp(183, date.toString())
})

//TODO: add tets