const { test: base, expect } = require('@playwright/test')

const { Components } = require('../actions/Components')
const { DocumentForm } = require('../actions/DocumentForm')
const { Login } = require('../actions/Login')
const { GoTo } = require('../actions/GoTo')
const { Import } = require('../actions/Import')
const { Signatory } = require('../actions/Signatory')
const { Signature } = require('../actions/Signature')
const { Edit } = require('../actions/Edit')
const { SaveDocument } = require('../actions/SaveDocument')
const { Dossie } = require('../actions/Dossie')


const test = base.extend({
    page: async ({ page }, use) => {
        await use({
            ...page,
            login: new Login(page),
            goTo: new GoTo(page),
            import: new Import(page),
            components: new Components(page),
            sign: new Signatory(page),
            signature: new Signature(page),
            edit: new Edit(page),
            info: new DocumentForm(page),
            save: new SaveDocument(page),
            dossie: new Dossie(page)
        })
    }
})

export { test, expect }