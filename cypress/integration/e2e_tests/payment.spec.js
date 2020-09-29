describe('Payment Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password
			cy.login(username, password)
			cy.get('#pay_bills_tab').click()
		})
	})
	it('should make a payment', () => {
		cy.get('.form-horizontal').should('be.visible')
		cy.get('#sp_payee').select('Bank of America')
		cy.get('#sp_account').select('Brokerage')
		cy.get('#sp_amount').type(600)
		cy.get('#sp_date').type('2020-09-15{enter}')
		cy.get('#sp_description').type('açıklama')
		cy.get('#pay_saved_payees').click()
	})
	it('should display suscessful message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted.')
	})
})
