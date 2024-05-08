3 apis : 
query : 
 getDoctors,
 getSpecializedDoctor
mutation : 
   createDoctor

stacks used : 
1. graphql -> 14 as apis and api testing tool
2. graphql-playground-middleware --> for getting playground ui
3. express-graphql --> to embedd /graphql to express middleware by using graphqlHTTP()
4. graphql-middleware --> to embedd the created schema , authorize and authenticate the created query , mutationd from users
5. sequelize --> object relation mapping from mysql databases where datas are fetched
6. redis caching mechanishm to store and get datas from frequently used query ..we set expiry too. --> reducing time complexity


Graphql : 

Graphql can be used in 2 ways : 
By using its own graphql server through apollo server package 
Or by connecting it with express and being a middleware in express server runs
I prefer 2 options because I can connect db , redis all through graphql this way.

Graphql + nodejs + express : 
Install graphql 14 coz graphql 16 get conflicted with express-graphql 1 while installing 
Express-graphql is a middleware.With express-graphql, you can easily create a route in your Express.js application to handle GraphQL queries, mutations, and subscriptions. It abstracts away many of the complexities of setting up a GraphQL server, such as parsing GraphQL queries, validating them against a schema, and executing the requested operations.
Express-graphql provides graphqlHttp .is a middleware function for handling GraphQL requests in Node.js HTTP servers. It's often used with frameworks like Express.js.
Important package of graphql is buildSchema which is responsible for getting schema (structure datas) .

What happens when the root value is declared global in graphqlHTTP() ? 

When the root value is declared as global in a GraphQL server, it means that this root value will be used for resolving all fields in the schema that don't have a specific resolver defined.
In a typical GraphQL setup, resolver functions are provided for each field in the schema. However, if a resolver is not provided for a specific field, GraphQL will look for a default resolver, often referred to as the "root resolver" or "default resolver," to resolve that field. This default resolver is where the global root value comes into play.
When you declare a global root value, it acts as the default value for any resolver that doesn't specify its own value. This can be useful for providing common data or functionality across multiple fields without having to define a resolver for each one individually.
To use playground addons : 

The purpose of graphql-playground-middleware-express (formerly known as expressPlayground) is to provide an easy way to integrate GraphQL Playground into an Express.js application.
GraphQL Playground is a powerful IDE for interacting with GraphQL APIs. It offers features such as syntax highlighting, query autocompletion, schema exploration, and the ability to manage HTTP headers. It's an invaluable tool for developers during the development and testing phases of a GraphQL API.
The middleware graphql-playground-middleware-express simplifies the process of adding GraphQL Playground to an Express.js server. It takes care of serving the Playground interface to clients and provides configuration options to specify the endpoint of the GraphQL API.
By including this middleware in your Express.js application, you can quickly set up a route to access GraphQL Playground, allowing developers to easily explore and interact with your GraphQL API in a user-friendly environment.
In summary, the purpose of graphql-playground-middleware-express is to enhance the development experience by integrating GraphQL Playground seamlessly into Express.js applications, providing developers with a powerful tool for working with GraphQL APIs.
Purpose of graphql-middleware ?

GraphQL middleware serves as a flexible and powerful tool for enhancing the capabilities of GraphQL servers. The purpose of GraphQL middleware is to intercept and modify incoming GraphQL queries, mutations, or subscriptions before they are executed by the resolver functions, or to perform additional tasks such as authentication, authorization, validation, logging, caching, and more.

Procedure : 
1. To get http://localhost:4500/playground playground ide in browser 



import dotenv from 'dotenv';
import express from 'express';
import { expressPlayground } from 'graphql-playground-middleware';
import { graphqlHTTP } from 'express-graphql';


dotenv.config();
const port = process.env.PORT;
const app = express();


app.get('/playground',expressPlayground({
   endpoint :"/shuruthi"
}))
app.listen(port,(err)=>{
   console.log('listening to port : ',process.env.PORT)
})
