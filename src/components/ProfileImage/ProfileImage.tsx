import React from 'react'
import { ProfileImageWrapper } from './ProfileImage.styles'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface ProfileImageProps {
  profileImage: IGatsbyImageData
}

// const PROFILE_IMAGE_LINK =
//   'https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory2.daumcdn.net%2Ftistory%2F4980735%2Fattach%2F55385a500fbb46308d1feff98df07082'

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
