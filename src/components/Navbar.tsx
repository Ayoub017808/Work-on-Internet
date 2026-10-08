import React from 'react';
import { Globe, BookOpen, Award, Users, BookMarked, CheckSquare, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openGlossary: () => void;
  openSkills: () => void;
  openTeacher: () => void;
  progressPercent: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openGlossary,
  openSkills,
  openTeacher,
  progressPercent,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Zone 1: Brand title in a single line */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <Globe className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
                العمل عبر الإنترنت
              </h1>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                الوحدة الثانية · التقنية الرقمية (رؤية 2030)
              </p>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'home'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              الرئيسية والدروس
            </button>
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'sandbox'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              مشروع الوحدة (Sandbox)
            </button>
            <button
              onClick={() => setActiveTab('quizzes')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'quizzes'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              التمارين والتدريبات
            </button>
          </nav>

          {/* Zone 3: Actions & Modals */}
          <div className="flex items-center gap-2">
            
            {/* Progress indicator */}
            <div className="hidden md:flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <div className="w-16 bg-emerald-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-bold text-emerald-700">{progressPercent}%</span>
            </div>

            <button
              onClick={openGlossary}
              className="p-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
              title="المصطلحات العلمية"
            >
              <BookMarked className="w-5 h-5" />
            </button>

            <button
              onClick={openSkills}
              className="p-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
              title="جدول المهارات (صفحة 49)"
            >
              <CheckSquare className="w-5 h-5" />
            </button>

            <button
              onClick={openTeacher}
              className="px-3.5 py-2 text-xs font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              <Users className="w-4 h-4" />
              <span>لوحة المعلم</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
