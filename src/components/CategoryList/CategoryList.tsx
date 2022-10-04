import React from 'react'
import { CategoryListWrapper, CategoryItem } from './CategoryList.styles'

export interface CategoryListProps {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자
    [key: string]: number
  }
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
