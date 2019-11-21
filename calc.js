const webdriver = require('selenium-webdriver')
const By = webdriver.By

async function testCase() {
    const driver = new webdriver.Builder().forBrowser('chrome').build()

    await driver.get('file:///home/dnyaneshwar/Desktop/asdm_19084082018/ASDM%20Exam%20Data/Selenium/mycalculator.html')
    await driver.sleep(500)
    const expected = 12
    
    await driver.findElement(By.id('value1')).sendKeys('100')
    await driver.findElement(By.id('value2')).sendKeys('2')
    await driver.sleep(1000)
    await driver.findElement(By.id('addition')).click()
    await driver.sleep(1000)
    await driver.findElement(By.id('calculate')).click()
    const actual = await driver.findElement(By.id('result')).getAttribute('value')
    if (expected == actual) 
    {
        console.log('addition: SUCCESS')
    } else 
    {
        console.log(`addtion: FAILED [expected: ${expected}, actual: ${actual}]`)
    }

    await driver.sleep(500)
    driver.quit()

}

testCase()
