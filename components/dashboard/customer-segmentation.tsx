"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BarChart, LineChart, PieChart } from "@/components/dashboard/charts"

interface CustomerSegmentationProps {
  onCustomerSelect: (customerId: string) => void
}

export function CustomerSegmentation({ onCustomerSelect }: CustomerSegmentationProps) {
  const [ageRange, setAgeRange] = useState([25, 55])

  const customers = [
    {
      id: "cust-001",
      name: "Emma Johnson",
      policy: "Car Insurance",
      risk: "Low",
      cltv: "$2,450",
      lastInteraction: "2 days ago",
    },
    {
      id: "cust-002",
      name: "Michael Brown",
      policy: "Home Insurance",
      risk: "High",
      cltv: "$5,670",
      lastInteraction: "1 week ago",
    },
    {
      id: "cust-003",
      name: "Sophia Williams",
      policy: "Health Insurance",
      risk: "Medium",
      cltv: "$3,890",
      lastInteraction: "3 days ago",
    },
    {
      id: "cust-004",
      name: "James Smith",
      policy: "Travel Insurance",
      risk: "High",
      cltv: "$1,230",
      lastInteraction: "2 weeks ago",
    },
    {
      id: "cust-005",
      name: "Olivia Davis",
      policy: "Car Insurance",
      risk: "Low",
      cltv: "$4,560",
      lastInteraction: "1 day ago",
    },
  ]

  const productAssociations = [
    { primary: "Car Insurance", associated: "Travel Insurance", rate: "65%" },
    { primary: "Home Insurance", associated: "Life Insurance", rate: "58%" },
    { primary: "Health Insurance", associated: "Disability Insurance", rate: "72%" },
    { primary: "Car Insurance", associated: "Home Insurance", rate: "48%" },
    { primary: "Life Insurance", associated: "Health Insurance", rate: "53%" },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="col-span-1 md:col-span-4">
          <CardHeader>
            <CardTitle>Customer Segmentation Filters</CardTitle>
            <CardDescription>Filter customers based on various criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Demographic</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genders</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Risk Profile</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Risk Levels</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="low">Low Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Product Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="car">Car Insurance</SelectItem>
                    <SelectItem value="home">Home Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="travel">Travel Insurance</SelectItem>
                    <SelectItem value="life">Life Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Engagement Level</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select engagement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="high">High Engagement</SelectItem>
                    <SelectItem value="medium">Medium Engagement</SelectItem>
                    <SelectItem value="low">Low Engagement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 col-span-1 md:col-span-4">
                <label className="text-sm font-medium">
                  Age Range: {ageRange[0]} - {ageRange[1]}
                </label>
                <Slider
                  defaultValue={[25, 55]}
                  max={85}
                  min={18}
                  step={1}
                  onValueChange={(value) => setAgeRange(value)}
                  className="py-4"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Segment Breakdown</CardTitle>
            <CardDescription>Analysis of the selected customer segment</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="distribution">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="distribution">Distribution</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
                <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="distribution" className="pt-4">
                <div className="h-80">
                  <PieChart />
                </div>
              </TabsContent>
              <TabsContent value="engagement" className="pt-4">
                <div className="h-80">
                  <LineChart />
                </div>
              </TabsContent>
              <TabsContent value="risk" className="pt-4">
                <div className="h-80">
                  <BarChart />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Associations</CardTitle>
            <CardDescription>Top product associations for this segment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {productAssociations.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">{item.primary}</p>
                    <p className="text-sm text-muted-foreground">→ {item.associated}</p>
                  </div>
                  <Badge variant="secondary">{item.rate}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
          <CardDescription>Customers in the selected segment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                onClick={() => onCustomerSelect(customer.id)}
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">{customer.policy}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm">CLTV: {customer.cltv}</p>
                    <p className="text-xs text-muted-foreground">Last: {customer.lastInteraction}</p>
                  </div>
                  <Badge
                    variant={
                      customer.risk === "High" ? "destructive" : customer.risk === "Medium" ? "default" : "outline"
                    }
                  >
                    {customer.risk} Risk
                  </Badge>
                  <Button size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
