import 'cypress-mochawesome-reporter/register';

before(() => {
    window.localStorage.setItem("cookieConsent", "false")
})