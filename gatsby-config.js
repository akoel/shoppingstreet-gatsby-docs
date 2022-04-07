module.exports = {
  siteMetadata: {
    siteUrl: "https://docs.shoppingstreet.io/",
    title: "Shoppingstreet | Documentation",
    author: `Shoppingstreet LLC`,
    description: "A webshop solution creator with Shopify, BigCommerce, Stripe, Gatsbyjs, Nextjs, Netlify, Vercel, Contentful and Mailchimp. We work on great SEO and stellar Lighthouse Scores.",
  },
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Shoppingstreet documentation",
        description: "Our philophy, our instructions, and a lot more...",
        siteUrl: "https://docs.shoppingstreet.io",
        navItems: [
          { title: 'Docs', url: '/docs/' },
          { title: 'Shoppingstreet', url: 'https://www.shoppingstreet.io' }
        ],
        sections: ['About', 'Philosophy', 'Vendors', 'Servicelevel'],
        githubRepositoryURL: 'https://github.com/akoel',
        twitterAccount: 'shoppingstreet-io',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-T7EMD5YLYP',
      },
    },
  ],
};
