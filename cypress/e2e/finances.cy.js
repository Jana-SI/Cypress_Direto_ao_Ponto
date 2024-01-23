

describe('Transações', () => {

    // hooks -> executar antes(before) ou depois(after) / de cada(beforeEach / afterEach) ou de todos os testes

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('Cadastrar uma entrada', () => {

        /* cy.contains("Nova Transação").click()
        cy.get('#description').type("Dev Front")
        cy.get('#amount').type(2500)
        cy.get('#date').type("2024-01-02")  // yyyy-mm-dd

        cy.contains("button", "Salvar").click() */

        criarTransacao("Dev Front", 2500)
        /* criarTransacao("Dev Back", 2500) */

        cy.get("tbody tr td.description").should("have.text", "Dev Front")
    });

    it('Cadastrar uma saída', () => {

        criarTransacao("Praia", -50)

        cy.get("tbody tr td.description").should("have.text", "Praia")
    });

    it('Excluir transação', () => {

        criarTransacao("Dev Front", 2500)
        criarTransacao("Dev Back", 3000)

        /* cy.contains('.description', "Dev Back") //td -> referencia
            .parent() // tr
            .find('img') // elemento que a gente precisa
            .click() */

        // Localiza o elemento com a classe 'description' e texto "Dev Back"
        cy.contains('.description', "Dev Back")
            // Seleciona os elementos irmãos do elemento encontrado anteriormente
            .siblings()
            // Seleciona os filhos do conjunto de elementos (irmãos) que são elementos 'img' (imagens)
            .children('img')
            // Simula um clique no elemento 'img' encontrado
            .click();

        cy.get('tbody tr').should("have.length", 1)

    });
});

function criarTransacao(descricao, valor) {

    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-01-02")  // yyyy-mm-dd

    cy.contains("button", "Salvar").click()

}