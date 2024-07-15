import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LHF's Nav",
  description: "LHF's Nav",
  lang: 'zh-CN', //语言类型
  cleanUrls: true, //VitePress 将从 URL 中删除尾随.html
  /* markdown 配置 */
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
      logo: 'https://cdn.luogu.com.cn/upload/image_hosting/7b8zxy39.png', //显示在导航栏中网站标题之前的徽标文件。接受路径字符串或对象来为亮/暗模式设置不同的徽标。
      nav: [
        {
            text: '主页', link: '/'
        },
        {
            text: '博客', link: 'https://blog.lhf.us.kg/'
        },
    ],
	  sidebar: [
        {
          text: '',
          items:
		  [
                {
                    text: '博客' , link: '/blog/',
                    items: [
                        { text: '我的blog?' , link: '/blog/#我的blog', },
                    ]
                },

                {
                     text: '工具', link: '/tool/',
                     items: [
                         { text: '画板' , link: '/tool/#画板',  },
                         { text: '一言' , link: '/tool/#一言',  },
                         { text: '脑图' , link: '/tool/#脑图',  },
                         { text: '计算器' , link: '/tool/#计算器',  },
                         { text: '短连接' , link: '/tool/#短连接',  },
                         { text: '必应ai' , link: '/tool/#必应ai',  },
                         { text: 'markdown编辑器' , link: '/tool/#markdown编辑器',  },
                     ]
                },

                {
                     text: '其他', link: '/temp/'
                },

          ]
        }
      ],

      outline: {
          level: 'deep',
          label: '本页目录'
      },

      docFooter: {
          //文档页脚
          prev: '上一篇',
          next: '下一篇'
      },

      socialLinks: [
          //显示带有图标的社交帐户链接
          { icon: 'github', link: 'https://github.com/liaohengfeng' }
      ],

	  search: {
          provider: 'local'
      },

      lastUpdated: true,

      darkModeSwitchLabel: '模式', //可用于自定义深色模式开关标签。该标签仅显示在移动视图中。

      lastUpdatedText: '更新于', //上次更新文案

      editLink: {
          pattern: 'https://github.com/liaohengfeng/vitepress/edit/main/docs/:path',
          text: '在GitHub上编辑此页',
      }
  }
});
