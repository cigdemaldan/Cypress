describe('Navbar Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
	})
	it('should display online banking content', () => {
		cy.get('#onlineBankingMenu').click()
		cy.url().should('include', 'online-banking.html')
		cy.get('h1').should('be.visible')
	})
	it('should display homepage content', () => {
		cy.get('#homeMenu').click()
		cy.url().should('include', 'index.html')
		cy.get('h4').should('be.visible')
	})
	it('should display feedback content', () => {
		cy.get('#feedback').click()
		cy.url().should('include', 'feedback.html')
		cy.get('h3').should('be.visible')
	})
})
