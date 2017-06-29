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
.state('picturesIndex', {
    url: '/pictures',
    templateUrl: '/templates/picturesIndex.html',
    controller: 'PicturesIndexController as picturesIndex'
  })
.state('picturesNew', {
  url: '/pictures/new',
  templateUrl: '/templates/picturesNew.html',
  controller: 'PicturesNewController as picturesNew'
})
.state('picturesShow', {
  url: '/pictures/:id',
  templateUrl: '/templates/picturesShow.html',
  controller: 'PicturesShowController as picturesShow'
})
.state('picturesEdit', {
  url: '/pictures/:id/edit',
  templateUrl: '/templates/picturesEdit.html',
  controller: 'PicturesEditController as picturesEdit'
})
.state('about', {
  url: '/about',
  templateUrl: '/templates/about.html',
})
.state('yogaTherapy', {
  url: '/yogaTherapy',
  templateUrl: '/templates/yogaTherapy.html',
})
.state('yoga', {
  url: '/yoga',
  templateUrl: '/templates/yoga.html',
})
.state('fitness', {
  url: '/fitness',
  templateUrl: '/templates/fitness.html',
})
.state('psychotherapy', {
  url: '/psychotherapy',
  templateUrl: '/templates/psychotherapy.html',
})
.state('events', {
  url: '/events',
  templateUrl: '/templates/events.html',
  controller: 'MainController as main'
})
.state('shop', {
  url: '/shop',
  templateUrl: '/templates/shop.html',
  controller: 'MainController as main'
})
.state('contact', {
  url: '/contact',
  templateUrl: '/templates/contact.html',
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
  $urlRouterProvider.otherwise('/');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider .loginUrl = '/login';
  $authProvider.SignupUrl = '/register';


  $authProvider.tokenPrefix = '';

}
