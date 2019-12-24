/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Tech Skillo', // Title for your website.
  tagline: 'Learn Writing Linux Kernel Device Drivers',
  url: 'https://ldd.techskillo.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'linux-kernel-device-drivers',
  organizationName: 'hoodaajay99',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: '00-Course-Introduction/course-introduction', label: 'START THE COURSE'},
    // {page: 'help', label: 'HELP'},
    {blog: true, label: 'BLOG'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#6A1B9A',
    secondaryColor: '#8E24AA',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} TechSkillo.com`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  // customDocsPath: '../c_programming_course'

  // It will go into a CNAME file when your site is built.
  cname: 'ldd.techskillo.com',

  // Google Analytics tracking ID to track page views.
  gaTrackingId: "UA-46809639-2",
  // Use global site tags (gtag.js)
  // send event data to all - Google Ads, Campaign Manager, Display & Video 360, Search Ads 360, and Google Analytics
  gaGtag: true,

  // Shows on Home Page
  tagline: "Linux Kernel Device Drivers",
  //disableTitleTagline: true,

  // Sets edit on each page with link to markdown file on GitHub
  editUrl: "https://github.com/hoodaajay99/linux-kernel-device-drivers/blob/master/docs/",

  // scroll to top button at the bottom of your site.
  // scrollToTop: true
  // scrollToTopOptions

  // AJAY TODO:
  // manifest
  // ogImage
  // scripts
  // separateCss
  // stylesheets
  // Facebook
  // twitter
  // twitterUsername
  // twitterImage
  // Comments
  


};

module.exports = siteConfig;
