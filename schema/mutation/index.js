import { GraphQLObjectType } from "graphql"
import {createDoctor} from './createDoctor.js'
const mutation = new GraphQLObjectType({
    name :"Mutation",
    fields :{
        createDoctor
    }
})






export {
    mutation
}