"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Mic,
  Gamepad2,
  Trophy,
  Users,
  Star,
  Coins,
  Gift,
  Globe,
  Moon,
  Sun,
  Play,
  Volume2,
  Heart,
  Zap,
  Target,
  Award,
  Sparkles,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

export default function FunLearnEnglish() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">FunLearn</h1>
                <p className="text-xs text-muted-foreground">English</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
                How It Works
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Pricing
              </a>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-9 h-9 p-0">
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                <Button variant="outline" size="sm" onClick={() => (window.location.href = "/auth/signin")}>
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-9 h-9 p-0">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-9 h-9 p-0">
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-card/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#features"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  How It Works
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Pricing
                </a>
                <div className="flex gap-2 px-3 py-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    onClick={() => (window.location.href = "/auth/signin")}
                  >
                    Sign In
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => (window.location.href = "/auth/signup")}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  🎮 Learning = Play + Progress + Rewards
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance">
                  Make English Learning
                  <span className="text-primary"> Fun & Magical</span>
                  for Kids!
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Transform your child's English learning journey with interactive stories, speaking practice,
                  gamification, and AI-powered personalized lessons. Perfect for ages 6-16.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg"
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Adventure
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold bg-transparent">
                  <Volume2 className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Kids</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">4.9★</div>
                  <div className="text-sm text-muted-foreground">Parent Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-card/95 backdrop-blur rounded-3xl shadow-2xl border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Hi Emma!</h3>
                    <Badge variant="secondary" className="text-xs">
                      Level: Intermediate
                    </Badge>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-full">
                      <Coins className="w-4 h-4 text-accent" />
                      <span className="text-sm font-bold text-accent">350</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-0 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Story Time</p>
                      <div className="w-full bg-primary/20 rounded-full h-2 mt-2">
                        <div className="bg-primary h-2 rounded-full w-3/4"></div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-secondary/5 hover:bg-secondary/10 transition-colors cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Mic className="w-8 h-8 mx-auto mb-2 text-secondary" />
                      <p className="text-sm font-medium">Speaking</p>
                      <div className="w-full bg-secondary/20 rounded-full h-2 mt-2">
                        <div className="bg-secondary h-2 rounded-full w-1/2"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 bg-accent/5">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Gift className="w-8 h-8 text-accent" />
                      <div>
                        <p className="font-medium text-accent">Daily Challenge</p>
                        <p className="text-sm text-muted-foreground">Word of the Day: "Adventure"</p>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-auto text-accent" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center bounce-gentle">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center wiggle">
                <Star className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">✨ Amazing Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              Everything Your Child Needs to
              <span className="text-secondary"> Master English</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our comprehensive platform combines education with entertainment, making learning English as exciting as
              playing their favorite game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Interactive Stories */}
            <Card className="border-0 shadow-lg bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Interactive Stories</CardTitle>
                <CardDescription className="text-base">
                  Animated stories with voice narration, highlighting words as they're read
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Volume2 className="w-4 h-4" />
                  <span>Professional voice narration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span>Beautiful animations & illustrations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Target className="w-4 h-4" />
                  <span>Adaptive difficulty levels</span>
                </div>
              </CardContent>
            </Card>

            {/* Speaking Practice */}
            <Card className="border-0 shadow-lg bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mic className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold text-secondary">AI Speech Recognition</CardTitle>
                <CardDescription className="text-base">
                  Practice pronunciation with real-time feedback and scoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4" />
                  <span>Instant pronunciation scoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>Progress from words to sentences</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4" />
                  <span>Encouraging AI feedback</span>
                </div>
              </CardContent>
            </Card>

            {/* Grammar Games */}
            <Card className="border-0 shadow-lg bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-accent">Grammar Games</CardTitle>
                <CardDescription className="text-base">
                  Learn tenses, prepositions, and more through interactive games
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Play className="w-4 h-4" />
                  <span>Drag-and-drop exercises</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span>Animated explainer videos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="w-4 h-4" />
                  <span>Sentence building challenges</span>
                </div>
              </CardContent>
            </Card>

            {/* Avatar Coach */}
            <Card className="border-0 shadow-lg bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-chart-4/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bounce-gentle">
                  <span className="text-3xl">🤖</span>
                </div>
                <CardTitle className="text-xl font-bold text-chart-4">Voice Avatar Coach</CardTitle>
                <CardDescription className="text-base">
                  Your child's personal AI learning companion and motivator
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4" />
                  <span>Encouraging & supportive</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span>Explains concepts clearly</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="w-4 h-4" />
                  <span>Celebrates achievements</span>
                </div>
              </CardContent>
            </Card>

            {/* Gamification */}
            <Card className="border-0 shadow-lg bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-chart-2/10 rounded-2xl flex items-center justify-center mb-4 group-hover:wiggle">
                  <Trophy className="w-8 h-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl font-bold text-chart-2">Rewards & Badges</CardTitle>
                <CardDescription className="text-base">
                  Earn coins, unlock badges, and maintain learning streaks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Coins className="w-4 h-4" />
                  <span>Earn coins for lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>Unlock achievement badges</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4" />
                  <span>Daily streak bonuses</span>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Language */}
            <Card className="border-0 shadow-lg bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-chart-5/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-chart-5" />
                </div>
                <CardTitle className="text-xl font-bold text-chart-5">Multi-Language Support</CardTitle>
                <CardDescription className="text-base">
                  Tap any word for instant translation in your native language
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Target className="w-4 h-4" />
                  <span>Instant word translations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span>50+ supported languages</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4" />
                  <span>Lower learning barriers</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">🚀 Simple Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              How FunLearn
              <span className="text-accent"> Works</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Get your child started on their English learning adventure in just 3 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Create Profile & Assess</h3>
              <p className="text-muted-foreground text-pretty">
                Your child creates their profile, chooses an avatar buddy, and takes a quick assessment to determine
                their English level.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Learn Through Play</h3>
              <p className="text-muted-foreground text-pretty">
                Engage with interactive stories, practice speaking, play grammar games, and complete daily challenges
                with their AI coach.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-accent/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">Earn Rewards & Progress</h3>
              <p className="text-muted-foreground text-pretty">
                Collect coins, unlock badges, maintain streaks, and compete safely with friends while mastering English
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-balance mb-6">
            Ready to Start Your Child's
            <br />
            English Adventure?
          </h2>
          <p className="text-xl text-white/90 text-pretty mb-8 max-w-2xl mx-auto">
            Join thousands of families who have transformed their children's English learning experience with FunLearn
            English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg font-bold shadow-lg"
              onClick={() => (window.location.href = "/auth/signup")}
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-bold bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">FunLearn</h3>
                  <p className="text-sm text-muted-foreground">English</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Making English learning fun and effective for children worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Interactive Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Speaking Practice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Grammar Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    AI Coach
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Parent Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 FunLearn English. All rights reserved. Made with ❤️ for kids worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
