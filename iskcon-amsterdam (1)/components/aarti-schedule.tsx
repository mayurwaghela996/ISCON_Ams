"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ChevronDown, ChevronUp } from "lucide-react"

export default function AartiSchedule() {
  const [isOpen, setIsOpen] = useState(false)

  const schedule = [
    { time: "4:30 AM", name: "Mangala Arati" },
    { time: "7:30 AM", name: "Darshan Arati" },
    { time: "8:30 AM", name: "Guru Puja" },
    { time: "12:00 PM", name: "Bhoga Arati" },
    { time: "4:00 PM", name: "Dhupa Arati" },
    { time: "7:00 PM", name: "Sandhya Arati" },
    { time: "8:30 PM", name: "Shayana Arati" },
  ]

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg"
      >
        <Clock className="h-4 w-4" />
        <span>Aarti Schedule</span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <Card className="absolute bottom-full mb-2 right-0 w-64 shadow-lg border-amber-200 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-900">Daily Aarti Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {schedule.map((item, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span className="font-medium text-amber-900">{item.name}</span>
                  <span className="text-amber-700">{item.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
