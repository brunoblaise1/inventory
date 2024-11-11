"use client"

import { Area, AreaChart,  CartesianGrid, XAxis } from "recharts"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from "react"
const chartSell = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

  const chartData = [
    { date: "2024-04-01", iphone: 222, tablet: 150, laptop: 33 },
    { date: "2024-04-02", iphone: 222, tablet: 150, laptop: 33 },
    { date: "2024-04-03", iphone: 222, tablet: 150, laptop: 33 },
    { date: "2024-04-04", iphone: 222, tablet: 150, laptop: 33 },
    { date: "2024-04-05", iphone: 822, tablet: 150, laptop: 33 },
    { date: "2024-04-06", iphone: 522, tablet: 150, laptop: 33 },
    { date: "2024-04-07", iphone: 222, tablet: 150, laptop: 33 },
    { date: "2024-04-08", iphone: 422, tablet: 150, laptop: 33 },
    { date: "2024-04-09", iphone: 322, tablet: 150, laptop: 33 },
    { date: "2024-04-10", iphone: 12, tablet: 150, laptop: 33 },
    { date: "2024-04-11", iphone: 212, tablet: 150, laptop: 33 },
    { date: "2024-04-12", iphone: 22, tablet: 150, laptop: 33 },
    { date: "2024-04-13", desktop: 342, mobile: 380 },
    { date: "2024-04-14", desktop: 137, mobile: 220 },
    { date: "2024-04-08", iphone: 422, tablet: 150, laptop: 33 },
    { date: "2024-04-09", iphone: 322, tablet: 150, laptop: 33 },
    { date: "2024-04-10", iphone: 12, tablet: 150, laptop: 33 },
    { date: "2024-04-11", iphone: 212, tablet: 150, laptop: 33 },
    { date: "2024-04-12", iphone: 22, tablet: 150, laptop: 33 },
    { date: "2024-05-08", desktop: 149, mobile: 210 },
    { date: "2024-05-09", desktop: 227, mobile: 180 },
    { date: "2024-05-10", desktop: 293, mobile: 330 },
    { date: "2024-05-11", desktop: 335, mobile: 270 },
    { date: "2024-05-12", desktop: 197, mobile: 240 },
    { date: "2024-05-13", desktop: 197, mobile: 160 },
    { date: "2024-05-14", desktop: 448, mobile: 490 },
    { date: "2024-05-15", desktop: 473, mobile: 380 },
    { date: "2024-05-16", desktop: 338, mobile: 400 },
    { date: "2024-05-17", desktop: 499, mobile: 420 },
    { date: "2024-05-18", desktop: 315, mobile: 350 },
    { date: "2024-05-19", desktop: 235, mobile: 180 },
    { date: "2024-05-20", desktop: 177, mobile: 230 },
    { date: "2024-05-21", desktop: 82, mobile: 140 },
    { date: "2024-05-22", desktop: 81, mobile: 120 },
    { date: "2024-05-23", desktop: 252, mobile: 290 },
    { date: "2024-05-24", desktop: 294, mobile: 220 },
    { date: "2024-04-08", iphone: 422, tablet: 150, laptop: 33 },
    { date: "2024-04-09", iphone: 322, tablet: 150, laptop: 33 },
    { date: "2024-04-10", iphone: 12, tablet: 150, laptop: 33 },
    { date: "2024-04-11", iphone: 212, tablet: 150, laptop: 33 },
    { date: "2024-04-12", iphone: 22, tablet: 150, laptop: 33 },
    { date: "2024-04-08", iphone: 422, tablet: 150, laptop: 33 },
    { date: "2024-04-09", iphone: 322, tablet: 150, laptop: 33 },
    { date: "2024-04-10", iphone: 12, tablet: 150, laptop: 33 },
    { date: "2024-04-11", iphone: 212, tablet: 150, laptop: 33 },
    { date: "2024-04-12", iphone: 22, tablet: 150, laptop: 33 },
  ]
  

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  iphone: {
    label: "Iphone",
    color: "hsl(var(--chart-3))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-4))",
  },
  laptop: {
    label: "Laptop",
    color: "hsl(var(--chart-5))",
  },

} satisfies ChartConfig

// export function Sells() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Product sold</CardTitle>
//         <CardDescription>Mon - Sat</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <BarChart accessibilityLayer data={chartSell}>
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dashed" />}
//             />
//             <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//             <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 font-medium leading-none">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }




export function Purchase() {
  const [timeRange, setTimeRange] = useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Product sold</CardTitle>
          <CardDescription>
            Showing total products sold 
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <Area
              dataKey="iphone"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="tablet"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
