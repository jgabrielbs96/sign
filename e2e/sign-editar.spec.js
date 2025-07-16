const { test } = require('../support')
const { insertDocOrder } = require('../support/inclusionOrderRequest')
const { rejectSignService } = require('../support/rejSignRequest')


test.beforeEach(async ({ page }) => {
    test.setTimeout(60000)

    const result = await insertDocOrder()
    console.log('Resultado do insertDocOrder:', result)

    await page.goTo.visit()
    await page.login.submit()
    await page.components.sideBarOpen('Processamento', 'Gerenciar Assinatura', 'Gerenciar Assinatura')
    await page.info.docFilter('S557GED', 'Teste ordem de assinatura')
    await page.edit.buttonEdit('Pausar Fluxo', 'Fluxo pausado com sucesso.')
    await page.edit.buttonEdit('Editar', 'Lista de Participantes')

})

test('editar ordem e ação signatario', async ({ page }) => {
    await page.edit.docEdit('2', '1', 'userName')
    await page.edit.confirmEdit('Registro alterado na lista')
    await page.edit.buttonEdit('Retomar Fluxo', 'Fluxo iniciado com sucesso.')

    const sign = await rejectSignService()
    console.log('Resultado do script Python:', sign)
})

test('não deve permitir todos os signatários com a ação vistar', async ({ page }) => {
    await page.edit.docEdit('2', '1', 'userName')
    await page.edit.docEdit('0', '1', 'userName')
    await page.edit.confirmEdit('Não é permitido cadastrar participantes apenas com ação Visar.')

    const sign = await rejectSignService()
    console.log('Resultado do script Python:', sign)
})




