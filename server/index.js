import { ApolloServer } from 'apollo-server'
import db from './data'
import schema from './schema'
import resolvers from './resolvers'
// eslint-disable-next-line import/no-named-as-default

// ApolloServer needs a schema and some resolvers
const server = new ApolloServer({
    typeDefs: schema,
    // Use datasources to build graphql on top of an existing api
    // dataSources: () => {
    //     new youZouApi()
    // },
    resolvers,
    // eslint-disable-next-line no-unused-vars
    context: () => ({
        db,
    }),
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
