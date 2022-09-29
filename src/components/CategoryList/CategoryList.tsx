import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export interface CategoryListProps {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자
    [key: string]: number
  }
}

interface CategoryItemProps {
  active: boolean
}

interface GatsbyLinkProps extends CategoryItemProps {
  children: ReactNode
  className?: string
  to: string
}

const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          key={name}
          active={name === selectedCategory}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`

// const CategoryItem = styled(Link)<{ active: boolean }>`
//   margin-right: 20px;
//   padding: 5px 0;
//   font-size: 18px;
//   font-weight: ${props => (props.active ? '800' : '400')};
//   cursor: pointer;
//   &:last-of-type {
//     margin-right: 0;
//   }
// `

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${props => (props.active ? '800' : '400')};
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`
