
"use client"
import React, { FC, useState } from 'react'
import { QrReader } from 'react-qr-reader';

const Bar:FC =() => {
 
    const [data, setData] = useState('No result');
setData("")

  return (
    <div>
      <QrReader 
      className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
    
  
      constraints={{ facingMode: "environment" }}
      />
      <p>{data}</p>
    </div>
  )
}

export default Bar;
