"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BarChart, LineChart } from "@/components/dashboard/charts"
import { Mail, Users, Calendar } from "lucide-react"

export function MarketingCampaigns() {
  const [activeTab, setActiveTab] = useState("active")

  const activeCampaigns = [
    {
      id: "camp-001",
      name: "Spring Renewal Offer",
      type: "Email",
      segment: "Upcoming Renewals",
      status: "Active",
      sent: 1245,
      opened: 876,
      clicked: 432,
      converted: 89,
      startDate: "2023-03-15",
      endDate: "2023-04-15",
    },
    {
      id: "camp-002",
      name: "Cross-sell Home Insurance",
      type: "Email + SMS",
      segment: "Car Insurance Holders",
      status: "Active",
      sent: 2500,
      opened: 1750,
      clicked: 875,
      converted: 120,
      startDate: "2023-03-01",
      endDate: "2023-03-31",
    },
    {
      id: "camp-003",
      name: "Loyalty Program Launch",
      type: "Email",
      segment: "High Value Customers",
      status: "Active",
      sent: 500,
      opened: 425,
      clicked: 300,
      converted: 75,
      startDate: "2023-03-10",
      endDate: "2023-04-10",
    },
  ]

  const pastCampaigns = [
    {
      id: "camp-004",
      name: "Winter Holiday Special",
      type: "Email",
      segment: "All Customers",
      status: "Completed",
      sent: 5000,
      opened: 3250,
      clicked: 1500,
      converted: 350,
      startDate: "2022-12-01",
      endDate: "2022-12-31",
    },
    {
      id: "camp-005",
      name: "Retention Campaign",
      type: "Email + Call",
      segment: "High Risk Customers",
      status: "Completed",
      sent: 750,
      opened: 600,
      clicked: 450,
      converted: 200,
      startDate: "2023-01-15",
      endDate: "2023-02-15",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Marketing Campaigns</h2>
        <Button>Create New Campaign</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="active">Active Campaigns</TabsTrigger>
          <TabsTrigger value="past">Past Campaigns</TabsTrigger>
          <TabsTrigger value="create">Create Campaign</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeCampaigns.length}</div>
                <p className="text-xs text-muted-foreground">Active campaigns</p>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {activeCampaigns.reduce((sum, campaign) => sum + campaign.sent, 0).toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">Customers reached</p>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(
                    (activeCampaigns.reduce((sum, campaign) => sum + campaign.opened, 0) /
                      activeCampaigns.reduce((sum, campaign) => sum + campaign.sent, 0)) *
                      100,
                  )}
                  %
                </div>
                <p className="text-xs text-muted-foreground">Email open rate</p>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(
                    (activeCampaigns.reduce((sum, campaign) => sum + campaign.converted, 0) /
                      activeCampaigns.reduce((sum, campaign) => sum + campaign.sent, 0)) *
                      100,
                  )}
                  %
                </div>
                <p className="text-xs text-muted-foreground">Overall conversion</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Real-time metrics for active campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <LineChart />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {activeCampaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <Badge>{campaign.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          <span>{campaign.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{campaign.segment}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                            {new Date(campaign.endDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Pause
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Sent</span>
                        <span className="font-medium">{campaign.sent.toLocaleString()}</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Opened</span>
                        <span className="font-medium">
                          {campaign.opened.toLocaleString()} ({Math.round((campaign.opened / campaign.sent) * 100)}%)
                        </span>
                      </div>
                      <Progress value={(campaign.opened / campaign.sent) * 100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Clicked</span>
                        <span className="font-medium">
                          {campaign.clicked.toLocaleString()} ({Math.round((campaign.clicked / campaign.sent) * 100)}%)
                        </span>
                      </div>
                      <Progress value={(campaign.clicked / campaign.sent) * 100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Converted</span>
                        <span className="font-medium">
                          {campaign.converted.toLocaleString()} (
                          {Math.round((campaign.converted / campaign.sent) * 100)}%)
                        </span>
                      </div>
                      <Progress value={(campaign.converted / campaign.sent) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Campaign Performance</CardTitle>
              <CardDescription>Historical campaign metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {pastCampaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <Badge variant="outline">{campaign.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          <span>{campaign.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{campaign.segment}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                            {new Date(campaign.endDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Duplicate
                      </Button>
                      <Button size="sm">View Report</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Sent</span>
                        <span className="font-medium">{campaign.sent.toLocaleString()}</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Opened</span>
                        <span className="font-medium">
                          {campaign.opened.toLocaleString()} ({Math.round((campaign.opened / campaign.sent) * 100)}%)
                        </span>
                      </div>
                      <Progress value={(campaign.opened / campaign.sent) * 100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Clicked</span>
                        <span className="font-medium">
                          {campaign.clicked.toLocaleString()} ({Math.round((campaign.clicked / campaign.sent) * 100)}%)
                        </span>
                      </div>
                      <Progress value={(campaign.clicked / campaign.sent) * 100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Converted</span>
                        <span className="font-medium">
                          {campaign.converted.toLocaleString()} (
                          {Math.round((campaign.converted / campaign.sent) * 100)}%)
                        </span>
                      </div>
                      <Progress value={(campaign.converted / campaign.sent) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Campaign</CardTitle>
              <CardDescription>Set up a new marketing campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Campaign Name</label>
                    <Input placeholder="Enter campaign name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Campaign Type</label>
                    <Select defaultValue="email">
                      <SelectTrigger>
                        <SelectValue placeholder="Select campaign type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="email-sms">Email + SMS</SelectItem>
                        <SelectItem value="email-call">Email + Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Segment</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select target segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Customers</SelectItem>
                      <SelectItem value="high-value">High Value Customers</SelectItem>
                      <SelectItem value="high-risk">High Risk Customers</SelectItem>
                      <SelectItem value="renewals">Upcoming Renewals</SelectItem>
                      <SelectItem value="car">Car Insurance Holders</SelectItem>
                      <SelectItem value="home">Home Insurance Holders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Start Date</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Date</label>
                    <Input type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Message</label>
                  <Textarea placeholder="Enter campaign message or template" rows={5} />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Launch Campaign</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
