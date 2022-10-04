import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ReactNode } from 'react'

interface CategoryItemProps {
  active: boolean
}

interface GatsbyLinkProps extends CategoryItemProps {
  children: ReactNode
  className?: string
  to: string
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

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

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export { CategoryListWrapper, CategoryItem }
