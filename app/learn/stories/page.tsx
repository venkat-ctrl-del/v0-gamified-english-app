"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowLeft,
  ArrowRight,
  Star,
  CheckCircle,
  Lock,
  Headphones,
} from "lucide-react"
import Link from "next/link"

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const stories = [
    {
      id: 1,
      title: "The Magic Forest",
      description: "Join Luna on her adventure through an enchanted forest",
      level: "Beginner",
      duration: "5 min",
      completed: true,
      locked: false,
      image: "/placeholder.svg?height=200&width=300&text=Magic+Forest",
      pages: [
        {
          text: "Once upon a time, there was a little girl named Luna who loved to explore.",
          image: "/placeholder.svg?height=300&width=400&text=Luna+exploring",
          words: ["once", "upon", "time", "little", "girl", "named", "Luna", "loved", "explore"],
        },
        {
          text: "One sunny day, she discovered a magical forest behind her house.",
          image: "/placeholder.svg?height=300&width=400&text=Magical+forest",
          words: ["sunny", "day", "discovered", "magical", "forest", "behind", "house"],
        },
        {
          text: "The trees sparkled with golden leaves and friendly animals welcomed her.",
          image: "/placeholder.svg?height=300&width=400&text=Sparkling+trees",
          words: ["trees", "sparkled", "golden", "leaves", "friendly", "animals", "welcomed"],
        },
      ],
    },
    {
      id: 2,
      title: "The Brave Little Robot",
      description: "Follow Robo as he helps his friends in the city",
      level: "Beginner",
      duration: "6 min",
      completed: true,
      locked: false,
      image: "/placeholder.svg?height=200&width=300&text=Brave+Robot",
      pages: [
        {
          text: "In a busy city lived a small robot named Robo who wanted to help everyone.",
          image: "/placeholder.svg?height=300&width=400&text=Robot+in+city",
          words: ["busy", "city", "lived", "small", "robot", "named", "Robo", "wanted", "help", "everyone"],
        },
      ],
    },
    {
      id: 3,
      title: "The Flying Elephant",
      description: "An amazing tale about Ellie who learns to fly",
      level: "Intermediate",
      duration: "7 min",
      completed: false,
      locked: false,
      image: "/placeholder.svg?height=200&width=300&text=Flying+Elephant",
      pages: [
        {
          text: "Ellie the elephant always dreamed of soaring through the clouds like the birds.",
          image: "/placeholder.svg?height=300&width=400&text=Elephant+dreaming",
          words: ["Ellie", "elephant", "always", "dreamed", "soaring", "through", "clouds", "like", "birds"],
        },
      ],
    },
    {
      id: 4,
      title: "The Secret Garden",
      description: "Discover hidden treasures in Mary's garden",
      level: "Intermediate",
      duration: "8 min",
      completed: false,
      locked: true,
      image: "/placeholder.svg?height=200&width=300&text=Secret+Garden",
      pages: [],
    },
    {
      id: 5,
      title: "The Space Adventure",
      description: "Join Captain Sam on an intergalactic journey",
      level: "Advanced",
      duration: "10 min",
      completed: false,
      locked: true,
      image: "/placeholder.svg?height=200&width=300&text=Space+Adventure",
      pages: [],
    },
  ]

  const currentStory = selectedStory ? stories.find((s) => s.id === selectedStory) : null
  const currentStoryPage = currentStory?.pages[currentPage]

  if (selectedStory && currentStory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        {/* Story Reader Header */}
        <header className="bg-card/95 backdrop-blur border-b shadow-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedStory(null)} className="w-9 h-9 p-0">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div>
                  <h1 className="text-lg font-bold text-primary">{currentStory.title}</h1>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {currentStory.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Page {currentPage + 1} of {currentStory.pages.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setIsMuted(!isMuted)} className="w-9 h-9 p-0">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="w-9 h-9 p-0">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            <Progress value={((currentPage + 1) / currentStory.pages.length) * 100} className="mt-3" />
          </div>
        </header>

        {/* Story Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              {currentStoryPage && (
                <div className="space-y-8">
                  {/* Story Image */}
                  <div className="flex justify-center">
                    <img
                      src={currentStoryPage.image || "/placeholder.svg"}
                      alt={`${currentStory.title} - Page ${currentPage + 1}`}
                      className="w-full max-w-md h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>

                  {/* Story Text */}
                  <div className="text-center space-y-4">
                    <p className="text-xl leading-relaxed text-foreground font-medium">
                      {currentStoryPage.text.split(" ").map((word, index) => (
                        <span
                          key={index}
                          className={`inline-block mx-1 px-2 py-1 rounded cursor-pointer transition-colors ${
                            currentStoryPage.words.includes(word.toLowerCase().replace(/[.,!?]/g, ""))
                              ? "hover:bg-primary/20 hover:text-primary"
                              : ""
                          }`}
                          onClick={() => {
                            // Handle word click for pronunciation or translation
                            console.log("Word clicked:", word)
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-6">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                      disabled={currentPage === 0}
                      className="bg-transparent"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>

                    <div className="flex items-center gap-2">
                      {currentStory.pages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentPage ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>

                    <Button
                      onClick={() => {
                        if (currentPage < currentStory.pages.length - 1) {
                          setCurrentPage(currentPage + 1)
                        } else {
                          // Story completed
                          setSelectedStory(null)
                        }
                      }}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {currentPage < currentStory.pages.length - 1 ? (
                        <>
                          Next
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Complete
                          <CheckCircle className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Interactive Stories
                </h1>
                <p className="text-muted-foreground">Learn English through magical adventures</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stories Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card
              key={story.id}
              className={`shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer ${
                story.locked ? "opacity-60" : ""
              }`}
              onClick={() => !story.locked && setSelectedStory(story.id)}
            >
              <div className="relative">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {story.completed && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground" />
                  </div>
                )}
                {story.locked && (
                  <div className="absolute inset-0 bg-muted/80 rounded-t-lg flex items-center justify-center">
                    <Lock className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-primary mb-2">{story.title}</CardTitle>
                    <CardDescription className="text-sm">{story.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {story.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Headphones className="w-3 h-3" />
                      {story.duration}
                    </div>
                  </div>
                  {story.completed && (
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  )}
                </div>

                {story.locked ? (
                  <Button disabled className="w-full">
                    <Lock className="w-4 h-4 mr-2" />
                    Complete previous stories
                  </Button>
                ) : (
                  <Button className="w-full bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 mr-2" />
                    {story.completed ? "Read Again" : "Start Reading"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
