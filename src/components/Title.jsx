import React, { useRef } from 'react'

function Title(props) {
  const testRef = useRef()

  return (
    <div  ref={testRef} className='my-3 my-sm-5 fs-1 text-black fw-bold text-center'>{props.title}</div>
  )
}

export default Title