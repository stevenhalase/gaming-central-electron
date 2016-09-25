'use strict'
app.controller('loginCtrl', loginController);

loginController.$inject = ['$state'];

function loginController($state) {
  const lCtrl = this;
  lCtrl.title = 'login';


}
