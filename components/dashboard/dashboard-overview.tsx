"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { SegmentationSummary } from "@/components/dashboard/segmentation-summary"
import { UpcomingActions } from "@/components/dashboard/upcoming-actions"
import { CustomerSegmentation } from "@/components/dashboard/customer-segmentation"
import { CustomerProfile } from "@/components/dashboard/customer-profile"
import { MarketingCampaigns } from "@/components/dashboard/marketing-campaigns"
import { ReportingAnalytics } from "@/components/dashboard/reporting-analytics"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function DashboardOverview() {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null)

  const handleCustomerSelect = (customerId: string) => {
    setSelectedCustomerId(customerId)
  }

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-5 w-full max-w-4xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="segmentation">Segmentation</TabsTrigger>
            <TabsTrigger value="customer">Customer Profile</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <KpiCards />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Segmentation Summary</CardTitle>
                  <CardDescription>High-level overview of customer segments</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <SegmentationSummary onCustomerSelect={handleCustomerSelect} />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Actions</CardTitle>
                  <CardDescription>Recommended actions based on customer data</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingActions />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="segmentation" className="space-y-4">
            <CustomerSegmentation onCustomerSelect={handleCustomerSelect} />
          </TabsContent>

          <TabsContent value="customer" className="space-y-4">
            <CustomerProfile customerId={selectedCustomerId} />
          </TabsContent>

          <TabsContent value="marketing" className="space-y-4">
            <MarketingCampaigns />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <ReportingAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
