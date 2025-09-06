import React from 'react'


const layout = ({children}) => {
  return (
    <div>
        <div className='h-screen w-screen flex justify-center items-center'>{children}</div>
    </div>
  )
}

export default layout
