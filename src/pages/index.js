import React from "react"
import Header from "../components/header"
import {underHeader} from "../utils"

export default function IndexPage()
{
  return (
    document.title = "SasakiSubaru's Blog",
    <div>
        <Header />
        <main style={underHeader}>
          <h1 style={{ textAlign: "center" }}>Sasaki Subaru</h1>
        </main>
    </div>
  )
}