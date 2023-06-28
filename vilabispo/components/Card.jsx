"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import avatar from '@public/assets/images/avatar.png';

const Card = ({ post, handleTagClick }) => {

  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <Image
            src={avatar}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

    </div>
  );
};

export default Card;