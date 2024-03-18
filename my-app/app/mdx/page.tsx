import Page1 from "../../public/mdx/page.mdx";
import Page2 from "../../public/mdx/page2.mdx";
// import { MDXRemote } from 'next/mdx';
// import { components } from '../../path/to/mdx-components';
import fs from 'fs';
import Link from "next/link";
// syntax hightlight用 CSS
import "prismjs/themes/prism-tomorrow.css";

const DIR_PATH = 'public/blog';

export default async function Blog() {
  // debug用
  // const path = require('path');
  // const absolutePath = path.resolve(DIR_PATH);
  // console.log("Absolute path:", absolutePath); 
  const files = fs.readdirSync(DIR_PATH);

  return (
    <div>
      <h2>ブログ記事一覧</h2>
      <p>
      files: {files}
      </p>
      {/* <ul>
        {files.map(filename => (
          <li key={filename}>
            <Link href={`/blog/${filename.replace(/\.mdx$/, '')}`}>
              {filename}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      {files.map(filename => (
        <FileContent filename={filename} key={filename} />
      ))} */}
    </div>
  );
}

const FileContent = async ({ filename }) => {
  const rawContent = fs.readFileSync(DIR_PATH + filename, 'utf-8');
  const lines = rawContent.split('\n');

  return (
    <div>
      <h2>{filename}</h2>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {filename.endsWith('.mdx') ? <MDXRemote {...line} components={components} /> : line}
        </div>
      ))}
    </div>
  );
}