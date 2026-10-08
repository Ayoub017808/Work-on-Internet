import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LESSONS } from './data/curriculumData';
import { GlossaryModal } from './components/GlossaryModal';
import { SkillsChecklistModal } from './components/SkillsChecklistModal';
import { TeacherDashboard } from './components/TeacherDashboard';
import { TrainingQuiz } from './components/TrainingQuiz';

import { DocSimulation } from './components/simulations/DocSimulation';
import { MeetingSimulation } from './components/simulations/MeetingSimulation';
import { PresentationSimulation } from './components/simulations/PresentationSimulation';
import { NotesSimulation } from './components/simulations/NotesSimulation';
import { MindMapSimulation } from './components/simulations/MindMapSimulation';
import { SandboxSimulation } from './components/simulations/SandboxSimulation';

import { FileText, Video, Presentation, BookOpen, Network, Award, ChevronLeft, ArrowRight, Play, BookMarked, CheckSquare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'sandbox' | 'quizzes'>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);

  // Modals state
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isTeacherOpen, setIsTeacherOpen] = useState(false);

  const selectedLesson = LESSONS.find((l) => l.id === selectedLessonId);

  // Calculate progress percent
  const progressPercent = selectedLessonId ? Math.round((selectedLessonId / LESSONS.length) * 100) : 15;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Cairo',sans-serif] flex flex-col selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab as any);
          if (tab !== 'home') setSelectedLessonId(null);
        }}
        openGlossary={() => setIsGlossaryOpen(true)}
        openSkills={() => setIsSkillsOpen(true)}
        openTeacher={() => setIsTeacherOpen(true)}
        progressPercent={progressPercent}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab: Quizzes */}
        {activeTab === 'quizzes' && <TrainingQuiz />}

        {/* Tab: Sandbox / Project */}
        {activeTab === 'sandbox' && <SandboxSimulation />}

        {/* Tab: Home / Lessons view */}
        {activeTab === 'home' && !selectedLessonId && (
          <div className="space-y-8">
            
            {/* Hero Banner */}
            <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-2xl space-y-4 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  📚 الوحدة الثانية: العمل عبر الإنترنت
                </span>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  منصة المحاكاة التفاعلية للتقنية الرقمية
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                  تعلم مهارات العمل السحابي، تحرير المستندات المتزامن، الاجتماعات الافتراضية، بث العروض التقديمية، دفاتر الملاحظات، والخرائط الذهنية بأسلوب عملي تفاعلي يواكب رؤية المملكة 2030.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setSelectedLessonId(1)}
                    className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30 flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    ابدأ الدرس الأول الآن
                  </button>
                  <button
                    onClick={() => setActiveTab('sandbox')}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
                  >
                    مشروع الوحدة الشامل
                  </button>
                </div>
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">محتوى الوحدة والدروس العملية</h3>
                <span className="text-xs text-slate-500">6 دروس تفاعلية</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LESSONS.map((lesson) => {
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => setSelectedLessonId(lesson.id)}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-emerald-500/50"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            0{lesson.id}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400">
                            {lesson.pageRange}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {lesson.title}
                        </h4>
                        
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {lesson.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                        <span>بدء المحاكاة التفاعلية</span>
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* Lesson Simulation View */}
        {activeTab === 'home' && selectedLessonId && selectedLesson && (
          <div className="space-y-6">
            
            {/* Lesson Header with Back Button */}
            <div className="flex items-center justify-between bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <button
                onClick={() => setSelectedLessonId(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <ArrowRight className="w-4 h-4" />
                العودة لقائمة الدروس
              </button>
              
              <div className="text-left">
                <span className="text-xs font-bold text-emerald-600">{selectedLesson.pageRange}</span>
                <h3 className="text-sm font-bold text-slate-900">{selectedLesson.title}</h3>
              </div>
            </div>

            {/* Historical Note if exists */}
            {selectedLesson.historicalNote && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-1">
                <h4 className="text-xs font-bold text-amber-900">{selectedLesson.historicalNote.title}</h4>
                <p className="text-xs text-amber-800 leading-relaxed">{selectedLesson.historicalNote.text}</p>
              </div>
            )}

            {/* Active Simulation Component */}
            {selectedLessonId === 1 && <DocSimulation />}
            {selectedLessonId === 2 && <MeetingSimulation />}
            {selectedLessonId === 3 && <PresentationSimulation />}
            {selectedLessonId === 4 && <NotesSimulation />}
            {selectedLessonId === 5 && <MindMapSimulation />}
            {selectedLessonId === 6 && <SandboxSimulation />}

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <p>منصة العمل عبر الإنترنت التفاعلية · منهج التقنية الرقمية (الوحدة الثانية) · وزارة التعليم</p>
      </footer>

      {/* Modals */}
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
      <SkillsChecklistModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
      <TeacherDashboard isOpen={isTeacherOpen} onClose={() => setIsTeacherOpen(false)} />

    </div>
  );
}
