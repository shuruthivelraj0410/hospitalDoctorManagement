import { GraphQLObjectType } from "graphql";
import {getDoctors} from './getDoctors.js';
import {getSpecializedDoctor} from './getSpecializedDoctor.js'
const query = new GraphQLObjectType({
    name : "query",
    fields :{
        getDoctors,
        getSpecializedDoctor
    }
})

export {
    query
}