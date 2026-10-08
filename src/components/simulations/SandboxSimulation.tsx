import React, { useState } from 'react';
import { Award, CheckCircle2, ArrowRight, Play, FileText, Video, Presentation, BookOpen, Network } from 'lucide-react';

export const SandboxSimulation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const markStepComplete = (stepNum: number) => {
    if (!completedSteps.includes(stepNum)) {
      setCompletedSteps([...completedSteps, stepNum]);
    }
    if (stepNum < 4) {
      setActiveStep(stepNum + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-3xl p-8 text-white shadow-xl space-y-4">
        <div className="flex items-center gap-2 bg-emerald-800/60 w-fit px-3 py-1 rounded-full text-xs font-bold text-emerald-300">
          <Award className="w-4 h-4" />
          مشروع الوحدة الشامل (Sandbox) - رؤية السعودية 2030
        </div>
        <h2 className="text-2xl font-black tracking-tight">
          تخطيط وتنفيذ مبادرة تطوعية وطنية عبر الإنترنت
        </h2>
        <p className="text-sm text-emerald-100 max-w-2xl leading-relaxed">
          في هذا المشروع العملي، ستدمج كافة مهارات الوحدة الثانية: بدءاً من رسم خريطة ذهنية للمبادرة، مروراً بتوثيق التفاصيل في مستند تعاوني، وصولاً إلى جدولة اجتماع افتراضي وعرض المشروع النهائي.
        </p>
      </div>

      {/* Steps Progress Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        {[
          { num: 1, title: "1. الخريطة الذهنية", icon: Network },
          { num: 2, title: "2. المستند التعاوني", icon: FileText },
          { num: 3, title: "3. اجتماع الافتتاحي", icon: Video },
          { num: 4, title: "4. البث والعرض", icon: Presentation },
        ].map((step) => {
          const isDone = completedSteps.includes(step.num);
          const isCurrent = activeStep === step.num;
          const IconComponent = step.icon;

          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                isCurrent
                  ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : isDone
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                isDone ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
              }`}>
                {isDone ? <CheckCircle2 className="w-5 h-5" /> : step.num}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{step.title}</p>
                <p className="text-[10px] text-slate-500">{isDone ? 'مكتمل' : 'قيد التنفيذ'}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Step Content Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
        
        {activeStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Network className="w-5 h-5 text-emerald-600" />
              المرحلة الأولى: رسم الخريطة الذهنية للمبادرة التطوعية
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              افتح أداة الخرائط الذهنية وأنشئ العقدة المركزية باسم «مبادرة تشجير وتطوير الأحياء السكنية»، ثم تفريع العقد إلى الأهداف، الأدوات، والفرق التطوعية.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-800">مهام هذه المرحلة:</span>
              <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
                <li>تحديد المفهوم المركزي في منتصف اللوحة.</li>
                <li>إضافة 3 عقد فرعية على الأقل (أهداف المبادرة، جدول التنفيذ، الفرق التطوعية).</li>
                <li>حفظ الملف باسم "مشروع_المبادرة.mm".</li>
              </ul>
            </div>
            <button
              onClick={() => markStepComplete(1)}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              إتمام وإنجاز المرحلة الأولى
            </button>
          </div>
        )}

        {activeStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              المرحلة الثانية: توثيق التفاصيل في مستند تعاوني
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              أنشئ مستنداً سحابياً جديداً في ون درايف (OneDrive)، شاركه مع أعضاء مجموعتك مع منح صلاحية التعديل (Allow editing)، واكتب تفاصيل خطة المبادرة.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-800">مهام هذه المرحلة:</span>
              <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
                <li>تسمية المستند "خطة_المبادرة_التطوعية".</li>
                <li>إضافة عناوين رئيسية وتنسيق النصوص.</li>
                <li>استخدام التعليقات لمراجعة التغييرات مع الزملاء.</li>
              </ul>
            </div>
            <button
              onClick={() => markStepComplete(2)}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              إتمام وإنجاز المرحلة الثانية
            </button>
          </div>
        )}

        {activeStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-emerald-600" />
              المرحلة الثالثة: جدولة وبدء الاجتماع الافتراضي
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              استخدم تقويم ويندوز لجدولة اجتماع الفريق القادم، ثم ابدأ اجتماعاً عبر تيمز لمناقشة المستند ومهام الفريق التطوعي.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-800">مهام هذه المرحلة:</span>
              <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
                <li>جدولة موعد الاجتماع في التقويم.</li>
                <li>إرسال رابط الاجتماع لأعضاء المجموعة.</li>
                <li>تجربة كتم/إلغاء كتم الصوت وتشغيل الكاميرا.</li>
              </ul>
            </div>
            <button
              onClick={() => markStepComplete(3)}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              إتمام وإنجاز المرحلة الثالثة
            </button>
          </div>
        )}

        {activeStep === 4 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Presentation className="w-5 h-5 text-emerald-600" />
              المرحلة الرابعة: بث وعرض المشروع النهائي
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              استخدم ميزة "تقديم في تيمز" (Present in Teams) لبث عرضك التقديمي حول المبادرة أمام زملائك في الفصل ومناقشة أسئلتهم.
            </p>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
              <span className="text-xs font-bold text-emerald-900">تهانينا! لقد أتممت جميع مراحل مشروع الوحدة بنجاح.</span>
              <p className="text-xs text-emerald-700">يمكنك الآن تصدير تقرير الإنجاز أو الانتقال للوحة المعلم.</p>
            </div>
            <button
              onClick={() => alert("تهانينا! لقد أتممت مشروع الوحدة بنجاح وتم تسجيل النتيجة في سجلك التعليمي.")}
              className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors shadow-md inline-flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              إنهاء وتوثيق المشروع في سجل الإنجاز
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
