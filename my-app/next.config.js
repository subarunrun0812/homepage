
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism';
import mdx from "@next/mdx"
// Prismでシンタックス・ハイライトしたい言語
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-bash.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withMDX = mdx({
  options: {
    // remarkとrehypeは指定しなくてよいとドキュメントに指定あり。
    // remarkParse,remarkRehype,rehypeStringifyは指定しなくても大丈夫。
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
