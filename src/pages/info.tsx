import React from 'react'
import { graphql } from 'gatsby'

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPageProps) => {
  return (
    <div>
      {title} {description} {author}
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
