import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

// import { Star } from '../components/shortcodes'
// const shortcodes = { Star } // we create an object containing all the components we'll need in our markdown

const Markdown = ({ children }) => {
  return (
    <div className="markdown">
      <MDXProvider>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Markdown