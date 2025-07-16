const { expect } = require('@playwright/test')
export class Components {

    constructor(page) {
        this.page = page
    }

    async sideBarOpen(menu, menuItem, menuTitle){
        await this.page.locator('a.sidebar-open-button').click()
        await this.page.getByText(menu).click()
        await this.page.getByText(menuItem).click()
        const title = this.page.locator('h1.title')
        await expect(title).toHaveText(menuTitle)
    }

    async toast(message) {
        const alert = this.page.locator('.toast-message')
        await expect(alert).toContainText(message)
        await expect(alert).not.toBeVisible({ timeout: 0 })
    }

    async toastOrder(message) {
        const alert = this.page.locator('.ui-growl-title')
        await expect(alert).toContainText(message)
    }
}