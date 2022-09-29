import React from 'react'
import ProfileImage from 'components/ProfileImage/ProfileImage'
import { Background, Wrapper, SubTitle, Title } from './Introduction.styles'

const Introduction = () => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Hyeonwoo.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
