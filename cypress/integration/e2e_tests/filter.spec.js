describe('Transfer Funds Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password
			cy.login(username, password)
			cy.get('#account_activity_tab').click()
		})
	})

	it('should filter transaction', () => {
		cy.get('.offset2 ').should('be.visible')
		cy.contains('Find Transactions').click()
		cy.get('.board-content').should('be.visible')
		cy.get('#aa_description').type('ONLINE')
		cy.get('#aa_fromDate').type('2012-09-01{enter}')
		cy.get('#aa_toDate').type('2020-09-30{enter}')
		cy.get('#aa_fromAmount').type('50')
		cy.get('#aa_toAmount').type('1000')
		cy.get('#aa_type').select('Deposit')
		cy.contains('Find').click()
	})
	it('should display result', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody>tr').its('lenght').should('be.gt', 0)
	})
})
