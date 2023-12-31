import Link from 'next/link';

const Form = ({type, post, setPost, submit, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-center'>
        <span className='blue_gradient'>
        </span>
      </h1>
      <p className='desc text-left mas-w-md'>{type} </p>
      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-exl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your Idea</span>
          <textarea value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your idea here'
            required
            className='form_textarea '
          />
        
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submit}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submit ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form