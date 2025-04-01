

describe('Handle Dropdowns',()=>{
    it.skip('Dropdown with Select',()=>{

        //Select Drop down , so we use select 
        cy.visit('https://practice.cydeo.com/dropdown')
        cy.get('#state').select('IN')
        // use have.value to verify selected value
        .should('have.value', 'IN');
    })

    it.skip('Dropdown without Select',()=>{
        // can't use select 
        cy.visit('https://practice.cydeo.com/dropdown')
        cy.get('#dropdownMenuLink').click()
       cy.get('a[href="https://www.google.com/"]')
        .click()
        // use have.text
       .should('have.text','Google')
      
    })

    it.skip('Auto suggested Dropdowns',()=>{
        
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        // contains also a part of Assertion
        cy.get('.suggestion-title').contains(' University').click()
   })


   it('Dynamic Dropdowns',()=>{
        
    cy.visit('https://www.google.com/')
    cy.get("textarea[name='q']").type('Cypress Automation')
    cy.wait(3000)
    // contains also a part of Assertion
    cy.get('div.wM6W7d>span').should('have.length',13)

    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() == 'cypress automation tutorial') {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click()
        } else {
          // do something else
        }
        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')
})
   
})


    
})