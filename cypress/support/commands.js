// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'
import 'cypress-iframe'

Cypress.Commands.add('signin',()=>{
        cy.visit('')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')

        //list item with a text case insensitive
        cy.get('li').contains('sign in',{matchCase: false}).click()
        
        cy.get('button[type=submit]').should('be.visible')
        cy.get('input[type=email]').type('aferandez1@tiny.cc')
        cy.get('input[type=password]').type('bbUV2ZaK6oaK{enter}')

        cy.contains('your feed',{matchCase: false,timeout: 7000}).should('be.visible')
})
