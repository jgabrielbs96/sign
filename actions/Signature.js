const { expect } = require('@playwright/test')
export class Signature {

    constructor(page) {
        this.page = page
    }

    async toSign(title, system) {
        await this.page.locator('#listSignTitle').fill(title)
        await this.page.locator('#pesquisar').click()
        await this.page.locator(`tr:has-text("${system}") i[title="Assinar arquivo"]`).click()
        const toAccept = this.page.getByRole('button', { name: 'Concordo' })
        await toAccept.click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
    }

    async disagree(title, system) {
        await this.page.locator('#listSignTitle').fill(title)
        await this.page.locator('#pesquisar').click()
        await this.page.locator(`tr:has-text("${system}") i[title="Assinar arquivo"]`).click()
        await this.page.getByRole('button', { name: 'Discordo' }).click()
        await this.page.locator('#reasonRemove').fill('Teste Automatizado')
        await this.page.getByRole('button', { name: 'Salvar' }).click()
    }

    async toSignOrder(title, system) {
        await this.page.locator('#listSignTitle').fill(title)
        await this.page.locator('#pesquisar').click()
        await this.page.locator(`tr:has-text("${system}") i[title="Assinar arquivo"]`).click()
    }

    async toView(title, system) {
        await this.page.locator('#listSignTitle').fill(title)
        await this.page.locator('#pesquisar').click()
        await this.page.locator(`tr:has-text("${system}") i[title="Assinar arquivo"]`).click()
        await this.page.getByRole('button', { name: 'Visar' }).click()
        await this.page.getByRole('button', { name: 'Sim' }).click()
    }
}