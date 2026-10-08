import { Lesson, TrainingQuestion, GlossaryTerm, SkillItem } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "الدرس الأول: العمل مع المستندات عبر الإنترنت",
    subtitle: "OneDrive & Google Drive, Office Online & G Suite",
    description: "تعلم كيفية التعامل مع الملفات عبر الإنترنت، التخزين السحابي، إنشاء مستندات وورد وجوجل دوس، منح صلاحيات التعديل والعرض، والتعاون المتزامن.",
    pageRange: "الصفحات 71 - 78",
    iconName: "FileText",
    toolsUsed: ["Microsoft OneDrive", "Microsoft Office Online", "Google Drive", "Google Docs / Sheets / Slides"],
    learningObjectives: [
      "إنشاء المستندات وحفظها مباشرة سحابياً.",
      "تحرير مستند مع أشخاص آخرين بشكل متزامن عبر الإنترنت.",
      "استخدام مكالمات الهاتف أو الفيديو للتعاون مع أشخاص آخرين عبر الإنترنت."
    ],
    historicalNote: {
      title: "لمحة تاريخية: الحوسبة السحابية",
      text: "يعود مفهوم الحوسبة السحابية إلى الخمسينات من القرن الماضي، فقد تم استخدام أجهزة الحاسب المركزية لمعالجة البيانات التي كان يتم الوصول إليها عبر أجهزة الحاسب الطرفية التي تسمى الطرفيات البكماء (dumb terminals)."
    }
  },
  {
    id: 2,
    title: "الدرس الثاني: الاجتماعات عبر الإنترنت",
    subtitle: "Microsoft Teams, Cisco WebEx, Zoom",
    description: "محاكاة غرفة اجتماعات افتراضية، جدولة المواعيد في التقويم، دعوة المشاركين عبر البريد الافتراضي، التحكم في الصوت والكاميرا، مشاركة الشاشة، وخلفيات الضبابية.",
    pageRange: "الصفحات 79 - 91",
    iconName: "Video",
    toolsUsed: ["Microsoft Teams", "Cisco WebEx", "Zoom", "Windows Calendar"],
    learningObjectives: [
      "عقد والتحكم في اجتماعات الفيديو عبر الإنترنت.",
      "جدولة اجتماعات مستقبلية عبر التقويم وإرسال التذكيرات.",
      "مشاركة الشاشة، كتم/تفعيل الصوت، وإدارة المشاركين وغرف التشكيل (Breakout Rooms)."
    ],
    historicalNote: {
      title: "أمن الاجتماعات الافتراضية",
      text: "تتيح الأنظمة الحديثة تشفير محادثات الفيديو وحماية الخصوصية عبر كلمات مرور ورموز دخول فريدة لكل اجتماع."
    }
  },
  {
    id: 3,
    title: "الدرس الثالث: بث العرض التقديمي",
    subtitle: "Presenter View & PowerPoint Live in Teams",
    description: "تجربة وضع المقدم (Presenter View)، التحكم في انتقال الشرائح أثناء البث الحي، إدارة نافذة أسئلة الجمهور الافتراضي، واستخدام أدوات التأشير.",
    pageRange: "الصفحات 92 - 98",
    iconName: "Presentation",
    toolsUsed: ["Microsoft PowerPoint", "PowerPoint Live in Teams", "Presenter View"],
    learningObjectives: [
      "بث العروض التقديمية مباشرة عبر الإنترنت دون مغادرة التطبيق.",
      "استخدام وضع المقدم لمتابعة التوقيت والملاحظات الخاصة.",
      "التفاعل مع الجمهور ومناقشة الأسئلة أثناء العرض الحي."
    ]
  },
  {
    id: 4,
    title: "الدرس الرابع: إدارة الملاحظات",
    subtitle: "Microsoft OneNote Digital Notebook",
    description: "إنشاء دفاتر ملاحظات رقمية، تنظيم الأقسام والصفحات، السحب والإفلات للملاحظات، إضافة وسائط متعددة وتصنيفها باستخدام العلامات (Tags).",
    pageRange: "الصفحات 99 - 105",
    iconName: "BookOpen",
    toolsUsed: ["Microsoft OneNote", "OneDrive Cloud Storage"],
    learningObjectives: [
      "إنشاء دفاتر ملاحظات رقمية متعددة الأقسام والصفحات.",
      "تدوين وتنظيم النصوص والصور وتسجيلات الصوت والفيديو.",
      "استخدام محرك البحث القوي للعثور على المعلومات الفورية."
    ]
  },
  {
    id: 5,
    title: "الدرس الخامس: الخرائط الذهنية",
    subtitle: "Freeplane & Canva Mind Maps",
    description: "لوحة عمل تفاعلية لبناء خريطة ذهنية، سحب وإفلات العقد (Nodes)، تفريع الأفكار الأساسية والفرعية، ربطها بخطوط، تلوينها، وتصديرها كصورة.",
    pageRange: "الصفحات 106 - 114",
    iconName: "Network",
    toolsUsed: ["Freeplane", "Canva Mind Maps", "Canvas API"],
    learningObjectives: [
      "تمثيل المعلومات بصورة مرئية عبر الخرائط الذهنية.",
      "إنشاء العقد المركزية والفرعية والشقيقة وتعديل تسلسلها الهرمي.",
      "تنسيق وتصدير الخرائط الذهنية كملفات وصور."
    ]
  },
  {
    id: 6,
    title: "الدرس السادس: مشروع الوحدة (العمل الجماعي)",
    subtitle: "Sandbox: تخطيط مبادرة تطوعية وطنية برؤية 2030",
    description: "بيئة عمل شاملة تدمج المهارات السابقة: خريطة ذهنية لمبادرة وطنية، توثيق تفاصيلها في مستند تعاوني، جدولة اجتماع افتراضي، وعرض المشروع.",
    pageRange: "الصفحات 115 - 116",
    iconName: "Award",
    toolsUsed: ["جميع أدوات الوحدة (Drive, Teams, PowerPoint, OneNote, Mind Map)"],
    learningObjectives: [
      "دمج مهارات العمل عبر الإنترنت في مشروع عملي متكامل.",
      "التخطيط والتعاون الجماعي لتحقيق أهداف رؤية المملكة 2030."
    ]
  }
];

export const TRAINING_QUESTIONS: TrainingQuestion[] = [
  // Lesson 1 Trainings
  {
    id: 101,
    lessonId: 1,
    trainingNumber: 1,
    question: "تدريب 1: تحتاج إلى حساب لتتمكن من الوصول إلى ون درايف (OneDrive).",
    type: "true_false",
    correctAnswer: true,
    explanation: "صحيح، يتطلب استخدام ون درايف تسجيل الدخول بحساب مايكروسوفت."
  },
  {
    id: 102,
    lessonId: 1,
    trainingNumber: 1,
    question: "تدريب 1: يمكنك مشاركة ملف مايكروسوفت وورد فقط في ون درايف.",
    type: "true_false",
    correctAnswer: false,
    explanation: "خطأ، يمكنك مشاركة جميع أنواع الملفات (مستندات، صور، فيديوهات، مجلدات)."
  },
  {
    id: 103,
    lessonId: 1,
    trainingNumber: 2,
    question: "تدريب 2: صل كل تطبيق من تطبيقات أوفيس بتطبيق جي سويت المقابل له: [مايكروسوفت وورد] يقابلها:",
    type: "multiple_choice",
    options: ["Google Slides", "Google Docs", "Google Sheets"],
    correctAnswer: "Google Docs",
    explanation: "مايكروسوفت وورد (Word) يقابله محرر مستندات جوجل (Google Docs)."
  },
  {
    id: 104,
    lessonId: 1,
    trainingNumber: 2,
    question: "تدريب 2: [مايكروسوفت إكسل] يقابلها:",
    type: "multiple_choice",
    options: ["Google Sheets", "Google Docs", "Google Slides"],
    correctAnswer: "Google Sheets",
    explanation: "مايكروسوفت إكسل (Excel) يقابله محرر جداول البيانات جوجل شيتس (Google Sheets)."
  },

  // Lesson 2 Trainings
  {
    id: 201,
    lessonId: 2,
    trainingNumber: 1,
    question: "تدريب 1: عند استخدام برنامج تيمز للاجتماعات، ما هي الخطوة الأولى لبدء اجتماع جديد؟",
    type: "multiple_choice",
    options: ["الضغط على خيار الدردشة ثم اجتماع جديد (New Meeting)", "إغلاق المتصفح", "حذف حساب المستخدم"],
    correctAnswer: "الضغط على خيار الدردشة ثم اجتماع جديد (New Meeting)",
    explanation: "لبدء اجتماع جديد في تيمز تضغط على الدردشة ثم اجتماع جديد (New Meeting)."
  },
  {
    id: 202,
    lessonId: 2,
    trainingNumber: 2,
    question: "تدريب 2: صل الأيقونة بوظيفتها في زوم: [أيقونة الميكروفون المقطوع/المفعل]",
    type: "multiple_choice",
    options: ["إزالة كتم الميكروفون", "مشاركة سطح المكتب", "تقسيم الغرف الفرعية"],
    correctAnswer: "إزالة كتم الميكروفون",
    explanation: "أيقونة الميكروفون تتحكم في كتم وإزالة كتم الصوت."
  },

  // Lesson 3 Trainings
  {
    id: 301,
    lessonId: 3,
    trainingNumber: 1,
    question: "تدريب 1: من علامة تبويب [عرض الشرائح - Slide Show] في باوربوينت، لبدء البث عبر تيمز نضغط على:",
    type: "multiple_choice",
    options: ["Present in Teams (تقديم في تيمز)", "حفظ باسم", "إغلاق التطبيق"],
    correctAnswer: "Present in Teams (تقديم في تيمز)",
    explanation: "الخيار المخصص لبث العرض المباشر في اجتماع تيمز هو Present in Teams."
  },

  // Lesson 4 Trainings
  {
    id: 401,
    lessonId: 4,
    trainingNumber: 1,
    question: "تدريب 1: ما هو البرنامج الذي يعد بمثابة دفتر ملاحظات رقمي متكامل يوفر مكانًا واحدًا لجمع الملاحظات والمعلومات؟",
    type: "multiple_choice",
    options: ["Microsoft OneNote", "Microsoft Paint", "Windows Calculator"],
    correctAnswer: "Microsoft OneNote",
    explanation: "برنامج مايكروسوفت ون نوت (OneNote) مخصص لتدوين وتنظيم الملاحظات والبحث السريع."
  },

  // Lesson 5 Trainings
  {
    id: 501,
    lessonId: 5,
    trainingNumber: 1,
    question: "تدريب 1: في الخريطة الذهنية، بماذا تتمحور الفكرة المركزية عادةً؟",
    type: "multiple_choice",
    options: ["كلمة واحدة أو جزء من نص في المنتصف", "فقرة طويلة جداً في أسفل الصفحة", "قائمة أرقام متسلسلة"],
    correctAnswer: "كلمة واحدة أو جزء من نص في المنتصف",
    explanation: "تتمحور الخريطة الذهنية حول كلمة واحدة أو مفهوم مركزي في المنتصف تتفرع عنه العقد."
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  { en: "Online Application", ar: "تطبيقات عبر الإنترنت" },
  { en: "Online Meeting", ar: "اجتماع عبر الإنترنت" },
  { en: "Presentation", ar: "عرض تقديمي" },
  { en: "Real-time Collaboration", ar: "تعاون فوري" },
  { en: "Share", ar: "مشاركة" },
  { en: "Video Conference", ar: "اجتماع فيديو" },
  { en: "Web Apps", ar: "تطبيقات المواقع الإلكترونية" },
  { en: "Broadcasting", ar: "بث" },
  { en: "Cloud", ar: "سحابي" },
  { en: "Digital Notebook", ar: "دفتر رقمي" },
  { en: "Meeting Invitation", ar: "دعوة اجتماع" },
  { en: "Mind Map", ar: "خريطة ذهنية" },
  { en: "Node Hierarchy", ar: "هيكلية العقد" },
  { en: "Notes", ar: "ملاحظات" }
];

export const INITIAL_SKILLS: SkillItem[] = [
  { id: 1, title: "إنشاء المستندات وحفظها ومشاركتها وتحريرها عبر الإنترنت.", mastered: false },
  { id: 2, title: "تنفيذ اجتماع عبر الإنترنت باستخدام برامج مختلفة (تيمز، زوم، ويبيكس).", mastered: false },
  { id: 3, title: "تقديم عرض تقديمي عبر الإنترنت باستخدام برامج مختلفة.", mastered: false },
  { id: 4, title: "استخدام ون نوت لإنشاء ملف ملاحظات ومشاركته.", mastered: false },
  { id: 5, title: "إنشاء خريطة ذهنية باستخدام تطبيق فري بالين أو لوحة تفاعلية.", mastered: false }
];
