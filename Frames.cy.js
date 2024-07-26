describe('handling frames', () => {

    it('approach1', () => {

    cy.visit('https://the-internet-herokuapp.com/iframe');

    const iframe=cy.get("#mce_0_ifr")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);

    iframe.clear().type("Welcome {cmd+a}");

    cy.get("[aria-label='Bold']").click();
    
    })

	it('approach2 - by using custom command',()=>{

		cy.visit("https://the-internet-herokuapp.com/iframe");

		cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");
		cy.get("[aria-label='Bold']").click();

		})


	it.only('approach3 - by using cypress iframe plugin',()=>{

		cy.visit("https://the-internet-herokuapp.com/iframe");

		cy.frameLoaded('#mce_0_ifr');	//Load the frame

		cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");

		cy.get("[aria-label='Bold']").click();

		})


})
