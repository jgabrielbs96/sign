const { test } = require('../support')

test('login com sucesso', async ({page}) => {
    await page.goTo.visit()
    await page.login.submit()

})