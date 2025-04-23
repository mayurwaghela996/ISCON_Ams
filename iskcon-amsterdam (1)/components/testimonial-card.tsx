import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  image: string
  text: string
}

export default function TestimonialCard({ name, image, text }: TestimonialCardProps) {
  return (
    <Card className="h-full border-amber-200">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-amber-200">
            <AvatarImage src={image || "/placeholder.svg"} alt={name} />
            <AvatarFallback className="bg-amber-100 text-amber-800">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-amber-900">{name}</h3>
            <p className="text-sm text-amber-700">Devotee</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <QuoteIcon className="h-8 w-8 text-amber-200 absolute -top-1 -left-2 opacity-50" />
          <p className="text-amber-700 relative z-10 pl-4">{text}</p>
        </div>
      </CardContent>
    </Card>
  )
}
