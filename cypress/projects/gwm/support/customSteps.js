import GWM_ELEMENT from "../fixtures/element.json"

//登录
Cypress.Commands.add('TESTlogin',() => {
    cy.fixture('data').then((data) => {
    //使用箭头符号可以直接引用data
      cy.visit(data.url)
      cy.get(GWM_ELEMENT.longinUsername).type(data.username)
      cy.get(GWM_ELEMENT.loginPassword).type(data.password)
      cy.get(GWM_ELEMENT.loginbutton).click()
      cy.url().should('include','welcome')
      cy.get('.header-a').should('contain', 'baigeng')
      })
  })
