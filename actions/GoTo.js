const { expect } = require('@playwright/test')
export class GoTo {

    constructor(page) {
        this.page = page
    }
    
    async visit() {
        await this.page.goto('URL')
        const loginForm = this.page.locator('#logo')
        await expect(loginForm).toBeVisible()
    }
}