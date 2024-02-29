import React from "react"
import Header from "../components/header"
import {underHeader} from "../utils"

const fullNameStyle = {
  textAlign: "center",
}

export default function IndexPage()
{
  return (
    document.title = "SasakiSubaru's Blog",
    <div>
        <Header />
        <main style={underHeader}>
          <h1 style={fullNameStyle}>Sasaki Subaru</h1>
        </main>
    </div>
  )
}