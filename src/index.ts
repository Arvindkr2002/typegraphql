import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import Redis from "ioredis";

const redis = new Redis();

import { RegisterResolver } from "mutations/register";
import { LoginResolver } from "mutations/login";
import { PostResolver } from "mutations/post";
import { DPostResolver } from "mutations/delpost";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [PostResolver, RegisterResolver, LoginResolver,DPostResolver]
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    })
  );

  apolloServer.applyMiddleware({ app });

main();