


describe('XpathLocators',()=>{


         it('Find no of links',()=>{
            cy.visit('https://practice.cydeo.com/')
            cy.xpath("//ul[@class='list-group']/li").should('have.length.above',10)
        
      })
      it('Chain XPATH',()=>{
        cy.visit('https://practice.cydeo.com/')
        cy.xpath("//ul[@class='list-group']").xpath("./li").should('have.length.above',10)
  })


})