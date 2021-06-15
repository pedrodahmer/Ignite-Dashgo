import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i+1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {   
                    return faker.date.recent(10)
                },
            })
        },

        seeds(server) {
            server.createList('user', 20)
        },

        routes(){
            this.namespace = 'api'
            this.timing = 750

            this.get('/Users')
            this.post('/Users')

            this.namespace = 'api'
            this.passthrough()
        }
    })

    return server
}