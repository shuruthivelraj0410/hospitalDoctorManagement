import express from 'express';
import { getCache } from './queries/redis/cachingMemory.js';
import { expressPlayground } from 'graphql-playground-middleware';
import { graphqlHTTP } from 'express-graphql';
import { applyMiddleware } from 'graphql-middleware';
import {schema} from './schema/index.js'

const app = express();
(async ()=>{
    const cacheDate = await getCache("last Cached Preload time")
    console.log(cacheDate)
})();
const schemaMiddleware = applyMiddleware(schema)

app.use('/graphql',(req,res)=>{
    graphqlHTTP({
    graphiql : true,
    schema : schemaMiddleware,
    rootValue : global
    }
    )(req,res)})
app.get('/playground',expressPlayground({
    endpoint : '/graphql'
}))
app.listen(3000,()=>{
    console.log("listening to port 3000")
})