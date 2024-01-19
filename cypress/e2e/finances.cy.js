

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        cy.contains("Nova Transação").click()
        cy.get('#description').type("Dev Front")
        cy.get('#amount').type(2500)
        cy.get('#date').type("2024-01-02")  // yyyy-mm-dd

        cy.contains("button", "Salvar").click()

        cy.get("tbody tr td.description").should("have.text", "Dev Front")
    });
});