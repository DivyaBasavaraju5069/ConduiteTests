module.exports = {
   
    SignupLink: "[show-authed='false'] > :nth-child(3) > .nav-link",
    Username: "[ng-show='$ctrl.authType === 'register''] > .form-control",
    Email: ":nth-child(2) > .form-control",
    Password: ":nth-child(3) > .form-control",
    SignupBtn: ".btn"


}