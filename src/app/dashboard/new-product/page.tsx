// eslint-disable-file no-use-before-define 
"use client"

import MaxWidthWrapper from '@/utils/MaxWidth'
import { FC, useState } from 'react'
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import { Sells } from '../(charts)/sells'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,  
} from "@/components/ui/drawer"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import  Barcode from 'react-barcode';
const page: FC=()=> {
  const [data, setData] = useState<string | null>(null);

  const [code, setCode] = useState<string>("")
  const downloadCode = ()=> {
    const canvas:any = document.getElementById("Codenew111")

    if(canvas){
      const pngurl = canvas.toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
      const downloadLink = document.createElement("a");
      downloadLink.href= pngurl
      downloadLink.download = `${code}.png`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
  }

  return (
    <MaxWidthWrapper>
        <div>
        <Sells/>
        </div>
  
    <Drawer>
   
    <DrawerTrigger>  <div className='p-2'>
              <Button>Create new code</Button>
              </div></DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Create new code</DrawerTitle>
        <DrawerDescription>Enter a unique code for your new product
          <div id={"Codenew111"}>
          <Barcode  value={code} />
          </div>
        
        </DrawerDescription>
      </DrawerHeader>  
<>
<form className='grid px-2 items-start gap-4'>
  <div className='grid gap-2'>
  <Label htmlFor='codenew'>Product code</Label>
  <Input id='codenew' value={code} onChange={(e)=> {
    setCode(e.target.value)
  }}/>
  </div>                                                                   
</form>
</>
    <DrawerFooter>
    <Button onClick={()=> downloadCode()}>Download</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
        <Drawer>
  <DrawerTrigger>  <div className='p-2'>
            <Button>Create Product</Button>
            </div></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Create a new product</DrawerTitle>
      <DrawerDescription>By scanning the qr code or the barcode you will be able to create a new product or add product in your stock</DrawerDescription>
    </DrawerHeader>
    <>
  
{
  data ? (
    <form className='px-2 grid items-star gap-4'>
     <div className='grid gap-2'>
      <Label htmlFor='code'>Product code</Label>
      <Input id='code' disabled={true} value={data} />
     </div>
     <div className='grid gap-2'>
      <Label htmlFor='name'>Product Name</Label>
      <Input id='name' value={data} />
     </div>
     <div className='grid gap-2'>
      <Label htmlFor='prize'>Product Prize</Label>
      <Input id='prize'  value={data} />
     </div> 

  
    </form>
  ): (
    <>
    <BarcodeScannerComponent
    width={100}
    height={100}
    onUpdate={(err, result) => {
      if (result) setData(result.getText());
      else setData(null)
       
    }}
  />
<DrawerDescription className='p-2 m-2'>Please! scan the code you see on your device</DrawerDescription>
</>
  )
}
    </>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

       
   </MaxWidthWrapper>
  )
}


export default page
