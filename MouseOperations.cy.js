describe('Mouse Operations', () => {

    it('Mouse Hover', () => {

    	cy.visit('https://demo.opencart.com/');
	
	cy.get("____________").should('not.be.visible');

	cy.get('_____________').trigger('mouseover').click();

	cy.get('_______________').should('be.visible');
	    
})

	

	it('Right Click',()=>{

		cy.visit('swisnl.github.io/jQuery-contextMenu/demo.html')

		//Approach1
		/*cy.get('.context-menu-one.btn.-neutral').trigger('contextmenu');
		cy.get('.context-menu-icon-copy>span').should('be.visible');
*/

//Approach2
cy.get('.context-menu-one.btn.-neutral').rightclick();
cy.get('.context-menu-icon-copy > span').should('be.visible');

});


	it('Double Click', () =>{

	cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onblclick3");
cy.frameLoaded('#iframeResult'); //Load the frame

//Approach1 - trigger()
//cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
//cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

})






it('Drag and Drop using plugin', () =>{

//include this at the top of the file: require ('@4tw/cypress-drag-drop')

cy.visit("https://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
cy.get('#box6').should('be.visible')
cy.get('#box106').should('be.visible')

cy.wait(3000)
cy.get('#box106').drag('#box106',{force:true});

});




it('Scrolling Page', () =>{

cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

//India Flag
cy.get('nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000})
cy.get('nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

cy.get('nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000})
cy.get('nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

})
})
