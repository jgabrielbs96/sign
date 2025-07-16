const { expect } = require('@playwright/test')
export class Edit {

    constructor(page) {
        this.page = page
    }

    async buttonEdit(button, message) {
        const editButton = this.page.locator(`a[title="${button}"]`).first()
        await editButton.click()
        await expect(this.page.getByText(`${message}`)).toBeVisible()
    }

    async docEdit(order, action, usr) {
        const row = this.page.locator('tr', { hasText: `${usr}` })
        await row.locator('a[title="Editar Participante"]').click()
        await this.page.waitForTimeout(1000)
        await this.page.selectOption('#usrSignAction', action)
        await this.page.locator('#usrSignOrderSignature').fill(order)
        await this.page.getByRole('button', {name:'Adicionar'}).click()
    }

    async confirmEdit(messagePattern) {
        await this.page.locator('#btnSave').click()
        await this.page.waitForTimeout(1000)
        await expect(this.page.getByText(`${messagePattern}`)).toBeVisible()
    }
}


