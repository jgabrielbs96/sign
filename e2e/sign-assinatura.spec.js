const { test } = require('../support')
const { insertDoc } = require('../support/inclusionRequest')
const { insertDocOrder } = require('../support/inclusionOrderRequest')
const { rejectSignService } = require('../support/rejSignRequest')


test.describe('Assinatura de documentos', () => {
    test.setTimeout(60000)
    test.beforeEach(async ({ page }) => {
        const result = await insertDoc()
        console.log('Resultado do insertDoc:', result)

        await page.goTo.visit()
        await page.login.submit()
        await page.components.sideBarOpen('Processamento', 'Minhas Assinaturas Pendentes', 'Minhas Assinaturas Pendentes')
    })

    test('assinar documento', async ({ page }) => {
        await page.signature.toSign('Teste de assinaturas', 'S557GED')
        await page.components.toast('Operação realizada com sucesso!')
    })

    test('recusar assinatura', async ({ page }) => {
        await page.signature.disagree('Teste de assinaturas', 'S557GED')
    })
})

test('ordem de assinatura', async ({ page }) => {
    test.setTimeout(60000)
    const result = await insertDocOrder()
    console.log('Resultado do script Python:', result)

    await page.goTo.visit()
    await page.login.submitSecond('user', 'password')
    await page.components.sideBarOpen('Processamento', 'Minhas Assinaturas Pendentes', 'Minhas Assinaturas Pendentes')
    await page.signature.toSignOrder('Teste ordem de assinatura', 'S557GED')
    await page.components.toastOrder('O documento está pendente de assinatura de algum signatário de ordem prioritária, favor aguardar!')

    const sign = await rejectSignService()
    console.log('Resultado do script Python:', sign)
})

test.describe('Visto de documentos', () => {
    test.beforeEach(async ({ page }) => {
        test.setTimeout(60000)

        await page.goTo.visit()
        await page.login.submit()
        await page.components.sideBarOpen('Processamento', 'Inclusão Manual', 'Assinatura Eletrônica - Inclusão Manual')
        await page.info.docData('Teste para visto de documentos', 30)
        await page.import.docImport('Testes.pdf')
        await page.sign.intSign('user', '0', '1')
        await page.sign.intSign('user', '0', '0')
        await page.save.docValid('button', 'Sim')
        await page.components.toast('Registro incluído com sucesso.')
        await page.components.sideBarOpen('Processamento', 'Minhas Assinaturas Pendentes', 'Minhas Assinaturas Pendentes')
    })

    test('vistar documento', async ({ page }) => {
        await page.signature.toView('Teste para visto de documentos', 'AMBIENTE DE DESENVOLVIMENTO ORGANIZACIONAL')
        await page.components.toast('Operação realizada com sucesso!')
        const sign = await rejectSignService()
        console.log('Resultado do script Python:', sign)
    })

    test('recusar visto', async ({ page }) => {
        await page.signature.disagree('Teste para visto de documentos', 'AMBIENTE DE DESENVOLVIMENTO ORGANIZACIONAL')
        // await page.components.toast('Operação realizada com sucesso!')
    })
})



