import MdxContent from "./page.mdx";
 // syntax hightlight用 CSS
 import "prismjs/themes/prism-tomorrow.css";

export default async function Page() {
  return (
    <article>
      <MdxContent />
    </article>
  )
}