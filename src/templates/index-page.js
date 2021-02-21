import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Splash from '../components/Splash';

export const IndexPageTemplate = (props) => (
  <div>
    <div className="Content">
      <div className="Landing">
        <Splash title={props.title} intro={props.intro} />
      </div>
      <BlogRoll/>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        intro
      }
    }
  }
`
