import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql"
import {createDoctorResponse} from './createDoctorResponse.js';
import { createDoctorResolver } from "./createDoctorResolver.js";
const createDoctor ={
    type :createDoctorResponse,
    args:{
     name :{
        type: new GraphQLNonNull(GraphQLString),
        desc :"name"
     },
     date :{
        type: new GraphQLNonNull(GraphQLInt),
        desc :"date"
     },
     emailId:{
        type: new GraphQLNonNull(GraphQLString),
        desc :"emailId"
     },
     field:{
        type: new GraphQLNonNull(GraphQLString),
        desc :"field"
     }
    },
    resolve : createDoctorResolver
}

export {
    createDoctor
}