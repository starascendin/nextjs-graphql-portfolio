import { GraphQLClient, gql } from 'graphql-request';
import type { NextApiRequest, NextApiResponse } from 'next';

const djangoGraphqlApi = process.env.NEXT_PUBLIC_API_ENDPOINT || '';

export default async function handler() {
  // console.log("#Graphql exec NextApiRequest")
  const graphQLClient = new GraphQLClient(djangoGraphqlApi, {
    headers: {
    }
  });

  const promptCompletionsQuery = gql`
  query PromptCompletionsAll{
    promptcompletions {
      id
    }
  }
  `


  try {
    const result = await graphQLClient.request(promptCompletionsQuery);
    // console.log("#Graphql result", result)
    return result
    // return res.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
}
