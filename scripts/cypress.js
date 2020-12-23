
//引入本地模块,自定义测试报告
const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

async function runTests() {
     await fse.remove("reports")
     //移除之前生成的报告目录
    await fse.remove('mochawesome-report')
    const { totalFailed } = await cypress.run()
    const jsonReport = await merge({
        files:['./mochawesome-report/*.json']
    })
    await generator.create(jsonReport)
    process.exit(totalFailed)
}
runTests()
