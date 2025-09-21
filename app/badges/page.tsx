"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, ArrowLeft, BookOpen, Mic, Gamepad2, Zap, Crown, Calendar, Award, Lock } from "lucide-react"
import Link from "next/link"

export default function BadgesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const badgeCategories = [
    { id: "all", name: "All Badges", icon: Trophy },
    { id: "stories", name: "Stories", icon: BookOpen },
    { id: "grammar", name: "Grammar", icon: Gamepad2 },
    { id: "speaking", name: "Speaking", icon: Mic },
    { id: "streaks", name: "Streaks", icon: Zap },
    { id: "special", name: "Special", icon: Crown },
  ]

  const badges = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first lesson",
      category: "stories",
      icon: "🎯",
      earned: true,
      earnedDate: "2024-01-15",
      rarity: "common",
      progress: 100,
      requirement: "Complete 1 lesson",
    },
    {
      id: 2,
      name: "Story Explorer",
      description: "Read 5 interactive stories",
      category: "stories",
      icon: "📚",
      earned: true,
      earnedDate: "2024-01-18",
      rarity: "rare",
      progress: 100,
      requirement: "Complete 5 stories",
    },
    {
      id: 3,
      name: "Grammar Guru",
      description: "Master 10 grammar exercises",
      category: "grammar",
      icon: "🧠",
      earned: true,
      earnedDate: "2024-01-20",
      rarity: "epic",
      progress: 100,
      requirement: "Complete 10 grammar exercises",
    },
    {
      id: 4,
      name: "Speaking Star",
      description: "Perfect pronunciation on 20 words",
      category: "speaking",
      icon: "🌟",
      earned: true,
      earnedDate: "2024-01-22",
      rarity: "rare",
      progress: 100,
      requirement: "Get 90%+ on 20 words",
    },
    {
      id: 5,
      name: "Week Warrior",
      description: "Maintain a 7-day learning streak",
      category: "streaks",
      icon: "⚡",
      earned: true,
      earnedDate: "2024-01-25",
      rarity: "epic",
      progress: 100,
      requirement: "7-day streak",
    },
    {
      id: 6,
      name: "Pronunciation Pro",
      description: "Get perfect scores on 50 words",
      category: "speaking",
      icon: "🎤",
      earned: false,
      earnedDate: null,
      rarity: "legendary",
      progress: 60,
      requirement: "Get 100% on 50 words",
    },
    {
      id: 7,
      name: "Story Master",
      description: "Complete all beginner stories",
      category: "stories",
      icon: "👑",
      earned: false,
      earnedDate: null,
      rarity: "legendary",
      progress: 75,
      requirement: "Complete all beginner stories",
    },
    {
      id: 8,
      name: "Grammar Champion",
      description: "Score 100% on 25 grammar tests",
      category: "grammar",
      icon: "🏆",
      earned: false,
      earnedDate: null,
      rarity: "epic",
      progress: 32,
      requirement: "Perfect scores on 25 tests",
    },
    {
      id: 9,
      name: "Streak Legend",
      description: "Maintain a 30-day learning streak",
      category: "streaks",
      icon: "🔥",
      earned: false,
      earnedDate: null,
      rarity: "legendary",
      progress: 23,
      requirement: "30-day streak",
    },
    {
      id: 10,
      name: "Friend Helper",
      description: "Help 5 friends with challenges",
      category: "special",
      icon: "🤝",
      earned: false,
      earnedDate: null,
      rarity: "rare",
      progress: 0,
      requirement: "Help 5 friends",
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-muted text-muted-foreground border-muted"
      case "rare":
        return "bg-primary/10 text-primary border-primary/20"
      case "epic":
        return "bg-secondary/10 text-secondary border-secondary/20"
      case "legendary":
        return "bg-accent/10 text-accent border-accent/20"
      default:
        return "bg-muted text-muted-foreground border-muted"
    }
  }

  const filteredBadges =
    selectedCategory === "all" ? badges : badges.filter((badge) => badge.category === selectedCategory)
  const earnedBadges = badges.filter((badge) => badge.earned)
  const totalBadges = badges.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur border-b shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Achievement Badges
                </h1>
                <p className="text-muted-foreground">
                  {earnedBadges.length} of {totalBadges} badges earned
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{earnedBadges.length}</div>
                <div className="text-xs text-muted-foreground">Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{totalBadges - earnedBadges.length}</div>
                <div className="text-xs text-muted-foreground">To Go</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <Progress value={(earnedBadges.length / totalBadges) * 100} className="h-2" />
          </div>
        </div>
      </header>

      {/* Badge Categories */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-card/50">
            {badgeCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          <TabsContent value={selectedCategory}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBadges.map((badge) => (
                <Card
                  key={badge.id}
                  className={`shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all group ${
                    badge.earned ? "ring-2 ring-primary/20" : "opacity-75"
                  }`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="relative">
                      <div
                        className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                          badge.earned ? "bg-primary/10" : "bg-muted/50"
                        }`}
                      >
                        {badge.earned ? (
                          <span className="text-4xl">{badge.icon}</span>
                        ) : (
                          <Lock className="w-8 h-8 text-muted-foreground" />
                        )}
                      </div>
                      {badge.earned && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Trophy className="w-5 h-5 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <CardTitle
                      className={`text-lg font-bold ${badge.earned ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {badge.name}
                    </CardTitle>
                    <CardDescription className="text-sm">{badge.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={getRarityColor(badge.rarity)} variant="outline">
                        {badge.rarity}
                      </Badge>
                      {badge.earned && badge.earnedDate && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(badge.earnedDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>

                    {!badge.earned && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{badge.progress}%</span>
                        </div>
                        <Progress value={badge.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground">{badge.requirement}</p>
                      </div>
                    )}

                    {badge.earned && (
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium text-primary">Achievement Unlocked!</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
