// ブログのRSSフィードを生成する
const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Subaru Blog',
    site_url: 'https://yoursite.com',
    feed_url: 'https://yoursite.com/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))
  const allPosts = []
  await Promise.all(
    //nameにはpostsで取得したファイル名が入る
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        // 複数のパス文字列を結合する
        path.join(__dirname, '..', 'pages', 'posts', name)
      )
      // md記事の読み込み
      const frontmatter = matter(content)

      allPosts.push({
        title: frontmatter.data.title,
        url: '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  // 日付順にソート
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  // RSSフィードの作成
  allPosts.forEach((post) => {
    feed.item(post)
  })
  // XMLファイルの出力
  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
