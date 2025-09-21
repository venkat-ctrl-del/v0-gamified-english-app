"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  ArrowLeft,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Globe,
  User,
  Shield,
  Bell,
  Palette,
  Languages,
  Headphones,
  Eye,
  Zap,
  HelpCircle,
  LogOut,
  Trash2,
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [musicVolume, setMusicVolume] = useState([75])
  const [effectsVolume, setEffectsVolume] = useState([85])
  const [voiceVolume, setVoiceVolume] = useState([90])
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [dailyReminders, setDailyReminders] = useState(true)
  const [achievementAlerts, setAchievementAlerts] = useState(true)
  const [friendActivity, setFriendActivity] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedAvatar, setSelectedAvatar] = useState("🐰")
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [autoPlay, setAutoPlay] = useState(true)
  const [parentalControls, setParentalControls] = useState(true)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  ]

  const avatars = [
    { id: "🐰", name: "Buddy Bunny" },
    { id: "🤖", name: "Robo Friend" },
    { id: "🧚", name: "Magic Fairy" },
    { id: "🐲", name: "Friendly Dragon" },
    { id: "🦊", name: "Clever Fox" },
    { id: "🐨", name: "Koala Bear" },
    { id: "🐸", name: "Happy Frog" },
    { id: "🦄", name: "Unicorn" },
  ]

  const themes = [
    { id: "light", name: "Light Mode", icon: Sun, description: "Bright and cheerful" },
    { id: "dark", name: "Dark Mode", icon: Moon, description: "Easy on the eyes" },
    { id: "auto", name: "Auto", icon: Eye, description: "Follows system setting" },
  ]

  const toggleTheme = (themeId: string) => {
    if (themeId === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else if (themeId === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      // Auto mode - could implement system preference detection
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(systemDark)
      if (systemDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur border-b shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Settings
              </h1>
              <p className="text-muted-foreground">Customize your learning experience</p>
            </div>
          </div>
        </div>
      </header>

      {/* Settings Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Profile Settings */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Settings
            </CardTitle>
            <CardDescription>Customize your avatar and personal preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Choose Your Avatar</h4>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {avatars.map((avatar) => (
                  <button
                    key={avatar.id}
                    onClick={() => setSelectedAvatar(avatar.id)}
                    className={`p-3 rounded-xl border-2 transition-all hover:scale-105 ${
                      selectedAvatar === avatar.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-2xl mb-1">{avatar.id}</div>
                    <div className="text-xs text-muted-foreground">{avatar.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Theme Settings */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-secondary flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Theme & Appearance
            </CardTitle>
            <CardDescription>Choose how the app looks and feels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Color Theme</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {themes.map((theme) => {
                  const IconComponent = theme.icon
                  return (
                    <button
                      key={theme.id}
                      onClick={() => toggleTheme(theme.id)}
                      className={`p-4 rounded-xl border-2 transition-all hover:scale-105 text-left ${
                        (theme.id === "dark" && isDarkMode) ||
                        (theme.id === "light" && !isDarkMode) ||
                        theme.id === "auto"
                          ? "border-secondary bg-secondary/10"
                          : "border-border hover:border-secondary/50"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 text-secondary mb-2" />
                      <div className="font-medium text-foreground">{theme.name}</div>
                      <div className="text-sm text-muted-foreground">{theme.description}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium text-foreground">Animations</h4>
                <p className="text-sm text-muted-foreground">Enable fun animations and transitions</p>
              </div>
              <Switch checked={animationsEnabled} onCheckedChange={setAnimationsEnabled} />
            </div>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-accent flex items-center gap-2">
              <Languages className="w-5 h-5" />
              Language & Translation
            </CardTitle>
            <CardDescription>Choose your preferred language for translations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Translation Language</h4>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Tap any English word to see its translation in your chosen language
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Audio Settings */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-chart-4 flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              Audio & Sound
            </CardTitle>
            <CardDescription>Control sound effects, music, and voice settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  Sound Effects
                </h4>
                <p className="text-sm text-muted-foreground">Enable all sound effects</p>
              </div>
              <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
            </div>

            {soundEnabled && (
              <>
                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">Background Music</h4>
                      <Badge variant="outline">{musicVolume[0]}%</Badge>
                    </div>
                    <Slider value={musicVolume} onValueChange={setMusicVolume} max={100} step={5} className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">Sound Effects</h4>
                      <Badge variant="outline">{effectsVolume[0]}%</Badge>
                    </div>
                    <Slider
                      value={effectsVolume}
                      onValueChange={setEffectsVolume}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">Voice Narration</h4>
                      <Badge variant="outline">{voiceVolume[0]}%</Badge>
                    </div>
                    <Slider value={voiceVolume} onValueChange={setVoiceVolume} max={100} step={5} className="w-full" />
                  </div>
                </div>
              </>
            )}

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium text-foreground">Auto-play Stories</h4>
                <p className="text-sm text-muted-foreground">Automatically play story narration</p>
              </div>
              <Switch checked={autoPlay} onCheckedChange={setAutoPlay} />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-chart-2 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription>Manage when and how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium text-foreground">Enable Notifications</h4>
                <p className="text-sm text-muted-foreground">Receive app notifications</p>
              </div>
              <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
            </div>

            {notificationsEnabled && (
              <>
                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">Daily Reminders</h4>
                      <p className="text-sm text-muted-foreground">Remind me to practice daily</p>
                    </div>
                    <Switch checked={dailyReminders} onCheckedChange={setDailyReminders} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">Achievement Alerts</h4>
                      <p className="text-sm text-muted-foreground">Notify when I earn badges</p>
                    </div>
                    <Switch checked={achievementAlerts} onCheckedChange={setAchievementAlerts} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">Friend Activity</h4>
                      <p className="text-sm text-muted-foreground">Notify about friends' progress</p>
                    </div>
                    <Switch checked={friendActivity} onCheckedChange={setFriendActivity} />
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Privacy & Safety */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-chart-5 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy & Safety
            </CardTitle>
            <CardDescription>Control privacy settings and parental controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium text-foreground">Parental Controls</h4>
                <p className="text-sm text-muted-foreground">Enable additional safety features</p>
              </div>
              <Switch checked={parentalControls} onCheckedChange={setParentalControls} />
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Data & Privacy</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Eye className="w-4 h-4 mr-2" />
                  View Privacy Policy
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Shield className="w-4 h-4 mr-2" />
                  Manage Data Permissions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Help & Support
            </CardTitle>
            <CardDescription>Get help and manage your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start bg-transparent">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help Center
              </Button>
              <Button variant="outline" className="justify-start bg-transparent">
                <Globe className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Account Actions</h4>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-destructive hover:text-destructive bg-transparent"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-destructive hover:text-destructive bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary">FunLearn English</h3>
              </div>
              <p className="text-sm text-muted-foreground">Version 1.0.0</p>
              <p className="text-xs text-muted-foreground">Made with ❤️ for kids learning English worldwide</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
