import React from 'react'

const Form = ({handleClose,handleAdd}) => {
    
  return (
    <>
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>
          <div className='bg-white p-6 rounded shadow-lg w-[300px]'>
            <h2 className='text-lg mb-4'>Enter Details</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                  Name
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Name'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='id'>
                  GID
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='id'
                  type='text'
                  placeholder='ID'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nodeid'>
                  Node ID
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='nodeid'
                  type='text'
                  placeholder='Node ID'
                />
              </div>
              <div className='flex items-center justify-end'>
                <button
                  className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
                  type='button'
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                  onClick={handleAdd}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Form