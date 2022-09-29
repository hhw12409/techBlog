import PostItem from 'components/PostItem/PostItem'
import React from 'react'
import { PostListWrapper } from './PostList.styles'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://res.cloudinary.com/practicaldev/image/fetch/s--3BRTZur0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/800/0%2AaH8YUI7nqAZ6b-V_.png',
  link: 'https://www.google.co.kr/',
}

const PostList = () => {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
