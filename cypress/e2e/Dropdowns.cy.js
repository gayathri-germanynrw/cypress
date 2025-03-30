

describe('Handle Dropdowns',()=>{
    it('Dropdown with Select',()=>{
        cy.visit('https://practice.cydeo.com/dropdown')
        cy.get('#state').select('IN')
        .should('have.value', 'IN');
    })

    it('Dropdown without Select',()=>{
        cy.visit('https://practice.cydeo.com/dropdown')
        cy.get('#dropdownMenuLink').click()
       cy.get('a[href="https://www.google.com/"]')
        .click()
       .should('have.text','Google')
      
    })
})