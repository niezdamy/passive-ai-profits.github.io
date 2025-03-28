import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"

export const metadata = {
  title: "AI Passive Income Blog | Passive AI Profits",
  description: "Discover strategies, tools, and insights to help you build passive income streams with AI technology.",
  keywords: "AI blog, passive income blog, AI writing, AI art, AI business strategies",
}

export const dynamic = "force-static"

export default function BlogPage() {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Getting Started with AI Writing Tools for Passive Income",
      excerpt:
        "Learn how to leverage AI writing tools to create content that generates passive income while you sleep.",
      date: "May 15, 2024",
      image: "/images/blog/ai-writing.jpg",
      category: "writing",
    },
    {
      id: 2,
      title: "How to Create and Sell AI Art on Marketplaces",
      excerpt: "A comprehensive guide to creating, listing, and selling AI-generated art on popular marketplaces.",
      date: "May 10, 2024",
      image: "/images/blog/ai-art.jpg",
      category: "art",
    },
    {
      id: 3,
      title: "Building Automated AI Workflows for Passive Revenue",
      excerpt: "Discover how to set up automated AI workflows that can generate income with minimal ongoing effort.",
      date: "May 5, 2024",
      image: "/images/blog/ai-strategy.jpg",
      category: "strategies",
    },
    {
      id: 4,
      title: "5 AI Writing Tools That Can Generate Income in 2024",
      excerpt:
        "A detailed review of the top AI writing tools that can help you create content for passive income streams.",
      date: "April 28, 2024",
      image: "/images/blog/ai-writing.jpg",
      category: "writing",
    },
    {
      id: 5,
      title: "How to Price Your AI-Generated Art for Maximum Profit",
      excerpt: "Learn the strategies for pricing your AI art to maximize your passive income potential.",
      date: "April 22, 2024",
      image: "/images/blog/ai-art.jpg",
      category: "art",
    },
    {
      id: 6,
      title: "Creating a Passive Income System with AI Chatbots",
      excerpt: "A step-by-step guide to building and monetizing AI chatbots for passive income.",
      date: "April 15, 2024",
      image: "/images/blog/ai-strategy.jpg",
      category: "strategies",
    },
    {
      id: 7,
      title: "The Legal Side of AI-Generated Content: What You Need to Know",
      excerpt: "Understanding the legal implications and copyright considerations for AI-generated content.",
      date: "April 10, 2024",
      image: "/images/blog/legal-ai.jpg",
      category: "writing",
    },
    {
      id: 8,
      title: "From Novice to Pro: Mastering AI Art Generation",
      excerpt: "A comprehensive guide to improving your AI art skills and creating professional-quality pieces.",
      date: "April 5, 2024",
      image: "/images/blog/ai-art.jpg",
      category: "art",
    },
    {
      id: 9,
      title: "Setting Up Passive Income Streams with AI: A Beginner's Guide",
      excerpt: "Everything you need to know to start building passive income streams using AI tools and strategies.",
      date: "March 30, 2024",
      image: "/images/blog/ai-income.jpg",
      category: "strategies",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Blog Header */}
      <section className="bg-primary py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            AI Passive Income Blog
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-center mb-8">
            Discover strategies, tools, and insights to help you build passive income streams with AI technology.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              aria-label="Search articles"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="writing">Writing</TabsTrigger>
              <TabsTrigger value="art">Art</TabsTrigger>
              <TabsTrigger value="strategies">Strategies</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="writing" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs
                  .filter((blog) => blog.category === "writing")
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="art" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs
                  .filter((blog) => blog.category === "art")
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="strategies" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs
                  .filter((blog) => blog.category === "strategies")
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-primary text-white">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

