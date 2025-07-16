const { expect } = require('@playwright/test')
export class Login {

    constructor(page) {
        this.page = page
    }
    
    async submit() {
        await this.page.locator('#username').fill('usrId')
        await this.page.locator('#password').fill('password')
        await this.page.locator('#kc-login').click()
        await expect(this.page.getByText('Dashboards')).toBeVisible()
    }

    async submitSecond(mat, password) {
        await this.page.locator('#username').fill(mat)
        await this.page.locator('#password').fill(password)
        await this.page.locator('#kc-login').click()
        await expect(this.page.getByText('Dashboards')).toBeVisible()
    }

    async logoff() {
        await this.page.locator('.applogo').click()
        await this.page.getByRole('link', { name: '' }).click()
        await this.page.getByRole('link', { name: 'Sair' }).click()
        await this.page.locator('a').filter({ hasText: 'Realizar Logoff' }).click()
        await this.page.locator('#j_idt17').click()
    }
}