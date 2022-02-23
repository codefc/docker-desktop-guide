const { description } = require('../../package')
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Code FC - Docker',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    base: '/docker-desktop-guide/',
    editLinkText: '',
    lastUpdated: false,
    sidebarDepth: 0,
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Windows',
        link: '/windows/'
      }

    ],
    sidebar:[
      '/',
        {
          title: 'Windows',
          collapsable: false,
          children: [
            ['windows/', 'Pré-requisitos'],
            ['windows/docker-subsystem', 'Docker no WSL2'],
            ['windows/podman', 'Podman']
          ]
        },
        {
          title: 'Linux',
          path: '/linux/'
        },
        {
          title: 'MacOs',
          path: '/macos/'
        }     
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['demo-code', {

    }],
    ['vuepress-plugin-code-copy', true]
  ]
}
