angular.module('fitnessApp', ['ngResource', 'ui.router', 'satellizer'])
.config(Router)
.config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('blogsIndex', {
    url: '/blogs',
    templateUrl: '/templates/blogsIndex.html',
    controller: 'BlogsIndexController as blogsIndex'
  })
.state('blogsNew', {
  url: '/blogs/new',
  templateUrl: '/templates/blogsNew.html',
  controller: 'BlogsNewController as blogsNew'
})
.state('blogsShow', {
  url: '/blogs/:id',
  templateUrl: '/templates/blogsShow.html',
  controller: 'BlogsShowController as blogsShow'
})
.state('landing', {
  url: '/',
  templateUrl: '/templates/landing.html'
})
.state('blogsEdit', {
  url: '/blogs/:id/edit',
  templateUrl: '/templates/blogsEdit.html',
  controller: 'BlogsEditController as blogsEdit'
})
.state('login', {
  url: '/login',
  templateUrl: '/templates/login.html',
  controller: 'LoginController as login'
})
.state('register', {
  url: '/register',
  templateUrl: '/templates/register.html',
  controller: 'RegisterController as register'
});
  $urlRouterProvider.otherwise('/blogs');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider .loginUrl = '/login';
  $authProvider.SignupUrl = '/register';


  $authProvider.tokenPrefix = '';

}
