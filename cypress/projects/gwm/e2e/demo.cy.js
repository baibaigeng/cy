
describe("登录后的界面",()=>{
    beforeEach('先登录',()=>{
        cy.TESTlogin()
    })
    it('测试主页',()=>{
        cy.get('.ivu-menu-light > :nth-child(3) > :nth-child(1)').click()
        cy.get('.header-lang.ivu-dropdown > .ivu-dropdown-rel > div').click()
        cy.get('.header-lang.ivu-dropdown > .ivu-select-dropdown > .ivu-dropdown-menu > :nth-child(3)').click()
        cy.get('[style=""] > :nth-child(4) > .ivu-menu-submenu-title').click()
        cy.get(':nth-child(2) > .ivu-menu-opened > .ivu-menu > :nth-child(2)').click()
        //切换为主页
    })

})
