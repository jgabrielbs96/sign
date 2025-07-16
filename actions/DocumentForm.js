const { expect } = require('@playwright/test')
export class DocumentForm {

    constructor(page) {
        this.page = page
    }

    async docData(title, date){
        await this.page.locator('#listSignTitle').fill(title)
        await this.page.locator('#today_input').click()
        await this.page.getByRole('link', { name: `${date}`, exact: true }).click()
    }

    async docFilter(site, title) {
        await this.page.locator('#siteAC').selectOption(site)
        await this.page.locator('#listSignTitle').fill(title)
        await this.page.locator('#statusFlow').selectOption('Todos')
        await this.page.getByRole('button', {name:'Pesquisar'}).click()
    }
}