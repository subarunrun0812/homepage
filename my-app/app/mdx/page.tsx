import Page1 from "../../mdx/page.mdx";
import Page2 from "../../mdx/page2.mdx";

 // syntax hightlight用 CSS
 import "prismjs/themes/prism-tomorrow.css";

export default async function Page() {
  return (
    <article>
      <Page1 />
      <Page2 />
    </article>
  )
}