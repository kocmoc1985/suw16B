
function execute(query, nodePar) {
    var jsonStr =  $.ajax({
        async: false, //is true by default
        type: "POST",
        url: "http://localhost:3000/" + nodePar,
        data: {query: query}
    }).responseText;
    //
    return JSON.parse(jsonStr);
}