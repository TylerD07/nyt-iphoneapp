// Here's your API Key: 7e0c2c26a28e4325a8eebc9b664a7fad

const buildUrl = function () {
    
    let baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    const searchTerm = $(".search").val();
    const parameters = {
        "api-key": "7e0c2c26a28e4325a8eebc9b664a7fad",
        "q": searchTerm
    };

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

const render = function() {
  $(".searchResults").empty();
  for( let i = 0; i < parameters.length; i++ ) {
    $(".searchResults").append(`<div><p>${parameters[i].q}</p><p>${parameters[i].fq}</p><p>${parameters[i].begin_date}</p><p>${parameters[i].end_date}</p>`);
  }
}

$(".view-page").on("click", render);

const displayNewsInfo = function () {

    $.ajax({
        url: buildUrl(),
        method: 'GET'
      }).then(function(response) {
        console.log(response);
        render();
    });

}

clearText = function () {
    $('.search').val('');
    $('.retrieve').val('');
    $('.startYear').val('');
    $('.startYear').val('');
}

$(".searchBtn").on("click", displayNewsInfo)
$(".clearBtn").on("click", clearText)



