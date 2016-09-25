'use strict'
const app = angular.module('gamingCentralApp', ['ui.router', 'ngSanitize']);

app.config(gamingCentralRouter);

gamingCentralRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function gamingCentralRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: './login/login.html',
      controller: 'loginCtrl as lCtrl'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: './dashboard/dashboard.html',
      controller: 'dashboardCtrl as dCtrl'
    })

    $urlRouterProvider.otherwise('/');
}

app.controller('indexCtrl', indexController);

indexController.$inject = ['$scope', '$state'];

function indexController($scope, $state) {
  $scope.navIsOpen = false;

  $scope.login = function() {
    $state.go('dashboard');
  };

  $scope.navListTop = [{
    name: 'Dashboard',
    icon: 'view_quilt'
  },{
    name: 'News',
    icon: 'view_headline'
  },{
    name: 'Streams',
    icon: 'view_array'
  }];

  $scope.navListBottom = [{
    name: 'Messaging',
    icon: 'forum'
  },{
    name: 'Settings',
    icon: 'more_horiz'
  }]

  $scope.openNav = function() {
    $scope.navIsOpen = true;
  }

  $scope.closeNav = function() {
    $scope.navIsOpen = false;
  }

}
