describe('Login/Logout Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})
	it('should try to login with invalid data', () => {
		cy.login('aldan', '123456')
	})
	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})
	it('should login to app successfully', () => {
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password
			cy.login(username, password)
		})
		cy.get('ul.nav-tabs').should('be.visible')
	})
	it('should logout from app', () => {
		cy.contains('username').click()
		cy.get('#logout_link').click()
		cy.url().should('include', 'index.html')
	})
})
