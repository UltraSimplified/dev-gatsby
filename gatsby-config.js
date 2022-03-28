module.exports = {
  siteMetadata: {
    title: "Gatsby development FTW!",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-remark-images",
    "gatsby-remark-autolink-headers",
    /*{
      resolve: `gatsby-source-wordpress`,
      options: {
      // the only required plugin option for WordPress is the GraphQL url.
      url:
        process.env.WPGRAPHQL_URL ||
        `https://doinacornell.com/graphql`,
      }
    },*/
  ],
};
