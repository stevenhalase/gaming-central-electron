'use strict'
app.controller('dashboardCtrl', dashboardController);

dashboardController.$inject = ['$scope', '$sce', '$http', 'TwitchFactory', 'NewsFactory'];

function dashboardController($scope, $sce, $http, TwitchFactory, NewsFactory) {

  $scope.dashboardGames = [];
  $scope.dashboardActiveGame = {};
  $scope.showingGames = [];
  $scope.ignNewsArticles = [];
  $scope.dashboardActiveArticle = {};

  NewsFactory.getIgnNews('top').then(response => {
    console.log('IGN Top News: ', response.data);
    $scope.ignNewsArticles = response.data.articles;
    // console.log($scope.ignNewsArticles)
    // removeNoImgArticles($scope.ignNewsArticles)
  });

  TwitchFactory.getTopGames().then(response => {
    console.log('Twitch Top Games Response: ', response.data.top);
    $scope.dashboardGames = response.data.top;
    $scope.dashboardActiveGame = $scope.dashboardGames[0];
  });

  $scope.changeActiveGame = function(game) {
    $scope.dashboardActiveGame = game;
  }

  $scope.changeActiveArticle = function(article,index) {
    $scope.dashboardActiveArticle = article;
  }

  function removeNoImgArticles(articles) {
    // console.log('removing')
    let stillRemoving = false;
    for (let i = 0; i < articles.length; i++) {
      // console.log(articles[i].urlToImage)
      if (articles[i].urlToImage == null || articles[i].urlToImage.includes('contentplaceholder')) {
        // console.log(articles[i].urlToImage)
        articles.splice(articles.indexOf(articles[i]), 1);
        stillRemoving = true;
        removeNoImgArticles(articles)
      }
    }
    if(stillRemoving === false) {
      $('.dashboard-news').width((400 * articles.length) + 40);
    }

  }

}
