

describe("Assertions demo", ()=>{
    it("Implicit assertions", ()=>{
        cy.visit("https://www.google.com/")
        cy.url().should('include','google')
        cy.url().should('eq','https://www.google.com/')
        cy.url().should('contain','google')
        cy.url().should('not.contain','yahoo')

    })

})