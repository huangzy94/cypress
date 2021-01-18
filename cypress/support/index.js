// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


// 运行的前置配置条件
beforeEach(function() {                                        // 每个用例的前置动作，每个it之前执行

  const username = {                                           // 用字典维护用户名列表
    catering : 'catering01',
    supplier : 'supplier01',
    superior : 'superior01'
  }
  
  const password = 'su123456'
    cy.visit('/user/login')
      const url = window.location.hostname
      // cy.log(url);                                          // 获取页面地址
        if (/td/.test(url)){
          cy.log('当前访问环境为：测试环境')                     // 打印环境变量信息（正则表达式）
        }else if (/uanla/.test(url)){
          cy.log('当前访问环境为：演示环境')
        }else {
          cy.log('请访问 td 或 uanla !')
        }
      cy.viewport(1920,1080)                                   // 设置窗口大小

        if (/catering/.test(url)){                             // 动态判断登录平台及用户名
          cy.get('#username').type(username['catering'])
          cy.log('登录餐饮单位')
        }
        
        if (/supplier/.test(url)){
          cy.get('#username').type(username['supplier'])
          cy.log('登录供货商')
        }

        if (/superior/.test(url)){
          cy.get('#username').type(username['superior'])
          cy.log('登录管理单位')
        }

      cy.get('#password').type(password)
      cy.get('#vcCode').type('801b')
      // cy.pause()                                            // 暂停操作，等待用户手动操作
      cy.contains('登 录').click()
        .should('have.text','登 录')                           // 验证是否包含文本 登 录
        .should('have.contain','登 录')
      // cy.viewport('iphone-8')
})