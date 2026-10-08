import React, { useState } from 'react';
import { FileText, Share2, MessageSquare, Shield, Users, Save, Check, Download, Send } from 'lucide-react';

export const DocSimulation: React.FC = () => {
  const [docName, setDocName] = useState("مشروع اليوم الوطني السعودي G10.S1.2.1");
  const [content, setContent] = useState("تتمحور فكرة هذا المستند حول الاحتفال بيكري توحيد المملكة العربية السعودية على يد الملك عبد العزيز آل سعود رحمة الله...\n\n- التعاون مع الأعضاء لتحديد الصور والملفات المفضلة.\n- إدراج الصور والتعليقات المناسبة.");
  const [permission, setPermission] = useState<'edit' | 'view'>('edit');
  const [sharedEmail, setSharedEmail] = useState('');
  const [sharedList, setSharedList] = useState<string[]>(["saad@binary.academy.com", "noura@binary.academy.com"]);
  const [comments, setComments] = useState<string[]>([
    "أحمد: يرجى إضافة المزيد من صور انجازات العمارة في العِلا.",
    "سارة: تم تعديل الفقرة الأولى وإضافة التاريخ الهجري."
  ]);
  const [newComment, setNewComment] = useState("");
  const [savedStatus, setSavedStatus] = useState("تم الحفظ تلقائياً في ون درايف (OneDrive)");

  const handleShare = (e: React.FormEvent) => {
    e.preventDefault();
    if (sharedEmail.trim()) {
      setSharedList([...sharedList, sharedEmail.trim()]);
      setSharedEmail("");
    }
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, `أنت: ${newComment.trim()}`]);
      setNewComment("");
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Simulation Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <input
              type="text"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              className="text-sm font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none"
            />
            <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
              <Check className="w-3 h-3" /> {savedStatus}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={permission}
            onChange={(e) => setPermission(e.target.value as 'edit' | 'view')}
            className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700"
          >
            <option value="edit">السماح بالتحرير (Allow editing)</option>
            <option value="view">العرض فقط (Viewing)</option>
          </select>

          <button
            onClick={() => alert("تم نسخ رابط المستند (Copy Link) بنجاح لمشاركته مع زمالئك.")}
            className="px-3.5 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" />
            مشاركة (Share)
          </button>
        </div>
      </div>

      {/* Main Workspace grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Editor Area (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col h-[500px]">
          {/* Word ribbon simulation */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center gap-3 text-xs text-slate-600">
            <span className="font-bold text-slate-900 border-b-2 border-blue-600 pb-1">الصفحة الرئيسية</span>
            <span>إدراج</span>
            <span>تخطيط</span>
            <span>مراجع</span>
            <span>مراجعة</span>
            <span>تعليمات</span>
          </div>

          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setSavedStatus("جاري الحفظ...");
              setTimeout(() => setSavedStatus("تم الحفظ تلقائياً في ون درايف (OneDrive)"), 1000);
            }}
            disabled={permission === 'view'}
            className="w-full flex-1 p-6 text-sm font-normal text-slate-800 bg-white resize-none focus:outline-none"
            placeholder="اكتب مستندك هنا..."
          />

          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>عدد الكلمات: {content.split(/\s+/).length}</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>متزامن مع مستخدمين افتراضيين (سعد، نورة)</span>
            </div>
          </div>
        </div>

        {/* Sidebar (Sharing & Comments) */}
        <div className="space-y-6">
          
          {/* Sharing box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-600" />
              المتعاونون وصلاحيات الوصول
            </h4>

            <form onSubmit={handleShare} className="flex gap-2">
              <input
                type="email"
                placeholder="بريد الزميل (البريد الإلكتروني)..."
                value={sharedEmail}
                onChange={(e) => setSharedEmail(e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                إرسال
              </button>
            </form>

            <div className="space-y-2 max-h-36 overflow-y-auto">
              {sharedList.map((email, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-2 bg-slate-50 rounded-xl">
                  <span className="font-medium text-slate-700 truncate">{email}</span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">تعديل</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comments and Track changes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              التعليقات ومتابعة التغييرات
            </h4>

            <div className="space-y-2 max-h-40 overflow-y-auto">
              {comments.map((comm, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 rounded-xl text-xs text-slate-700">
                  {comm}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="أضف تعليقاً أو مقترحاً..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none"
              />
              <button
                onClick={addComment}
                className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
