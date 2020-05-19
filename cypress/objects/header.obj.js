module.exports = {
   
    loggedInUSerName: ":nth-child(4) > .nav-link",
    //settingsLink: "li.nav-item:nth-child(3) > a.nav-link.active",
    settingsLink: "[show-authed='true'] > :nth-child(3) > .nav-link",
    PageTitle: ".navbar-brand",
    LinkforNeedAnAccount: "div.col-md-6.offset-md-3.col-xs-12 p.text-xs-center:nth-child(2) > a:nth-child(2)",
    logOutBtn: "div.settings-page.ng-scope div.container.page div.row div.col-md-6.offset-md-3.col-xs-12 > button.btn.btn-outline-danger:nth-child(5)",
    SignInBtn: "div.container ul.nav.navbar-nav.pull-xs-right:nth-child(2) li.nav-item:nth-child(2) > a.nav-link",
    SignOutBtn: "div.container ul.nav.navbar-nav.pull-xs-right:nth-child(2) li.nav-item:nth-child(3) > a.nav-link",
    Homelink: "ul.nav.navbar-nav.pull-xs-right:nth-child(3) li.nav-item:nth-child(1) > a.nav-link",
    HomeLinkSigninPage: "[show-authed='false'] > :nth-child(1) > .nav-link",
    NewArticleLink: "div.container ul.nav.navbar-nav.pull-xs-right:nth-child(3) li.nav-item:nth-child(2) > a.nav-link",
    YourFeed: "[show-authed='true'] > .nav-link",
    GlobalFeed: ".feed-toggle > .nav > :nth-child(2) > .nav-link"


}

