import React from 'react'
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
const page= ()=> {
  return (
    <MaxWidthWrapper>
<div>
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
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
      <DrawerTitle>Create a new product</DrawerTitle>
      <DrawerDescription>By scanning the qr code or the barcode you will be able to create a new product or add product in your stock</DrawerDescription>
    </DrawerHeader>
   
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
</div>
    </MaxWidthWrapper>
  )
}

export default page
