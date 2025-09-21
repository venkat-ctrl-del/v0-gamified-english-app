"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Play, ArrowLeft, Volume2, Star, CheckCircle, RotateCcw, Trophy, Headphones } from "lucide-react"
import Link from "next/link"

export default function SpeakingPage() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecorded, setHasRecorded] = useState(false)
  const [pronunciationScore, setPronunciationScore] = useState<number | null>(null)
  const [currentWord, setCurrentWord] = useState(0)

  const speakingExercises = [
    {
      id: 1,
      title: "Basic Words",
      description: "Practice pronouncing common English words",
      level: "Beginner",
      completed: true,
      locked: false,
      words: [
        { word: "Hello", phonetic: "/həˈloʊ/", meaning: "A greeting" },
        { word: "Thank you", phonetic: "/θæŋk juː/", meaning: "Expression of gratitude" },
        { word: "Please", phonetic: "/pliːz/", meaning: "Polite request word" },
        { word: "Water", phonetic: "/ˈwɔːtər/", meaning: "Clear liquid we drink" },
      ],
    },
    {
      id: 2,
      title: "Simple Sentences",
      description: "Practice speaking complete sentences",
      level: "Beginner",
      completed: false,
      locked: false,
      words: [
        { word: "I am happy", phonetic: "/aɪ æm ˈhæpi/", meaning: "Expressing joy" },
        { word: "How are you?", phonetic: "/haʊ ɑːr juː/", meaning: "Asking about wellbeing" },
        { word: "Nice to meet you", phonetic: "/naɪs tuː miːt juː/", meaning: "Polite greeting" },
      ],
    },
    {
      id: 3,
      title: "Difficult Sounds",
      description: "Master challenging English pronunciations",
      level: "Intermediate",
      completed: false,
      locked: false,
      words: [
        { word: "Thought", phonetic: "/θɔːt/", meaning: "An idea in your mind" },
        { word: "Through", phonetic: "/θruː/", meaning: "From one side to another" },
        { word: "Rhythm", phonetic: "/ˈrɪðəm/", meaning: "A pattern of sounds" },
      ],
    },
    {
      id: 4,
      title: "Tongue Twisters",
      description: "Challenge yourself with fun tongue twisters",
      level: "Advanced",
      completed: false,
      locked: true,
      words: [],
    },
  ]

  const currentExercise = selectedExercise ? speakingExercises.find((e) => e.id === selectedExercise) : null
  const currentWordData = currentExercise?.words[currentWord]

  const startRecording = () => {
    setIsRecording(true)
    // Simulate recording for 3 seconds
    setTimeout(() => {
      setIsRecording(false)
      setHasRecorded(true)
      // Simulate pronunciation scoring
      const score = Math.floor(Math.random() * 30) + 70 // Random score between 70-100
      setPronunciationScore(score)
    }, 3000)
  }

  const playAudio = () => {
    // Simulate playing pronunciation audio
    console.log(`Playing pronunciation for: ${currentWordData?.word}`)
  }

  const nextWord = () => {
    if (currentExercise && currentWord < currentExercise.words.length - 1) {
      setCurrentWord(currentWord + 1)
      setHasRecorded(false)
      setPronunciationScore(null)
    } else {
      // Exercise completed
      setSelectedExercise(null)
      setCurrentWord(0)
      setHasRecorded(false)
      setPronunciationScore(null)
    }
  }

  const tryAgain = () => {
    setHasRecorded(false)
    setPronunciationScore(null)
  }

  if (selectedExercise && currentExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
        {/* Exercise Header */}
        <header className="bg-card/95 backdrop-blur border-b shadow-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedExercise(null)} className="w-9 h-9 p-0">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div>
                  <h1 className="text-lg font-bold text-accent">{currentExercise.title}</h1>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {currentExercise.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Word {currentWord + 1} of {currentExercise.words.length}
                    </span>
                  </div>
                </div>
              </div>

              {pronunciationScore && (
                <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-accent" />
                  <span className="font-bold text-accent">{pronunciationScore}%</span>
                </div>
              )}
            </div>
            <Progress value={((currentWord + 1) / currentExercise.words.length) * 100} className="mt-3" />
          </div>
        </header>

        {/* Speaking Practice Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              {currentWordData && (
                <div className="space-y-8">
                  {/* Word Display */}
                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold text-accent">{currentWordData.word}</h2>
                      <p className="text-xl text-muted-foreground font-mono">{currentWordData.phonetic}</p>
                      <p className="text-lg text-foreground">{currentWordData.meaning}</p>
                    </div>

                    {/* Listen Button */}
                    <Button
                      onClick={playAudio}
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Volume2 className="w-5 h-5 mr-2" />
                      Listen to Pronunciation
                    </Button>
                  </div>

                  {/* Recording Interface */}
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div
                        className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center transition-all ${
                          isRecording
                            ? "bg-destructive animate-pulse"
                            : hasRecorded
                              ? "bg-secondary"
                              : "bg-accent hover:bg-accent/80"
                        }`}
                      >
                        {isRecording ? (
                          <div className="w-8 h-8 bg-white rounded-sm"></div>
                        ) : hasRecorded ? (
                          <CheckCircle className="w-12 h-12 text-secondary-foreground" />
                        ) : (
                          <Mic className="w-12 h-12 text-accent-foreground" />
                        )}
                      </div>

                      {isRecording && (
                        <div className="absolute inset-0 rounded-full border-4 border-destructive animate-ping"></div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {!hasRecorded ? (
                        <div>
                          <Button
                            onClick={startRecording}
                            disabled={isRecording}
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          >
                            {isRecording ? (
                              <>
                                <MicOff className="w-5 h-5 mr-2" />
                                Recording... ({3}s)
                              </>
                            ) : (
                              <>
                                <Mic className="w-5 h-5 mr-2" />
                                Start Recording
                              </>
                            )}
                          </Button>
                          <p className="text-sm text-muted-foreground mt-2">Tap and say the word clearly</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {pronunciationScore && (
                            <div
                              className={`p-6 rounded-xl ${
                                pronunciationScore >= 80
                                  ? "bg-secondary/10 border border-secondary/20"
                                  : pronunciationScore >= 60
                                    ? "bg-accent/10 border border-accent/20"
                                    : "bg-destructive/10 border border-destructive/20"
                              }`}
                            >
                              <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="flex">
                                  {[1, 2, 3].map((star) => (
                                    <Star
                                      key={star}
                                      className={`w-6 h-6 ${
                                        star <= Math.ceil(pronunciationScore / 33)
                                          ? "fill-accent text-accent"
                                          : "text-muted"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-2xl font-bold text-accent">{pronunciationScore}%</span>
                              </div>
                              <p className="text-center text-muted-foreground">
                                {pronunciationScore >= 80
                                  ? "Excellent pronunciation!"
                                  : pronunciationScore >= 60
                                    ? "Good job! Keep practicing."
                                    : "Try again for better pronunciation."}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Navigation */}
                  {hasRecorded && (
                    <div className="flex items-center justify-between pt-6">
                      <Button variant="outline" onClick={tryAgain} className="bg-transparent">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Try Again
                      </Button>

                      <Button onClick={nextWord} className="bg-accent hover:bg-accent/90">
                        {currentWord < currentExercise.words.length - 1 ? (
                          <>
                            Next Word
                            <Play className="w-4 h-4 ml-2" />
                          </>
                        ) : (
                          <>
                            Complete Exercise
                            <Trophy className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
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
                <h1 className="text-2xl font-bold text-accent flex items-center gap-2">
                  <Mic className="w-6 h-6" />
                  Speaking Practice
                </h1>
                <p className="text-muted-foreground">Practice pronunciation with AI feedback</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Speaking Exercises Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakingExercises.map((exercise) => (
            <Card
              key={exercise.id}
              className={`shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer ${
                exercise.locked ? "opacity-60" : ""
              }`}
              onClick={() => !exercise.locked && setSelectedExercise(exercise.id)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative`}
                >
                  <Mic className="w-8 h-8 text-accent" />
                  {exercise.completed && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-accent-foreground" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg font-bold text-accent">{exercise.title}</CardTitle>
                <CardDescription className="text-base">{exercise.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {exercise.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Headphones className="w-3 h-3" />
                    {exercise.words.length} words
                  </div>
                </div>

                {exercise.completed && (
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                )}

                {exercise.locked ? (
                  <Button disabled className="w-full">
                    Complete previous exercises
                  </Button>
                ) : (
                  <Button className="w-full bg-accent hover:bg-accent/90 group-hover:scale-105 transition-transform">
                    <Mic className="w-4 h-4 mr-2" />
                    {exercise.completed ? "Practice Again" : "Start Speaking"}
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
