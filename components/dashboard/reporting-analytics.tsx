"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, PieChart } from "@/components/dashboard/charts"
import { Download } from "lucide-react"

export function ReportingAnalytics() {
  const [timeRange, setTimeRange] = useState("month")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Reporting & Analytics</h2>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last 7 Days</SelectItem>
              <SelectItem value="month">Last 30 Days</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="retention" className="space-y-4">
        <TabsList className="grid w-full max-w-2xl grid-cols-4">
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="sales">Sales Metrics</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
        </TabsList>

        <TabsContent value="retention" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87.5%</div>
                <p className="text-xs text-muted-foreground">+2.1% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.3%</div>
                <p className="text-xs text-muted-foreground">-1.5% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Customer Lifetime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2 years</div>
                <p className="text-xs text-muted-foreground">+0.3 years from previous period</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Retention Trends</CardTitle>
              <CardDescription>Historical retention and churn rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <LineChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Churn Reasons</CardTitle>
                <CardDescription>Primary reasons for customer churn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <PieChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Retention by Segment</CardTitle>
                <CardDescription>Retention rates across customer segments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <BarChart />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Cross-Sell Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.7%</div>
                <p className="text-xs text-muted-foreground">+3.2% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Up-Sell Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.9%</div>
                <p className="text-xs text-muted-foreground">+4.1% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Revenue Per Customer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,250</div>
                <p className="text-xs text-muted-foreground">+$120 from previous period</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>Cross-sell and up-sell success rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <LineChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Cross-Sell Products</CardTitle>
                <CardDescription>Most successful cross-sell products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <BarChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Product</CardTitle>
                <CardDescription>Revenue distribution across products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <PieChart />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.5%</div>
                <p className="text-xs text-muted-foreground">+5.2% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Click Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.7%</div>
                <p className="text-xs text-muted-foreground">+2.8% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.3%</div>
                <p className="text-xs text-muted-foreground">+1.5% from previous period</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Performance metrics across all campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Campaign ROI</CardTitle>
                <CardDescription>Return on investment by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <BarChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Campaign Effectiveness by Type</CardTitle>
                <CardDescription>Comparing different campaign types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <PieChart />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="segments" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">High Value Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,456</div>
                <p className="text-xs text-muted-foreground">+156 from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">High Risk Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,023</div>
                <p className="text-xs text-muted-foreground">-89 from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">New Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">987</div>
                <p className="text-xs text-muted-foreground">+245 from previous period</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Segment Performance</CardTitle>
              <CardDescription>Key metrics by customer segment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Segment Distribution</CardTitle>
                <CardDescription>Customer distribution across segments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <PieChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Segment Growth</CardTitle>
                <CardDescription>Growth trends by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <LineChart />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
