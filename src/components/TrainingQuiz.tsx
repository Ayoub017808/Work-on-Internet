import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Award } from 'lucide-react';
import { TRAINING_QUESTIONS } from '../data/curriculumData';

export const TrainingQuiz: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});

  const lessonQuestions = TRAINING_QUESTIONS.filter((q) => q.lessonId === selectedLesson);

  const handleAnswer = (questionId: number, answer: any) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const submitQuestion = (questionId: number) => {
    setSubmitted({ ...submitted, [questionId]: true });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900">التمارين والتدريبات التفاعلية (منهج التقنية الرقمية)</h2>
        <p className="text-xs text-slate-500 mt-1">
          اختر الدرس لعرض التدريبات والأسئلة الخاصة به وتصحيحها فورياً داخل المتصفح.
        </p>

        {/* Lesson selector tabs */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((lNum) => (
            <button
              key={lNum}
              onClick={() => setSelectedLesson(lNum)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedLesson === lNum
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              الدرس {lNum}
            </button>
          ))}
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {lessonQuestions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-sm">
            لا توجد تدريبات متاحة لهذا الدرس حالياً.
          </div>
        ) : (
          lessonQuestions.map((q) => {
            const isSubmitted = submitted[q.id];
            const userAnswer = userAnswers[q.id];
            const isCorrect = isSubmitted && userAnswer === q.correctAnswer;

            return (
              <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {q.trainingNumber}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {q.question}
                    </h3>
                  </div>
                </div>

                {/* Options based on type */}
                {q.type === 'true_false' && (
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      disabled={isSubmitted}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                        userAnswer === true
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      صحيحة
                    </button>
                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      disabled={isSubmitted}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                        userAnswer === false
                          ? 'bg-rose-50 border-rose-500 text-rose-800'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      خطأ
                    </button>
                  </div>
                )}

                {q.type === 'multiple_choice' && q.options && (
                  <div className="space-y-2 mt-2">
                    {q.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(q.id, opt)}
                        disabled={isSubmitted}
                        className={`w-full text-right p-3 rounded-xl text-xs font-semibold border transition-all ${
                          userAnswer === opt
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Submit button & feedback */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  {!isSubmitted ? (
                    <button
                      onClick={() => submitQuestion(q.id)}
                      disabled={userAnswer === undefined}
                      className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50"
                    >
                      تحقق من الإجابة
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                          <CheckCircle2 className="w-4 h-4" />
                          إجابة صحيحة!
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-rose-700 text-xs font-bold bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200">
                          <XCircle className="w-4 h-4" />
                          إجابة خاطئة. الصحيح: {String(q.correctAnswer)}
                        </div>
                      )}
                    </div>
                  )}

                  {isSubmitted && (
                    <p className="text-xs text-slate-500">
                      {q.explanation}
                    </p>
                  )}
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
