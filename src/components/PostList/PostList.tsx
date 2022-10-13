import PostItem from 'components/PostItem/PostItem'
import React, { useMemo } from 'react'
import { PostListWrapper } from './PostList.styles'
import { PostListItemType } from 'types/Postitem.types'

interface PostListProps {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList = ({ posts, selectedCategory }: PostListProps) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )
  return (
    <PostListWrapper>
      {postListData.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
