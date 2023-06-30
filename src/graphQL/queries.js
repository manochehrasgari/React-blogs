const { gql } = require("@apollo/client");

const GET_BLOGS_INFO = gql`

query {
  posts {
    author {
      name
      avatar {
        url
      }
    }
    id
    slug
    title
    coverPhoto {
      url
    }
  }
}


`


const GET_AUTHORS_INFO = gql`

query  {
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}


`

const GET_AUTHOR_INFO = gql`
query getAuthorData ($slug: String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    id
    name
    field
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}

`


const GET_POST_DATA = gql`
query getPostData ($slug: String!) {
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      name
      field
    }
    content
    title
    coverPhoto {
      url
    }
  }
}

`

const GET_POSTS_COMMENTS = gql`
query getComment ($slug: String!) {
  comments(where: {post: {slug: $slug}}) {
      id
      name
      text
    }
  }

`


export {GET_BLOGS_INFO ,GET_AUTHORS_INFO ,GET_AUTHOR_INFO ,GET_POST_DATA,GET_POSTS_COMMENTS} 