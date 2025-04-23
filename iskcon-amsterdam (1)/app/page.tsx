import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Clock, Music, PlayCircle, PhoneIcon as WhatsApp } from "lucide-react"
import AartiSchedule from "@/components/aarti-schedule"
import DailyDarshan from "@/components/daily-darshan"
import EventCard from "@/components/event-card"
import TestimonialCard from "@/components/testimonial-card"
import GallerySection from "@/components/gallery-section"
import NewsletterForm from "@/components/newsletter-form"
import DonationSection from "@/components/donation-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Floating Aarti Schedule Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <AartiSchedule />
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12 shadow-lg">
          <WhatsApp className="h-6 w-6" />
        </Button>
      </div>

      {/* Audio Player Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm">
          <Music className="h-4 w-4" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="ISKCON Amsterdam Temple"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100">Welcome to ISKCON Amsterdam</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-amber-50">
            Experience Spiritual Bliss with Bhakti Yoga, Kirtan & Community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Join Us
            </Button>
            <Button size="lg" variant="outline" className="border-amber-200 text-amber-100 hover:bg-amber-800/20">
              See Events
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Darshan Feed */}
      <section className="py-12 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">Today's Darshan</h2>
          <DailyDarshan />
        </div>
      </section>

      {/* Current & Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-amber-900">Events</h2>
          <p className="text-center mb-8 text-amber-700">Join us for spiritual gatherings and celebrations</p>

          <Tabs defaultValue="upcoming" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard
                  title="Janmashtami Celebration"
                  date="August 30, 2025"
                  time="6:00 PM - 12:00 AM"
                  location="Main Temple Hall"
                  image="/placeholder.svg?height=300&width=400"
                  category="Festival"
                />
                <EventCard
                  title="Bhagavad Gita Study Group"
                  date="Every Sunday"
                  time="10:00 AM - 11:30 AM"
                  location="Study Room 2"
                  image="/placeholder.svg?height=300&width=400"
                  category="Class"
                />
                <EventCard
                  title="Kirtan Evening"
                  date="May 15, 2025"
                  time="7:00 PM - 9:00 PM"
                  location="Temple Hall"
                  image="/placeholder.svg?height=300&width=400"
                  category="Kirtan"
                />
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                  View All Events
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ongoing" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard
                  title="Food Distribution Program"
                  date="Daily"
                  time="12:00 PM - 2:00 PM"
                  location="Temple Kitchen"
                  image="/placeholder.svg?height=300&width=400"
                  category="Service"
                />
                <EventCard
                  title="Bhakti Vriksha Program"
                  date="Every Wednesday"
                  time="6:30 PM - 8:30 PM"
                  location="Various Locations"
                  image="/placeholder.svg?height=300&width=400"
                  category="Community"
                />
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard
                  title="Ratha Yatra Festival"
                  date="July 10, 2024"
                  time="11:00 AM - 6:00 PM"
                  location="Amsterdam City Center"
                  image="/placeholder.svg?height=300&width=400"
                  category="Festival"
                />
                <EventCard
                  title="Gaura Purnima Celebration"
                  date="March 25, 2024"
                  time="6:00 PM - 10:00 PM"
                  location="Main Temple Hall"
                  image="/placeholder.svg?height=300&width=400"
                  category="Festival"
                />
                <EventCard
                  title="Spiritual Retreat"
                  date="June 5-7, 2024"
                  time="All Day"
                  location="Radhadesh, Belgium"
                  image="/placeholder.svg?height=300&width=400"
                  category="Retreat"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Devotee Reviews & Experiences */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-amber-900">Devotee Experiences</h2>
          <p className="text-center mb-8 text-amber-700">Hear from our community members</p>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <TestimonialCard
                  name="Radha Sharma"
                  image="/placeholder.svg?height=100&width=100"
                  text="Visiting ISKCON Amsterdam changed my life. The peaceful atmosphere and the devotees' kindness helped me find my spiritual path."
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <TestimonialCard
                  name="Jan van der Berg"
                  image="/placeholder.svg?height=100&width=100"
                  text="The kirtan sessions at ISKCON Amsterdam are truly transcendental. I feel connected to something higher whenever I participate."
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <TestimonialCard
                  name="Maria González"
                  image="/placeholder.svg?height=100&width=100"
                  text="The prasadam is divine! I come every Sunday for the feast and spiritual nourishment."
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          <div className="mt-12 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-amber-900">Share Your Experience</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-amber-700 mb-1">
                  Your Experience
                </label>
                <Textarea id="experience" placeholder="Share your spiritual experience..." className="min-h-[120px]" />
              </div>
              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-amber-700 mb-1">
                  Upload Photo (optional)
                </label>
                <Input id="photo" type="file" accept="image/*" />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Submit Your Story</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-amber-900">Gallery</h2>
          <p className="text-center mb-8 text-amber-700">Moments from our temple and events</p>

          <GallerySection />
        </div>
      </section>

      {/* About the Temple */}
      <section className="py-16 bg-gradient-to-b from-amber-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="ISKCON Amsterdam Temple"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-amber-900">About ISKCON Amsterdam</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-800">Our Mission</h3>
                  <p className="text-amber-700">
                    To promote spiritual well-being through the teachings of Bhakti Yoga as presented by His Divine
                    Grace A.C. Bhaktivedanta Swami Prabhupada, the Founder-Acharya of the International Society for
                    Krishna Consciousness.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-800">Our Vision</h3>
                  <p className="text-amber-700">
                    To create a spiritual sanctuary where everyone can experience the bliss of Krishna consciousness
                    through devotional service, kirtan, prasadam, and community.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-800">History</h3>
                  <p className="text-amber-700">
                    ISKCON Amsterdam was established in 1970, shortly after Srila Prabhupada's visit to the Netherlands.
                    Since then, it has grown into a vibrant spiritual community serving thousands of devotees and
                    visitors.
                  </p>
                </div>

                <Button className="bg-amber-600 hover:bg-amber-700 text-white mt-4">
                  Learn More About Bhakti Yoga
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Teachings */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-amber-900">Spiritual Teachings</h2>
          <p className="text-center mb-12 text-amber-700">Wisdom from Srila Prabhupada</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">Bhagavad Gita</CardTitle>
                <CardDescription className="text-amber-600">The Song of God</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 italic">
                  "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do
                  so, the mind will remain the greatest enemy."
                </p>
                <p className="text-right text-amber-600 mt-2">— Bhagavad Gita 6.6</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  Explore Bhagavad Gita
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">Srimad Bhagavatam</CardTitle>
                <CardDescription className="text-amber-600">The Beautiful Story of the Supreme Lord</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 italic">
                  "The supreme occupation for all humanity is that by which men can attain to loving devotional service
                  unto the transcendent Lord."
                </p>
                <p className="text-right text-amber-600 mt-2">— Srimad Bhagavatam 1.2.6</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  Discover Srimad Bhagavatam
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">Srila Prabhupada's Teachings</CardTitle>
                <CardDescription className="text-amber-600">Wisdom from the Founder-Acharya</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 italic">
                  "Spiritual life begins when you understand that you are not this body. You are spirit soul, part and
                  parcel of the Supreme Lord, Krishna."
                </p>
                <p className="text-right text-amber-600 mt-2">— Srila Prabhupada</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-amber-600 text-amber-800 hover:bg-amber-100">
                  Explore More Teachings
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-amber-900">Listen to Our Podcasts</h3>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Spiritual Podcasts</Button>
          </div>
        </div>
      </section>

      {/* Bhakti Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-amber-900">Bhakti Blog</h2>
          <p className="text-center mb-8 text-amber-700">Insights from our devotees and temple leaders</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=500" alt="Blog post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-amber-700 border-amber-300">
                    Spiritual Practice
                  </Badge>
                  <span className="text-sm text-amber-600">April 15, 2025</span>
                </div>
                <CardTitle className="text-amber-900">The Power of Japa Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 line-clamp-3">
                  Discover how the practice of chanting the Hare Krishna maha-mantra on japa beads can transform your
                  consciousness and bring peace to your life...
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-amber-600 hover:text-amber-800 p-0">
                  Read More →
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=500" alt="Blog post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-amber-700 border-amber-300">
                    Philosophy
                  </Badge>
                  <span className="text-sm text-amber-600">April 10, 2025</span>
                </div>
                <CardTitle className="text-amber-900">Understanding Karma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 line-clamp-3">
                  Karma is more than just "what goes around comes around." Learn about the deeper spiritual science
                  behind karma and how it affects your life...
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-amber-600 hover:text-amber-800 p-0">
                  Read More →
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=500" alt="Blog post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-amber-700 border-amber-300">
                    Community
                  </Badge>
                  <span className="text-sm text-amber-600">April 5, 2025</span>
                </div>
                <CardTitle className="text-amber-900">The Joy of Temple Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 line-clamp-3">
                  Serving at the temple is not just work—it's devotional service that purifies the heart. Read about the
                  experiences of our dedicated volunteers...
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-amber-600 hover:text-amber-800 p-0">
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
              View All Blog Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Live Kirtan Streaming */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-amber-900">Live Kirtan</h2>
          <p className="text-center mb-8 text-amber-700">Join our spiritual music sessions</p>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Live Kirtan" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="h-16 w-16 rounded-full bg-amber-600/90 hover:bg-amber-700/90">
                  <PlayCircle className="h-10 w-10" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Evening Kirtan - Live Now</h3>
              <div className="flex items-center text-amber-700 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Started 45 minutes ago</span>
              </div>
              <p className="text-amber-700 mb-4">
                Experience the transcendental vibrations of the Hare Krishna maha-mantra through our live kirtan
                sessions. Join us virtually or in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Join Live Stream</Button>
                <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>

      {/* Volunteer & Donation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <DonationSection />
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>
    </div>
  )
}
