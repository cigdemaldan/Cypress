describe('New Payee Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password
			cy.login(username, password)
		})
	})

	it('should add new payee to the list', () => {
		cy.get('a').contains('Pay Bills').click()
		cy.get('a').contains('Add New Payee').click()
		cy.get('#np_new_payee_name').type('aldan')
		cy.get('#np_new_payee_address').type('Ankara/Çankaya')
		cy.get('#np_new_payee_account').type('123456')
		cy.get('#np_new_payee_details').type('açıklama')
		cy.get('#add_new_payee').click()
	})
	it('should display suscessful message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The new payee aldan was successfully created.')
	})
})
