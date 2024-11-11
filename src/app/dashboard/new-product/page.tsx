/* eslint-disable */  
"use client"

import MaxWidthWrapper from '@/utils/MaxWidth'

import BarcodeScannerComponent from "react-qr-barcode-scanner";

import { Purchase } from '../(charts)/sells'
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
import { FC, useState } from 'react';
const page: FC=()=> {
  const [data, setData] = useState<string | null>(null);
  const [pname, setProduct] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [code, setCode] = useState<string>("")
  const[quantity, setQuantity] = useState<string>('')
  const downloadCode = ()=> {
    const canvas:any = document.getElementById("Codenew111")?.innerHTML

  const printAble: any = window.open("", "", "height=100, width=100")
  printAble.document.open();
  printAble.document.write(`
   <html>
   <head>
   <title> Barcode ${code}</title>
   </head>
   <body>
   <h1>Generate barcode:<h1/>
   ${canvas}
   </body>
   </html>
   `)


  printAble.document.close()
  printAble.print()

  }
  return (
    <MaxWidthWrapper >
        <div >
        <Purchase/>
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
    <>
    
  
    <form className='px-2 grid items-star gap-4'>
     <div className='grid gap-2'>
      <Label htmlFor='code'>Product code</Label>
      <Input id='code' disabled={true} value={data} />
     </div>
     <div className='grid gap-2'>
      <Label htmlFor='name'>Product Name</Label>
      <Input id='name' value={pname}  onChange={(e)=>{
        setProduct(e.target.value)
      }}/>
     </div>
     <div className='grid gap-2'>
      <Label htmlFor='price'>Product Price</Label>
      <Input id='price'  value={price}  onChange={(e)=>{
        setPrice(e.target.value)
      }} />
     </div> 
     <div>
      <Label htmlFor='quantity'>Quantity</Label>
      <Input value={quantity} placeholder='100 piece' id='quantity' onChange={(e)=>{
        setQuantity(e.target.value)
      }}/>
     </div>

  
    </form>
    <DrawerFooter>
      <Button>Create a new product</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
    </>
    
  ): (
    <>
    <BarcodeScannerComponent
    width={500}
    height={500}
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
  
  </DrawerContent>
</Drawer>

       
   </MaxWidthWrapper>
  )
}


export default page
