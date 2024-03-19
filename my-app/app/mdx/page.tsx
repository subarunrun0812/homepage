import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import Link from "next/link";
// syntax hightlight用 CSS
import "prismjs/themes/prism-tomorrow.css";

const DIR_PATH = 'public/blog/';

export default async function Blog() {
  const files = fs.readdirSync(DIR_PATH);

  return (
    <div>
      <h2>ブログ記事一覧</h2>
      <ul>
        {files.map(filename => (
          <li key={filename}>
            <Link href={`${DIR_PATH}${filename.replace(/\.mdx$/, '')}`}>
              {filename}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      {/* {files.map(filename => (
        <FileContent filename={filename} key={filename} />
      ))} */}
    </div>
  );
}



// const FileContent = async ({ filename }) => {
//   const rawContent = fs.readFileSync(DIR_PATH + filename, 'utf-8');
//   const lines = rawContent.split('\n');

//   return (
//     <div>
//       <h2>{filename}</h2>
//       {lines.map((line, lineIndex) => (
//         <div key={lineIndex}>
//           {filename.endsWith('.mdx') ? <MDXRemote {...line} components={components} /> : line}
//         </div>
//       ))}
//     </div>
//   );
// }