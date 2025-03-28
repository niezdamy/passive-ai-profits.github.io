import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact Us | Passive AI Profits",
  description:
    "Get in touch with the Passive AI Profits team for questions, partnerships, or support with AI-powered passive income strategies.",
  keywords: "contact, support, AI passive income, help, questions",
  openGraph: {
    title: "Contact Us | Passive AI Profits",
    description:
      "Get in touch with the Passive AI Profits team for questions, partnerships, or support with AI-powered passive income strategies.",
    url: "https://passiveaiprofits.com/contact",
    type: "website",
  },
}

export const dynamic = "force-static"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Contact Header */}
      <section className="bg-primary py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-lg text-white/90 mb-0">
              Have questions about AI passive income? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@passiveaiprofits.com</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday, 9AM-5PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">
                        123 AI Innovation Center
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-primary hover:text-primary/80" aria-label="Twitter">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </a>
                      <a href="#" className="text-primary hover:text-primary/80" aria-label="Facebook">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-facebook"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a href="#" className="text-primary hover:text-primary/80" aria-label="Instagram">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                      <a href="#" className="text-primary hover:text-primary/80" aria-label="LinkedIn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your question or inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="consent"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I agree to the processing of my data according to the privacy policy
                      </label>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                How quickly can I start earning passive income with AI?
              </h3>
              <p className="text-gray-700 mb-6">
                The timeline varies based on your chosen strategy, but many of our students start seeing their first
                results within 30-90 days of implementing our methods consistently.
              </p>

              <h3 className="text-xl font-bold mb-3 text-primary">
                Do I need technical skills to use AI for passive income?
              </h3>
              <p className="text-gray-700 mb-6">
                No, our guides are designed for beginners with no technical background. We provide step-by-step
                instructions that anyone can follow.
              </p>

              <h3 className="text-xl font-bold mb-3 text-primary">How much does it cost to get started?</h3>
              <p className="text-gray-700">
                Many AI tools offer free tiers to get started, and most premium tools range from $10-50 per month. We
                focus on strategies with low startup costs and quick ROI.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-primary">Are your strategies ethical and legal?</h3>
              <p className="text-gray-700 mb-6">
                Absolutely. We only teach ethical, legal methods that provide real value to audiences. We cover
                important topics like copyright, disclosure requirements, and best practices.
              </p>

              <h3 className="text-xl font-bold mb-3 text-primary">Do you offer personalized support?</h3>
              <p className="text-gray-700 mb-6">
                Yes, we offer email support for all our readers and premium coaching options for those who want more
                personalized guidance.
              </p>

              <h3 className="text-xl font-bold mb-3 text-primary">
                How do I stay updated with new AI tools and strategies?
              </h3>
              <p className="text-gray-700">
                Subscribe to our newsletter to receive regular updates on new AI tools, strategies, and case studies.
                We're constantly testing and reviewing the latest developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center">
          {/* This would be replaced with an actual map in production */}
        </div>
      </section>

      <Footer />
    </div>
  )
}

