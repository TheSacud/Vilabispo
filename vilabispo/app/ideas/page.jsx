"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';

import Form  from '@components/Form';


const Ideas = () => {
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt:'',
    tag: '',
  })

  const createPrompt = async (e) => {

  }
  return (
    <Form
      type="Ideas"
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={createPrompt}
    />
  )
}

export default Ideas;