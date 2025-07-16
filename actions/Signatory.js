const { expect } = require('@playwright/test')

export class Signatory {

    constructor(page) {
        this.page = page
    }

    async intSign(usr, order, action) {
        await this.page.locator('#pesquisar').click()
        const mat = await this.page.locator('#matrSearch')
        await mat.waitFor({ state: 'visible' })
        await mat.fill(usr)
        await this.page.locator('#search').click()
        const usrInc = await this.page.getByRole('button', { name: 'Incluir' })
        await usrInc.click()
        await this.page.locator('#usrSignOrderSignature').fill(order)
        await this.page.locator('#listSignAction').selectOption(action)
        const addSign = this.page.getByRole('button', { name: 'Adicionar' })
        await addSign.waitFor({ state: 'visible', timeout: 5000 })
        await addSign.click()
    }

    async extSign(cpf, order, action) {
        await this.page.locator('#listSignCpf').fill(cpf)
        await this.page.locator('#usrSignExt').click()
        await this.page.locator('#usrSignOrderSignature').fill(order)
        await this.page.locator('#listSignAction').selectOption(action)
        await this.page.getByRole('button', { name: 'Adicionar' }).click()
    }

    async addSign(mat) {
        await this.page.locator('#usr_input').fill(mat)
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.press('Tab')
        await this.page.getByRole('button', { name: 'Adicionar' }).click()
    }
}

