import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-amber-900">Contact Us</h2>

        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-amber-600 mt-1" />
            <div>
              <h3 className="font-medium text-amber-900">Address</h3>
              <p className="text-amber-700">123 Spiritual Street, 1000 AB Amsterdam, Netherlands</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-amber-600 mt-1" />
            <div>
              <h3 className="font-medium text-amber-900">Phone</h3>
              <p className="text-amber-700">+31 20 123 4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-amber-600 mt-1" />
            <div>
              <h3 className="font-medium text-amber-900">Email</h3>
              <p className="text-amber-700">info@iskconamsterdam.com</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-amber-900">Follow Us</h3>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-amber-600 text-amber-800 hover:bg-amber-100"
            >
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-amber-900">Temple Hours</h3>
          <Card className="border-amber-200">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-amber-900">Monday - Friday</span>
                  <span className="text-amber-700">7:00 AM - 8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-amber-900">Saturday</span>
                  <span className="text-amber-700">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-amber-900">Sunday</span>
                  <span className="text-amber-700">7:00 AM - 9:00 PM</span>
                </div>
                <div className="pt-2 text-sm text-amber-700">
                  <p>* Special hours may apply during festivals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">Send Us a Message</CardTitle>
            <CardDescription className="text-amber-700">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-amber-900">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-amber-900">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-amber-900">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-amber-900">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 aspect-video w-full rounded-lg overflow-hidden border-2 border-amber-200">
          {/* In a real implementation, this would be a Google Maps embed */}
          <div className="w-full h-full bg-amber-100 flex items-center justify-center">
            <p className="text-amber-800 font-medium">Google Maps Embed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
