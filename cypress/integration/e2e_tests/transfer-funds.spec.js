describe('Transfer Funds Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password
			cy.login(username, password)
			cy.get('#transfer_funds_tab').click()
		})
	})
	it('should fill transfer fund form ', () => {
		cy.get('.board-content').should('be.visible')
		cy.get('#tf_fromAccountId').select('4')
		cy.get('#tf_toAccountId').select('3')
		cy.get('#tf_amount').type('190')
		cy.get('#tf_description').type('açıklama')
		cy.get('#btn_submit').click()
	})

	it.skip('should verify correct data', () => {
		cy.get('#tf_fromAccountId').should('have.value', 'Loan')
		cy.get('#tf_toAccountId').should('have.value', 'Savings')
		cy.get('#tf_amount').should('have.value', '190')
		cy.get('#tf_description').should('have.value', 'açıklama')
	})
})
