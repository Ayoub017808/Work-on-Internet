import React, { useState } from 'react';
import { Presentation, ChevronRight, ChevronLeft, MessageSquare, Eye, Play, Square, Sparkles } from 'lucide-react';

export const PresentationSimulation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [broadcasting, setBroadcasting] = useState(false);
  const [qaList, setQaList] = useState<string[]>([
    "سارة: هل يمكننا إضافة مقطع فيديو عن جزيرة فرسان؟",
    "فيصل: ما هي المدة الزمنية المقترحة لعرض الشرائح؟"
  ]);
  const [newQuestion, setNewQuestion] = useState("");

  const slides = [
    {
      title: "مبادرة الطاقة المتجددة في السعودية",
      subtitle: "رؤية 2030 وتطوير تقنيات الطاقة النظيفة",
      content: "توطين وتطوير تقنيات الطاقة النظيفة لتقليل الاعتماد على النفط وخفض الانبعاثات."
    },
    {
      title: "مزرعة الطاقة الشمسية في جزيرة فرسان",
      subtitle: "مشروع رائد في البحر الأحمر",
      content: "تنتج المزرعة 864 ميجاوات في الساعة سنوياً، ومكافئة لتعويض 28000 برميل من النفط."
    },
    {
      title: "الخاتمة والتوصيات",
      subtitle: "نحو مستقبل مستدام",
      content: "الاستفادة من الطاقة الشمسية وطاقة الرياح لتحقيق أهداف الاستدامة الوطنية."
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  const submitQuestion = () => {
    if (newQuestion.trim()) {
      setQaList([...qaList, `الجمهور: ${newQuestion.trim()}`]);
      setNewQuestion("");
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Presentation className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">محاكاة بث العرض التقديمي (Presenter View & PowerPoint Live)</h3>
            <p className="text-xs text-slate-500">تحكم بانتقال الشرائح أثناء البث الحي وإدارة أسئلة الجمهور الافتراضي.</p>
          </div>
        </div>

        <button
          onClick={() => setBroadcasting(!broadcasting)}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
            broadcasting
              ? 'bg-rose-600 text-white hover:bg-rose-700'
              : 'bg-amber-600 text-white hover:bg-amber-700'
          }`}
        >
          {broadcasting ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {broadcasting ? "إيقاف البث الحي (Stop Presenting)" : "بدء البث الحي عبر تيمز (Present in Teams)"}
        </button>
      </div>

      {/* Main Stage: Presenter View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Slides Stage (2 cols) */}
        <div className="lg:col-span-2 bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between h-[450px]">
          
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
            <span>الشريحة {currentSlide} من {slides.length}</span>
            <span className="bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded font-bold">وضع المقدم (Presenter View)</span>
          </div>

          <div className="text-center space-y-4 my-auto">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              {slides[currentSlide - 1].title}
            </h2>
            <p className="text-sm font-semibold text-amber-400">
              {slides[currentSlide - 1].subtitle}
            </p>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
              {slides[currentSlide - 1].content}
            </p>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 1}
              className="px-4 py-2 bg-slate-800 rounded-xl text-xs font-bold hover:bg-slate-700 disabled:opacity-40 flex items-center gap-1"
            >
              <ChevronRight className="w-4 h-4" />
              السابق
            </button>
            <span className="text-xs font-mono">01:15 / 03:00</span>
            <button
              onClick={handleNext}
              disabled={currentSlide === slides.length}
              className="px-4 py-2 bg-slate-800 rounded-xl text-xs font-bold hover:bg-slate-700 disabled:opacity-40 flex items-center gap-1"
            >
              التالي
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Audience Q&A Sidebar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between h-[450px]">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-amber-600" />
              نافذة أسئلة الجمهور الافتراضي (Q&A)
            </h4>

            <div className="space-y-2.5 overflow-y-auto max-h-[280px]">
              {qaList.map((q, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-100">
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-3 border-t border-slate-100">
            <input
              type="text"
              placeholder="اكتب سؤالاً للجمهور..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none"
            />
            <button
              onClick={submitQuestion}
              className="px-3.5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800"
            >
              إرسال
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
