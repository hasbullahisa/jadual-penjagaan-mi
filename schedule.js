// schedule.js
// Timezone note: We'll compute "now" using Malaysia time via Intl API.

window.SCHEDULE = {
  title: "Jadual Penjagaan Mi (Wad Hospital Jerantut)",
  timezone: "Asia/Kuala_Lumpur",
  windowStart: "2025-12-28T20:00:00",
  windowEnd: "2026-01-03T20:00:00",
  slots: [
    // Night shifts (Bibik Yuni)
    { start: "2025-12-28T20:00:00", end: "2025-12-29T08:00:00", person: "Bibik Yuni", label: "Malam" },
    { start: "2025-12-29T20:00:00", end: "2025-12-30T08:00:00", person: "Bibik Yuni", label: "Malam" },
    { start: "2025-12-30T20:00:00", end: "2025-12-31T08:00:00", person: "Bibik Yuni", label: "Malam" },
    { start: "2025-12-31T20:00:00", end: "2026-01-01T08:00:00", person: "Bibik Yuni", label: "Malam" },
    { start: "2025-12-31T20:00:00", end: "2026-01-01T08:00:00", person: "Bibik Yuni", label: "Malam" },

    // Morning shifts (Kak Jah)
    { start: "2025-12-29T08:00:00", end: "2025-12-29T14:00:00", person: "Kak Jah", label: "Pagi" },
    { start: "2025-12-30T08:00:00", end: "2025-12-30T14:00:00", person: "Along", label: "Pagi" },
    { start: "2025-12-31T08:00:00", end: "2025-12-31T14:00:00", person: "Along", label: "Pagi" },
    { start: "2026-01-01T08:00:00", end: "2026-01-01T14:00:00", person: "Along", label: "Pagi" },

    // Afternoon shifts (Along)
    { start: "2025-12-29T14:00:00", end: "2025-12-29T20:00:00", person: "Along", label: "Petang" },
    { start: "2025-12-30T14:00:00", end: "2025-12-30T20:00:00", person: "Kak Jah", label: "Petang" },
    { start: "2025-12-31T14:00:00", end: "2025-12-31T20:00:00", person: "Kak Jah", label: "Petang" },
  ],
  backup: "Kak Cik (On-call / backup, Logistik, ikut kemampuan)"
};
