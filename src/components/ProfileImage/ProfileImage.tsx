import React from 'react'
import { ProfileImageWrapper } from './ProfileImage.styles'

const PROFILE_IMAGE_LINK =
  'https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory2.daumcdn.net%2Ftistory%2F4980735%2Fattach%2F55385a500fbb46308d1feff98df07082'

const ProfileImage = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
