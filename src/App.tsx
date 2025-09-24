import React, { useState } from "react";
import { Play, Plus, Info, Check, Volume2, VolumeX, ChevronRight } from "lucide-react";

/**
 * Netflix-style hero page for the Jarvis Danao poster.
 *
 * HOW TO USE YOUR PHOTO:
 * 1) Replace POSTER_URL below with a hosted URL of the exact image you shared.
 *    (Google Drive public link, Imgur, Cloudinary, or your CDN.)
 * 2) Optional: tweak the metadata/tags/episode list in the config.
 */

const POSTER_URL =
  "https://github.com/crisaroa/netflix-series/blob/98064eae94e4aa4c6fcefdebbc7da2e105fc434d/src/assets/sir-jarvis.png?raw=true"; // TODO: paste your hosted photo URL here

const CONFIG = {
  title: "Jarvis Danao",
  tagline: "Waiting for his leading lady… could it be you?",
  maturity: "13+",
  year: "2025",
  duration: "1h 47m",
  genres: ["Romance", "Drama", "Mockumentary"],
  cast: ["Jarvis Danao", "Green Polo", "The Bouquet"],
  creators: ["Team DAP"],
  badges: ["Top 10 in PH", "New"],
  episodes: [
    {
      id: 1,
      title: "Ep. 01 — Green Polo",
      desc: "A mysterious bouquet appears. Casting rumors swirl as Direk Jarvs prepares his most personal audition.",
      length: "47m",
    },
    {
      id: 2,
      title: "Ep. 02 — The Bouquet Confession",
      desc: "An unexpected DM lands. The team debates ‘seductive’ vs ‘yearner.’",
      length: "43m",
    },
    {
      id: 3,
      title: "Ep. 03 — Scene 1, Take Heart",
      desc: "A poster drop ignites the timeline. Will the leading lady reply?",
      length: "45m",
    },
  ],
  themes: {
    Seductive: {
      logline: "Say ‘action’—the rest follows.",
      tags: ["Rated Kilig", "Cinematic", "Crisp Bokeh"],
    },
    Yearner: {
      logline: "Someday, same bouquet, right girl.",
      tags: ["Slow Burn", "Wholesome", "Hopeful"],
    },
  },
};

export default function App() {
  const [muted, setMuted] = useState(true);
  const [theme, setTheme] = useState<keyof typeof CONFIG.themes>("Seductive");

  const themeData = CONFIG.themes[theme];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* HERO */}
      <section className="relative h-[78vh] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-110"
          style={{
            backgroundImage: `url(${POSTER_URL})`,
            filter: "blur(12px) saturate(110%)",
          }}
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        {/* Foreground content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="max-w-2xl">
              {/* Title + badges */}
              <div className="flex items-center gap-3 mb-4">
                {CONFIG.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide border border-white/15"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none drop-shadow-xl">
                {CONFIG.title}
              </h1>
              <p className="mt-3 text-xl text-white/90 italic">{CONFIG.tagline}</p>
              <p className="mt-2 text-sm text-white/70">
                {CONFIG.year} • {CONFIG.duration} • {CONFIG.maturity}
              </p>

              {/* Theme switcher */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <label className="text-sm text-white/80">Theme</label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as any)}
                  className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  {Object.keys(CONFIG.themes).map((k) => (
                    <option value={k} key={k}>
                      {k}
                    </option>
                  ))}
                </select>
                <div className="text-sm text-white/80">{themeData.logline}</div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white text-black font-semibold px-6 py-3 shadow-lg hover:opacity-90 transition">
                  <Play size={18} /> Play
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl bg-white/15 font-semibold px-6 py-3 border border-white/20 hover:bg-white/20 transition">
                  <Plus size={18} /> My List
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl bg-white/15 font-semibold px-6 py-3 border border-white/20 hover:bg-white/20 transition">
                  <Info size={18} /> Details
                </button>
                <button
                  onClick={() => setMuted((m) => !m)}
                  className="ml-auto inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 border border-white/20 hover:bg-white/20 transition"
                >
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  <span className="text-sm">{muted ? "Muted" : "Sound On"}</span>
                </button>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[...CONFIG.genres, ...themeData.tags].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Credits */}
              <div className="mt-6 text-sm text-white/80 space-y-1">
                <div>
                  Cast: <span className="text-white/90">{CONFIG.cast.join(", ")}</span>
                </div>
                <div>
                  Creators: <span className="text-white/90">{CONFIG.creators.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Poster card on the right */}
            <div className="hidden lg:block justify-self-end self-center">
              <div className="relative w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15">
                <img
                  src={POSTER_URL}
                  alt="Jarvis Danao Poster"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <div className="text-lg font-semibold">{CONFIG.title}</div>
                  <div className="text-sm text-white/80">{CONFIG.tagline}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EPISODES */}
      <section className="container mx-auto px-6 lg:px-12 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Episodes</h2>
          <button className="inline-flex items-center gap-1 text-white/80 hover:text-white">
            View all <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CONFIG.episodes.map((ep) => (
            <article
              key={ep.id}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={POSTER_URL}
                  alt={ep.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <div className="text-sm text-white/90">{ep.length}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold">{ep.title}</div>
                <p className="mt-1 text-sm text-white/80 leading-relaxed">{ep.desc}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300/90">
                  <Check size={16} /> Available to watch
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container mx-auto px-6 lg:px-12 pb-16 text-sm text-white/60">
        <hr className="border-white/10 mb-6" />
        <div className="flex flex-wrap gap-6">
          <div>© {new Date().getFullYear()} DAP Brands</div>
          <div className="opacity-75">This is a fan-made Netflix-style mock page for internal fun.</div>
        </div>
      </footer>
    </div>
  );
}
