/* ===================================================================
   Shared settings for index.html (guest RSVP) and admin.html (team)
   =================================================================== */

// 1) Paste your Firebase web app config here
//    Firebase console → Project settings → General → Your apps → Web app → "SDK setup and configuration" → Config
export const firebaseConfig = {
  apiKey: "AIzaSyAKhykkxHDp7dLoSs__HiWK7MTtFZG6eOM",
  authDomain: "marketoutlookjb.firebaseapp.com",
  projectId: "marketoutlookjb",
  storageBucket: "marketoutlookjb.firebasestorage.app",
  messagingSenderId: "564373655731",
  appId: "1:564373655731:web:ba22fbad6521a6e53960c6",
};

// 2) Event details (if you change branches or meals, update firestore.rules too)
export const EVENT = {
  name: "Market Outlook Talk – Johor",
  dateLabel: "Wednesday, 28 October 2026",
  venue: "DoubleTree by Hilton Johor Bahru"
};

export const BRANCHES = ["Johor Bahru", "Tebrau", "Taman Molek", "Kulai"];

export const MEALS = [
  "12-Hour Slow-Braised Beef Cheek",
  "Fillet of Seabass",
  "Stuffed Portobello Mushroom"
];

/* ---------------- helpers (no need to edit) ---------------- */
export const isConfigured = () => !Object.values(firebaseConfig).some(v => String(v).startsWith("PASTE"));

// One record per email: the record ID is a hash of the email address
export async function rsvpId(email) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(email).trim().toLowerCase()));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}
