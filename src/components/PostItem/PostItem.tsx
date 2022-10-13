import React from 'react'
import {
  PostItemWrapper,
  ThumbnailImage,
  PostItemContent,
  Title,
  Date,
  Category,
  CategoryItem,
  Summary,
} from './PostItem.styles'
import { PostFrontmatterType } from 'types/Postitem.types'

interface PostItemProps extends PostFrontmatterType {
  link: string
}

const PostItem = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: PostItemProps) => {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
