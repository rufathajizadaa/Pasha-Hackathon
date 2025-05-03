"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Mail, Phone, MessageSquare, CheckCircle, Clock, ThumbsUp, ThumbsDown, TrendingUp } from "lucide-react"

interface CustomerProfileProps {
  customerId: string | null
}

export function CustomerProfile({ customerId }: CustomerProfileProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock customer data - in a real app, this would be fetched based on customerId
  const customer = {
    id: customerId || "cust-001",
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, USA",
    riskScore: 28,
    tier: "High Value",
    sentiment: "Positive",
    policies: [
      { id: "pol-001", type: "Car Insurance", status: "Active", premium: "$120/month", expiry: "2023-12-15" },
      { id: "pol-002", type: "Home Insurance", status: "Active", premium: "$85/month", expiry: "2024-03-22" },
    ],
    claims: [
      { id: "clm-001", type: "Car Insurance", date: "2023-05-12", amount: "$2,500", status: "Settled" },
      { id: "clm-002", type: "Home Insurance", date: "2022-11-30", amount: "$1,200", status: "Settled" },
    ],
    interactions: [
      { id: "int-001", type: "Call", date: "2023-10-05", description: "Discussed policy renewal options" },
      { id: "int-002", type: "Email", date: "2023-09-22", description: "Sent policy documents" },
      { id: "int-003", type: "In-person", date: "2023-08-15", description: "Annual review meeting" },
      { id: "int-004", type: "SMS", date: "2023-07-30", description: "Payment reminder" },
    ],
    recommendations: [
      { id: "rec-001", type: "Cross-sell", product: "Travel Insurance", confidence: "High" },
      { id: "rec-002", type: "Upsell", product: "Premium Car Insurance", confidence: "Medium" },
    ],
  }

  // If no customer is selected, show a placeholder
  if (!customerId) {
    return (
      <div className="flex flex-col items-center justify-center h-96 border rounded-lg bg-muted/20">
        <h3 className="text-xl font-medium mb-2">No Customer Selected</h3>
        <p className="text-muted-foreground mb-4">Please select a customer from the dashboard or segmentation page</p>
        <Button variant="outline">Search Customers</Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{customer.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span>ID: {customer.id}</span>
                  <Badge variant="outline">{customer.tier}</Badge>
                </CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-1">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">Email</span>
              </Button>
              <Button size="sm" variant="outline" className="gap-1">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Call</span>
              </Button>
              <Button size="sm" className="gap-1">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden md:inline">Message</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Contact Information</p>
              <div className="text-sm">
                <p>Email: {customer.email}</p>
                <p>Phone: {customer.phone}</p>
                <p>Address: {customer.address}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Risk Profile</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Risk Score</span>
                  <span className="font-medium">{customer.riskScore}/100</span>
                </div>
                <Progress value={customer.riskScore} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {customer.riskScore < 30
                    ? "Low risk of churn"
                    : customer.riskScore < 70
                      ? "Medium risk of churn"
                      : "High risk of churn"}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Customer Sentiment</p>
              <div className="flex items-center gap-2">
                {customer.sentiment === "Positive" ? (
                  <ThumbsUp className="h-5 w-5 text-green-500" />
                ) : customer.sentiment === "Neutral" ? (
                  <Clock className="h-5 w-5 text-amber-500" />
                ) : (
                  <ThumbsDown className="h-5 w-5 text-red-500" />
                )}
                <span>{customer.sentiment}</span>
              </div>
              <p className="text-xs text-muted-foreground">Based on recent interactions and feedback</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Policies</CardTitle>
                <CardDescription>Current insurance policies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customer.policies.map((policy) => (
                    <div key={policy.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{policy.type}</p>
                        <p className="text-sm text-muted-foreground">{policy.premium}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {policy.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          Expires: {new Date(policy.expiry).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Claims</CardTitle>
                <CardDescription>Claims history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customer.claims.map((claim) => (
                    <div key={claim.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{claim.type}</p>
                        <p className="text-sm text-muted-foreground">{new Date(claim.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{claim.amount}</p>
                        <Badge variant={claim.status === "Settled" ? "outline" : "secondary"} className="ml-2">
                          {claim.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on customer profile and behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customer.recommendations.map((rec) => (
                  <div key={rec.id} className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {rec.type === "Cross-sell" ? (
                        <div className="bg-blue-100 p-2 rounded-full">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                      ) : (
                        <div className="bg-green-100 p-2 rounded-full">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium">
                          {rec.type}: {rec.product}
                        </p>
                        <p className="text-sm text-muted-foreground">Confidence: {rec.confidence}</p>
                      </div>
                    </div>
                    <Button>Take Action</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Policy Details</CardTitle>
              <CardDescription>Comprehensive view of all policies</CardDescription>
            </CardHeader>
            <CardContent>
              {customer.policies.map((policy) => (
                <div key={policy.id} className="mb-6 border-b pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{policy.type}</h3>
                      <p className="text-sm text-muted-foreground">Policy ID: {policy.id}</p>
                    </div>
                    <Badge variant={policy.status === "Active" ? "default" : "outline"}>{policy.status}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium">Premium</p>
                      <p>{policy.premium}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Expiry Date</p>
                      <p>{new Date(policy.expiry).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Days Remaining</p>
                      <p>
                        {Math.ceil((new Date(policy.expiry).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}{" "}
                        days
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Renew Policy
                    </Button>
                    <Button size="sm">Modify Coverage</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interaction History</CardTitle>
              <CardDescription>Timeline of customer interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customer.interactions.map((interaction, index) => (
                  <div key={interaction.id} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        {interaction.type === "Call" ? (
                          <Phone className="h-5 w-5 text-primary" />
                        ) : interaction.type === "Email" ? (
                          <Mail className="h-5 w-5 text-primary" />
                        ) : interaction.type === "SMS" ? (
                          <MessageSquare className="h-5 w-5 text-primary" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      {index < customer.interactions.length - 1 && <div className="h-full w-px bg-border" />}
                    </div>
                    <div className="flex flex-col pb-6">
                      <span className="text-sm font-medium">{interaction.type}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(interaction.date).toLocaleDateString()}
                      </span>
                      <p className="mt-2">{interaction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>AI-powered suggestions for this customer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {customer.recommendations.map((rec) => (
                  <div key={rec.id} className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-4">
                      {rec.type === "Cross-sell" ? (
                        <div className="bg-blue-100 p-2 rounded-full">
                          <CheckCircle className="h-6 w-6 text-blue-600" />
                        </div>
                      ) : (
                        <div className="bg-green-100 p-2 rounded-full">
                          <TrendingUp className="h-6 w-6 text-green-600" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">
                          {rec.type}: {rec.product}
                        </h3>
                        <p className="text-sm text-muted-foreground">Confidence: {rec.confidence}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Why This Recommendation?</h4>
                        <p className="text-sm">
                          {rec.type === "Cross-sell"
                            ? `Based on the customer's profile and similar customers' behavior, ${rec.product} would complement their existing policies.`
                            : `The customer could benefit from enhanced coverage with ${rec.product} based on their usage patterns and risk profile.`}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-1">Suggested Approach</h4>
                        <p className="text-sm">
                          {rec.type === "Cross-sell"
                            ? "Highlight the complementary benefits and special bundle discount when combined with existing policies."
                            : "Emphasize the enhanced protection and peace of mind with only a marginal increase in premium."}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline">Schedule Call</Button>
                        <Button variant="outline">Send Email</Button>
                        <Button>Create Offer</Button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border rounded-lg border-dashed p-4 flex flex-col items-center justify-center">
                  <p className="text-muted-foreground mb-2">Generate more recommendations</p>
                  <Button variant="outline">Run AI Analysis</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
