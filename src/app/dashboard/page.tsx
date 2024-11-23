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
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Navbar from './(components)/Navbar'
import { Button } from '@/components/ui/button'
const page: FC =()=> {
  return (
    <>
    <Navbar/>
  
    <MaxWidthWrapper>
       <div className='p-2 m-2'>
       <Tabs defaultValue="account" className="flex justify-end">
  <TabsList>
    <TabsTrigger value="account">Overview</TabsTrigger>
    <TabsTrigger value="password">Reports</TabsTrigger>
  </TabsList>
</Tabs>
<div className="flex-col md:flex">
    
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
        
          <Button>Download</Button>
        </div>
      </div>

     
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                  Subscriptions
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
  
    </div>
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
    </MaxWidthWrapper>
    </>
  )
}

export default page
