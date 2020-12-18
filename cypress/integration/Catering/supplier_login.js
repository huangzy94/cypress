

describe('供货商',function(){                                // 测试套件

    context('订单中心功能测试', function(){                       // 用以区分测试模块（describe(）的别名，可代替使用，行为方式相同）

      it('订单中心-全部订单',function(){                       // it 代表一个测试用例，it.skip代表跳过该用例，it.only代表仅执行该用例
        
        // 订单中心
        cy.contains('订单中心')
                .should('have.contain','订单中心').click().wait(500)
            cy.get('.ant-radio-group > :nth-child(1) > :nth-child(2)')
                .click().wait(300)
                cy.contains('D20').click()
                cy.get(':nth-child(1) > .ant-timeline-item-content > .detail___1HE1y > .detailContent___1L89z')
                    .click()
            })

        //配送验收
        it.only('配送验收-待启动',function(){                       // it 代表一个测试用例，it.skip代表跳过该用例，it.only代表仅执行该用例
        
            // 订单中心-全部订单
            cy.contains('配送验收')
                    .should('have.contain','配送验收').click().wait(500)
                cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)')
                    .click()
                    cy.get('.ant-radio-button-wrapper-checked > :nth-child(2)')
                        .click()
                        cy.contains('0101').click().wait(1000)
                        const stub = cy.stub()
                        cy.on('window:alert', stub)
                    cy
                        .get(':nth-child(3) > .ant-btn').click()
                        .then(()=>{
                            expect(stub.getCall(0)).to.be.calledWith('配送单中存在价格为0的商品，不能启动配送')
                        })

                })

        })
    })