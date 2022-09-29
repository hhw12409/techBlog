import React from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../styles/GlobalStyle'
import Introduction from 'components/Introduction/Introduction'
import Footer from 'components/Footer/Footer'
import CategoryList from 'components/CategoryList/CategoryList'
import PostList from 'components/PostList/PostList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
