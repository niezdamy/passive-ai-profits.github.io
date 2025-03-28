import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Target, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Passive AI Profits | AI-Powered Passive Income Strategies",
  description:
    "Learn how Passive AI Profits helps beginners leverage artificial intelligence tools to create sustainable passive income streams with minimal effort and technical knowledge.",
  keywords:
    "passive income, AI tools, artificial intelligence income, passive AI income, make money with AI, AI business strategies",
  openGraph: {
    title: "About Passive AI Profits | AI-Powered Passive Income Strategies",
    description:
      "Learn how Passive AI Profits helps beginners leverage artificial intelligence tools to create sustainable passive income streams with minimal effort and technical knowledge.",
    url: "https://passiveaiprofits.com/about",
    type: "website",
  },
}

export const dynamic = "force-static"

export default function AboutPage() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Digital Entrepreneur",
      content:
        "The AI writing strategies I learned from Passive AI Profits helped me launch three niche blogs that now generate over $3,000 monthly with minimal maintenance.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Graphic Designer",
      content:
        "I was skeptical about AI art, but after following the tutorials here, I'm now selling AI-generated designs on multiple platforms and earning a consistent side income.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Former Teacher",
      content:
        "As someone with no technical background, I was amazed at how easily I could implement these AI tools. My educational content now earns passive income while I sleep.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4 md:px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Mission: AI-Powered Financial Freedom
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              We help beginners harness the power of artificial intelligence to build sustainable passive income streams
              with minimal effort.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Transforming Passive Income Through AI</h2>
              <p className="text-lg mb-6 text-gray-700">
                Passive AI Profits was founded in 2023 with a clear vision: to democratize access to AI-powered income
                opportunities for everyone, regardless of technical background or experience.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We believe that artificial intelligence is revolutionizing how people can generate income online,
                creating unprecedented opportunities for those who understand how to leverage these powerful tools.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Our team of AI specialists, digital entrepreneurs, and content creators have combined their expertise to
                create practical, actionable resources that and content creators have combined their expertise to create
                practical, actionable resources that help beginners navigate the exciting world of AI-powered passive
                income.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/tools">Browse Tools</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/blog">Read Our Blog</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI-powered passive income illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Users className="h-5 w-5" />
                  <span>10,000+ Students</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Award className="h-5 w-5" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Passive Income Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Understanding Passive Income in the AI Era</h2>
            <p className="text-lg text-gray-700">
              Passive income is money earned with minimal ongoing effort, allowing you to generate revenue while
              focusing on other priorities or even while you sleep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Traditional Passive Income</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Real estate investments and rental properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Dividend stocks and investment portfolios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Creating and selling digital products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Affiliate marketing and ad revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Often requires significant upfront capital</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">AI-Powered Passive Income</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>AI-generated content creation at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Automated digital product creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>AI art and design for print-on-demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Chatbots and AI assistants for businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Lower barriers to entry with minimal capital</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How AI is Changing Passive Income */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">
            How AI is Revolutionizing Passive Income
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Content Creation at Scale</h3>
              <p className="text-gray-700">
                AI writing tools can generate blog posts, articles, and books at unprecedented speeds, allowing content
                creators to produce more assets that generate income through ads, affiliate marketing, and direct sales.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Automated Digital Products</h3>
              <p className="text-gray-700">
                AI can help create digital products like e-books, courses, and templates that can be sold repeatedly
                without additional work, creating truly passive revenue streams.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Lower Barrier to Entry</h3>
              <p className="text-gray-700">
                Unlike traditional passive income methods that require significant capital or specialized skills, AI
                tools make it possible for beginners to start generating passive income with minimal investment.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Explore Our Strategies <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <p className="italic text-gray-700">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your AI Passive Income Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of others who are already leveraging AI tools to build sustainable passive income streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/tools">Browse Tools</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

