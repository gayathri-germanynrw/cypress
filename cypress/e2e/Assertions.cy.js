

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

        // include keyword
        cy.title().should('include','Goog')
        .and('eq','Google')

        // Validation on Logo
        cy.get('.lnXdpd').should('be.visible')
        .should('exist')

        //No of Links negative test
       // cy.xpath('//a').should('have.lengthOf.lessThan','50')

          //No of Links
          cy.xpath('//a').should('have.length','23')

          cy.get('#L2AGLb > .QS5gu').click()

          cy.get('#APjFqb').type('Gayathri') //provide a value into inputbox

       

          cy.get('#APjFqb').should('have.value','Gayathri') // Value check


    })

})