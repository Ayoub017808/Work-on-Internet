import React, { useState } from 'react';
import { Network, Plus, Download, Palette, Sparkles, RefreshCw } from 'lucide-react';

interface MindNode {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  parentId?: string;
}

export const MindMapSimulation: React.FC = () => {
  const [nodes, setNodes] = useState<MindNode[]>([
    { id: "root", label: "مصادر الطاقة المتجددة", x: 350, y: 200, color: "bg-emerald-600 text-white" },
    { id: "1", label: "الطاقة الشمسية", x: 150, y: 100, color: "bg-amber-500 text-white", parentId: "root" },
    { id: "2", label: "طاقة الرياح", x: 550, y: 100, color: "bg-blue-500 text-white", parentId: "root" },
    { id: "3", label: "الطاقة الكهرومائية", x: 350, y: 340, color: "bg-teal-600 text-white", parentId: "root" },
  ]);

  const [newNodeLabel, setNewNodeLabel] = useState("");
  const [selectedParentId, setSelectedParentId] = useState("root");

  const addNode = () => {
    if (newNodeLabel.trim()) {
      const parent = nodes.find((n) => n.id === selectedParentId) || nodes[0];
      const newNode: MindNode = {
        id: Date.now().toString(),
        label: newNodeLabel.trim(),
        x: parent.x + (Math.random() * 100 - 50),
        y: parent.y + 100,
        color: "bg-slate-800 text-white",
        parentId: parent.id
      };
      setNodes([...nodes, newNode]);
      setNewNodeLabel("");
    }
  };

  const exportMindMap = () => {
    alert("تم تصدير الخريطة الذهنية بنجاح كصورة (PNG) جاهزة للإرفاق في المشروع.");
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">محاكاة الخرائط الذهنية (Freeplane / Canva Mind Maps)</h3>
            <p className="text-xs text-slate-500">إنشاء العقد المركزية والفرعية، ربط الأفكار، تلوينها، وتصدير الخريطة كصورة.</p>
          </div>
        </div>

        <button
          onClick={exportMindMap}
          className="px-4 py-2.5 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors shadow-sm flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          تصدير كصورة (Export PNG)
        </button>
      </div>

      {/* Mind map canvas and controls */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Controls Sidebar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-teal-600" />
            إضافة عقدة جديدة (Add Node)
          </h4>

          <div className="space-y-3">
            <div>
              <label className="text-[11px] text-slate-500 font-semibold block mb-1">العقدة الأصلية (الأب):</label>
              <select
                value={selectedParentId}
                onChange={(e) => setSelectedParentId(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700"
              >
                {nodes.map((n) => (
                  <option key={n.id} value={n.id}>{n.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] text-slate-500 font-semibold block mb-1">نص العقدة الفرعية:</label>
              <input
                type="text"
                placeholder="أدخل فكرة فرعية..."
                value={newNodeLabel}
                onChange={(e) => setNewNodeLabel(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none"
              />
            </div>

            <button
              onClick={addNode}
              className="w-full py-2.5 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              إضافة العقدة وتفريدها
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
            💡 نصيحة: تتمحور الخريطة الذهنية حول فكرة مركزية واحدة في المنتصف وتتفرع منها العقد الفرعية والشقيقة.
          </div>
        </div>

        {/* Interactive Visual Canvas (3 cols) */}
        <div className="lg:col-span-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 relative h-[480px] flex items-center justify-center overflow-hidden">
          
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

          {/* Render nodes */}
          <div className="relative w-full h-full">
            {nodes.map((node) => (
              <div
                key={node.id}
                style={{ left: `${node.x}px`, top: `${node.y}px` }}
                className={`absolute px-4 py-2.5 rounded-2xl shadow-lg font-bold text-xs cursor-pointer transition-transform hover:scale-105 border border-white/20 ${node.color}`}
              >
                {node.label}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 bg-slate-800/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] text-slate-300">
            لوحة تفاعلية (Interactive Mind Map Canvas)
          </div>

        </div>

      </div>

    </div>
  );
};
