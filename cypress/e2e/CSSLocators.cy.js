


describe('xpath practice',()=>{
    it('xpath locators',()=>{
        cy.visit('https://practice.cydeo.com/')
        //cy.get("#APjFqb[name='q']")
         // Check if the cookie consent pop-up is visible
    cy.get('div[role="dialog"]').should('be.visible')

    // Click on "Alle akzeptieren" (Accept all) button
    cy.contains('Alle akzeptieren').click()

    // Verify that the pop-up is no longer visible
    cy.get('div[role="dialog"]').should('not.exist')

    // Continue with your test, e.g., searching something
    cy.get('input[name="q"]').type('Cypress testing{enter}')

         })

         it('css locators',()=>{
            cy.visit('https://practice.cydeo.com/')
          
          
    
             })


})