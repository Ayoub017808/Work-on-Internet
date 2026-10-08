import React, { useState } from 'react';
import { BookOpen, Plus, Tag, Image, Link, Search, Trash2 } from 'lucide-react';

interface NoteItem {
  id: string;
  title: string;
  content: string;
  tag: string;
}

export const NotesSimulation: React.FC = () => {
  const [sections, setSections] = useState([
    { name: "الواجب المنزلي", active: true },
    { name: "بحث أجهزة الحاسب", active: false },
    { name: "وجهات العطالت", active: false }
  ]);

  const [pages, setPages] = useState<NoteItem[]>([
    { id: "1", title: "مقدمة التخزين السحابي", content: "تخزين الملفات عبر ون درايف للوصول إليها من أي مكان وفي أي وقت.", tag: "تخزين" },
    { id: "2", title: "أجهزة الإدخال والمعالجة", content: "المكونات التي يمكن من خلالها إدخال ومعالجة البيانات وتخزينها واسترجاعها.", tag: "أجهزة" }
  ]);

  const [activePageId, setActivePageId] = useState("1");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newTag, setNewTag] = useState("عام");

  const activePage = pages.find((p) => p.id === activePageId) || pages[0];

  const addPage = () => {
    if (newTitle.trim()) {
      const p: NoteItem = {
        id: Date.now().toString(),
        title: newTitle.trim(),
        content: newContent.trim() || "محتوى الصفحة الجديد...",
        tag: newTag
      };
      setPages([...pages, p]);
      setActivePageId(p.id);
      setNewTitle("");
      setNewContent("");
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">محاكاة دفاتر الملاحظات الرقمية (Microsoft OneNote)</h3>
            <p className="text-xs text-slate-500">إنشاء دفاتر الملاحظات، تنظيم الأقسام والصفحات، إضافة وسائط وتصنيفها بالعلامات (Tags).</p>
          </div>
        </div>
      </div>

      {/* OneNote App Simulator UI */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-4 h-[500px]">
        
        {/* Sections sidebar */}
        <div className="bg-slate-900 text-white p-4 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-purple-400">دفتر الملاحظات: صفى الدراسي</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold">أقسام دفتر الملاحظات:</p>
            <div className="space-y-1">
              {sections.map((sec, idx) => (
                <button
                  key={idx}
                  className={`w-full text-right px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    sec.active ? 'bg-purple-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {sec.name}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => alert("تم إنشاء قسم جديد في دفتر الملاحظات بنجاح.")}
            className="w-full py-2 bg-slate-800 text-slate-200 rounded-xl text-xs font-bold hover:bg-slate-700 flex items-center justify-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            إضافة قسم جديد (+ Add section)
          </button>
        </div>

        {/* Pages list sidebar */}
        <div className="bg-slate-50 border-l border-slate-200 p-4 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">صفحات القسم</span>
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[300px]">
              {pages.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setActivePageId(p.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    activePageId === p.id
                      ? 'bg-purple-50 border-purple-300 font-bold text-purple-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <p className="truncate">{p.title}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-purple-100 text-purple-800 text-[10px] rounded">
                    #{p.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add page mini form */}
          <div className="space-y-2 pt-3 border-t border-slate-200">
            <input
              type="text"
              placeholder="عنوان الصفحة الجديدة..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none"
            />
            <button
              onClick={addPage}
              className="w-full py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              إضافة صفحة جديدة (+ Add page)
            </button>
          </div>
        </div>

        {/* Main Note Canvas (2 cols) */}
        <div className="md:col-span-2 p-6 flex flex-col justify-between bg-white">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-base font-extrabold text-slate-900">{activePage.title}</h2>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">
                العلامة: #{activePage.tag}
              </span>
            </div>

            <textarea
              value={activePage.content}
              onChange={(e) => {
                const updated = pages.map((p) => (p.id === activePageId ? { ...p, content: e.target.value } : p));
                setPages(updated);
              }}
              className="w-full h-64 text-sm text-slate-800 bg-white resize-none focus:outline-none"
              placeholder="اكتب ملاحظاتك هنا..."
            />
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <button
              onClick={() => alert("تم إدراج صورة في الملاحظة بنجاح.")}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 rounded-lg hover:bg-slate-200 text-slate-700 font-semibold"
            >
              <Image className="w-4 h-4 text-purple-600" />
              إدراج صورة
            </button>
            <button
              onClick={() => alert("تم إدراج رابط تفاعلي بنجاح.")}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 rounded-lg hover:bg-slate-200 text-slate-700 font-semibold"
            >
              <Link className="w-4 h-4 text-purple-600" />
              إدراج رابط
            </button>
            <span className="mr-auto text-emerald-600 font-bold">يحفظ ون نوت عملك تلقائياً باستمرار</span>
          </div>
        </div>

      </div>

    </div>
  );
};
