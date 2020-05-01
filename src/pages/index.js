import React from "react"
import SEO from "../components/seo"
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { AboutMe } from '../components/AboutMe'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <Main />
    <AboutMe />
  </>
)

export default IndexPage
