"use client"

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { ChartContainer } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"

export function UserScoreChart({ chartData, chartConfig }: { chartData: any, chartConfig: any }) {
  return (
    <Card className="flex flex-col border-none outline-none">
      <CardContent className="px-0 flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-0 aspect-square min-h-[100px]" >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={chartData[0].score/100*360}
            innerRadius={35}
            outerRadius={50}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[39, 31]}
            />
            <RadialBar dataKey="score" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {chartData[0].score.toLocaleString()}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
