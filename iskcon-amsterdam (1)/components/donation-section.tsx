import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users } from "lucide-react"

export default function DonationSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-amber-600" />
          <h2 className="text-3xl font-bold text-amber-900">Support Our Mission</h2>
        </div>
        <p className="text-amber-700 mb-6">
          Your generous contributions help us maintain the temple, organize festivals, distribute prasadam, and spread
          the message of Krishna consciousness.
        </p>

        <Tabs defaultValue="one-time" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Support</TabsTrigger>
          </TabsList>

          <TabsContent value="one-time" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €10
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €25
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €50
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €100
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €250
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                Custom
              </Button>
            </div>
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Donate Now</Button>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €5/mo
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €10/mo
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €25/mo
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €50/mo
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                €100/mo
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                Custom
              </Button>
            </div>
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Become a Monthly Supporter</Button>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Image src="/placeholder.svg?height=40&width=120" alt="PayPal" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Stripe" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="iDEAL" width={120} height={40} />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-6 w-6 text-amber-600" />
          <h2 className="text-3xl font-bold text-amber-900">Volunteer With Us</h2>
        </div>
        <p className="text-amber-700 mb-6">
          Join our community of dedicated volunteers and contribute your time and skills to serve Krishna and devotees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-900">Temple Service</CardTitle>
              <CardDescription className="text-amber-700">Help with daily temple activities</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-amber-700">
              Assist with deity worship, cleaning, gardening, and maintenance.
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-900">Kitchen Service</CardTitle>
              <CardDescription className="text-amber-700">Help prepare prasadam</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-amber-700">
              Assist with cooking, serving, and cleaning for temple programs and festivals.
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-900">Event Organization</CardTitle>
              <CardDescription className="text-amber-700">Help with festivals and programs</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-amber-700">
              Assist with planning, setup, coordination, and cleanup for temple events.
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-900">Outreach</CardTitle>
              <CardDescription className="text-amber-700">Help spread Krishna consciousness</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-amber-700">
              Assist with book distribution, social media, and community outreach programs.
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Apply to Volunteer</Button>

        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <h3 className="text-lg font-semibold mb-2 text-amber-900">Volunteer Testimonial</h3>
          <p className="text-amber-700 italic">
            "Volunteering at ISKCON Amsterdam has been the most rewarding experience of my life. The spiritual
            atmosphere and the loving community have transformed my heart."
          </p>
          <p className="text-right text-amber-800 mt-2">— Johan, Temple Volunteer</p>
        </div>
      </div>
    </div>
  )
}
