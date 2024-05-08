import { GraphQLObjectType } from "graphql"
import {GraphQLJSON} from "graphql-type-json"

const getSpecializedDoctorResponse = new GraphQLObjectType({
    name :"getSpecializedDoctorResponse",
    fields:{
        data :{
            type : GraphQLJSON
        }
    }
})

export {
    getSpecializedDoctorResponse
}