const { expect } = require('@playwright/test')
export class SaveDocument {

    constructor(page) {
        this.page = page
    }

    async docValid(type, option) {
        await this.page.getByRole('button', {name: 'Validar Documento'}).click()
        const docSave = this.page.getByRole('button', {name: 'Salvar'})
        await docSave.waitFor({ state: 'visible', timeout: 5000 })
        await docSave.click()
        await this.page.getByRole(`${type}`, {name: `${option}`}).click()
    }

    async saveOnlyView() {
        await this.page.getByRole('button', {name: 'Validar Documento'}).click()
    }
}