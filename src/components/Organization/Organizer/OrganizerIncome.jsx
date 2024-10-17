import React from 'react'
import { TrendingUp } from 'lucide-react'
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts'
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'January', ws1: 1860000, ws2: 0, ws3: 0, ws4: 0, ws5: 0 },
  { month: 'February', ws1: 1000000, ws2: 2000000, ws3: 0, ws4: 0, ws5: 0 },
  { month: 'March', ws1: 0, ws2: 2000000, ws3: 0, ws4: 0, ws5: 0 },
  { month: 'April', ws1: 0, ws2: 0, ws3: 6000000, ws4: 0, ws5: 0 },
  { month: 'May', ws1: 0, ws2: 0, ws3: 0, ws4: 1000000, ws5: 0 },
  { month: 'June', ws1: 0, ws2: 0, ws3: 0, ws4: 5000000, ws5: 1230000 },
]

// Calculate total income for each month
const totalData = chartData.map((data) => ({
  ...data,
  total: data.ws1 + data.ws2 + data.ws3 + data.ws4 + data.ws5,
}))

// Calculate total income for each workstation
const totalIncome = {
  ws1: totalData.reduce((sum, data) => sum + data.ws1, 0),
  ws2: totalData.reduce((sum, data) => sum + data.ws2, 0),
  ws3: totalData.reduce((sum, data) => sum + data.ws3, 0),
  ws4: totalData.reduce((sum, data) => sum + data.ws4, 0),
  ws5: totalData.reduce((sum, data) => sum + data.ws5, 0),
}

const totalSixMonths = totalData.reduce((sum, data) => sum + data.total, 0)

const chartConfig = {
  ws1: {
    label: 'Workstation 1',
    color: 'hsl(var(--chart-1))',
  },
  ws2: {
    label: 'Workstation 2',
    color: 'hsl(var(--chart-2))',
  },
  ws3: {
    label: 'Workstation 3',
    color: 'hsl(var(--chart-3))',
  },
  ws4: {
    label: 'Workstation 4',
    color: 'hsl(var(--chart-4))',
  },
  ws5: {
    label: 'Workstation 5',
    color: 'hsl(var(--chart-5))',
  },
}

function OrganizerIncome() {
  return (
    <div className="flex flex-col items-center">
      <Card className="mb-4 w-2/3">
        <CardHeader>
          <CardTitle>Total Income Overview</CardTitle>
          <CardDescription>Total income for the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">Total Income:</h2>
              <p className="text-xl font-bold">
                {totalSixMonths.toLocaleString()} VND
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Income by Workstation:</h2>
              <ul>
                <li>Workstation 1: {totalIncome.ws1.toLocaleString()} VND</li>
                <li>Workstation 2: {totalIncome.ws2.toLocaleString()} VND</li>
                <li>Workstation 3: {totalIncome.ws3.toLocaleString()} VND</li>
                <li>Workstation 4: {totalIncome.ws4.toLocaleString()} VND</li>
                <li>Workstation 5: {totalIncome.ws5.toLocaleString()} VND</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="h-screen w-2/3">
        <CardHeader>
          <CardTitle>Total Income Chart</CardTitle>
          <CardDescription>
            Showing total income for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            This chart illustrates the total income generated from various
            workstations over the past six months. Each line represents the
            income from a specific workstation, while the total income line
            provides a cumulative view of earnings. Analyzing this data helps in
            understanding trends and making informed decisions for future
            operations.
          </p>
          <ChartContainer config={chartConfig}>
            <LineChart
              data={totalData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey="ws1"
                type="monotone"
                stroke="var(--color-ws1)"
                strokeWidth={2}
                dot={{
                  fill: 'var(--color-ws1)',
                  stroke: 'var(--color-ws1)',
                  strokeWidth: 2,
                }}
                activeDot={{ r: 8 }}
              />
              <Line
                dataKey="ws2"
                type="monotone"
                stroke="var(--color-ws2)"
                strokeWidth={2}
                dot={{
                  fill: 'var(--color-ws2)',
                  stroke: 'var(--color-ws2)',
                  strokeWidth: 2,
                }}
                activeDot={{ r: 8 }}
              />
              <Line
                dataKey="ws3"
                type="monotone"
                stroke="var(--color-ws3)"
                strokeWidth={2}
                dot={{
                  fill: 'var(--color-ws3)',
                  stroke: 'var(--color-ws3)',
                  strokeWidth: 2,
                }}
                activeDot={{ r: 8 }}
              />
              <Line
                dataKey="ws4"
                type="monotone"
                stroke="var(--color-ws4)"
                strokeWidth={2}
                dot={{
                  fill: 'var(--color-ws4)',
                  stroke: 'var(--color-ws4)',
                  strokeWidth: 2,
                }}
                activeDot={{ r: 8 }}
              />
              <Line
                dataKey="ws5"
                type="monotone"
                stroke="var(--color-ws5)"
                strokeWidth={2}
                dot={{
                  fill: 'var(--color-ws5)',
                  stroke: 'var(--color-ws5)',
                  strokeWidth: 2,
                }}
                activeDot={{ r: 8 }}
              />

              <ChartLegend content={<ChartLegendContent />} />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month{' '}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default OrganizerIncome
