"use client";

import { UseState } from 'react';
import Form  from '@components/Form';

function Ideas() {
  return (
    <form className="w-full flex-center flex-col">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="col-span-full">
    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
      Ideas
    </label>
    <div className="mt-2">
      <textarea
        id="about"
        name="about"
        rows={3}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={''}
      />
    </div>
    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your idea.</p>
  </div>
        </div>
      </div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}

export default Ideas;