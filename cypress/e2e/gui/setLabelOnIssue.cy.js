import { faker } from '@faker-js/faker'

describe('Set label on issue', () => {

    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5),
        }
    }
    const label = {
        name: `label-${faker.random.word()}`,
        description: faker.random.words(3),
        color: '#ffaabb',
    }
    beforeEach(() => {
        cy.login()
        cy.api_deleteProject()
        cy.api_createIssue(issue).then(res => {
            cy.api_createLabel(res.body.project_id, label)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${res.body.iid}`)
        })
    })
    it('successfully', () => {
        cy.gui_setLabelOnIssue(label)
        cy.get('.qa-labels-block').should('contain', label.name)
        cy.get('.qa-labels-block span')
            .should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
    })
})