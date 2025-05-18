import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
  blog: {
    id: number
    title: string
    excerpt: string
    date: string
    image: string
    category?: string
  }
}

export default function BlogCard({ blog }: BlogCardProps) {
  // Use empty string as basePath - site is deployed at root level
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.image ? (blog.image.startsWith('/') ? `${basePath}${blog.image}` : `${basePath}/${blog.image}`) : `${basePath}/placeholder.svg`}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform hover:scale-105 duration-300"
          priority
        />
        {blog.category && (
          <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded uppercase z-10">
            {blog.category}
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <Link href={`/blog/${blog.id}`} className="hover:underline">
          <h3 className="text-xl font-bold line-clamp-2">{blog.title}</h3>
        </Link>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
      </CardContent>

      <CardFooter className="pt-2 border-t flex justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          {blog.date}
        </div>
        <Link href={`/blog/${blog.id}`} className="text-primary text-sm font-medium hover:underline">
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}

