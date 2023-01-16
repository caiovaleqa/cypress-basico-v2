it.only('testa a página claro', function() {              
    cy.visit('https://planos3.claro.com.br/empresas')
    cy.get('#cep').type('04141100')
    cy.get('#number').type('123')
    cy.get('#consultar-cobertura').click()

    cy.contains('As melhores soluções para sua empresa').should('be.visible')
})