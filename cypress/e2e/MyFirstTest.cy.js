

describe('My First Test', () => {
    it('Verify title-positiv Test', () =>{

        cy.visit("www.google.com") 

        cy.title().should('eq','Google')
     
    })

    it('Verify title-Negative Test', () =>{

        cy.visit("www.google.com") 

        cy.title().should('eq','Google123')
     
    })


  })