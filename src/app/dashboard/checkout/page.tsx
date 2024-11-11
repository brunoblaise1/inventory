"use client"
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import MaxWidthWrapper from '@/utils/MaxWidth'
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
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
const page= ()=> {
  const [data, setData] = useState<string | null>(null)
  const [nameC, setName] = useState<string>('')
  const[contact, setContact] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [mode, setMode] = useState<string>('')
  return (
    <MaxWidthWrapper>
<div>
<Table>
  <TableCaption>List of products and customers that have been checkout.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ProductId</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Customer(name, phone)</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">PRID001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>$250.00</TableCell>
      <TableCell>Kevin | 078845678</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div>
<Drawer>
  <DrawerTrigger>  <div className='p-2'>
            <Button>Checkout</Button> 
            </div></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Checkout product</DrawerTitle>
      <DrawerDescription>By scanning the qr code or the barcode you can checkout your product in your stock</DrawerDescription>
    </DrawerHeader>
    {data ? (
  <>
  <form className='grid gap-4 items-start px-2'>
   <div className='grid gap-2'>
    <Label htmlFor='id' >Product id</Label>
    <Input id='id' disabled={true} value={data}/>
   </div>
   <div className='grid gap-2'>
     <Label htmlFor='Price' >What price did you sell the product</Label>
     <Input id='Price'onChange={(e)=> setPrice(e.target.value) } value={price} placeholder='1000 RWF'/>
   </div>
   <div className='grid gap-2'>
     <Label htmlFor='mode'>Mode of payement</Label>
     <Input id='mode' value={mode} onChange={(e)=> setMode(e.target.value)} placeholder='MTN | Physical'/>
   </div>
   <div className='grid gap-2'>
     <Label htmlFor='name' >Customer Name</Label>
     <Input value={nameC}  onChange={(e)=> setName(e.target.value)}id='name' />
   </div>
   <div className='grid gap-2'>
     <Label htmlFor='contact' >Customer Contact</Label>
     <Input value={contact} id='contact' onChange={(e)=> setContact(e.target.value)} />
   </div>
  </form>
   <DrawerFooter>
     <Button>Submit</Button>
     <DrawerClose>
       <Button variant="outline">Cancel</Button>
     </DrawerClose>
   </DrawerFooter>
   </>

    ):(
  <BarcodeScannerComponent 
  width={500}
  height={500}
  onUpdate={(err, result)=>{
      if(result) setData(result.getText())
      else setData(null) 
  }}
  />
     
    )}
 </DrawerContent>
</Drawer>
</div>
    </MaxWidthWrapper>
  )
}

export default page
