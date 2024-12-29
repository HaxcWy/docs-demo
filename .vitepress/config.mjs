import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小闯的项目",
  description: "感受一次心脏的跳动。",
  themeConfig: {
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', items:[
        {text: 'vue', link:'/markdown-examples'},
        {text: 'react', link:'/markdown-examples'}
      ] },
      { text: '后端', items:[
        {text: '学习资料', link:'/markdown-examples'},
        {text: '笔记', link:'/markdown-examples'}
      ] },
      { text: '面试题', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HaxcWy' }
    ],
    //底部配置
    footer:{
      copyright:"Copyright@ 2024 by xiaochuang"
    }
  }
})
