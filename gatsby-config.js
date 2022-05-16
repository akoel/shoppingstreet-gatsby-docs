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
        sections: ['About', 'Philosophy', 'Vendors', 'Disclaimer'],
        githubRepositoryURL: 'https://github.com/shoppingstreet-io',
        twitterAccount: 'shoppingstrt',
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: process.env.CRISP_WEBSITE_ID,
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
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
