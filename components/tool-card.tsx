import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ToolCardProps {
  tool: {
    id: number
    name: string
    description: string
    category: string
    url: string
    image: string
  }
}

export default function ToolCard({ tool }: ToolCardProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center relative p-2">
          <img 
            src={tool.image ? `${basePath}${tool.image}` : `${basePath}/placeholder.svg`} 
            alt={tool.name} 
            className="w-full h-full object-contain" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/placeholder.svg";
              console.log(`Image for ${tool.name} failed to load: ${tool.image}`);
            }}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">{tool.name}</h3>
          <Badge variant="outline" className="text-xs capitalize">
            {tool.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{tool.description}</p>
      </CardContent>

      <CardFooter className="pt-2 border-t">
        <Button asChild variant="outline" className="w-full">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Visit Tool <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

