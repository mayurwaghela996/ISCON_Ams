import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail } from "lucide-react"

export default function NewsletterForm() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">Stay Connected</h2>
      <p className="mb-8 text-amber-100">
        Subscribe to our newsletter for spiritual insights, event updates, and temple news
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-300 h-5 w-5" />
              <Input
                type="email"
                placeholder="Your email address"
                className="pl-10 bg-amber-700 border-amber-600 text-white placeholder:text-amber-300 focus-visible:ring-amber-400"
              />
            </div>
          </div>
          <Button className="bg-white text-amber-800 hover:bg-amber-100">Subscribe</Button>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">I'm interested in:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-start">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="events"
                className="border-amber-300 data-[state=checked]:bg-amber-300 data-[state=checked]:text-amber-950"
              />
              <label htmlFor="events" className="text-sm font-medium leading-none cursor-pointer">
                Event Updates
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="teachings"
                className="border-amber-300 data-[state=checked]:bg-amber-300 data-[state=checked]:text-amber-950"
              />
              <label htmlFor="teachings" className="text-sm font-medium leading-none cursor-pointer">
                Spiritual Teachings
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="festivals"
                className="border-amber-300 data-[state=checked]:bg-amber-300 data-[state=checked]:text-amber-950"
              />
              <label htmlFor="festivals" className="text-sm font-medium leading-none cursor-pointer">
                Festival Announcements
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="blog"
                className="border-amber-300 data-[state=checked]:bg-amber-300 data-[state=checked]:text-amber-950"
              />
              <label htmlFor="blog" className="text-sm font-medium leading-none cursor-pointer">
                Blog Posts
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="prasadam"
                className="border-amber-300 data-[state=checked]:bg-amber-300 data-[state=checked]:text-amber-950"
              />
              <label htmlFor="prasadam" className="text-sm font-medium leading-none cursor-pointer">
                Prasadam Recipes
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="reminders"
                className="border-amber-300 data-[state=checked]:bg-amber-300 data-[state=checked]:text-amber-950"
              />
              <label htmlFor="reminders" className="text-sm font-medium leading-none cursor-pointer">
                Aarti Reminders
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
