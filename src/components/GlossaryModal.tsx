import React, { useState } from 'react';
import { X, Search, BookMarked } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/curriculumData';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredTerms = GLOSSARY_TERMS.filter(
    (item) =>
      item.ar.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold">مصطلحات الوحدة الثانية (صفحة 50)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <div className="relative">
            <Search className="absolute right-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="بحث عن مصطلح (عربي أو إنجليزي)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* List */}
        <div className="p-6 overflow-y-auto flex-1 divide-y divide-slate-100">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              لا توجد مصطلحات مطابقة للبحث
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredTerms.map((term, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <span className="text-xs font-semibold text-emerald-600 font-mono ltr text-left">
                    {term.en}
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-1">
                    {term.ar}
                  </span>
                </div>
              ))}
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
