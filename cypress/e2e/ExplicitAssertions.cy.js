
describe("Explicit Assertions demo", ()=>{
    it("Explicit Assertions", ()=>{
        
        cy.visit("https://practice.cydeo.com/dropdown")
        ////select[@id='dropdown']//option[@value='1' ]
        let dropDnName="Option 1";
       
        cy.get('#dropdown').then( (x)=>
        {
            let actDropDnName="Please select";
            expect(x.text()).to.equal(actDropDnName)

        })
        
        
       
       
       
        
    })

})
