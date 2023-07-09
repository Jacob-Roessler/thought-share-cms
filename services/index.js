import { gql } from 'graphql-request';
const grahpqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const cacheTime = 900;

const makeRequest = async (query, revalidate_seconds, variables = {}) => {
  const response = await fetch(grahpqlAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: revalidate_seconds },
  });

  const json = await response.json();
  return json.data;
};

export const getPosts = async () => {
  const query = gql`
    query GetAllPosts {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
                fileName
                width
                height
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
              fileName
              width
              height
            }
            categories {
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
  return result.postsConnection.edges;
};

export const getPost = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
            fileName
            width
            height
          }
        }
        createdAt
        slug
        title
        excerpt
        content {
          html
        }
        featuredImage {
          url
          fileName
          width
          height
        }
        categories {
          name
          slug
          classification
        }
      }
    }
  `;

  const result = await makeRequest(query, cacheTime, { slug });
  return result.post;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        id
        name
        slug
        classification
        posts(orderBy: publishedAt_ASC) {
          id
        }
      }
    }
  `;
  const result = await makeRequest(query, cacheTime);
  let data = result.categories.map((category, index) => {
    return { ...category, count: category.posts.length };
  });

  return data;
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      posts(where: { categories_some: { _search: $slug } }) {
        author {
          bio
          name
          id
          photo {
            url
            fileName
            width
            height
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
          fileName
          width
          height
        }
        categories {
          name
          slug
          classification
        }
      }
    }
  `;

  const result = await makeRequest(query, cacheTime, { slug });
  return result.posts;
};
