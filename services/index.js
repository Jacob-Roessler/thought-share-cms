import { gql } from 'graphql-request';
const grahpqlAPIToken = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const space_id = process.env.SPACE_ID;
const envrionment_id = process.env.ENVIRONMENT_ID;

const cacheTime = 0;

const makeRequest = async (query, revalidate_seconds, variables = {}) => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space_id}/environments/${envrionment_id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${grahpqlAPIToken}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: revalidate_seconds },
    }
  );

  const json = await response.json();
  return json.data;
};

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      postCollection {
        items {
          sys {
            firstPublishedAt
          }
          title
          slug
          excerpt
          featuredImage {
            url
            fileName
            width
            height
          }
          authorCollection(limit: 3) {
            items {
              name
              slug
              bio
              avatar {
                url
                fileName
                width
                height
              }
            }
          }
          categoriesCollection(limit: 10) {
            items {
              name
              slug
              classification
            }
          }
        }
      }
    }
  `;

  const result = await makeRequest(query, cacheTime);
  return result.postCollection.items;
};

export const getPost = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String!) {
      postCollection(limit: 1, where: { slug: $slug }) {
        items {
          sys {
            firstPublishedAt
          }
          title
          slug
          excerpt
          content {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on Post {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
          featuredImage {
            url
            fileName
            width
            height
          }
          authorCollection(limit: 3) {
            items {
              name
              slug
              bio
              avatar {
                url
                fileName
                width
                height
              }
            }
          }
          categoriesCollection(limit: 10) {
            items {
              name
              slug
              classification
            }
          }
        }
      }
    }
  `;

  const result = await makeRequest(query, cacheTime, { slug });
  return result.postCollection.items[0];
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categoryCollection {
        items {
          name
          classification
          slug
          linkedFrom {
            postCollection {
              total
            }
          }
        }
      }
    }
  `;
  const result = await makeRequest(query, cacheTime);
  let data = result.categoryCollection.items
    .map((category, index) => {
      return { ...category, count: category.linkedFrom.postCollection.total };
    })
    .sort((a, b) => b.count - a.count);

  return data;
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      postCollection(where: { categories: { slug_contains: $slug } }) {
        items {
          sys {
            firstPublishedAt
          }
          authorCollection(limit: 3) {
            items {
              avatar {
                fileName
                url
                width
                height
              }
              bio
              name
            }
          }
          slug
          title
          excerpt
          featuredImage {
            url
            fileName
            width
            height
          }
          categoriesCollection(limit: 10) {
            items {
              name
              slug
              classification
            }
          }
        }
      }
    }
  `;

  const result = await makeRequest(query, cacheTime, { slug });
  return result.postCollection.items;
};
