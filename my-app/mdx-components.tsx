import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

function MyH1({ children }: { children: any }) {
    return <h1 style={{ backgroundColor: "lightblue" }}>{children}</h1>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
        h1: ({ children }) => <MyH1>{children}</MyH1>,
        // h2: ({ children }) => <h2 style={{ backgroundColor: "pink" }}>{children}</h2>,
        ...components,
    };
}