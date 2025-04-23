import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function DailyDarshan() {
  // In a real implementation, these would be fetched from an API or CMS
  const darshans = [
    { id: 1, image: "/placeholder.svg?height=600&width=800", alt: "Sri Sri Radha Krishna Darshan" },
    { id: 2, image: "/placeholder.svg?height=600&width=800", alt: "Sri Sri Gaura Nitai Darshan" },
    { id: 3, image: "/placeholder.svg?height=600&width=800", alt: "Sri Sri Jagannath Darshan" },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {darshans.map((darshan) => (
            <CarouselItem key={darshan.id}>
              <Card className="border-amber-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={darshan.image || "/placeholder.svg"} alt={darshan.alt} fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center bg-amber-50">
                    <p className="text-amber-900 font-medium">{darshan.alt}</p>
                    <p className="text-amber-700 text-sm">Today's Darshan - {new Date().toLocaleDateString()}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  )
}
