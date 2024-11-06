import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart' // Removed ChartConfig

const chartData = [
  { day: 'Mon', VIP: 20, Children: 30, Default: 40 },
  { day: 'Tue', VIP: 25, Children: 35, Default: 50 },
  { day: 'Wed', VIP: 18, Children: 28, Default: 38 },
  { day: 'Thu', VIP: 30, Children: 40, Default: 60 },
  { day: 'Fri', VIP: 35, Children: 50, Default: 70 },
  { day: 'Sat', VIP: 50, Children: 60, Default: 80 },
  { day: 'Sun', VIP: 40, Children: 55, Default: 65 },
]

const chartConfig = {
  vip: {
    label: 'VIP Tickets Sold',
    color: 'hsl(var(--chart-1))',
  },
  children: {
    label: 'Children Tickets Sold',
    color: 'hsl(var(--chart-2))',
  },
  default: {
    label: 'Default Tickets Sold',
    color: 'hsl(var(--chart-3))',
  },
}
// Calculate total tickets sold and available
const totalTicketsSold = chartData.reduce(
  (total, day) => total + day.VIP + day.Children + day.Default,
  0
)
const totalTicketsAvailable = 1000 // Example value; adjust as needed
function WorkshopAnalystics() {
  return (
    <div
      style={{
        display: 'flex',
      }}
      className="gap-10"
    >
      <Card className="w-3/6">
        <CardHeader>
          <CardTitle>Daily Ticket Sales by Type</CardTitle>
          <CardDescription>Week of October 14, 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar
                dataKey="VIP"
                fill="var(--color-vip)"
                radius={4}
                name="VIP"
              />
              <Bar
                dataKey="Children"
                fill="var(--color-mobile)"
                radius={4}
                name="Children"
              />
              <Bar
                dataKey="Default"
                fill="var(--color-default)"
                radius={4}
                name="Default"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing ticket sales by type for the last 7 days
          </div>
        </CardFooter>
      </Card>
      {/* Summary Card */}
      <Card className="w-2/6 h-min">
        <CardHeader>
          <CardTitle>Ticket Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <h4 className="text-2xl font-medium">Total Tickets:</h4>
            <p className="text-2xl   font-bold">{totalTicketsAvailable}</p>
          </div>
          <div className="flex flex-col">
            <div>
              <h4 className="text-sm font-medium">Tickets Sold:</h4>{' '}
              <p className="text-lg font-bold">{totalTicketsSold}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Tickets Left:</h4>{' '}
              <p className="text-lg font-bold">
                {totalTicketsAvailable - totalTicketsSold}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>{' '}
    </div>
  )
}

export default WorkshopAnalystics
