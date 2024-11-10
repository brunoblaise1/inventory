import React, { FC } from 'react'
import { Sells, Purchase } from './(charts)/sells'
import MaxWidthWrapper from '@/utils/MaxWidth'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  

import { Button } from '@/components/ui/button'
import Link from 'next/link'
  
const page: FC =()=> {
  return (
    <MaxWidthWrapper>

    <div className='p-2 m-2 flex flex-col gap-4'>
    <Sells/>
    <Purchase/>
    </div>

    <div className='m-2'>
 <Menubar className='flex justify-center'>
  <MenubarMenu>
    <MenubarTrigger>Products</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        <Link href="/dashboard/new-product">
        New
        </Link>
 
      </MenubarItem>
      <MenubarItem>
        <Link href="/dashboard/update-product">
        Update
        </Link>
       
        </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>View all</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Sells</MenubarTrigger>

  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>
     Users
    </MenubarTrigger>
  </MenubarMenu>


             
</Menubar>


 
 </div>
    </MaxWidthWrapper>
  )
}

export default page
