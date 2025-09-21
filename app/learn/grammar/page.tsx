"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Play, ArrowLeft, CheckCircle, X, RotateCcw, Star, Trophy, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function GrammarPage() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [draggedWord, setDraggedWord] = useState<string | null>(null)

  const grammarLessons = [
    {
      id: 1,
      title: "Present Tense Fun",
      description: "Learn about present tense verbs",
      level: "Beginner",
      completed: true,
      locked: false,
      exercises: [
        {
          type: "multiple-choice",
          question: "Choose the correct present tense verb:",
          sentence: "She ___ to school every day.",
          options: ["go", "goes", "going", "went"],
          correct: "goes",
          explanation: "We use 'goes' with 'she' in present tense.",
        },
        {
          type: "drag-drop",
          question: "Drag the correct words to complete the sentence:",
          sentence: "I ___ my homework ___ day.",
          blanks: ["___", "___"],
          words: ["do", "every", "does", "yesterday"],
          correct: ["do", "every"],
          explanation: "I do my homework every day.",
        },
      ],
    },
    {
      id: 2,
      title: "Past Tense Adventure",
      description: "Explore past tense verbs",
      level: "Beginner",
      completed: false,
      locked: false,
      exercises: [
        {
          type: "multiple-choice",
          question: "What is the past tense of 'play'?",
          sentence: "Yesterday, I ___ with my friends.",
          options: ["play", "played", "playing", "plays"],
          correct: "played",
          explanation: "The past tense of 'play' is 'played'.",
        },
      ],
    },
    {
      id: 3,
      title: "Preposition Power",
      description: "Master prepositions like in, on, at",
      level: "Intermediate",
      completed: false,
      locked: false,
      exercises: [
        {
          type: "multiple-choice",
          question: "Choose the correct preposition:",
          sentence: "The book is ___ the table.",
          options: ["in", "on", "at", "under"],
          correct: "on",
          explanation: "We use 'on' when something is on top of a surface.",
        },
      ],
    },
    {
      id: 4,
      title: "Article Magic",
      description: "Learn when to use a, an, the",
      level: "Intermediate",
      completed: false,
      locked: true,
      exercises: [],
    },
  ]

  const currentLesson = selectedLesson ? grammarLessons.find((l) => l.id === selectedLesson) : null
  const currentExerciseData = currentLesson?.exercises[currentExercise]

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)

    if (answer === currentExerciseData?.correct) {
      setScore(score + 10)
    }
  }

  const handleNextExercise = () => {
    if (currentLesson && currentExercise < currentLesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Lesson completed
      setSelectedLesson(null)
      setCurrentExercise(0)
      setScore(0)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleDragStart = (word: string) => {
    setDraggedWord(word)
  }

  const handleDrop = (blankIndex: number) => {
    if (draggedWord && currentExerciseData?.type === "drag-drop") {
      // Handle drag and drop logic
      console.log(`Dropped ${draggedWord} in blank ${blankIndex}`)
    }
    setDraggedWord(null)
  }

  if (selectedLesson && currentLesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10">
        {/* Exercise Header */}
        <header className="bg-card/95 backdrop-blur border-b shadow-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedLesson(null)} className="w-9 h-9 p-0">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div>
                  <h1 className="text-lg font-bold text-secondary">{currentLesson.title}</h1>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {currentLesson.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Exercise {currentExercise + 1} of {currentLesson.exercises.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-accent" />
                  <span className="font-bold text-accent">{score}</span>
                </div>
              </div>
            </div>
            <Progress value={((currentExercise + 1) / currentLesson.exercises.length) * 100} className="mt-3" />
          </div>
        </header>

        {/* Exercise Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              {currentExerciseData && (
                <div className="space-y-8">
                  {/* Question */}
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-secondary">{currentExerciseData.question}</h2>
                    <div className="text-xl text-foreground font-medium bg-secondary/5 p-6 rounded-xl">
                      {currentExerciseData.sentence}
                    </div>
                  </div>

                  {/* Multiple Choice */}
                  {currentExerciseData.type === "multiple-choice" && (
                    <div className="grid grid-cols-2 gap-4">
                      {currentExerciseData.options?.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className={`h-16 text-lg font-medium transition-all ${
                            selectedAnswer === option
                              ? option === currentExerciseData.correct
                                ? "bg-secondary text-secondary-foreground border-secondary"
                                : "bg-destructive text-destructive-foreground border-destructive"
                              : "bg-transparent hover:bg-secondary/10"
                          }`}
                          onClick={() => !showResult && handleAnswerSelect(option)}
                          disabled={showResult}
                        >
                          <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                          {showResult && option === currentExerciseData.correct && (
                            <CheckCircle className="w-5 h-5 ml-auto text-secondary" />
                          )}
                          {showResult && selectedAnswer === option && option !== currentExerciseData.correct && (
                            <X className="w-5 h-5 ml-auto text-destructive" />
                          )}
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* Drag and Drop */}
                  {currentExerciseData.type === "drag-drop" && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-3 justify-center">
                        {currentExerciseData.words?.map((word, index) => (
                          <div
                            key={index}
                            draggable
                            onDragStart={() => handleDragStart(word)}
                            className="px-4 py-2 bg-accent/10 text-accent rounded-lg cursor-move hover:bg-accent/20 transition-colors font-medium"
                          >
                            {word}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center">
                        <div className="text-xl font-medium">
                          {currentExerciseData.sentence.split("___").map((part, index) => (
                            <span key={index}>
                              {part}
                              {index < currentExerciseData.blanks!.length && (
                                <span
                                  className="inline-block w-24 h-10 bg-secondary/10 border-2 border-dashed border-secondary/30 rounded mx-2 align-middle"
                                  onDrop={() => handleDrop(index)}
                                  onDragOver={(e) => e.preventDefault()}
                                />
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Result and Explanation */}
                  {showResult && (
                    <div
                      className={`p-6 rounded-xl ${
                        selectedAnswer === currentExerciseData.correct
                          ? "bg-secondary/10 border border-secondary/20"
                          : "bg-destructive/10 border border-destructive/20"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {selectedAnswer === currentExerciseData.correct ? (
                          <>
                            <CheckCircle className="w-6 h-6 text-secondary" />
                            <span className="text-lg font-bold text-secondary">Correct!</span>
                          </>
                        ) : (
                          <>
                            <X className="w-6 h-6 text-destructive" />
                            <span className="text-lg font-bold text-destructive">Try again!</span>
                          </>
                        )}
                      </div>
                      <p className="text-muted-foreground">{currentExerciseData.explanation}</p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-6">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedAnswer(null)
                        setShowResult(false)
                      }}
                      disabled={!showResult}
                      className="bg-transparent"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>

                    <Button
                      onClick={handleNextExercise}
                      disabled={!showResult}
                      className="bg-secondary hover:bg-secondary/90"
                    >
                      {currentExercise < currentLesson.exercises.length - 1 ? (
                        <>
                          Next Exercise
                          <Zap className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Complete Lesson
                          <Trophy className="w-4 h-4 ml-2" />
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
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10">
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
                <h1 className="text-2xl font-bold text-secondary flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6" />
                  Grammar Games
                </h1>
                <p className="text-muted-foreground">Learn grammar through fun interactive exercises</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Grammar Lessons Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grammarLessons.map((lesson) => (
            <Card
              key={lesson.id}
              className={`shadow-lg border-0 bg-card/95 backdrop-blur hover:shadow-xl transition-all group cursor-pointer ${
                lesson.locked ? "opacity-60" : ""
              }`}
              onClick={() => !lesson.locked && setSelectedLesson(lesson.id)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative`}
                >
                  <Target className="w-8 h-8 text-secondary" />
                  {lesson.completed && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg font-bold text-secondary">{lesson.title}</CardTitle>
                <CardDescription className="text-base">{lesson.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {lesson.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Gamepad2 className="w-3 h-3" />
                    {lesson.exercises.length} exercises
                  </div>
                </div>

                {lesson.completed && (
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                )}

                {lesson.locked ? (
                  <Button disabled className="w-full">
                    Complete previous lessons
                  </Button>
                ) : (
                  <Button className="w-full bg-secondary hover:bg-secondary/90 group-hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 mr-2" />
                    {lesson.completed ? "Practice Again" : "Start Learning"}
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
