angular.module('ceropedos.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller:'SlideCtrl'
  })

  .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html'
  })
  
  .state('general', {
    url: '/general',
    templateUrl: 'templates/general.html',
    controller:'SidemenuCtrl'
  })
  
  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
  })
  
  .state('configuration', {
    url: '/configuration',
    templateUrl: 'templates/configuration.html',
  })
  
  .state('tips', {
    url: '/tips',
    templateUrl: 'templates/tips.html',
  })
  
  .state('underwrite', {
    url: '/underwrite',
    templateUrl: 'templates/underwrite.html',
  });

$urlRouterProvider.otherwise('/home')

  

});