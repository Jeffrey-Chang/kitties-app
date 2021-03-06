import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import compression from 'compression'
import { Engine } from 'apollo-engine'

const GRAPHQL_PORT = 3000;
const ENGINE_API_KEY = 'service:Jeffrey-Chang-6974:syF8SyhP2XLKUGCuZdshCA'

const engine = new Engine({
  engineConfig: {
    apiKey: ENGINE_API_KEY,
  },
  graphqlPort: GRAPHQL_PORT
});

engine.start();

const graphQLServer = express();

graphQLServer.use(engine.expressMiddleware());
graphQLServer.use(compression())
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema, tracing: true }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
