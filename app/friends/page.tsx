"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Users, ArrowLeft, UserPlus, Trophy, Star, Zap, Target, Crown, Copy, Check, Send, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function FriendsPage() {
  const [inviteCode] = useState("EMMA2024")
  const [newFriendCode, setNewFriendCode] = useState("")
  const [copiedCode, setCopiedCode] = useState(false)

  const friends = [
    {
      id: 1,
      name: "Alex",
      avatar: "🦊",
      level: "Beginner",
      streak: 5,
      totalPoints: 1250,
      badges: 8,
      lastActive: "2 hours ago",
      status: "online",
    },
    {
      id: 2,
      name: "Maya",
      avatar: "🐨",
      level: "Intermediate",
      streak: 12,
      totalPoints: 2100,
      badges: 15,
      lastActive: "5 hours ago",
      status: "offline",
    },
    {
      id: 3,
      name: "Sam",
      avatar: "🐸",
      level: "Advanced",
      streak: 25,
      totalPoints: 3500,
      badges: 22,
      lastActive: "1 day ago",
      status: "offline",
    },
  ]

  const leaderboard = [...friends]
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .map((friend, index) => ({ ...friend, rank: index + 1 }))

  const challenges = [
    {
      id: 1,
      title: "Grammar Speed Challenge",
      description: "Complete 10 grammar exercises in 5 minutes",
      difficulty: "Medium",
      reward: 50,
      participants: 3,
    },
    {
      id: 2,
      title: "Pronunciation Perfect",
      description: "Get 100% on 5 speaking exercises",
      difficulty: "Hard",
      reward: 100,
      participants: 2,
    },
    {
      id: 3,
      title: "Story Sprint",
      description: "Read 3 stories without mistakes",
      difficulty: "Easy",
      reward: 30,
      participants: 5,
    },
  ]

  const copyInviteCode = () => {
    navigator.clipboard.writeText(inviteCode)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const addFriend = () => {
    if (newFriendCode.trim()) {
      console.log("Adding friend with code:", newFriendCode)
      setNewFriendCode("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-chart-2/10 via-primary/10 to-secondary/10">
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
                <h1 className="text-2xl font-bold text-chart-2 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Friends & Challenges
                </h1>
                <p className="text-muted-foreground">Learn together and compete safely</p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-chart-2 hover:bg-chart-2/90">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Friend
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card/95 backdrop-blur">
                <DialogHeader>
                  <DialogTitle className="text-chart-2">Add a Friend</DialogTitle>
                  <DialogDescription>Share your invite code or enter a friend's code</DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Your Invite Code</h4>
                    <div className="flex items-center gap-2">
                      <Input value={inviteCode} readOnly className="font-mono text-center text-lg" />
                      <Button onClick={copyInviteCode} variant="outline" size="sm">
                        {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Share this code with friends to connect safely</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Enter Friend's Code</h4>
                    <div className="flex items-center gap-2">
                      <Input
                        value={newFriendCode}
                        onChange={(e) => setNewFriendCode(e.target.value.toUpperCase())}
                        placeholder="Enter invite code"
                        className="font-mono text-center"
                      />
                      <Button onClick={addFriend} size="sm" className="bg-chart-2 hover:bg-chart-2/90">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Friends Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="friends" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50">
            <TabsTrigger value="friends">My Friends</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>

          {/* Friends List */}
          <TabsContent value="friends">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {friends.map((friend) => (
                <Card
                  key={friend.id}
                  className="shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-chart-2/20">
                        <AvatarFallback className="bg-chart-2/10 text-2xl">{friend.avatar}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-card ${
                          friend.status === "online" ? "bg-secondary" : "bg-muted"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-lg font-bold text-chart-2">{friend.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {friend.level}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-2 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{friend.streak}</div>
                        <div className="text-xs text-muted-foreground">Streak</div>
                      </div>
                      <div className="p-2 bg-secondary/5 rounded-lg">
                        <div className="text-lg font-bold text-secondary">{friend.badges}</div>
                        <div className="text-xs text-muted-foreground">Badges</div>
                      </div>
                      <div className="p-2 bg-accent/5 rounded-lg">
                        <div className="text-lg font-bold text-accent">{friend.totalPoints}</div>
                        <div className="text-xs text-muted-foreground">Points</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Last active: {friend.lastActive}</p>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      Challenge Friend
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard */}
          <TabsContent value="leaderboard">
            <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Weekly Leaderboard
                </CardTitle>
                <CardDescription>See how you rank among your friends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((friend) => (
                    <div
                      key={friend.id}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                        friend.rank === 1
                          ? "bg-accent/10 border border-accent/20"
                          : friend.rank === 2
                            ? "bg-secondary/10 border border-secondary/20"
                            : friend.rank === 3
                              ? "bg-primary/10 border border-primary/20"
                              : "bg-muted/5"
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8">
                        {friend.rank === 1 ? (
                          <Crown className="w-6 h-6 text-accent" />
                        ) : friend.rank === 2 ? (
                          <Trophy className="w-6 h-6 text-secondary" />
                        ) : friend.rank === 3 ? (
                          <Star className="w-6 h-6 text-primary" />
                        ) : (
                          <span className="text-lg font-bold text-muted-foreground">{friend.rank}</span>
                        )}
                      </div>

                      <Avatar className="w-10 h-10 border-2 border-chart-2/20">
                        <AvatarFallback className="bg-chart-2/10">{friend.avatar}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{friend.name}</h4>
                        <p className="text-sm text-muted-foreground">{friend.level}</p>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-accent">{friend.totalPoints}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>

                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{friend.streak}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Challenges */}
          <TabsContent value="challenges">
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-r from-chart-4/10 to-accent/10 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-chart-4">Weekly Challenge</CardTitle>
                  <CardDescription>Complete this week's special challenge for bonus rewards!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-chart-4">Master of All Trades</h3>
                      <p className="text-muted-foreground">Complete 1 story, 1 grammar, and 1 speaking exercise</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-4">200</div>
                      <div className="text-xs text-muted-foreground">bonus coins</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.map((challenge) => (
                  <Card
                    key={challenge.id}
                    className="shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-secondary">{challenge.title}</CardTitle>
                          <CardDescription className="text-sm mt-2">{challenge.description}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            challenge.difficulty === "Easy"
                              ? "bg-secondary/10 text-secondary border-secondary/20"
                              : challenge.difficulty === "Medium"
                                ? "bg-accent/10 text-accent border-accent/20"
                                : "bg-destructive/10 text-destructive border-destructive/20"
                          }
                        >
                          {challenge.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{challenge.participants} participating</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-4 h-4 text-accent" />
                          <span className="font-bold text-accent">{challenge.reward}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-secondary hover:bg-secondary/90">
                        <Target className="w-4 h-4 mr-2" />
                        Join Challenge
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
