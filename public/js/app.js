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
.state('retreatsIndex', {
  url: '/retreats',
  templateUrl: '/templates/retreatsIndex.html',
  controller: 'RetreatsIndexController as retreatsIndex'
})
.state('retreatsNew', {
  url: '/retreats/new',
  templateUrl: '/templates/retreatsNew.html',
  controller: 'RetreatsNewController as retreatsNew'
})
.state('retreatsShow', {
  url: '/retreats/:id',
  templateUrl: '/templates/retreatsShow.html',
  controller: 'RetreatsShowController as retreatsShow'
})
.state('retreatsEdit', {
  url: '/retreats/:id/edit',
  templateUrl: '/templates/retreatsEdit.html',
  controller: 'RetreatsEditController as retreatsEdit'
})
.state('about', {
  url: '/about',
  templateUrl: '/templates/about.html',
  controller: 'BlogsIndexController as blogsIndex'
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
.state('shop', {
  url: '/shop',
  templateUrl: '/templates/shop.html',
  controller: 'MainController as main'
})
// .state('contact', {
//   url: '/contact',
//   templateUrl: '/templates/contact.html',
// })
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
  $urlRouterProvider.otherwise('/about');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider .loginUrl = '/login';
  $authProvider.SignupUrl = '/register';


  $authProvider.tokenPrefix = '';

}
