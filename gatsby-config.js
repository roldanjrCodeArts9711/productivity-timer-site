module.exports = {
  siteMetadata: {
    title: `PRODUCTIVITY TIMER`,
    description: `Wonderful time management app based on Pomodoro Technique that will help boost your productivity.`,
    keywords: [
      "pomodoro",
      "pomodoro app",
      "pomodoro timer",
      "tomato",
      "tomato app",
      "tomato timer",
      "productivity",
      "productivity app",
      "productivity tool",
      "productivity timer",
      "productivity booster",
      "pomodoro technique app",
      "pomodoro technique timer",
      "time management",
      "time management app",
      "time management tool",
      "pomodoro principle app",
      "pomodoro principle timer",
    ],
    author: `Roldan Montilla Jr`,
    siteUrl: `http://roldanjrcodearts9711.github.io/productivity-timer-site`,
    twitterUsername: `@roldan_montilla`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PRODUCTIVITY TIMER`,
        short_name: `PRODUCTIVITY TIMER`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#12181b`,
        display: `standalone`,
        icon: `src/assets/images/logo-light.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
  ],
};
