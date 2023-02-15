
describe("登录后的界面",()=>{
    beforeEach('先登录',()=>{
        cy.TESTlogin()
    })
    it('测试主页',()=>{
        cy.get('[style="text-align: right;"] > .arco-space > :nth-child(2) > .arco-btn').click()
        //切换为主页
    })

})
