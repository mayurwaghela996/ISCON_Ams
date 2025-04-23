import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  image: string
  category: string
}

export default function EventCard({ title, date, time, location, image, category }: EventCardProps) {
  return (
    <Card className="overflow-hidden border-amber-200 hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className="bg-amber-600 hover:bg-amber-700">{category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold text-amber-900">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-2 pb-2">
        <div className="flex items-center text-amber-700">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-amber-700">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center text-amber-700">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
