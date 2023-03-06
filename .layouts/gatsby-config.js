const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "irosyadi-wiki",
  shortName: "iwiki",
  description:
    "A Digital Twin Wiki",
  twitterName: "irosyadi",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://irosyadi-wiki.netlify.app",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        icon: "./static/logo.png",
        
		//sidebar-config
		sidebarDepth: 0,
        sidebarComponents: ["summary", "tag", "category"],  //"latest"
        //sidebarDefault: "auto", //"auto", "tag"
        
		
		contentMaxWidth: 1300,
        imageMaxWidth: 400,
        
		searchBody: true,
		
		//tags-config
		//tagText: "Tags",
        shouldShowTagGroupsOnIndex: false,
		//shouldSupportTags: true,
		 
		//latest-config
		//latestUpdatedText: "Recently Updated",
        //shouldShowLatestOnIndex: true,
        //shouldShowLastUpdated: true,
        //shouldSupportLatest: true,
        //defaultIndexLatestPostCount: 10,
		
		//summary-config
        summaryDepth: 2,
        summary1DepthIndent: true,
       	                   
        //categoryText: "Categories",
				
		defaultColorMode: "auto", //"auto", "night"
        nav: [
          {
            title: "Latest",
            url: "/latest/",
          },
          {
            title: "Github",
            url: "https://github.com/irosyadi/wiki-garden/",
          },
        ],
        
		//editurl-config
		//editUrlText: "Edit this page",
		editUrl:
          "https://github.com/irosyadi/wiki-garden/blob/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};

// reference: https://github.com/theowenyoung/gatsby-theme-primer-wiki