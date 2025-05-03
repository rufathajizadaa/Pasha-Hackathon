"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function BarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Set colors based on theme
    const textColor = theme === "dark" ? "#f8fafc" : "#0f172a"
    const gridColor = theme === "dark" ? "#334155" : "#e2e8f0"
    const barColors = [
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#f97316",
      "#10b981",
      "#6366f1",
      "#14b8a6",
      "#f59e0b",
      "#ef4444",
      "#06b6d4",
    ]

    // Sample data
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const data = [65, 59, 80, 81, 56, 55]

    // Chart dimensions
    const chartWidth = ctx.canvas.width
    const chartHeight = ctx.canvas.height
    const padding = 40
    const availableWidth = chartWidth - padding * 2
    const availableHeight = chartHeight - padding * 2

    // Bar width
    const barCount = data.length
    const barWidth = (availableWidth / barCount) * 0.8
    const barSpacing = (availableWidth / barCount) * 0.2

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 1
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, chartHeight - padding)
    ctx.lineTo(chartWidth - padding, chartHeight - padding)
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.font = "12px sans-serif"
    ctx.fillStyle = textColor

    for (let i = 0; i <= gridLines; i++) {
      const y = chartHeight - padding - i * (availableHeight / gridLines)
      const value = Math.round((i / gridLines) * Math.max(...data))

      ctx.beginPath()
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 0.5
      ctx.moveTo(padding, y)
      ctx.lineTo(chartWidth - padding, y)
      ctx.stroke()

      ctx.fillText(value.toString(), padding - 10, y)
    }

    // Draw bars and labels
    ctx.textAlign = "center"
    ctx.textBaseline = "top"

    data.forEach((value, index) => {
      const x = padding + index * (barWidth + barSpacing) + barSpacing / 2
      const barHeight = (value / Math.max(...data)) * availableHeight
      const y = chartHeight - padding - barHeight

      // Draw bar
      ctx.fillStyle = barColors[index % barColors.length]
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw label
      ctx.fillStyle = textColor
      ctx.fillText(labels[index], x + barWidth / 2, chartHeight - padding + 10)
    })
  }, [theme])

  return <canvas ref={canvasRef} width={800} height={400} className="w-full h-full" />
}

export function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Set colors based on theme
    const textColor = theme === "dark" ? "#f8fafc" : "#0f172a"
    const gridColor = theme === "dark" ? "#334155" : "#e2e8f0"
    const lineColor = "#3b82f6"
    const fillColor = theme === "dark" ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)"

    // Sample data
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
    const data = [65, 59, 80, 81, 56, 55, 72, 68]

    // Chart dimensions
    const chartWidth = ctx.canvas.width
    const chartHeight = ctx.canvas.height
    const padding = 40
    const availableWidth = chartWidth - padding * 2
    const availableHeight = chartHeight - padding * 2

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 1
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, chartHeight - padding)
    ctx.lineTo(chartWidth - padding, chartHeight - padding)
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.font = "12px sans-serif"
    ctx.fillStyle = textColor

    for (let i = 0; i <= gridLines; i++) {
      const y = chartHeight - padding - i * (availableHeight / gridLines)
      const value = Math.round((i / gridLines) * Math.max(...data))

      ctx.beginPath()
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 0.5
      ctx.moveTo(padding, y)
      ctx.lineTo(chartWidth - padding, y)
      ctx.stroke()

      ctx.fillText(value.toString(), padding - 10, y)
    }

    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = lineColor
    ctx.lineWidth = 2

    data.forEach((value, index) => {
      const x = padding + index * (availableWidth / (data.length - 1))
      const y = chartHeight - padding - (value / Math.max(...data)) * availableHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Fill area under line
    ctx.lineTo(padding + availableWidth, chartHeight - padding)
    ctx.lineTo(padding, chartHeight - padding)
    ctx.closePath()
    ctx.fillStyle = fillColor
    ctx.fill()

    // Draw points
    data.forEach((value, index) => {
      const x = padding + index * (availableWidth / (data.length - 1))
      const y = chartHeight - padding - (value / Math.max(...data)) * availableHeight

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
      ctx.strokeStyle = lineColor
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw labels
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.fillStyle = textColor

    labels.forEach((label, index) => {
      const x = padding + index * (availableWidth / (labels.length - 1))
      ctx.fillText(label, x, chartHeight - padding + 10)
    })
  }, [theme])

  return <canvas ref={canvasRef} width={800} height={400} className="w-full h-full" />
}

export function PieChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Set colors based on theme
    const textColor = theme === "dark" ? "#f8fafc" : "#0f172a"
    const colors = [
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#f97316",
      "#10b981",
      "#6366f1",
      "#14b8a6",
      "#f59e0b",
      "#ef4444",
      "#06b6d4",
    ]

    // Sample data
    const data = [35, 25, 20, 15, 5]
    const labels = ["Car Insurance", "Home Insurance", "Health Insurance", "Travel Insurance", "Life Insurance"]

    // Chart dimensions
    const chartWidth = ctx.canvas.width
    const chartHeight = ctx.canvas.height
    const centerX = chartWidth / 2
    const centerY = chartHeight / 2
    const radius = Math.min(centerX, centerY) * 0.7

    // Calculate total
    const total = data.reduce((sum, value) => sum + value, 0)

    // Draw pie
    let startAngle = 0

    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = colors[index % colors.length]
      ctx.fill()

      // Draw label line and text
      const midAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 1.2
      const labelX = centerX + Math.cos(midAngle) * labelRadius
      const labelY = centerY + Math.sin(midAngle) * labelRadius

      ctx.beginPath()
      ctx.moveTo(centerX + Math.cos(midAngle) * radius, centerY + Math.sin(midAngle) * radius)
      ctx.lineTo(labelX, labelY)
      ctx.strokeStyle = colors[index % colors.length]
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw label
      ctx.font = "12px sans-serif"
      ctx.fillStyle = textColor
      ctx.textAlign = labelX > centerX ? "left" : "right"
      ctx.textBaseline = "middle"
      ctx.fillText(`${labels[index]} (${Math.round((value / total) * 100)}%)`, labelX, labelY)

      startAngle += sliceAngle
    })
  }, [theme])

  return <canvas ref={canvasRef} width={800} height={400} className="w-full h-full" />
}
