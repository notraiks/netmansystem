import React from 'react'
import './index.css'

export default function App() {
  const members = [
    { name: 'Raiken Lee Ladrera' },
    { name: 'Jeil Ian Ouano' },
    { name: 'Maurice Jude Fontanosa' }
  ]

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-6">
      <div className="w-full max-w-3xl bg-slate-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Network Management Midterm
        </h1>

        <h2 className="text-lg text-slate-300 text-center mb-8">
          Project Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {members.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-4 p-4 bg-slate-700/40 border border-slate-600/30 rounded-xl hover:bg-slate-700/60 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-slate-900 font-bold text-xl shadow-md">
                {getInitials(m.name)}
              </div>
              <div>
                <p className="text-white font-semibold">{m.name}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          · Matigas na Larawan edited
        </p>
      </div>
    </div>
  )
}

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}