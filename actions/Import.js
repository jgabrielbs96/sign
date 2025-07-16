const { expect } = require('@playwright/test')
export class Import {

    constructor(page) {
        this.page = page
    }
    async docImport(file) {
        await this.page.locator('#btnImport').click()
        await this.page.locator('#fileUploadComponent_input').setInputFiles(file)
        const closeButton = this.page.locator('#j_idt217')

        try {
            await closeButton.waitFor({ state: 'visible', timeout: 5000 })
            await closeButton.click()
        } catch (error) {
        }
    }
}

