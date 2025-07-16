const { test } = require('../support')
const { toSignService } = require('../support/toSignRequest')


test.describe('Inclusão Manual de documento', () => {
    test.beforeEach(async ({ page }) => {
        test.setTimeout(60000)
        await page.goTo.visit()
        await page.login.submit()
        await page.components.sideBarOpen('Processamento', 'Inclusão Manual', 'Assinatura Eletrônica - Inclusão Manual')
    })

    test('inclusão manual simples', async ({ page }) => {
        await page.info.docData('Inclusão Manual simples', 30)
        await page.import.docImport('Testes.pdf')
        await page.components.toast('O Lote foi importado com sucesso.')
        await page.sign.intSign('userId', '0', '0')
        await page.components.toast('Registro incluído na lista.')
        await page.save.docValid('button', 'Sim')   // button - Sim  | link - Cancelar  //
        await page.components.toast('Registro incluído com sucesso.')

        // const sign = await toSignService()
        // console.log('Resultado do script Python:', sign)
    })

    test('inclusão manual para dossie', async ({ page }) => {
        await page.info.docData('Inclusão para Dossiê', 30)
        await page.dossie.folder('310346208', '31122025')
        await page.import.docImport('Testes.pdf')
        await page.components.toast('O Lote foi importado com sucesso.')
        await page.sign.intSign('usrId', '0', '0')
        await page.components.toast('Registro incluído na lista.')
        await page.save.docValid('button', 'Sim')
        await page.components.toast('Registro incluído com sucesso.')

        const sign = await toSignService()
        console.log('Resultado do script Python:', sign)
    })

test.describe('deve garantir que os campos obrigatórios sejam preenchidos', () => {

    test('não deve permitir cadastrar documento sem título', async ({ page }) => {
        await page.info.docData('', 30)
        await page.import.docImport('Testes.pdf')
        await page.components.toast('O Lote foi importado com sucesso.')
        await page.sign.intSign('userId', '0', '0')
        await page.components.toast('Registro incluído na lista.')
        await page.save.saveOnlyView()
        await page.components.toast('Campo Título do Documento é obrigatório.')
    })

    test('não deve permitir cadastrar documento sem arquivo', async ({ page }) => {
        await page.info.docData('Teste', 30)
        await page.sign.intSign('userId', '0', '0')
        await page.components.toast('Registro incluído na lista.')
        await page.save.saveOnlyView()
        await page.components.toast('Campo Documento é obrigatório.')
    })

    test('não deve permitir cadastrar documento com signatário somente com a ação vistar', async ({ page }) => {
        await page.info.docData('Teste', 30)
        await page.import.docImport('Testes.pdf')
        await page.components.toast('O Lote foi importado com sucesso.')
        await page.sign.intSign('userId', '0', '1')
        await page.components.toast('Registro incluído na lista.')
        await page.save.saveOnlyView()
        await page.components.toast('Não é permitido cadastrar participantes apenas com ação Visar.')
    })

    test('não deve permitir cadastrar documento sem signatário ', async ({ page }) => {
        await page.info.docData('Teste', 30)
        await page.import.docImport('Testes.pdf')
        await page.components.toast('O Lote foi importado com sucesso.')
        await page.save.saveOnlyView()
        await page.components.toast('Campo Destinatário é obrigatório.')
    })
    })
})


