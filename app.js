// Here's your API Key: 7e0c2c26a28e4325a8eebc9b664a7fad

const getArticles = function () {
    
    let baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const parameters = {
        "api-key": "7e0c2c26a28e4325a8eebc9b664a7fad",
        "q": "searchTerm",
        "fq": "retrieve",
        "begin_date": "startYear",
        "end_date": "endYear"

    };

    const searchTerm = $(".search").val();

    const retrieve = $(".retrieve").val();
    if (retrieve) {
      parameters.fq = retrieve;
    }

    const startYear = $(".startYear").val();
    if (endDate) {
      parameters.begin_date = startYear;
    }

    const endYear = $(".endYear").val();
    if (endYear) {
      parameters.end_date = endYear;
    }
    
    url += '?' + $.param(parameters);

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
        url: queryURL,
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

$("searchBtn").on("click", displayNewsInfo)
$("clearBtn").on("click", clearText)



