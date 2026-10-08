import React, { useState } from 'react';
import { X, Users, Award, Download, BarChart3, ShieldCheck, FileSpreadsheet } from 'lucide-react';

interface TeacherDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'students' | 'rubric' | 'scorm'>('students');

  if (!isOpen) return null;

  const students = [
    { id: 1, name: "عمر أحمد الغامدي", class: "ثاني ثانوي أ", progress: 100, score: "96%", status: "أتم المشروع" },
    { id: 2, name: "سارة خالد القحطاني", class: "ثاني ثانوي أ", progress: 85, score: "90%", status: "قيد التنفيذ" },
    { id: 3, name: "فيصل عبد الله الشمري", class: "ثاني ثانوي ب", progress: 100, score: "98%", status: "أتم المشروع" },
    { id: { id: 4 }, name: "لمى فهد الدوسري", class: "ثاني ثانوي ب", progress: 60, score: "78%", status: "متابعة" },
  ];

  const exportScormPackage = () => {
    alert("تم تصدير حزمة التتبع SCORM 2004 / xAPI بنجاح لتثبيتها في نظام إدارة اللس تعلم (LMS).");
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold">لوحة إدارة المعلم وتقييم طلاب التقنية الرقمية</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-tabs */}
        <div className="px-6 py-3 bg-slate-100 border-b border-slate-200 flex gap-2">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'students' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            تقارير الطلاب والتقدم
          </button>
          <button
            onClick={() => setActiveTab('rubric')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'rubric' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            معايير التقييم الآلي (Rubrics)
          </button>
          <button
            onClick={() => setActiveTab('scorm')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'scorm' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            دعم SCORM / xAPI
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'students' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800">أداء الطلاب في محاكاة الوحدة الثانية</h4>
                <button
                  onClick={() => alert("تم تصدير تقرير درجات الطلاب بصيغة Excel")}
                  className="px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold hover:bg-emerald-100 transition-colors flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  تصدير التقرير
                </button>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700">
                      <th className="p-3.5">اسم الطالب/الطالبة</th>
                      <th className="p-3.5">الفصل</th>
                      <th className="p-3.5">نسبة الإنجاز</th>
                      <th className="p-3.5">درجة التدريبات</th>
                      <th className="p-3.5">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
                    {students.map((st, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold">{st.name}</td>
                        <td className="p-3.5 text-slate-600">{st.class}</td>
                        <td className="p-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full" style={{ width: `${st.progress}%` }} />
                            </div>
                            <span className="font-semibold">{st.progress}%</span>
                          </div>
                        </td>
                        <td className="p-3.5 font-bold text-emerald-600">{st.score}</td>
                        <td className="p-3.5">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            st.status === 'أتم المشروع' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {st.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'rubric' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800">مصفوفة التقييم الذكي للمشروع (Sandbox)</h4>
              <p className="text-xs text-slate-600">
                يتم تصحيح مشاريع الطلاب واختباراتهم تلقائياً بناءً على معايير منهج التقنية الرقمية السعودي (الوحدة الثانية).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 className="text-xs font-bold text-slate-900">1. الخريطة الذهنية</h5>
                  <p className="text-[11px] text-slate-600">تقييم وجود العقدة المركزية، التفريع الصحيح للأفكار، والروابط بين العقد.</p>
                  <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">الوزن: 25%</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 className="text-xs font-bold text-slate-900">2. المستند التعاوني</h5>
                  <p className="text-[11px] text-slate-600">منح صلاحيات التعديل والعرض، وتوثيق تفاصيل مبادرة رؤية 2030 بدقة.</p>
                  <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">الوزن: 35%</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 className="text-xs font-bold text-slate-900">3. الاجتماع والعرض</h5>
                  <p className="text-[11px] text-slate-600">جدولة الاجتماع في التقويم، بث العرض التقديمي، وإدارة أسئلة الجمهور.</p>
                  <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">الوزن: 40%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scorm' && (
            <div className="space-y-4 text-center py-6">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">متوافق مع معايير SCORM 2004 و xAPI</h4>
              <p className="text-xs text-slate-600 max-w-lg mx-auto">
                يدعم التطبيق التتبع الكامل لنتائج الطلاب ودرجاتهم وإرسالها مباشرة إلى أنظمة إدارة التعلم الإلكتروني (LMS) المعتمدة في وزارة التعليم.
              </p>
              <button
                onClick={exportScormPackage}
                className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                تصدير حزمة SCORM
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
