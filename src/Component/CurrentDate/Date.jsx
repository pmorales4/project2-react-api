import React from 'react'

function Dateplay () {
  const dateshow = Date()
  let dateoutput = dateshow.toString()
 

  return <div className='clock'>{dateoutput}</div>
}

export default Dateplay
