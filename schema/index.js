import { GraphQLSchema } from "graphql"
import {query} from './query/index.js'
import {mutation} from './mutation/index.js'
const schema = new GraphQLSchema({
    query : query,
    mutation : mutation
})



export {
 schema
}