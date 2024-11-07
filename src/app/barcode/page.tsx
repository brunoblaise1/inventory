
"use client"
import React, { FC} from 'react'
import { QrReader } from 'react-qr-reader';

const Bar:FC =() => {
 

  return (
    <div>
      <QrReader 
      className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
    
  
      constraints={{ facingMode: "environment" }}
      />
      <p>No result</p>
    </div>
  )
}

export default Bar;
