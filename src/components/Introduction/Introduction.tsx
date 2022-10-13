import React from 'react'
import ProfileImage from 'components/ProfileImage/ProfileImage'
import { Background, Wrapper, SubTitle, Title } from './Introduction.styles'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface IntroductionProps {
  profileImage: IGatsbyImageData
}

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Hyeonwoo.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
