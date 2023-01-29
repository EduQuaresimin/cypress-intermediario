import { faker } from '@faker-js/faker'

describe('Create Project', () => {

    beforeEach(() => {
        cy.api_deleteProject()
    })

    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        cy.api_createProject(project)
            .then(res => {
                expect(res.status).to.eq(201)
                expect(res.body.name).to.eq(project.name)
                expect(res.body.description).to.eq(project.description)
            })    
    })
})
