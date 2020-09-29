describe('Feedback Form', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})
	it('should load feedback form', () => {
		cy.get('#feedback').click()
		cy.get('form').should('be.visible')
	})
	it('should fill feedback form', () => {
		cy.get('#name').type('Aldan')
		cy.get('#email').type('aldan@outlook.com.tr')
		cy.get('#subject').type('Deneme')
		cy.get('#comment').type(
			'This feedback facility is not secure. Please do not send any account information in a message sent from here.  '
		)
	})
	it('should submit feedback form', () => {
		cy.contains('Send Message').click()
	})
	it('should display feedback message ', () => {
		cy.get('.offset3').should('be.visible')
	})
})
