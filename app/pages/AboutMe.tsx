"use client";

import Image from "next/image";

function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-1/3 top-1/2 h-[140vh] w-[140vh] -translate-y-1/2 rounded-full opacity-20 sm:opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(220,38,38,0.40), rgba(239,68,68,0.28) 50%, transparent 75%)",
        }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] sm:opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dashedLinesS10" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashedLinesS10)" />
      </svg>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-neutral-100 py-8 sm:py-20 px-6">
      {/* Background gradientes com opacidade responsiva */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-100"
        style={{
          background: "radial-gradient(1200px 600px at 10% 10%, rgba(220,38,38,0.25), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(239,68,68,0.18), transparent 60%), radial-gradient(800px 500px at 50% 85%, rgba(220,38,38,0.18), transparent 60%)",
        }}
      />
      <PatternBG />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Foto redonda */}
        <div className="flex justify-center mb-4 sm:mb-8">
          <div className="relative">
            <Image
              src="/CP.jpeg"
              alt="João Herker"
              width={384}
              height={384}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-t-2 border-b-2 border-red-600 shadow-xl animate-float"
              style={{ objectPosition: 'center 12%' }}
            />
          </div>
        </div>

        {/* Texto */}
        <p className="text-base sm:text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-12">
        Caio Padeiro, especialista em nutrição esportiva e performance atlética, comprometido com a busca pela excelência.
        </p>
        <p 
          className="text-base sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-12 font-semibold"
          style={{
            background: "linear-gradient(135deg, #dc2626 0%, #ef4444 20%, #fca5a5 40%, #dc2626 50%, #b91c1c 60%, #dc2626 80%, #991b1b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.4), 0 2px 4px rgba(0, 0, 0, 0.5)",
            filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.8))",
            backgroundSize: "200% 200%",
            animation: "shimmer 3s ease-in-out infinite"
          }}
        >
        Não te falta genética, e sim método.
        </p>
        

        {/* Título Links */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white text-center">
          Links que você pode acessar!
        </h2>
      </div>

      {/* divisor minimalista para separar a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
    </section>
  );
}

