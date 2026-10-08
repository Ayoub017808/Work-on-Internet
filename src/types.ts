export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pageRange: string;
  iconName: string;
  toolsUsed: string[];
  learningObjectives: string[];
  historicalNote?: {
    title: string;
    text: string;
  };
}

export interface TrainingQuestion {
  id: number;
  lessonId: number;
  trainingNumber: number;
  question: string;
  type: 'true_false' | 'matching' | 'multiple_choice' | 'practical';
  options?: string[];
  correctAnswer: any;
  explanation: string;
}

export interface GlossaryTerm {
  en: string;
  ar: string;
}

export interface SkillItem {
  id: number;
  title: string;
  mastered: boolean;
}

export interface UserProgress {
  completedLessons: number[];
  quizScores: Record<number, number>;
  skillsMastered: number[];
  sandboxCompleted: boolean;
}
