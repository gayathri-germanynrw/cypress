

describe("Assertions demo", ()=>{
    it("Implicit assertions", ()=>{
        // should and -- two implicit assertions
        cy.visit("https://www.google.com/")
        cy.url().should('include','google')
        .should('eq','https://www.google.com/')
        .should('contain','google')
        .should('not.contain','yahoo')


        cy.url().should('include','google')
        .and('eq','https://www.google.com/')
        .and('contain','google')
        .and('not.contain','yahoo')

    })

})