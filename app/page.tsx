import type { Metadata } from "next"
import DashboardOverview from "@/components/dashboard/dashboard-overview"

export const metadata: Metadata = {
  title: "PASHA Insurance Dashboard",
  description: "Comprehensive data-driven platform for PASHA Insurance representatives",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <DashboardOverview />
    </main>
  )
}
