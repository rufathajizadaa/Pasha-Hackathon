import { Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">PASHA Insurance</span>
          <span className="text-muted-foreground">Dashboard Tool</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search customers..." className="w-full pl-8" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <span className="hidden md:inline-flex">John Doe</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted">JD</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
