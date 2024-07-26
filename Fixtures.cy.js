describe('MyTestSuite', () => {

	//Direct Access
	it.only('FixturesDemoTest', ()=> {

	cy.visit("https://opensource-demo.oranghrmlive.com/");
	

        cy.fixture('orangehrm').then( (data)=>{

        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder=Password']").type(data.username)
        cy .get("button[type='submit']").click()

cy.get(".oxd-text.oxd-text–h6.oxd-topbar-header-breadcrumb-module")
.should('have.text',data.expected)

})

})

	//Access through Hook - for multiple it blocks

	let userdata;
before( ()=>{
cy.fixture("orangehrm").then((data)=>{
	userdata=data;
})
})
	


it('FixturesDemoTest', ()=> {

	cy.visit("https://opensource-demo.orangehrmlive.com/");
		
cy.get("input[placeholder='Username']").type(userdata.username);
	cy.get("input[placeholder='Username']").type(userdata.username);
		cy.get("button[type='submit']").click();

		cy.get(".oxd-text.oxd-text–h6.oxd-topbar-header-breadcrumb-module")
		.should('have.text',userdata.expected);

    })

})

