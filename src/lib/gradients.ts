export const GRADIENT_PRESETS = [
  { label: "에메랄드 → 시안", value: "from-emerald-400 to-cyan-500" },
  { label: "에메랄드 → 틸", value: "from-emerald-500 to-teal-600" },
  { label: "틸 → 에메랄드", value: "from-teal-400 to-emerald-600" },
  { label: "인디고 → 바이올렛", value: "from-indigo-500 to-violet-600" },
  { label: "바이올렛 → 인디고", value: "from-violet-500 to-indigo-600" },
  { label: "블루 → 에메랄드", value: "from-blue-400 to-emerald-500" },
  { label: "시안 → 에메랄드", value: "from-cyan-400 to-emerald-500" },
  { label: "에메랄드 → 인디고", value: "from-emerald-500 to-indigo-600" },
  { label: "블루 → 바이올렛", value: "from-blue-500 to-violet-600" },
  { label: "슬레이트 → 에메랄드", value: "from-slate-700 to-emerald-600" },
] as const;

export type GradientValue = (typeof GRADIENT_PRESETS)[number]["value"];
