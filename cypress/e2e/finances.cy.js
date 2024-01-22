

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        /* cy.contains("Nova Transação").click()
        cy.get('#description').type("Dev Front")
        cy.get('#amount').type(2500)
        cy.get('#date').type("2024-01-02")  // yyyy-mm-dd

        cy.contains("button", "Salvar").click() */

        criarTransacao("Dev Front", 2500)
        /* criarTransacao("Dev Back", 2500) */

        cy.get("tbody tr td.description").should("have.text", "Dev Front")
    });

    it.skip('Cadastrar uma saída', () => {
        
    });
});

function criarTransacao(descricao, valor){

    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-01-02")  // yyyy-mm-dd

    cy.contains("button", "Salvar").click()

}