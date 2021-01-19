

describe('餐饮单位',function(){                                // 测试套件

    context('工作台功能测试', function(){                       // 用以区分测试模块（describe(）的别名，可代替使用，行为方式相同）

      var myDate = new Date()
      // var LocaleDate = myDate.toLocaleDateString()                                          // 获取当前时间并格式化为年月日

      // 获取当前时间并格式化数据
      var localYear = myDate.getFullYear()
      var mouth = myDate.getMonth() + 1
      var mouthNum = mouth > 9 ? mouth : `0${mouth}`                                           // 判断是否是个位数，如果是个位数，在前面加上0（如03）
      var localMouth = mouthNum                                                                // 获取本月月份
      // 获取上月月份
      var lastMouth = new Date(new Date().setMonth(myDate.getMonth() -1)).getMonth() + 1       // 获取上个月月份，当跨年时（本月为1月），上个月为12月
      var beforYesterday = (myDate.getDate()-2)                                                // 获取前天日期
      var localYMD = localYear + '-' + localMouth + '-' + beforYesterday
      var localYMd = myDate.getFullYear() +
                     '-' + (mouthNum)

      it('工作台-待办事项',function(){                       // it 代表一个测试用例，it.skip代表跳过该用例，it.only代表仅执行该用例
        
        
        // 工作台-待办事项
        cy.get('[href="/order?status=0"] > .pendItemLeft___3X19W > span')
                .should('have.contain','待下单').click().wait(700)
                cy.contains('工作台').click()  

        cy.get('[href="/distribution?status=1"] > .pendItemLeft___3X19W > span')  
                .should('have.contain','换货审核').click().wait(600)
                cy.contains('工作台').click()  

        cy.get('[href="/distribution?status=2"] > .pendItemLeft___3X19W > span')  
                .should('have.contain','待验收').click().wait(700)
                cy.contains('工作台').click()  

    })

      it('工作台-常用工具',function(){

        // 采购目录
        cy.get(':nth-child(3) > .toolItem___3UuII')
          .should('have.text','采购目录').click()  
            cy.get('.ant-radio-group > :nth-child(2)').click()        // 按类型type='S/F'筛选
              cy.get('.ant-radio-group > :nth-child(3)').click().wait(700)
              cy.contains('工作台').click()
           
    })

    //   it.skip('工作台-常用工具-缺样上报',function(){      
    //       // 缺样上报
    //     cy.get('.ant-card-body > :nth-child(3)')
    //       .should('have.contain','缺样上报').click()
    //         cy.get('.ant-select-selection__rendered').click()                 // 按类型筛选
    //           cy.get('li').eq(1).click({force: true})
    //             cy.get('#keywords').type('泰国香米')                           // 关键字搜索
    //               cy.get('.ant-radio-group > :nth-child(2)').click()          // 按审核状态筛选

    //     cy.contains('上报商品').click()                                        // 上报商品
    //         cy.get('#goodsName').type('automated_testing_F')
    //           cy.contains('上传图片').click()
    //             cy.wait(1000)
          
    //     const PicturePath = '红烧肉.jpg'
    //       cy.get('.ant-upload > .ant-btn')
    //         .click()
    //           .attachFile(PicturePath)                                  // 上传图片
            
    //       cy.get('#description').type('automated_testing')              // 备注
    //         // cy.get('.ant-checkbox-inner').click()                    // 紧急状况
    //         cy.get('#telephone').type('13100000000')
    //           cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
    // })        

      it('工作台-验收情况',function(){

        cy.contains('今日验收').click()                                   // 今日验收
          cy.contains('明日验收').click()                                 // 明日验收
            cy.contains('今日验收').click().wait(700)                     // 查看全部
              cy.contains('工作台').click()  

        // 费用统计
        cy.contains('当月').click()
          cy.contains('近三月').click()
    })

      it('菜单中心-统一菜单',function(){
        cy.contains('菜单中心').click()                                    // 菜单中心模块
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
        cy.contains('菜单中心').click()                                     // 菜单中心模块
          cy.wait(700)
          cy.contains('我的菜单').click()                                   // 我的菜单tab页
            cy.contains('新建').click()                                     // 新建自定义菜单
              cy.contains('自定义').click()
              
              // 添加标签
                cy.contains('添加')
                  .type("cypress")
                    cy.get('label > :nth-child(1) > span').click()
                cy.contains('添加')
                  .type("automated")
                    cy.get('label > :nth-child(1) > span').click()
                cy.contains('添加')
                  .type("testing")
                    cy.get('label > :nth-child(1) > span').click()
                cy.contains('添加')
                  .type("自定义")
                    cy.get('label > :nth-child(1) > span').click()

              // 添加菜品
              cy.get('[data-row-key="1ZCundefined"] > .colTaoCan___2wGkX > div')
                  .click()
                  cy.get('#type')                                               // 筛选条件
                    .click()
                      cy.contains('水果').click()
                  cy.get('#scope')
                    .click()
                      cy.contains('平台').click()
                  cy.get('#keywords')
                      .type("西瓜")
                      cy.get('.ant-input-group-addon > .ant-btn')               // 查询
                      .click()
                  cy.get(':nth-child(4) > .ant-btn > span')                     // 添加
                      .click()
                  cy.get('.footer___2Bf7W > .ant-btn-primary')                  // 保存
                      .click()

              // 设置份数及售卖价格
              cy.get(':nth-child(2) > [style="white-space: nowrap;"] > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
                .clear().type('20')                                             // 清除输入并输入新值
                cy.get(':nth-child(5) > [style="white-space: nowrap;"] > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
                  .clear().type('1.8')

              // 复制餐次
              cy.get('[rowspan="2"] > :nth-child(1) > .anticon > svg > path')
                .click()
                cy.wait(700)
                cy.get('[title="周六"]').click()                                // 复制到该周次
                cy.wait(700)
                  cy.get('[title="早餐"]').click()
                    //   .then(() => {
                    //   expect(stub.getCall(0)).to.be.calledWith('复制成功')
                    // })
                  cy.contains('删除')                                           // 删除添加的菜品
                    .click().wait(700)
                    cy.contains('确 定')
                      .click()
                      cy.contains('保 存')                                      // 保存菜单
                        .click()
                        //   .then(() => {
                        //   expect(stub.getCall(0)).to.be.calledWith('保存成功')
                        // })

              // 查看菜单详情
              cy.contains('配料&图片').click()                                   // 查看配料&图片
              cy.wait(700)
                // cy.contains('导 出').click()
                //   cy.wait(300)
                // cy.contains('仅菜单').click()
                //   cy.contains('导 出').click()
                //     cy.wait(300)
                //   cy.contains('仅菜单').click()
                cy.contains('删 除')                                             // 删除菜单
                  .click().wait(700)
                  cy.contains('确 定')
                    .click()
                    cy.wait(700)

              // 模板导入生成菜单
              cy.contains('新建').click()                                     
              cy.contains('模板导入').click()
                cy.get('.ant-list-something-after-last-item > .ant-spin-nested-loading > .ant-spin-container > [style="margin-left: -12px; margin-right: -12px;"] > :nth-child(1) > [style="padding-left: 12px; padding-right: 12px; flex: 1 1 auto;"] > .ant-list-item > .ant-card > .ant-card-body')
                  .rightclick()                                                  // 鼠标悬浮
                cy.wait(700)
                cy.log('模拟鼠标悬浮动作')
                  cy.contains('查看详情').click()
                  cy.contains('使 用').click()                                   // 使用模板
                    .wait(500)

              // 添加标签
              cy.contains('添加')
                  .type("cypress")
                    cy.get('label > :nth-child(1) > span').click()
                cy.contains('添加')
                  .type("automated")
                    cy.get('label > :nth-child(1) > span').click()
                cy.contains('添加')
                  .type("testing")
                    cy.get('label > :nth-child(1) > span').click()
                cy.contains('添加')
                  .type("模板导入")
                    cy.get('label > :nth-child(1) > span').click()

                  cy.contains('保存并采购')                                      // 预生成订单
                    .click()
                    cy.wait(1000)

              // 菜单生成订单
              cy.get('.ant-btn-primary').click()
              // 添加订单备注                          
              cy.get('a > .anticon > svg')
                .click()
                cy.wait(300)
                cy.get('#remark').type('cypress脚本生成订单')
                  cy.contains('修 改')
                    .click()
                cy.contains('删 除').click().wait(700)
                  cy.contains('确 定')
                    .click()
    })

      it('菜单中心-菜单模板',function(){
        cy.contains('菜单中心').click()                                     // 菜单中心模块
          .click()
          cy.wait(700)
          cy.contains('我的菜单')                                           // 我的菜单tab页
            .click().wait(500)
            cy.contains('删除').click().wait(700)
            cy.contains('确 定').click()                                    // 删除模板导入生成的菜单

        // 菜单模板
        cy.contains('菜单模板')
          .click()
          cy.wait(300)
          cy.contains('创建模板').click()                                   // 创建模板
          cy.get('#templateName').type('cypress automated testing')
          cy.contains('添加')
            .type('自动化脚本')

        // 添加菜品
        cy.get('[data-row-key="1ZCundefined"] > .colTaoCan___DWSCa > div')
          .click()
          cy.get('#type')                                               // 筛选条件
            .click()
              cy.contains('水果').click()
          cy.get('#scope')
            .click()
              cy.contains('平台').click()
          cy.get('#keywords')
              .type("西瓜")
              cy.get('.ant-input-group-addon > .ant-btn')               // 查询
              .click()
          cy.get(':nth-child(4) > .ant-btn > span')                     // 添加
              .click()
          cy.get('.footer___2Bf7W > .ant-btn-primary')                  // 保存
              .click()
              cy.contains('保 存').click().wait(500)
              cy.contains('返 回').click()

          // 鼠标悬浮
          cy.get(':nth-child(1) > [style="padding-left: 12px; padding-right: 12px; flex: 1 1 auto;"] > .ant-list-item > .ant-spin-nested-loading > .ant-spin-container > .ant-card > .ant-card-body')
            .should('have.contain','cypress automated testing').rightclick()
            cy.wait(700)
            cy.contains('删除').click().wait(700)
              cy.contains('确 定')
                .click()
                cy.contains('推荐').click()
    })
    
      it.skip('菜单中心-套餐维护',function(){
        cy.get(':nth-child(4) > a')                                        // 菜单中心模块
          .should('have.contain','菜单中心').click()
          cy.wait(700)
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
        cy.get('#keywords').type('白醋')
          cy.contains('查 询').click()
          cy.contains('加入购物车').click()
          cy.get('.shoppingCartIcon___RI_rP > .ant-badge').click()

        // 生成采购单
        cy.contains('生成采购单').click().wait(300) // bf77d3f0c39e2a094ec14c6f7ad6c996
          cy.contains('替换').click()
          cy.get('[data-row-key="159978ff9fa0e13568df99acd1d8d813"] > :nth-child(5) > a')
            .click()                                                                  // 添加
            cy.get('[style="text-align: right;"] > .ant-btn-primary').click()         // 保存

        // 采购数量
        cy.get(':nth-child(4) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
          .type(20)
          cy.contains("保 存").click().wait(600)                            // 生成订单

        // 备注
        cy.get('a > .anticon > svg')
          .click()
          cy.get('#remark').type('cypress脚本生成订单')
          cy.contains("修 改").click().wait(700)

        // 下单
        cy.contains('下 单').click().wait(700)
          cy.contains('确 定')                                              // 二次确认
            .click()
            cy.contains('返 回').click()
    })

      it('采购订单',function(){
        // 自建订单
        cy.contains('采购订单').click().wait(500)                                      // 进入采购订单模块
        cy.contains('新 建').click().wait(700)
        // localYMd为获取当前的年份及月份， (myDate.getDate()+1)获取的是明天的日期。 输入结果如：2021-01-14
          cy.get('#rc-tabs-0-panel-' + localYMd + '-' + (myDate.getDate()+1) + ' > .ant-btn-dashed').click()

        // 筛选条件
        cy.get('.ant-cascader-picker-label').click()
          cy.get('[title="水果"]').click()
          cy.get('[title="核果仁果类"]').click()
          cy.get('[data-row-key="a3fa527860051bb80b68ec9aa2c74e59"] > :nth-child(5) > a')
            .click()
            cy.get('[style="text-align: right;"] > .ant-btn-primary').click()

        // 采购数量
        cy.get(':nth-child(4) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
              .type(20)

        // 添加其他日期
        cy.contains('添加配送日').click()
        cy.contains('确 定').click()                                                  
        cy.get('#rc-tabs-0-panel-' + localYMd + '-' + (myDate.getDate()) + ' > .ant-btn-dashed').click()           // 添加

        // 筛选条件
        cy.get('.ant-cascader-picker-label').click()
          cy.get('[title="水果"]').click()
          cy.get('[title="核果仁果类"]').click()
          cy.get('[data-row-key="a3fa527860051bb80b68ec9aa2c74e59"] > :nth-child(5) > a')
            .click()
            cy.get('[style="text-align: right;"] > .ant-btn-primary').click()

        // 采购数量
        cy.get(':nth-child(4) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
          .type(20)

        // 保存订单
        cy.contains('保 存').click().wait(600)

        // 备注
        cy.get('a > .anticon > svg')
          .click()
          cy.get('#remark').type('cypress脚本生成订单')
          cy.contains('修 改').click()
        
        // 下单
        cy.contains('下 单').click().wait(500)
          cy.contains('确 定').click().wait(700)

        // 查看配送验收情况
        cy.contains('查看配送验收情况').click()
          cy.contains('-0101').click()
            .wait(700)

        // 取消配送第一张配送单0101
        cy.contains('取消配送')
          .click().wait(700)
          cy.contains('确 定').click().wait(700)

        // 取消配送第二张配送单0102
        cy.contains('查看配送验收情况').click()
        cy.contains('-0102').click()
          .wait(1000)
          cy.contains('取消配送')
            .click().wait(700)
            cy.contains('确 定').click().wait(700)

        // 取消配送第三张配送单0103
        cy.contains('查看配送验收情况').click()
        cy.contains('-0103').click()
          .wait(1000)
          cy.contains('取消配送')
            .click().wait(700)
            cy.contains('确 定').click().wait(700)

        // 取消全部配送单
        cy.contains('查看配送验收情况').click().wait(700)
        cy.get('.number').click()
          .wait(1000)
          cy.contains('取消配送')                                                               // 取消配送单
            .click().wait(700)
            cy.contains('确 定').click()
    })

      it('配送验收',function(){
        // 进入配送验收模块
        cy.contains('配送验收').click().wait(500)
          cy.get('.ant-radio-group > :nth-child(2)').click()                                 // 选择今日待配送
          cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
          cy.contains('绿蔬').click()
          cy.get(':nth-child(2) > .ant-btn').click()                                         // 查询
          cy.contains('-010').click()
            cy.get('.productHead___1L6Zn > .ant-btn').click()
            cy.get('#clearSelect').type('牛奶')
            cy.contains('纯奶').click()
            cy.contains('保 存').click()                                                     // 保存
              cy.log('校验商品数量不能为0的限制')
              cy.get('[data-row-key="1"] > :nth-child(4) > :nth-child(1)')
                .click().wait(700)
                cy.log('删除数量为0的商品')
                cy.contains('确 定')
                  .click()
                  cy.contains('保 存').click()
                  cy.contains('返 回').click().wait(300)                                      // 返回到列表页
      
        // 待验收TAB
        cy.get('#rc-tabs-2-tab-2').click()
        cy.get('.ant-radio-group > :nth-child(1)').click()                                    // 筛选全部
          cy.contains('-010').click()
          cy.contains('手动验收').click()
            cy.contains('合格').click()
            cy.contains('不合格').click()                                                     // 不合格
            cy.contains('退货').click()                                                       // 退货
            cy.contains('商品变质破损').click()
              // cy.scrollTo(0, 700)                                                          // 操作滚动条
              cy.contains('超赞').click()                                                     // 配送评价
              cy.contains('验 收').click()
              cy.contains('确 定')
                .click().wait(700)                                                            // 完成验收
                cy.get('.ant-breadcrumb-link > a').click()                                    // 配送验收面包屑
    })

      it('结算中心',function(){
        cy.log(beforYesterday)
        cy.contains('结算中心').click()
          cy.contains('生成结算单').click()                                                    // 生成结算单
            cy.get('#supplierId').click()
            cy.contains('绿蔬').click()                                                       // 选择供货商及结算区间
              cy.get('#date').click()                                                         // 选择开始日期
                .wait(300)
              cy.contains(`${localYear}年`).click()
                cy.contains('2019').click()
                cy.contains('1月').click() //lastMouth
                cy.contains('1月').click()
                  cy.get('[title="2019-01-01"]').click()
                  cy.get('[title=' + localYMD + ']').click()
                  cy.get('.ant-card-extra > .ant-btn').click().wait(1000)                     // 查询
                  cy.get('.ant-pro-footer-bar-right > .ant-btn-primary')
                    .click().wait(1000)                                                        // 生成结算单

        // 发送&撤回结算单
        cy.get(':nth-child(1) > :nth-child(8) > .control-active').click()
          .wait(500)
            cy.contains('确 定').click().wait(1200)
        cy.contains('撤回').click()
            cy.contains('确 定').click()
          .wait(700)

        // 删除结算单
            cy.get(':nth-child(1) > :nth-child(8) > :nth-child(5)').click().wait(700)
        cy.contains('确 定').click().wait(700)
            cy.get(':nth-child(1) > :nth-child(8) > :nth-child(5)').click().wait(700)
        cy.contains('确 定').click().wait(700)
            cy.get(':nth-child(1) > :nth-child(8) > :nth-child(5)').click().wait(700)
        cy.contains('确 定').click().wait(700)
            cy.get(':nth-child(1) > :nth-child(8) > :nth-child(5)').click().wait(700)
        cy.contains('确 定').click().wait(700)
            cy.get(':nth-child(1) > :nth-child(8) > :nth-child(5)').click().wait(700)
        cy.contains('确 定').click().wait(700)
            cy.get(':nth-child(1) > :nth-child(8) > :nth-child(5)').click().wait(700)
        cy.contains('确 定').click().wait(700)

    })

      it('结算台账',function(){
        // 进入查询统计模块
        cy.contains('结算台账').click()
        cy.get('#date').click()                                                         // 选择开始日期
          .wait(300)
        cy.contains(`${localYear}年`).click()
          cy.contains('2019').click()
          cy.contains('1月').click() //lastMouth
          cy.contains('1月').click()
            cy.get('[title="2019-01-01"]').click()
            cy.get('[title=' + localYear + '-' + lastMouth + '-' + 15 + ']').click()
            cy.get('.ant-card-extra > .ant-btn').click().wait(1000)                     // 查询
        // 查询台账详情
        cy.contains('绿蔬集团').click()
          cy.contains('展开').click()          // 展开
          cy.get(':nth-child(1) > .ant-list-item > .parameterDetailList___2zlzy > :nth-child(2) > a')
            .click()                                                                    // 跳转到验收单详情

      })
    })
  })
 