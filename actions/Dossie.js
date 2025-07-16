const { expect } = require('@playwright/test')
export class Dossie {

    constructor(page) {
        this.page = page
    }

    async folder(dossie, date) {
        await this.page.getByRole('button', {name: 'Pesquisar Dossiê Existente'}).click()
        await this.page.locator('#dossieSearch').fill(dossie)
        await this.page.locator('#btnSearchDossie').click()
        const search = this.page.getByRole('button', {name: 'Selecionar'})
        await search.waitFor({ state: 'visible', timeout: 5000 })
        await search.click()
        await this.page.locator('#j_idt153').click()
        await this.page.getByText('INSUFICIÊNCIA DE FUNDOS').click()
        const dateKey = await this.page.locator('#keyDefNameParent')
        await dateKey.waitFor({ state: 'visible', timeout: 5000 })
        await dateKey.fill(date)
    }
}