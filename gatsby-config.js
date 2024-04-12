/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SNOWGO`,
    siteUrl: `https://www.snowgo.com.br/`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SNOWGO`,
        short_name: `SNOWGO`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // Verifique se esse caminho está correto e o arquivo existe
      },
    },
    "gatsby-plugin-react-helmet",
    // Descomente a configuração abaixo se quiser desabilitar o plugin de minify para testes
    {
      resolve: "gatsby-plugin-minify",
      options: {
        // collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        // removeComments: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true,
      },
    },
    // "gatsby-plugin-purgecss", // Comente ou ajuste este plugin se estiver removendo CSS necessário
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
  ],
};
