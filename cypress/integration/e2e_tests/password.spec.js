describe('Password Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
	})
	it('should click on Signin button on the homepage', () => {
		cy.get('#signin_button').click()
	})

	it('should click on forgetten password link', () => {
		cy.get('.offset3>a').click()
	})
	it('should fill email form', () => {
		cy.get('#user_email').type('invalidemail@email.com')
	})

	it('should submit the form', () => {
		cy.contains('Send Password').click()
	})
})
