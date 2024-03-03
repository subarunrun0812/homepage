import * as React from "react";
import Home from "./app/page";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

export default function App() {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <Home />
        </NextUIProvider>
    );
}