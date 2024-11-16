import React, { FC } from 'react'
import {  Purchase } from './(charts)/sells'
import MaxWidthWrapper from '@/utils/MaxWidth'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
const page: FC =()=> {
  return (
    <MaxWidthWrapper>
       <div className='p-2 m-2'>
       
       <Tabs defaultValue="account" className="flex justify-end">
  <TabsList>
    <TabsTrigger value="account">Overview</TabsTrigger>
    <TabsTrigger value="password">Reports</TabsTrigger>
  </TabsList>
</Tabs>
<div  className='flex flex-col p-2 gap-4 md:flex-row'>
<Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>



                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Sales
                    </CardTitle>
                   
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+45</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>


                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     Total users
                    </CardTitle>
                  
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">452</div>
                   
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     Total Stockin
                    </CardTitle>
                  
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">452</div>
                   
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     Total Stockout
                    </CardTitle>
                  
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">452</div>
                   
                  </CardContent>
                </Card>
</div>
       </ div>
    <div className='p-2 m-2 flex flex-col gap-4 md:flex-row md:justify-between'>
    {/* <Sells/> */}
    <Purchase/>

    <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <div className="space-y-8">
     <div className="flex items-center">
     
       <div className="ml-4 space-y-1">
         <p className="text-sm font-medium leading-none">Sofia Davis</p>
         <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
       </div>
       <div className="ml-auto font-medium">+$39.00</div>
     </div>
   </div>
                  </CardContent>
                  </Card>
   
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
        <Link href="/dashboard/checkout">
        Checkout
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
