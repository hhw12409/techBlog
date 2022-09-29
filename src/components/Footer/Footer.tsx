import React from 'react'
import { FooterWrapper } from './Footer.styles'

const Footer = () => {
  const nowYear = new Date().getFullYear()
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© {nowYear} Developer Hyeonwoo, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
