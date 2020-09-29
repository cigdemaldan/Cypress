describe('Currency Exchange Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.clearCookies()
		cy.clearLocalStorage()
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password
			cy.login(username, password)
			cy.get('#pay_bills_tab').click()
		})
	})
	it('should fill conversion form', () => {
		cy.contains('Purchase Foreign Currency').click()
		cy.get('#pc_purchase_currency_form').should('be.visible')
		cy.get('#pc_currency').select('Thailand (baht)')
		// cy.get('#sp_sell_rate').should('contain', 'baht (THB)')
		cy.get('#pc_amount').type(600)
		cy.get('#pc_inDollars_false').click()
		cy.get('#pc_calculate_costs').click()
	})
	it('should calculate cost', () => {
		cy.get('#pc_conversion_amount')
			.should('be.visible')
			.and('contain', '600.00 baht (THB) = 20.86 U.S. dollar (USD)')
	})
	it.skip('should purchase', () => {
		cy.get('#purchase_cash').click()
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'Foreign currency cash was successfully purchased.')
	})
	it('should display suscessful message', () => {})
})
