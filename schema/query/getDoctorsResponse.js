import { GraphQLInt, GraphQLObjectType } from "graphql"
import {GraphQLJSON} from "graphql-type-json"

const getDoctorsResponse = new GraphQLObjectType({
    name :'getDoctorsResponse',
    fields :{
        data :{
            type : GraphQLJSON
        },
        count :{
            type : GraphQLInt
        }
    }
})

export {
    getDoctorsResponse
}