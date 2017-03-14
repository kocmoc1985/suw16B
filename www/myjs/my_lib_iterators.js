
/**
 * ITERATE ATTRIBUTES OF AN OBJECT
 * @returns {undefined}
 */
function iterateA(obj) {
    $.each(obj, function (name, value) {

    });
}

/**
 * ITERATE OBJECTS OF AN ARRAY
 * @param {type} data
 * @returns {undefined}
 */
function iterateB(array) {
    $(array).each(function (index, value) {

    });

//==============================================================================

    var obj = {a: 1, b: 2, c: 3};

    for (var prop in obj) {
        console.log('obj.' + prop, '=', obj[prop]);
    }

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

//==============================================================================


}