import { GraphQLObjectType } from "graphql"
import {GraphQLJSON} from "graphql-type-json"

const createDoctorResponse = new GraphQLObjectType({
    name :"createDoctorResponse",
    fields :{
        data :{
            type : GraphQLJSON
        }
    }
})









export {
    createDoctorResponse
}