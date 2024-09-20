/// <reference types= "cypress" />

describe("Validate the dropdown list", () => {
    it('Should be click on dropdown and select any location', () => {
        cy.visit('https://d28dp6fycxce58.cloudfront.net/');   ///visit page
        cy.get('.container').should('include.text', "Favorite Characters");  ///Assertion
        cy.get('.forms_defaultInput__3F6Ma').eq(1).select('Anatomy Park')  ///select from dropdown
            .should('have.value', "Anatomy Park")  ///Assertion

    })

    it('Should be click on dropdown and select Immortality Field Resort location', () => {
        cy.visit('https://d28dp6fycxce58.cloudfront.net/');   ///visit page
        cy.get('.container').should('include.text', "Favorite Characters");  ///Assertion
        cy.get('.forms_defaultInput__3F6Ma').eq(1).select(6)  ///select from dropdown
            .should('have.value', "Immortality Field Resort")  ///Assertion

    })


})
