"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // In a real implementation, these would be fetched from an API or CMS
  const galleries = {
    festivals: [
      { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Janmashtami Celebration" },
      { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Ratha Yatra Festival" },
      { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Gaura Purnima Celebration" },
      { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Diwali Celebration" },
    ],
    kirtans: [
      { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Evening Kirtan" },
      { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Kirtan in the Park" },
      { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Kirtan Mela" },
    ],
    prasadam: [
      { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Sunday Feast" },
      { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Prasadam Distribution" },
      { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Special Festival Feast" },
    ],
    temple: [
      { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Temple Exterior" },
      { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Temple Altar" },
      { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Temple Garden" },
    ],
  }

  return (
    <>
      <Tabs defaultValue="festivals" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="festivals">Festivals</TabsTrigger>
          <TabsTrigger value="kirtans">Kirtans</TabsTrigger>
          <TabsTrigger value="prasadam">Prasadam</TabsTrigger>
          <TabsTrigger value="temple">Temple</TabsTrigger>
        </TabsList>

        {Object.entries(galleries).map(([category, images]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer overflow-hidden rounded-md">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={300}
                        height={200}
                        className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <div className="relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="object-contain max-h-[80vh]"
                      />
                      <div className="absolute top-2 right-2">
                        <button className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-amber-900 font-medium">{image.alt}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
