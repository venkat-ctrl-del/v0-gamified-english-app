"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle } from "lucide-react"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAvatar, setSelectedAvatar] = useState("")
  const [assessmentAnswers, setAssessmentAnswers] = useState<string[]>([])

  const avatarOptions = [
    { id: "bunny", name: "Buddy Bunny", emoji: "🐰", description: "Friendly and encouraging" },
    { id: "robot", name: "Robo Friend", emoji: "🤖", description: "Smart and helpful" },
    { id: "fairy", name: "Magic Fairy", emoji: "🧚", description: "Magical and inspiring" },
    { id: "dragon", name: "Friendly Dragon", emoji: "🐲", description: "Brave and adventurous" },
  ]

  const assessmentQuestions = [
    {
      question: "What is this?",
      image: "/red-apple.png",
      options: ["Apple", "Orange", "Banana", "Grape"],
      correct: "Apple",
    },
    {
      question: "Choose the correct sentence:",
      options: ["I am happy", "I are happy", "I is happy", "I be happy"],
      correct: "I am happy",
    },
    {
      question: "What comes after 'Good'?",
      options: ["Morning", "Night", "Afternoon", "All of the above"],
      correct: "All of the above",
    },
  ]

  const handleAvatarSelect = (avatarId: string) => {
    setSelectedAvatar(avatarId)
    setCurrentStep(1)
  }

  const handleAssessmentAnswer = (answer: string) => {
    const newAnswers = [...assessmentAnswers, answer]
    setAssessmentAnswers(newAnswers)

    if (currentStep - 1 < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Assessment complete
      setCurrentStep(assessmentQuestions.length + 1)
    }
  }

  const getLevel = () => {
    const correctAnswers = assessmentAnswers.filter(
      (answer, index) => answer === assessmentQuestions[index]?.correct,
    ).length

    if (correctAnswers >= 2) return "Advanced"
    if (correctAnswers >= 1) return "Intermediate"
    return "Beginner"
  }

  const selectedAvatarData = avatarOptions.find((a) => a.id === selectedAvatar)

  // Avatar Selection
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-2xl border-0 bg-card/95 backdrop-blur">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mb-4">
              <span className="text-4xl">✨</span>
            </div>
            <CardTitle className="text-3xl font-bold text-accent">Choose Your Learning Buddy!</CardTitle>
            <CardDescription className="text-lg">
              Pick an AI companion who will guide you through your English learning adventure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {avatarOptions.map((avatar) => (
                <Card
                  key={avatar.id}
                  className="cursor-pointer border-2 border-border hover:border-accent hover:shadow-lg transition-all group"
                  onClick={() => handleAvatarSelect(avatar.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{avatar.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{avatar.name}</h3>
                    <p className="text-muted-foreground text-sm">{avatar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Assessment Questions
  if (currentStep >= 1 && currentStep <= assessmentQuestions.length) {
    const questionIndex = currentStep - 1
    const currentQuestion = assessmentQuestions[questionIndex]

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg shadow-2xl border-0 bg-card/95 backdrop-blur">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">{selectedAvatarData?.emoji}</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <p className="text-sm font-medium text-primary">
                  Question {questionIndex + 1} of {assessmentQuestions.length}
                </p>
              </div>
            </div>
            <Progress value={((questionIndex + 1) / assessmentQuestions.length) * 100} className="mb-4" />
            <CardTitle className="text-xl font-bold text-primary text-balance">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.image && (
              <div className="flex justify-center mb-6">
                <img
                  src={currentQuestion.image || "/placeholder.svg"}
                  alt="Assessment question"
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            )}

            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAssessmentAnswer(option)}
                  variant="outline"
                  className="h-14 text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all justify-start bg-transparent"
                >
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Results
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-secondary-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-secondary">Assessment Complete!</CardTitle>
            <CardDescription className="text-base">Great job! Here are your results</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">{selectedAvatarData?.emoji}</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Your Learning Buddy</p>
                <p className="text-accent font-bold">{selectedAvatarData?.name}</p>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Your English Level</p>
              <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">{getLevel()}</Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{assessmentAnswers.length}</div>
                <div className="text-xs text-muted-foreground">Questions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">
                  {assessmentAnswers.filter((answer, index) => answer === assessmentQuestions[index]?.correct).length}
                </div>
                <div className="text-xs text-muted-foreground">Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">
                  {Math.round(
                    (assessmentAnswers.filter((answer, index) => answer === assessmentQuestions[index]?.correct)
                      .length /
                      assessmentAnswers.length) *
                      100,
                  )}
                  %
                </div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Start Learning Adventure!
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
