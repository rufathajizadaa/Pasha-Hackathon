"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Clock } from "lucide-react"

interface SegmentationSummaryProps {
  onCustomerSelect: (customerId: string) => void
}

export function SegmentationSummary({ onCustomerSelect }: SegmentationSummaryProps) {
  const [activeTab, setActiveTab] = useState("segments")

  const customerSegments = [
    { id: "high-value", name: "High Value", count: 2456, color: "bg-green-500" },
    { id: "loyal", name: "Loyal", count: 3789, color: "bg-blue-500" },
    { id: "price-sensitive", name: "Price Sensitive", count: 2134, color: "bg-yellow-500" },
    { id: "high-risk", name: "High Risk", count: 1023, color: "bg-red-500" },
    { id: "new", name: "New Customers", count: 987, color: "bg-purple-500" },
  ]

  const riskCustomers = [
    { id: "cust-001", name: "Emma Johnson", policy: "Car Insurance", risk: "High", daysLeft: 7 },
    { id: "cust-002", name: "Michael Brown", policy: "Home Insurance", risk: "High", daysLeft: 12 },
    { id: "cust-003", name: "Sophia Williams", policy: "Health Insurance", risk: "Medium", daysLeft: 15 },
    { id: "cust-004", name: "James Smith", policy: "Travel Insurance", risk: "High", daysLeft: 5 },
  ]

  const renewalCustomers = [
    { id: "cust-005", name: "Olivia Davis", policy: "Car Insurance", daysLeft: 14 },
    { id: "cust-006", name: "William Miller", policy: "Home Insurance", daysLeft: 7 },
    { id: "cust-007", name: "Ava Wilson", policy: "Health Insurance", daysLeft: 21 },
    { id: "cust-008", name: "Noah Moore", policy: "Life Insurance", daysLeft: 3 },
  ]

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="segments">Segments</TabsTrigger>
        <TabsTrigger value="risk">Risk Alerts</TabsTrigger>
        <TabsTrigger value="renewals">Upcoming Renewals</TabsTrigger>
      </TabsList>

      <TabsContent value="segments" className="space-y-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {customerSegments.map((segment) => (
            <Card key={segment.id} className="overflow-hidden">
              <div className={`h-1 w-full ${segment.color}`} />
              <CardContent className="p-4">
                <h4 className="font-semibold">{segment.name}</h4>
                <p className="text-2xl font-bold">{segment.count.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">customers</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="risk" className="space-y-4 py-4">
        <div className="space-y-2">
          {riskCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
              onClick={() => onCustomerSelect(customer.id)}
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-muted-foreground">{customer.policy}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={customer.risk === "High" ? "destructive" : "outline"}>{customer.risk} Risk</Badge>
                <Button size="sm" variant="outline">
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="renewals" className="space-y-4 py-4">
        <div className="space-y-2">
          {renewalCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
              onClick={() => onCustomerSelect(customer.id)}
            >
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-muted-foreground">{customer.policy}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={customer.daysLeft <= 7 ? "destructive" : "outline"}>
                  {customer.daysLeft} days left
                </Badge>
                <Button size="sm" variant="outline">
                  Renew
                </Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
