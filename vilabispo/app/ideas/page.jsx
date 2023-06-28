"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Form  from '@components/Form';
import Idea from '@components/Idea';


const Ideas = () => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({prompt:'',tag: ''});

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmit(true);
    try{
      const resp = await fetch('/api/prompt/new',{
        method:'POST',
        body: JSON.stringify({
          prompt:post.prompt,
          tag: post.tag
        })
      });
      if(resp.ok){
        router.push('/');
      }
    }catch(error){
      console.log(error);
    }finally {
      setSubmit(false);
    }
  };

  return (
    <>
      <Form
        type="Ideas"
        post={post}
        setPost={setPost}
        submit={submit}
        handleSubmit={createPrompt}
      />
      <Idea />
    </>
    
  );
};

export default Ideas;