app.factory('NewsFactory', newsFactory);

newsFactory.$inject = ['$http'];

function newsFactory($http) {

    function getIgnNews(type) {
      let ignTopNewsUrl = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json';
      // let ignTopNewsUrl = 'https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=9f6e888aa7df470bb7756eb741021703';
      let ignRecentNewsUrl = 'https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=9f6e888aa7df470bb7756eb741021703';

      let newsUrl = (type == 'top') ? ignTopNewsUrl : ignRecentNewsUrl;

      return $http.get(newsUrl);
    }

    return {
        getIgnNews : getIgnNews
    }

}
