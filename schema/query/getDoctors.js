import { GraphQLInt } from 'graphql';
import {getDoctorResolver} from './getDoctorResolver.js';
import {getDoctorsResponse} from './getDoctorsResponse.js'

const getDoctors = {
    type : getDoctorsResponse,
    resolve : getDoctorResolver
}




export {
    getDoctors
}