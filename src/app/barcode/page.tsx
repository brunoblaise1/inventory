
"use client"
import React, { FC, useState } from 'react'
import { QrReader } from 'react-qr-reader';

const Bar:FC =() => {
 
    const [data, setData] = useState('No result');


  return (
    <div>
      <QrReader 
      className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
      onResult={(result:any, error:any) => {
        if (!!result) {
          setData(result?.text);
        }

        if (!!error) {
          console.info(error);
        }  
      }}    
  
      constraints={{ facingMode: "environment" }}
      />
      <p>{data}</p>
    </div>
  )
}

export default Bar;
