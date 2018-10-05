// Here's your API Key: 7e0c2c26a28e4325a8eebc9b664a7fad

const displayNewsInfo = function () {
}

const getArticles = function () {
    const searchTerm = $(".search").val();
    let baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const parameters = {
        "api-key": "7e0c2c26a28e4325a8eebc9b664a7fad",
        "q": "searchTerm",
        "fq": "retrieve",
        "begin_date": "startYear",
        "end_date": "endYear"

    };

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