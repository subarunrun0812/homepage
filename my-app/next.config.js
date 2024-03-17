// Prismでシンタックス・ハイライトしたい言語
// ERROR: prism-c++.js ファイルが存在しない
// import 'prismjs/components/prism-c.js';
// import 'prismjs/components/prism-c++.js';
// import 'prismjs/components/prism-c#.js';
// import 'prismjs/components/prism-bash.js';
// import 'prismjs/components/prism-python.js';

import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism';
import mdx from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withMDX = mdx({
  options: {
    // remarkとrehypeは指定しなくてよいとドキュメントに指定あり。
    // remarkParse,remarkRehype,rehypeStringifyは指定しなくても大丈夫。
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
