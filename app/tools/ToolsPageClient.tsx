"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ToolCard from "@/components/tool-card"
import Link from "next/link"

export default function ToolsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [showAllTools, setShowAllTools] = useState<boolean>(false)

  // Real AI tools data
  const tools = [
    {
      id: 1,
      name: "ChatGPT",
      description:
        "OpenAI's powerful language model for content creation, brainstorming, and automating writing tasks.",
      category: "writing",
      url: "https://chat.openai.com",
      image: "/images/tool-logos/chatgpt.svg",
    },
    {
      id: 2,
      name: "Midjourney",
      description:
        "AI art generator that creates stunning images from text prompts, perfect for digital products and print-on-demand.",
      category: "art",
      url: "https://www.midjourney.com",
      image: "/images/tool-logos/midjourney.svg",
    },
    {
      id: 3,
      name: "Zapier",
      description:
        "Automation platform that connects apps and services, allowing you to create AI workflows without coding.",
      category: "automation",
      url: "https://zapier.com",
      image: "/images/tool-logos/zapier.svg",
    },
    {
      id: 4,
      name: "Eleven Labs",
      description: "AI voice generation platform for creating realistic voiceovers, audiobooks, and podcast content.",
      category: "audio",
      url: "https://elevenlabs.io",
      image: "/images/tool-logos/elevenlabs.svg",
    },
    {
      id: 5,
      name: "Canva with Magic Studio",
      description:
        "Design platform with AI features for creating marketing materials, social media graphics, and digital products.",
      category: "design",
      url: "https://www.canva.com",
      image: "/images/tool-logos/canva.svg",
    },
    {
      id: 6,
      name: "Make (formerly Integromat)",
      description: "Visual automation platform for creating complex AI workflows and connecting multiple services.",
      category: "automation",
      url: "https://www.make.com",
      image: "/images/tool-logos/make.svg",
    },
    {
      id: 7,
      name: "Runway",
      description: "AI video generation and editing platform for creating marketing videos and visual content.",
      category: "video",
      url: "https://runwayml.com",
      image: "/images/tool-logos/runway.svg",
    },
    {
      id: 8,
      name: "Surfer SEO",
      description:
        "AI-powered SEO tool that helps optimize content for search engines to maximize traffic and revenue.",
      category: "seo",
      url: "https://surferseo.com",
      image: "/images/tool-logos/surfer.svg",
    },
    {
      id: 9,
      name: "Botpress",
      description:
        "Open-source platform for building AI chatbots for customer service, lead generation, and automation.",
      category: "automation",
      url: "https://botpress.com",
      image: "/images/tool-logos/botpress.svg",
    },
    {
      id: 10,
      name: "Descript",
      description:
        "All-in-one audio and video editing platform with AI transcription for creating podcast and video content.",
      category: "audio",
      url: "https://www.descript.com",
      image: "/images/tool-logos/descript.svg",
    },
    {
      id: 11,
      name: "DALL-E",
      description:
        "OpenAI's image generation model for creating unique visuals for products, marketing, and digital assets.",
      category: "art",
      url: "https://openai.com/dall-e-3",
      image: "/images/tool-logos/dalle.svg",
    },
    {
      id: 12,
      name: "Jasper",
      description: "AI writing assistant specialized for marketing copy, blog posts, and long-form content creation.",
      category: "writing",
      url: "https://www.jasper.ai",
      image: "/images/tool-logos/jasper.svg",
    },
    {
      id: 13,
      name: "Leonardo.AI",
      description:
        "AI art generation platform with fine-tuning capabilities for creating consistent style digital assets.",
      category: "art",
      url: "https://leonardo.ai",
      image: "/images/tool-logos/leonardo.svg",
    },
    {
      id: 14,
      name: "Copy.ai",
      description: "AI copywriting tool for creating marketing content, product descriptions, and social media posts.",
      category: "writing",
      url: "https://www.copy.ai",
      image: "/images/tool-logos/copyai.svg",
    },
    {
      id: 15,
      name: "Synthesia",
      description: "AI video generation platform for creating professional videos with virtual presenters from text.",
      category: "video",
      url: "https://www.synthesia.io",
      image: "/images/tool-logos/synthesia.svg",
    },
    {
      id: 16,
      name: "Stable Diffusion",
      description: "Open-source AI image generation model for creating artwork, illustrations, and design assets.",
      category: "art",
      url: "https://stability.ai",
      image: "/images/tool-logos/stability.svg",
    },
    {
      id: 17,
      name: "Frase",
      description: "AI-powered SEO content optimization tool for creating high-ranking articles and blog posts.",
      category: "seo",
      url: "https://www.frase.io",
      image: "/images/tool-logos/frase.svg",
    },
    {
      id: 18,
      name: "Murf AI",
      description: "AI voice generator for creating natural-sounding voiceovers for videos, podcasts, and courses.",
      category: "audio",
      url: "https://murf.ai",
      image: "/images/tool-logos/murf.svg",
    },
    {
      id: 19,
      name: "Notion AI",
      description: "AI writing assistant integrated with Notion for content creation, summarization, and organization.",
      category: "writing",
      url: "https://www.notion.so/product/ai",
      image: "/images/tool-logos/notion.svg",
    },
    {
      id: 20,
      name: "Pictory",
      description: "AI video creation tool that transforms written content into engaging videos with minimal effort.",
      category: "video",
      url: "https://pictory.ai",
      image: "/images/tool-logos/pictory.svg",
    },
    {
      id: 21,
      name: "Writesonic",
      description: "AI writing platform for creating blog posts, ads, landing pages, and product descriptions.",
      category: "writing",
      url: "https://writesonic.com",
      image: "/images/tool-logos/writesonic.svg",
    },
    {
      id: 22,
      name: "Otter.ai",
      description: "AI transcription service for converting audio to text for content repurposing and accessibility.",
      category: "audio",
      url: "https://otter.ai",
      image: "/images/tool-logos/otter.svg",
    },
    {
      id: 23,
      name: "Rytr",
      description: "Affordable AI writing assistant for creating blog posts, emails, and social media content.",
      category: "writing",
      url: "https://rytr.me",
      image: "/images/tool-logos/rytr.svg",
    },
    {
      id: 24,
      name: "Durable AI",
      description: "AI website builder that creates complete business websites from simple text prompts.",
      category: "design",
      url: "https://durable.co",
      image: "/images/tool-logos/durable.svg",
    },
  ]

  // Get unique categories
  const categories = [...new Set(tools.map((tool) => tool.category))]

  // Filter tools based on category and search query
  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Determine which tools to display based on "Show All" state
  const displayedTools = showAllTools ? filteredTools : filteredTools.slice(0, 12)

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    setShowAllTools(false)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowAllTools(false)
  }

  // Toggle show all tools
  const toggleShowAllTools = () => {
    setShowAllTools(!showAllTools)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Tools Header */}
      <section className="bg-primary py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">AI Tools Directory</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-center mb-8">
            Discover the best AI tools to help you build passive income streams and automate your business.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 md:px-6 bg-gray-50 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <Input
                type="search"
                placeholder="Search tools..."
                className="pl-10"
                aria-label="Search tools"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex gap-2">
              <Select onValueChange={handleCategoryChange} defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          {filteredTools.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>

              {/* Load More Button - only show if there are more tools to display */}
              {filteredTools.length > 12 && (
                <div className="mt-12 text-center">
                  <Button variant="outline" className="px-8" onClick={toggleShowAllTools}>
                    {showAllTools ? "Show Less Tools" : `Load More Tools (${filteredTools.length - 12} more)`}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Tool Categories Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">AI Tools by Category</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">AI Writing Tools</h3>
              <p className="text-gray-700 mb-4">
                Create blog posts, marketing copy, and books with AI writing assistants that help you generate passive
                income through content.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleCategoryChange("writing")}>
                Explore Writing Tools
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">AI Art & Design</h3>
              <p className="text-gray-700 mb-4">
                Generate stunning visuals, illustrations, and designs for print-on-demand products, NFTs, and digital
                assets.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleCategoryChange("art")}>
                Explore Art Tools
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">AI Automation</h3>
              <p className="text-gray-700 mb-4">
                Build automated workflows and systems that generate income with minimal ongoing maintenance or
                intervention.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleCategoryChange("automation")}>
                Explore Automation Tools
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">AI Video Creation</h3>
              <p className="text-gray-700 mb-4">
                Create engaging video content for YouTube, courses, and marketing without complex video editing skills.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleCategoryChange("video")}>
                Explore Video Tools
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">AI Audio Tools</h3>
              <p className="text-gray-700 mb-4">
                Generate voiceovers, podcasts, and audio content with realistic AI voices and transcription services.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleCategoryChange("audio")}>
                Explore Audio Tools
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">AI SEO Tools</h3>
              <p className="text-gray-700 mb-4">
                Optimize your content for search engines to drive organic traffic and increase passive income potential.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleCategoryChange("seo")}>
                Explore SEO Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your AI Passive Income Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Learn how to leverage these powerful AI tools to create sustainable passive income streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
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

