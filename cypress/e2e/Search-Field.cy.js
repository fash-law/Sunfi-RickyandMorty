/// <reference types= "cypress" />

describe("Validate the search field", () => {
    it('Should be able to input firstname on search field', () => {
        cy.visit('https://d28dp6fycxce58.cloudfront.net/');   ///visit page
        cy.get('.container').should('include.text', "Favorite Characters");  ///Assertion
        cy.get('.forms_defaultInput__3F6Ma').eq(0).type('Morty') ///Search firstname
        cy.get('.forms_defaultInput__3F6Ma').eq(0).should('include.value', "Morty")  ///Assertion
        cy.get('.CharacterList_root__3dgo-').should('include.text', "Morty")  ///Assertion
    })
    it('Should be able to input lastname on search field', () => {
        cy.visit('https://d28dp6fycxce58.cloudfront.net/');   ///visit page
        cy.get('.container').should('include.text', "Favorite Characters");  ///Assertion
        cy.get('.forms_defaultInput__3F6Ma').eq(0).type('Smith') ///Search lastname
        cy.get('.forms_defaultInput__3F6Ma').eq(0).should('include.value', "Smith")  ///Assertion
        cy.get('.CharacterList_root__3dgo-').should('include.text', "Smith")  ///Assertion
    })

})
