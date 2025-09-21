"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Mic,
  Gamepad2,
  Trophy,
  Users,
  Star,
  Coins,
  Gift,
  Settings,
  Bell,
  Play,
  Lock,
  Clock,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [userStats] = useState({
    name: "Emma",
    level: "Intermediate",
    avatar: "🐰",
    coins: 350,
    badges: 5,
    streak: 7,
    lessonsCompleted: 12,
    averageScore: 85,
  })

  const learningModules = [
    {
      id: "stories",
      title: "Story Time",
      description: "Interactive stories with animations",
      icon: BookOpen,
      color: "primary",
      progress: 60,
      completed: 3,
      total: 5,
      unlocked: true,
      href: "/learn/stories",
    },
    {
      id: "grammar",
      title: "Grammar Fun",
      description: "Learn grammar through games",
      icon: Gamepad2,
      color: "secondary",
      progress: 40,
      completed: 2,
      total: 5,
      unlocked: true,
      href: "/learn/grammar",
    },
    {
      id: "speaking",
      title: "Speaking Practice",
      description: "Practice pronunciation with AI",
      icon: Mic,
      color: "accent",
      progress: 20,
      completed: 1,
      total: 5,
      unlocked: true,
      href: "/learn/speaking",
    },
    {
      id: "tests",
      title: "Quiz Time",
      description: "Test your knowledge",
      icon: Target,
      color: "chart-4",
      progress: 0,
      completed: 0,
      total: 3,
      unlocked: false,
      href: "/learn/tests",
    },
  ]

  const dailyChallenge = {
    title: "Word of the Day",
    word: "Adventure",
    definition: "An exciting or unusual experience",
    completed: false,
  }

  const recentAchievements = [
    { title: "Story Explorer", description: "Completed 3 stories", icon: "📚", earned: "2 hours ago" },
    { title: "Grammar Guru", description: "Perfect grammar score", icon: "🎯", earned: "1 day ago" },
    { title: "Speaking Star", description: "Great pronunciation", icon: "🌟", earned: "2 days ago" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur border-b shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {userStats.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold text-primary">Hi, {userStats.name}!</h1>
                <Badge variant="secondary" className="text-xs">
                  Level: {userStats.level}
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-accent/10 px-3 py-2 rounded-full">
                <Coins className="w-5 h-5 text-accent" />
                <span className="font-bold text-accent">{userStats.coins}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-3 py-2 rounded-full">
                <Trophy className="w-5 h-5 text-secondary" />
                <span className="font-bold text-secondary">{userStats.badges}</span>
              </div>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Bell className="w-4 h-4" />
              </Button>
              <Link href="/settings">
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Settings className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Daily Challenge */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-chart-4/10 to-chart-4/5 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-chart-4/20 rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-chart-4" />
                    </div>
                    <div>
                      <CardTitle className="text-chart-4">{dailyChallenge.title}</CardTitle>
                      <CardDescription>Learn a new word every day!</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-chart-4/20 text-chart-4 border-chart-4/30">
                    <Clock className="w-3 h-3 mr-1" />
                    Daily
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-chart-4 mb-1">{dailyChallenge.word}</h3>
                    <p className="text-muted-foreground">{dailyChallenge.definition}</p>
                  </div>
                  <Button className="bg-chart-4 hover:bg-chart-4/90 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Start Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Learning Modules */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Learning Modules</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {learningModules.map((module) => {
                  const IconComponent = module.icon
                  const colorClass = `text-${module.color}`
                  const bgColorClass = `bg-${module.color}/10`
                  const hoverBgColorClass = `hover:bg-${module.color}/20`

                  return (
                    <Card
                      key={module.id}
                      className={`shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer ${module.unlocked ? "" : "opacity-60"}`}
                    >
                      <CardHeader className="text-center pb-4">
                        <div
                          className={`w-16 h-16 mx-auto ${bgColorClass} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative`}
                        >
                          <IconComponent className={`w-8 h-8 ${colorClass}`} />
                          {!module.unlocked && (
                            <div className="absolute inset-0 bg-muted/80 rounded-2xl flex items-center justify-center">
                              <Lock className="w-6 h-6 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <CardTitle className={`text-lg font-bold ${colorClass}`}>{module.title}</CardTitle>
                        <CardDescription className="text-base">{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">
                              {module.completed}/{module.total} completed
                            </span>
                          </div>
                          <Progress value={module.progress} className="h-2" />
                        </div>

                        {module.unlocked ? (
                          <Link href={module.href}>
                            <Button className={`w-full bg-${module.color} hover:bg-${module.color}/90`}>
                              <Play className="w-4 h-4 mr-2" />
                              Continue Learning
                            </Button>
                          </Link>
                        ) : (
                          <Button disabled className="w-full">
                            <Lock className="w-4 h-4 mr-2" />
                            Complete previous modules
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Stats */}
            <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{userStats.streak}</div>
                    <p className="text-xs text-muted-foreground">Day Streak</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">{userStats.lessonsCompleted}</div>
                    <p className="text-xs text-muted-foreground">Lessons</p>
                  </div>
                </div>
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">{userStats.averageScore}%</div>
                  <p className="text-xs text-muted-foreground">Average Score</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-secondary flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{achievement.description}</p>
                      <p className="text-xs text-secondary">{achievement.earned}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Friends Activity */}
            <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-chart-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Friends Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-chart-2/5 rounded-lg">
                  <div className="w-8 h-8 bg-chart-2/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">🦊</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground">Alex completed a story!</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-chart-2/5 rounded-lg">
                  <div className="w-8 h-8 bg-chart-2/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">🐨</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground">Maya earned a badge!</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3 bg-transparent">
                  <Users className="w-4 h-4 mr-2" />
                  View All Friends
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
