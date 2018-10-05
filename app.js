// Here's your API Key: 7e0c2c26a28e4325a8eebc9b664a7fad

let numResults;

const buildUrl = function() {

    let baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    const searchTerm = $(".search").val();
    const parameters = {
        "api-key": "7e0c2c26a28e4325a8eebc9b664a7fad",
        "q": searchTerm
    };

	numResults = $("select").val();

    const startYear = $(".startYear").val();
    if (startYear) {
        parameters.begin_date = startYear + "0101";
    }

    const endYear = $(".endYear").val();
    if (endYear) {
        parameters.end_date = endYear + "0101";
    }

    baseUrl += '?' + $.param(parameters);

    return baseUrl;

};

const render = function(data) {
	const results = data.response.docs;
    $(".searchResults").empty();
    for (let i = 0; i < numResults; i++) {
        $(".searchResults").append(`<div class="article">${results[i].headline.main}</div>`);
    }
}

$(".view-page").on("click", render);

const displayNewsInfo = function() {

    $.ajax({
        url: buildUrl(),
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        render(response);
    });

}

clearText = function() {
    $('.search').val('');
    $('.retrieve').val('');
    $('.startYear').val('');
    $('.startYear').val('');
}

$(".searchBtn").on("click", displayNewsInfo)
$(".clearBtn").on("click", clearText)
