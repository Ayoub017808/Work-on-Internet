import React, { useState } from 'react';
import { X, CheckSquare, CheckCircle2, Circle } from 'lucide-react';
import { INITIAL_SKILLS } from '../data/curriculumData';
import { SkillItem } from '../types';

interface SkillsChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillsChecklistModal: React.FC<SkillsChecklistModalProps> = ({ isOpen, onClose }) => {
  const [skills, setSkills] = useState<SkillItem[]>(INITIAL_SKILLS);

  if (!isOpen) return null;

  const toggleSkill = (id: number) => {
    setSkills(
      skills.map((s) => (s.id === id ? { ...s, mastered: !s.mastered } : s))
    );
  };

  const masteredCount = skills.filter((s) => s.mastered).length;
  const progressPercent = Math.round((masteredCount / skills.length) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold">جدول إتقان المهارات (صفحة 49)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-emerald-800">مستوى الإتقان العام</p>
            <p className="text-sm text-emerald-600 font-semibold">{masteredCount} من {skills.length} مهارات مكتسبة</p>
          </div>
          <div className="w-32 bg-emerald-200 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="space-y-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  skill.mastered
                    ? 'bg-emerald-50/50 border-emerald-300 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {skill.id}
                  </span>
                  <p className="text-sm font-semibold text-slate-800">
                    {skill.title}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 text-xs font-bold">
                  {skill.mastered ? (
                    <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4" />
                      أتقن
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <Circle className="w-4 h-4" />
                      لم يتقن
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs text-slate-500">انقر على أي مهارة لتحديث حالة الإتقان</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            حفظ وإغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
