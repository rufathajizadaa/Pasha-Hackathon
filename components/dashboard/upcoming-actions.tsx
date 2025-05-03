import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Tag, AlertCircle, RefreshCw } from "lucide-react"

export function UpcomingActions() {
  const actions = [
    {
      id: 1,
      customer: "Emma Johnson",
      action: "Send renewal offer",
      type: "renewal",
      priority: "high",
      icon: RefreshCw,
    },
    {
      id: 2,
      customer: "Michael Brown",
      action: "Cross-sell home insurance",
      type: "cross-sell",
      priority: "medium",
      icon: Tag,
    },
    {
      id: 3,
      customer: "Sophia Williams",
      action: "Follow up on claim",
      type: "follow-up",
      priority: "medium",
      icon: Phone,
    },
    {
      id: 4,
      customer: "James Smith",
      action: "Churn risk - contact immediately",
      type: "churn",
      priority: "high",
      icon: AlertCircle,
    },
    {
      id: 5,
      customer: "Olivia Davis",
      action: "Send policy update email",
      type: "update",
      priority: "low",
      icon: Mail,
    },
  ]

  return (
    <div className="space-y-4">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <Card key={action.id} className="border-l-4 border-l-primary">
            <CardContent className="p-4 flex justify-between items-center">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{action.customer}</p>
                  <p className="text-sm text-muted-foreground">{action.action}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    action.priority === "high" ? "destructive" : action.priority === "medium" ? "default" : "outline"
                  }
                >
                  {action.priority}
                </Badge>
                <Button size="sm">Take Action</Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
