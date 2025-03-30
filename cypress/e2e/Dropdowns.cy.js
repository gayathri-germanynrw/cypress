

describe('Handle Dropdowns',()=>{
    it('Dropdown with Select',()=>{

        //Select Drop down , so we use select 
        cy.visit('https://practice.cydeo.com/dropdown')
        cy.get('#state').select('IN')
        // use have.value to verify selected value
        .should('have.value', 'IN');
    })

    it('Dropdown without Select',()=>{
        // can't use select 
        cy.visit('https://practice.cydeo.com/dropdown')
        cy.get('#dropdownMenuLink').click()
       cy.get('a[href="https://www.google.com/"]')
        .click()
        // use have.text
       .should('have.text','Google')
      
    })
})