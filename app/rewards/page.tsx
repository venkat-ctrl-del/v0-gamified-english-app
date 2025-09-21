"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Coins, ArrowLeft, Star, Gift, Palette, Sparkles, Crown, ShoppingCart, Check } from "lucide-react"
import Link from "next/link"

export default function RewardsPage() {
  const [userCoins, setUserCoins] = useState(350)
  const [purchasedItems, setPurchasedItems] = useState<number[]>([1, 5])
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const rewardCategories = [
    {
      id: "avatars",
      name: "Avatar Skins",
      icon: Palette,
      items: [
        {
          id: 1,
          name: "Golden Bunny",
          description: "Shiny golden version of Buddy Bunny",
          price: 100,
          emoji: "🐰✨",
          rarity: "rare",
        },
        {
          id: 2,
          name: "Rainbow Robot",
          description: "Colorful rainbow Robo Friend",
          price: 150,
          emoji: "🤖🌈",
          rarity: "epic",
        },
        {
          id: 3,
          name: "Crystal Fairy",
          description: "Magical crystal Magic Fairy",
          price: 200,
          emoji: "🧚💎",
          rarity: "legendary",
        },
        {
          id: 4,
          name: "Fire Dragon",
          description: "Fierce fire-breathing dragon",
          price: 250,
          emoji: "🐲🔥",
          rarity: "legendary",
        },
      ],
    },
    {
      id: "stickers",
      name: "Sticker Packs",
      icon: Star,
      items: [
        {
          id: 5,
          name: "Animal Friends",
          description: "Cute animal sticker collection",
          price: 50,
          emoji: "🦊🐨🐸",
          rarity: "common",
        },
        {
          id: 6,
          name: "Space Adventure",
          description: "Rockets, planets, and aliens",
          price: 75,
          emoji: "🚀🪐👽",
          rarity: "rare",
        },
        {
          id: 7,
          name: "Magic Spells",
          description: "Magical wands and sparkles",
          price: 100,
          emoji: "🪄✨⭐",
          rarity: "epic",
        },
      ],
    },
    {
      id: "backgrounds",
      name: "Backgrounds",
      icon: Sparkles,
      items: [
        {
          id: 8,
          name: "Enchanted Forest",
          description: "Magical forest background",
          price: 80,
          emoji: "🌲🦋🌸",
          rarity: "rare",
        },
        {
          id: 9,
          name: "Ocean Depths",
          description: "Underwater adventure scene",
          price: 120,
          emoji: "🌊🐠🐙",
          rarity: "epic",
        },
        {
          id: 10,
          name: "Castle Kingdom",
          description: "Royal castle background",
          price: 180,
          emoji: "🏰👑🗡️",
          rarity: "legendary",
        },
      ],
    },
    {
      id: "lessons",
      name: "Premium Lessons",
      icon: Crown,
      items: [
        {
          id: 11,
          name: "Advanced Stories",
          description: "Unlock 5 premium story adventures",
          price: 200,
          emoji: "📚✨",
          rarity: "epic",
        },
        {
          id: 12,
          name: "Pronunciation Master",
          description: "Advanced speaking exercises",
          price: 150,
          emoji: "🎤🌟",
          rarity: "rare",
        },
        {
          id: 13,
          name: "Grammar Genius",
          description: "Expert-level grammar challenges",
          price: 180,
          emoji: "🧠💡",
          rarity: "epic",
        },
      ],
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-muted text-muted-foreground"
      case "rare":
        return "bg-primary/10 text-primary"
      case "epic":
        return "bg-secondary/10 text-secondary"
      case "legendary":
        return "bg-accent/10 text-accent"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handlePurchase = (item: any) => {
    if (userCoins >= item.price && !purchasedItems.includes(item.id)) {
      setUserCoins(userCoins - item.price)
      setPurchasedItems([...purchasedItems, item.id])
      setSelectedItem(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
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
                <h1 className="text-2xl font-bold text-accent flex items-center gap-2">
                  <Gift className="w-6 h-6" />
                  Reward Store
                </h1>
                <p className="text-muted-foreground">Spend your coins on amazing rewards!</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
              <Coins className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold text-accent">{userCoins}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Reward Store Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="avatars" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/50">
            {rewardCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {rewardCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => {
                  const isPurchased = purchasedItems.includes(item.id)
                  const canAfford = userCoins >= item.price

                  return (
                    <Card
                      key={item.id}
                      className={`shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer ${
                        isPurchased ? "ring-2 ring-secondary" : ""
                      }`}
                    >
                      <CardHeader className="text-center pb-4">
                        <div className="relative">
                          <div className="w-20 h-20 mx-auto bg-accent/10 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-3xl">{item.emoji}</span>
                          </div>
                          {isPurchased && (
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                              <Check className="w-5 h-5 text-secondary-foreground" />
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-lg font-bold text-accent">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className={getRarityColor(item.rarity)} variant="outline">
                            {item.rarity}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Coins className="w-4 h-4 text-accent" />
                            <span className="font-bold text-accent">{item.price}</span>
                          </div>
                        </div>

                        {isPurchased ? (
                          <Button disabled className="w-full bg-secondary text-secondary-foreground">
                            <Check className="w-4 h-4 mr-2" />
                            Owned
                          </Button>
                        ) : (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                className={`w-full ${
                                  canAfford
                                    ? "bg-accent hover:bg-accent/90"
                                    : "bg-muted text-muted-foreground cursor-not-allowed"
                                }`}
                                disabled={!canAfford}
                                onClick={() => setSelectedItem(item)}
                              >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                {canAfford ? "Purchase" : "Not enough coins"}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-card/95 backdrop-blur">
                              <DialogHeader>
                                <DialogTitle className="text-accent">Confirm Purchase</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to buy {item.name} for {item.price} coins?
                                </DialogDescription>
                              </DialogHeader>
                              <div className="flex items-center justify-center gap-4 pt-4">
                                <Button variant="outline" onClick={() => setSelectedItem(null)}>
                                  Cancel
                                </Button>
                                <Button onClick={() => handlePurchase(item)} className="bg-accent hover:bg-accent/90">
                                  <Coins className="w-4 h-4 mr-2" />
                                  Buy Now
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}
