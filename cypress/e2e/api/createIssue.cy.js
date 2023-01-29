import { faker } from '@faker-js/faker'

describe('Create issue', () => {

    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5),
        }
    }
    beforeEach(() => {
        cy.api_deleteProject()
    })
    it('successfully', () => {
        
        cy.api_createIssue(issue).then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.title).to.eq(issue.title)
            expect(res.body.description).to.eq(issue.description)
        })        
    })
})