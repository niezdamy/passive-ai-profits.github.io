import Link from "next/link"
import { ArrowRight, Bot, PenTool, Lightbulb, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"

export const metadata = {
  title: "Passive AI Profits - Learn AI Passive Income Strategies",
  description:
    "Learn how to leverage AI tools and strategies to build sustainable passive income streams with minimal effort and technical knowledge.",
  keywords: "passive income, AI tools, artificial intelligence income, passive AI income, make money with AI",
}

export const dynamic = "force-static"

export default function Home() {
  // Sample blog data
  const featuredBlogs = [
    {
      id: 1,
      title: "Getting Started with AI Writing Tools for Passive Income",
      excerpt:
        "Learn how to leverage AI writing tools to create content that generates passive income while you sleep.",
      date: "May 15, 2024",
      image: "/images/blog/ai-writing.jpg",
    },
    {
      id: 2,
      title: "How to Create and Sell AI Art on Marketplaces",
      excerpt: "A comprehensive guide to creating, listing, and selling AI-generated art on popular marketplaces.",
      date: "May 10, 2024",
      image: "/images/blog/ai-art.jpg",
    },
    {
      id: 3,
      title: "Building Automated AI Workflows for Passive Revenue",
      excerpt: "Discover how to set up automated AI workflows that can generate income with minimal ongoing effort.",
      date: "May 5, 2024",
      image: "/images/blog/ai-income.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4 md:px-6 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/blog/ai-strategy.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Turn AI Knowledge Into Passive Income
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Learn how to leverage AI tools and strategies to build sustainable passive income streams.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/tools">
              Check out the toolkit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features/Topics Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore AI Income Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI Writing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create blogs, books, and marketing content using AI tools. Learn how to monetize your AI-written
                  content through various platforms.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog?category=writing" className="text-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI Art & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generate and sell artwork, designs, and digital assets created with AI. Discover marketplaces and
                  strategies for selling your creations.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog?category=art" className="text-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI Business Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build automated systems and workflows using AI to create scalable passive income businesses with
                  minimal ongoing maintenance.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog?category=strategies" className="text-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
            <Link href="/blog">
              <Button variant="outline" className="hidden md:flex">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog">
              <Button variant="outline">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 px-4 md:px-6 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 text-white/90">
              Subscribe to our newsletter for the latest AI tools, strategies, and passive income opportunities.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
                aria-label="Email address"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

