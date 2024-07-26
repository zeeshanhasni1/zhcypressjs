/// <reference types = "Cypress" />

describe('Handle dropdowns', () => {

    it.skip('Dropdown with select', () => {

cy.visit("https://zoho.com/commerce/free -demo.html")

cy.get("#zcf_address_country").select('Italy').should('have.value','Italy') 

})


 it.skip('Dropdown without select', () => {

cy.visit("https://dummyticket.com/dummy-ticket-for-visa-application/")

cy.get("#select2-billing_country-container").click()

cy.get(".select2-search_field").type('Italy').type('{enter}')

cy.get('select2-billing_country-container').should('have.text','Italy')

})

 it.skip('Auto suggest Dropdown', () => {

cy.visit("https://www.wikipedia.org/")

cy.get('#searchInput').type('Delhi')

cy.get(".suggestion-title").contains("Delhi University").click()

})

it('Dynamic Drowpdown', ()=> {

	cy.visit("https://www.google.com/")

	cy.get("input[name='q']").type('cypress automation')

	cy.wait(3000)

	cy.get('div._______>span').should('have.length',11)

	cy.get('div.______>span').each(($el,index,$list)=>{
		if($el.text()=='cypress automation tool')
{
cy.wrap($el).click()
}
	})

})

})
