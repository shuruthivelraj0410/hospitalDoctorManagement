import { GraphQLNonNull, GraphQLString } from "graphql";
import {getSpecializedDoctorResponse} from './getSpecializedDoctorResponse.js';
import {getSpecializedDoctorResolver} from './getSpecializedDoctorResolver.js'
const getSpecializedDoctor = {
    type :getSpecializedDoctorResponse,
    args :{
        doc_field :{
            type :new GraphQLNonNull(GraphQLString)
        }
    },
    resolve : getSpecializedDoctorResolver
}




export {
    getSpecializedDoctor
}