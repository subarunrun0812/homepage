import Page1 from "../../public/mdx/page.mdx";
import Page2 from "../../public/mdx/page2.mdx";

 // syntax hightlight用 CSS
 import "prismjs/themes/prism-tomorrow.css";

export default async function Blog() {
  return (
    <article>
      <Page1 />
      <Page2 />
    </article>
  )
}