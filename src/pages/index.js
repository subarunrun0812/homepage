import React from "react"
import Seo from "../components/seo"

const IndexPage = () => {
  const Head = () => <Seo title="Home" /> 

  return (
    <div>
      <Head />
      <h1>Hello World!</h1>
    </div>
  )
}

export default IndexPage
