import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, Monitor, Users, Calendar, Settings, PhoneOff, MessageSquare, Shield, Smile, Sparkles } from 'lucide-react';

export const MeetingSimulation: React.FC = () => {
  const [inMeeting, setInMeeting] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [bgBlur, setBgBlur] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState("مناقشة مشروع اليوم الوطني السعودي");

  // Scheduling state
  const [meetDate, setMeetDate] = useState("2026-09-23");
  const [meetTime, setMeetTime] = useState("10:00");

  const participants = [
    { name: "أحمد الغامدي (المضيف)", role: "Host", avatar: "👤" },
    { name: "سارة القحطاني", role: "Attendee", avatar: "👩‍💻" },
    { name: "فيصل الشمري", role: "Attendee", avatar: "👨‍💻" },
    { name: "لمى الدوسري", role: "Attendee", avatar: "👩‍🎓" },
  ];

  return (
    <div className="space-y-6">
      
      {/* Simulation Header / Schedule box */}
      {!inMeeting ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">محاكاة الاجتماعات عبر الإنترنت (Microsoft Teams / Zoom)</h3>
                <p className="text-xs text-slate-500">قم بجدولة اجتماع أو ابدأ اجتماعاً فورياً للتعاون مع زملائك.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            
            {/* Instant Meeting */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold text-slate-900">بدء اجتماع فوري الآن (Instant Meeting)</h4>
              <input
                type="text"
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none"
              />
              <button
                onClick={() => setInMeeting(true)}
                className="w-full py-2.5 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" />
                الانضمام إلى الاجتماع (Join Now)
              </button>
            </div>

            {/* Schedule Future Meeting */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900">جدولة اجتماع مستقبل في التقويم (Calendar)</h4>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={meetDate}
                  onChange={(e) => setMeetDate(e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                />
                <input
                  type="time"
                  value={meetTime}
                  onChange={(e) => setMeetTime(e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                />
              </div>
              <button
                onClick={() => {
                  setScheduled(true);
                  alert(`تمت جدولة الاجتماع بنجاح في تقويم ويندوز (Windows Calendar) ليوم ${meetDate} الساعة ${meetTime}`);
                }}
                className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                حفظ وجدولة الاجتماع (Save)
              </button>
              {scheduled && (
                <p className="text-[11px] text-emerald-600 font-bold text-center">تمت الجدولة بنجاح وتم إرسال التذكيرات!</p>
              )}
            </div>

          </div>
        </div>
      ) : (
        /* Active Virtual Meeting Room Simulation */
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[550px]">
          
          {/* Top Bar inside meeting */}
          <div className="px-6 py-3 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-bold">{meetingTitle}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span>00:15:32</span>
              <span className="bg-slate-700 px-2 py-1 rounded font-mono">ID: 864 7292 2925</span>
            </div>
          </div>

          {/* Main Video Stage */}
          <div className="flex-1 relative p-6 flex items-center justify-center bg-slate-950">
            {screenSharing ? (
              <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center">
                <Monitor className="w-16 h-16 text-purple-400 mb-3 animate-pulse" />
                <h4 className="text-white font-bold text-sm">أنت تقوم بمشاركة شاشتك الآن (Screen Sharing)</h4>
                <p className="text-slate-400 text-xs mt-1">يراك جميع المشاركين في الغرفة الافتراضية.</p>
                <button
                  onClick={() => setScreenSharing(false)}
                  className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700"
                >
                  إيقاف المشاركة (Stop Sharing)
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 w-full max-w-3xl h-full">
                {participants.map((p, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl border border-slate-800 bg-slate-900 flex flex-col items-center justify-center overflow-hidden ${
                      bgBlur ? 'backdrop-blur-md bg-white/5' : ''
                    }`}
                  >
                    <div className="text-4xl mb-2">{p.avatar}</div>
                    <span className="text-xs font-bold text-white">{p.name}</span>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 rounded text-[10px] text-slate-300">
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Meeting Controls Bar */}
          <div className="px-6 py-4 bg-slate-800 flex items-center justify-center gap-3">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-3 rounded-xl transition-colors ${micOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-rose-600 text-white'}`}
              title="كتم/إلغاء كتم الصوت"
            >
              {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setCamOn(!camOn)}
              className={`p-3 rounded-xl transition-colors ${camOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-rose-600 text-white'}`}
              title="تشغيل/إيقاف الكاميرا"
            >
              {camOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setBgBlur(!bgBlur)}
              className={`p-3 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-bold ${bgBlur ? 'bg-purple-600 text-white' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
              title="تأثير طمس الخلفية (Blur)"
            >
              <Sparkles className="w-4 h-4" />
              <span>طمس الخلفية</span>
            </button>

            <button
              onClick={() => setScreenSharing(!screenSharing)}
              className={`p-3 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-bold ${screenSharing ? 'bg-blue-600 text-white' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
              title="مشاركة الشاشة"
            >
              <Monitor className="w-4 h-4" />
              <span>مشاركة الشاشة</span>
            </button>

            <button
              onClick={() => setInMeeting(false)}
              className="px-5 py-3 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700 transition-colors shadow-md flex items-center gap-2"
            >
              <PhoneOff className="w-4 h-4" />
              مغادرة الاجتماع (Leave)
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
