// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//截图
Cypress.Commands.add(
    "takeAScreenshot",
    { prevSubject: "optional" },
    (subject, filename, args) => {
      cy.wait(1000);
      if (subject) {
        cy.wrap(subject).screenshot(filename, args);
      } else {
        cy.screenshot(filename, args);
      }
    }
  );
  
  Cypress.Commands.add("BlackoutElement", locator => {
    cy.document().then(document => {
      document.querySelector(locator).style.display = "none";
    });
  });
  
  //滚动到屏幕底部
  Cypress.Commands.add("ScrollToBottom", () => {
    cy.document().then(() => {
      window.scrollTo(0, document.documentElement.offsetHeight);
    });
  });
  
  Cypress.Commands.add("clickButton", text => {
    cy.get("div > a")
      .contains(text)
      .click({ force: true });
  });
  
  Cypress.Commands.add("clickHidenButton", text => {
    cy.get("div > a")
      .contains(text)
      .click({ force: true });
  });
  
  //处理window.open方式新开tab页问题
  Cypress.Commands.add("rewriteWindowOpen", () => {
    cy.window().then(window => {
      cy.stub(window, "open").callsFake(url => {
        return window.open.wrappedMethod.call(window, url, "_self");
      });
    });
  });

  //处理登录时按钮滑动
  Cypress.Commands.add("loginMove",()=>{
    cy.get('.dv_handler')
    .trigger('mousedown', { which: 1, pageX: 1035, pageY: 93.5 })
    .trigger('mousemove', { which: 1, pageX: 1398, pageY: 49 })
    .trigger('mouseup')
  })