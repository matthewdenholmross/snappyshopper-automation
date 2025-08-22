import login from '../selectors/login.js'

describe('Login page', () =>{
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Can log in successfully', () =>{
        cy.get(login.emailField).type(Cypress.env('email'))
        cy.get(login.passwordField).type(Cypress.env('password'))
        cy.get(login.loginButton).click()

        cy.url().should('eq',Cypress.config('baseUrl') + '/member')
    })

    it('Can reveal the password field', () =>{
        cy.get(login.passwordField).should('have.attr','type','password')
        
        cy.get(login.showPasswordButton).click()

        cy.get(login.passwordField).should('have.attr','type','text')
    })

    it('Can see error banner on failed login', () => {
        cy.get(login.emailField).type(Cypress.env('email'))
        cy.get(login.passwordField).type("incorrect password")
        cy.get(login.loginButton).click()

        cy.get(login.toastBanner).should('be.visible')
    })
})