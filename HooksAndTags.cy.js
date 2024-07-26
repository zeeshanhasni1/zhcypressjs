describe('MyTestSuite', () => {

    before(()=>{
        cy.log("   *********Launch App*************   ");
    })
    
    after(()=>{
        cy.log("   *********Close App*************     ");
    })
    
    beforeEach(()=>{
    
        cy.log(" ****************Login************** ");
    
    })
    
    afterEach(()=>{
    
        cy.log(" ********************* Logout *************** ");
    
    
    
        it('Sample Children', () => {
    
        cy.visit('https://sample')
    })
    })
})
    