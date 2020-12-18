

describe('餐饮单位',function(){                                // 测试套件

    context('工作台功能测试', function(){                       // 用以区分测试模块（describe(）的别名，可代替使用，行为方式相同）

      var myDate = new Date()
      var LocaleDate = myDate.toLocaleDateString()                                          // 获取当前时间并格式化为年月日

      // 获取当前时间并格式化数据
      var localYear = myDate.getFullYear() + "年"
      var lastMouth = myDate.getMonth() + "月"                                              // 获取上月月份
      var localMouth = (myDate.getMonth()+1) + "月"                                         // 获取本月月份
      var beforYesterday = (myDate.getDay()-2) + "日"                                       // 获取前天日期
      var localYMD = localYear + localMouth + beforYesterday

      it('工作台-待办事项',function(){                       // it 代表一个测试用例，it.skip代表跳过该用例，it.only代表仅执行该用例
        
        
        // 工作台-待办事项
        cy.get('.TodoListCard___1PvmG > :nth-child(3)')
                .should('have.contain','待采购菜单').click().wait(500)
                cy.contains('工作台').click()

        cy.get('.TodoListCard___1PvmG > :nth-child(5)')
                .should('have.contain','待下单').click().wait(500)
                cy.contains('工作台').click()  

        cy.get('.TodoListCard___1PvmG > :nth-child(7)')  
                .should('have.contain','换货审核').click().wait(600)
                cy.contains('工作台').click()  

        cy.get('.TodoListCard___1PvmG > :nth-child(9)')  
                .should('have.contain','待验收').click().wait(500)
                cy.contains('工作台').click()      
    })

      it('工作台-常用工具',function(){

        // 采购目录
        cy.get('.cgml___3VSsK')
          .should('have.text','采购目录').click()  
            cy.get('.ant-radio-group > :nth-child(2)').click()        // 按类型type='S/F'筛选
              cy.get('.ant-radio-group > :nth-child(3)').click().wait(500)
              cy.contains('工作台').click()

        // 本月台账
        cy.get('.ant-card-body > :nth-child(2)')
          .should('have.contain','本月台账').click()
            cy.contains('工作台').click()
                                  
        // cy.contains('人员管理')
        //   .should('have.contain','人员管理').click()                   // SKU详情
        //     cy.get('.ant-btn').click().wait(500)                      // 食材详情返回至采购目录
            // .should('have.contain','采购目录')                    
              // cy.get('.ant-btn').click()                              // 采购目录返回至工作台
            // .should('have.contain','工作台')

           
    })

      it.skip('工作台-常用工具-缺样上报',function(){      
          // 缺样上报
        cy.get('.ant-card-body > :nth-child(3)')
          .should('have.contain','缺样上报').click()
            cy.get('.ant-select-selection__rendered').click()                 // 按类型筛选
              cy.get('li').eq(1).click({force: true})
                cy.get('#keywords').type('泰国香米')                           // 关键字搜索
                  cy.get('.ant-radio-group > :nth-child(2)').click()          // 按审核状态筛选

        cy.contains('上报商品').click()                                        // 上报商品
            cy.get('#goodsName').type('automated_testing_F')
              cy.contains('上传图片').click()
                cy.wait(1000)
          
        const PicturePath = '红烧肉.jpg'
          cy.get('.ant-upload > .ant-btn')
            .click()
              .attachFile(PicturePath)                                  // 上传图片
            
          cy.get('#description').type('automated_testing')              // 备注
            // cy.get('.ant-checkbox-inner').click()                    // 紧急状况
            cy.get('#telephone').type('13100000000')
              cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
    })        

      it('工作台-验收情况',function(){

        cy.get('.ant-tabs-tab-active')                                   // 今日验收
          .should('have.contain','今日验收').click()
          cy.get('[aria-selected="false"]')                              // 明日验收
            .should('have.contain','明日验收').click()
            cy.get('.extra___3YNLd')                                     // 查看全部
              .should('have.contain','查看全部').click().wait(500)
              cy.get(':nth-child(2) > a')
                .should('have.text','工作台').click()  

        // 应付款统计分析
        cy.get('.ant-radio-group > :nth-child(2)')  
          .should('have.text','本季度').click()
          cy.get('.ant-radio-group > :nth-child(3)')
            .should('have.text','本年').click()
    })

      it('菜单中心-统一菜单',function(){
        cy.get(':nth-child(4) > a')                                       // 菜单中心模块
          .should('have.contain','菜单中心').click()
          cy.get('.ant-radio-group > :nth-child(1)')                      // 切换标签状态
            .should('have.text','全部').click()
            cy.get('.ant-radio-group > :nth-child(2)')            
              .should('have.text','待采购').click()
              cy.get('.ant-radio-group > :nth-child(3)')
                .should('have.text','待下单').click()
                cy.get('.ant-radio-group > :nth-child(4)')
                  .should('have.text','已下单').click()
                  cy.get('.ant-radio-group > :nth-child(5)')
                    .should('have.text','已过期').click()
    })

      it('菜单中心-我的菜单',function(){
        cy.get(':nth-child(4) > a')                                        // 菜单中心模块
          .should('have.contain','菜单中心').click()
          cy.wait(500)
          cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)')          // 我的菜单tab页
            .should('have.contain','我的菜单').click()
            cy.get('.ant-btn').click()                                     // 新建自定义菜单
              cy.contains('自定义').click()
              
              // 添加标签
                cy.get('.tags___1-WHl > .ant-btn')
                  .type("cypress")
                    cy.get('p > span').click()
                cy.get('.tags___1-WHl > .ant-btn')
                  .type("automated")
                    cy.get('p > span').click()
                cy.get('.tags___1-WHl > .ant-btn')
                  .type("testing")
                    cy.get('p > span').click()
                cy.get('.tags___1-WHl > .ant-btn')
                  .type("自定义")
                    cy.get('p > span').click()

              // 添加菜品
              cy.get('[data-row-key="21"] > [colspan="5"] > div > .anticon > svg')
                  .click()
                  cy.get('#type > .ant-select-selection')                       // 筛选条件
                    .click()
                      cy.contains('水果').click()
                  cy.get('#scope > .ant-select-selection')
                    .click()
                      cy.contains('平台').click()
                  cy.get(':nth-child(3) > .ant-col > .ant-form-item-control')
                      .type("西瓜")
                  cy.get('.ant-form-item-children > .ant-btn')                  // 查询
                      .click()
                  cy.get('.ant-table-row > :nth-child(4) > a')                  // 添加
                      .click()
                  cy.get('[style="text-align: right;"] > .ant-btn-primary')     // 保存
                      .click()

              // 设置份数及售卖价格
              cy.get(':nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
                .clear().type('20')                                             // 清除输入并输入新值
                cy.get(':nth-child(5) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
                  .clear().type('1.8')

              // 复制餐次
              cy.get('[rowspan="2"] > :nth-child(1) > .anticon > svg > path')
                .click()
                cy.wait(500)
                cy.get('[title="周六"]').click()                                // 复制到该周次
                cy.wait(500)
                  cy.get('[title="早餐"]').click()
                    //   .then(() => {
                    //   expect(stub.getCall(0)).to.be.calledWith('复制成功')
                    // })
                  cy.get('[data-row-key="22"] > :nth-child(6) > a')             // 删除添加的菜品
                    .click().wait(500)
                    cy.get('.ant-popover-buttons > .ant-btn-primary')
                      .click()
                      cy.get('.footerBtn___3l1nk > :nth-child(2)')              // 保存菜单
                        .click()
                        //   .then(() => {
                        //   expect(stub.getCall(0)).to.be.calledWith('保存成功')
                        // })

              // 查看菜单详情
              cy.get('.ant-radio-group > :nth-child(2)').click()                // 查看配料&图片
              cy.wait(500)
                // cy.contains('导 出').click()
                //   cy.wait(300)
                // cy.contains('仅菜单').click()
                //   cy.contains('导 出').click()
                //     cy.wait(300)
                //   cy.contains('仅菜单').click()
                cy.get('[style="text-align: right;"] > :nth-child(2)')          // 删除菜单
                  .click().wait(500)
                  cy.get('.ant-popover-buttons > .ant-btn-primary')
                    .click()
                    cy.wait(500)

              // 模板导入生成菜单
              cy.get('.ant-btn').click()                                     
              cy.contains('模板导入').click()
                cy.get('[style="margin-left: -8px; margin-right: -8px;"] > :nth-child(1) > .ant-list-item > .ant-card')
                  .rightclick()                                                  // 鼠标悬浮
                cy.wait(500)
                cy.log('模拟鼠标悬浮动作')
                  cy.contains('查看详情').click()
                  cy.get('#yieldMenu').click()                                   // 使用模板

              // 添加标签
              cy.get('.tags___1-WHl > .ant-btn')
                .type("cypress")
                cy.get('p > span').click()
              cy.get('.tags___1-WHl > .ant-btn')
                .type("automated")
                cy.get('p > span').click()
              cy.get('.tags___1-WHl > .ant-btn')
                .type("testing")
                cy.get('p > span').click()
              cy.get('.tags___1-WHl > .ant-btn')
                .type("模板导入")
                cy.get('p > span').click()

                  cy.get('.footerBtn___3l1nk > :nth-child(3)')                    // 预生成订单
                    .click()
                    cy.wait(1000)

              // 菜单生成订单
              cy.get('.ant-btn-primary').click()
              // 添加订单备注                          
              cy.get('[style="margin-left: -12px; margin-right: -12px; margin-top: 10px;"] > :nth-child(2) > .anticon > svg')
                .click()
                cy.wait(300)
                cy.get('#remark').type('cypress脚本生成订单')
                  cy.get('.ant-modal-footer > div > .ant-btn-primary')
                    .click()
                cy.contains('删 除').click().wait(500)
                  cy.get('.ant-popover-buttons > .ant-btn-primary')
                    .click()
    })

      it('菜单中心-菜单模板',function(){
        cy.get(':nth-child(4) > a')                                        // 菜单中心模块
          .should('have.contain','菜单中心').click()
          cy.wait(500)
          cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)')          // 我的菜单tab页
            .should('have.contain','我的菜单').click().wait(300)
            cy.contains('删除').click().wait(500)
            cy.get('.ant-popover-buttons > .ant-btn-primary').click()      // 删除模板导入生成的菜单

        // 菜单模板
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)')
          .click()
          cy.wait(300)
          cy.get('#custom').click()                                        // 创建模板
          cy.get('#templateName').type('cypress automated testing')
          cy.get('.ant-form-item-children > div > .ant-btn')
            .click()
            cy.get('div > .ant-input').type('自动化脚本')

        // 添加菜品
        cy.get(':nth-child(2) > :nth-child(4) > .ant-btn')             
          .click()
          cy.get(':nth-child(3) > .ant-col > .ant-form-item-control')
            .type('西瓜')
            cy.get('.ant-form-item-children > .ant-btn')
              .click()
              cy.get('.ant-table-row > :nth-child(4) > a')
                .click()
                cy.get('[style="text-align: right;"] > .ant-btn-primary')
                .click().wait(300)
                cy.contains('保 存').click().wait(500)
                cy.contains('返 回').click()

          // 鼠标悬浮
          cy.get(':nth-child(1) > .ant-list-item > .ant-spin-nested-loading > .ant-spin-container > .ant-card')
            .should('have.contain','cypress automated testing').rightclick()
            cy.wait(500)
            cy.contains('删除').click().wait(500)
              cy.get('.ant-popover-buttons > .ant-btn-primary')
                .click()
                cy.get(':nth-child(2) > .ant-badge > :nth-child(1)')
                .should('have.text','推荐').click()
    })
    
      it.skip('菜单中心-套餐维护',function(){
        cy.get(':nth-child(4) > a')                                        // 菜单中心模块
          .should('have.contain','菜单中心').click()
          cy.wait(500)
          cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(4)')          // 套餐维护
            .should('have.text','套餐维护').click()
            cy.get('.ant-btn').click()
              cy.get('#foodName').type('cypress automated testing')
              cy.get('.ant-form-item-children > div > .ant-btn').click()
              cy.get('div > .ant-input').type('自动化脚本')

      // 添加菜品
        cy.get('.ant-table-row-cell-break-word > .ant-btn')
          .click().wait(300)
          cy.get(':nth-child(3) > .ant-col > .ant-form-item-control')
            .type('西瓜')
          cy.get('.ant-form-item-children > .ant-btn')
            .click()
          cy.get('.ant-table-row > :nth-child(4) > a')
            .click()
          cy.get('[style="text-align: right;"] > .ant-btn-primary')   // 保存
            .click()
              // 上传图片
                cy.get('.dragger___23ac1 > .anticon > svg > path').click({force: true})
    })
    
      it('辅料超市',function(){
        cy.contains('辅料超市').click()                         // 辅料超市

        // 搜索
        cy.get('.ant-input').type('白醋')
          cy.get('.anticon-search > svg').click()
          cy.contains('加入购物车').click()
          cy.get('.cartInner___Fv85w').click()

        // 生成采购单
        cy.get('.createOrder___1IWsJ').click().wait(300)
          cy.get('.ant-select-selection__rendered').click()                 // 选择供货商
          cy.contains('绿蔬').click()
          cy.get('.ant-btn-primary').click().wait(600)                      // 生成订单

        // 备注
        cy.get('[style="margin-left: -12px; margin-right: -12px; margin-top: 10px;"] > :nth-child(2) > .anticon > svg > path')
          .click()
          cy.get('#remark').type('cypress脚本生成订单')
          cy.get('.ant-modal-footer > div > .ant-btn-primary').click().wait(500)

        // 下单
        cy.contains('下 单').click().wait(500)
          cy.get('.ant-popover-buttons > .ant-btn-primary')                 // 二次确认
            .click()
            cy.contains('返 回').click()
    })

      it.only('采购订单',function(){
        // 自建订单
        cy.contains('采购订单').click()                                      // 进入采购订单模块
        cy.get('.ant-btn').click()
        cy.get('.ant-tabs-tabpane-active > .ant-btn').click()

        // 筛选条件
        cy.get('.ant-cascader-picker-label').click()
          cy.get('[title="水果"]').click()
          cy.get('[title="核果仁果类"]').click()
          cy.get('.ant-form-item-children > .ant-btn').click()
          cy.get('[data-row-key="a3fa527860051bb80b68ec9aa2c74e59"] > :nth-child(5) > div > a')
            .click()
            cy.get('[style="text-align: right;"] > .ant-btn-primary').click()

        // 采购数量
        cy.get(':nth-child(4) > :nth-child(1) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
          .type(20)

        // 添加其他日期
        cy.get('.ant-tabs-extra-content > .ant-btn').click()
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
            cy.get('.ant-tabs-tabpane-active > .ant-btn').click()           // 添加

        // 筛选条件
        cy.get('.ant-cascader-picker-label').click()
          cy.get('[title="水果"]').click()
          cy.get('[title="核果仁果类"]').click()
          cy.get('.ant-form-item-children > .ant-btn').click()
          cy.get('[data-row-key="e03410d34487e0e87789045a044c47f8"] > :nth-child(5) > div > a')
            .click()
            cy.get('[style="text-align: right;"] > .ant-btn-primary').click()

        // 采购数量
        cy.get('[data-row-key="2"] > :nth-child(4) > :nth-child(1) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
          .type(20)

        // 保存订单
        cy.get('.footer___RNpo_ > .ant-btn-primary').click().wait(600)

        // 备注
        cy.get('[style="margin-left: -12px; margin-right: -12px; margin-top: 10px;"] > :nth-child(2) > .anticon > svg > path')
          .click()
          cy.get('#remark').type('cypress脚本生成订单')
          cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        
        // 下单
        cy.get('[style="text-align: right;"] > .ant-btn-primary').click().wait(500)
          cy.get('.ant-popover-buttons > .ant-btn-primary').click()

        // 查看配送验收情况
        cy.contains('查看配送验收情况').click()
          cy.contains('-0101').click()
          cy.get('.ant-popover-buttons > .ant-btn-primary').click()

        // 取消配送第一张配送单0101
        cy.get('.ant-page-header-heading-extra > :nth-child(1) > [style="margin-right: 10px;"]')
          .click().wait(500)
          cy.get('.ant-popover-buttons > .ant-btn-primary').click()

        // 取消配送第二张配送单0102
        cy.contains('查看配送验收情况').click()
        cy.contains('-0102').click()
        cy.get('.ant-page-header-heading-extra > :nth-child(1) > [style="margin-right: 10px;"]')
          .click().wait(500)
          cy.get('.ant-popover-buttons > .ant-btn-primary').click()

        // 取消配送第三张配送单0103
        cy.contains('查看配送验收情况').click()
        cy.contains('-0103').click()
        cy.get('.ant-page-header-heading-extra > :nth-child(1) > [style="margin-right: 10px;"]')
          .click().wait(500)
          cy.get('.ant-popover-buttons > .ant-btn-primary').click()

        // 取消全部配送单
        cy.contains('查看配送验收情况').click()
        cy.get('.ant-table-row-cell-break-word > a').click().wait(300)
        cy.get('.ant-page-header-heading-extra > :nth-child(1) > [style="margin-right: 10px;"]')   // 取消配送单
          .click().wait(500)
          cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
    })

      it('配送验收',function(){
        // 进入配送验收模块
        cy.contains('配送验收').click()
          cy.get('.ant-tabs-tab-active').click()                                             // 待配送TAB
          cy.get('.ant-radio-group > :nth-child(2)').click()                                 // 选择今日待验收
          cy.get('.ant-select-selection__rendered').click()
          cy.contains('绿蔬').click()
          cy.contains('-01').click()
            cy.get('.productHead___16ET- > .ant-btn').click()
            cy.get('.ant-input').type('牛奶')
            cy.contains('纯奶').click()
            cy.get('.ant-btn-primary').click()                                               // 保存
              cy.log('校验商品数量不能为0的限制')
              cy.get('[data-row-key="1"] > :nth-child(4) > :nth-child(1)')
                .click().wait(500)
                cy.log('删除数量为0的商品')
                cy.get('.ant-popover-buttons > .ant-btn-primary')
                  .click()
                  cy.get('.ant-btn-primary').click()
                  cy.contains('返 回').click().wait(300)                                      // 返回到列表页
      
        // 待验收TAB
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click()
          cy.get('.ant-select-selection__rendered').click()
          cy.contains('绿蔬').click()
          cy.contains('-01').click()
          cy.get('a.ant-btn').click()
            cy.contains('合格').click()
              cy.get('.ant-cascader-menu-item-expand').click()                                // 不合格
              cy.get(':nth-child(2) > .ant-cascader-menu-item-expand').click()                // 退货
              cy.get('[title="商品变质破损"]').click()
              cy.scrollTo(0, 500)
              cy.get('.gradeList___V2JXx > :nth-child(1)').click()                            // 配送评价
              cy.get('.ant-btn-primary').click()
              cy.get('.ant-modal-confirm-btns > .ant-btn-primary')
                .click().wait(500)                                                            // 完成验收
                cy.get('.ant-breadcrumb-link > a').click()                                    // 配送验收面包屑
    })

      it('结算管理',function(){

        cy.get(':nth-child(12) > a').click()
          cy.get('.ant-btn').click()                                                          // 生成结算单
            cy.get('.ant-select-selection__placeholder').click()
            cy.contains('绿蔬').click()                                                        // 选择供货商及结算区间
              cy.get('[placeholder="开始日期"]').click()
              cy.contains(localYear).click()
              cy.get('.ant-calendar-year-panel-last-decade-cell > .ant-calendar-year-panel-year')
                .click()
                cy.get('[title="2019"] > .ant-calendar-year-panel-year').click()
                cy.contains(lastMouth).click()
                cy.get('[title="九月"] > .ant-calendar-month-panel-month').click()
                  cy.get('[title="2019年9月1日"] > .ant-calendar-date').click()
                  cy.get('[title=' + localYMD + '] > .ant-calendar-date').click()
                  cy.get('.ant-card-extra > .ant-btn').click().wait(500)                      // 查询
                  cy.get('.footer___2OksX > .ant-btn-primary').click()                        // 生成结算单

        // 发送&撤回结算单
        cy.get('[data-row-key="0"] > :nth-child(8) > .control-active').click()
          .wait(500)
            cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(500)
        cy.contains('撤回').click()
          .wait(500)

        // 删除结算单
            cy.get('.ant-popover-buttons > .ant-btn-primary').click().wait(500)
        cy.contains('删除').click()
            cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(500)
        cy.contains('删除').click()
            cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(500)
        cy.contains('删除').click()
            cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(500)
        cy.contains('删除').click()
          .wait(500)
            cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()

    })

      it('查询统计',function(){
        // 进入查询统计模块
        cy.get(':nth-child(14) > a').click()
        cy.get('[placeholder="开始日期"]').click()
            cy.contains(localYear).click()
            cy.get('.ant-calendar-year-panel-last-decade-cell > .ant-calendar-year-panel-year')
              .click()
              cy.get('[title="2019"] > .ant-calendar-year-panel-year').click()
              cy.contains(lastMouth).click()
                cy.get('[title="九月"] > .ant-calendar-month-panel-month').click()
              cy.get('[title="2019年9月1日"] > .ant-calendar-date').click()
              cy.get('[title=' + localYMD + '] > .ant-calendar-date').click()
        // 查询台账详情
        cy.contains('绿蔬集团').click()
        cy.get(':nth-child(1) > .ant-list-item > .ant-list-item-action > li > span').click()          // 展开
        cy.get(':nth-child(1) > .ant-list-item > .parameterDetailList___1a5d9 > :nth-child(2) > a')
          .click()                                                                                    // 跳转到验收单详情

      })
    })
  })
