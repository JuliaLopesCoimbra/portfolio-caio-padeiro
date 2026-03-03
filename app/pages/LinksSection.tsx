"use client";
import { FaYoutube, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LinksSection() {
  const [visibleItems, setVisibleItems] = useState({
    leftBlock: false,
    rightBlock: false,
    socialIcons: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setVisibleItems(prev => ({ ...prev, leftBlock: true })), 100);
    const timer2 = setTimeout(() => setVisibleItems(prev => ({ ...prev, rightBlock: true })), 300);
    const timer3 = setTimeout(() => setVisibleItems(prev => ({ ...prev, socialIcons: true })), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const linkAcademy = "https://chat.whatsapp.com/JbPTqVZOYifHVdIYwdMGHi?mode=gi_t";
  const linkDireita = "https://tally.so/r/0QQQJj";
  const linkYouTube = "https://www.youtube.com/@CaioPadeiro";
  const linkInstagram = "https://www.instagram.com/caiopadeiroyt/";
  const linkTikTok = "https://www.tiktok.com/@caiopadeiroyt";
  const linkWhatsApp = "https://wa.me/5516996931234?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.";

  return (
    <section className="relative bg-black text-neutral-100 pt-8 sm:pt-16 pb-40 sm:pb-64 px-6 overflow-hidden" style={{
      background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
    }}>
      {/* Brilho superior */}
      <div aria-hidden className="absolute inset-0 opacity-20 pointer-events-none" style={{
          background: "radial-gradient(circle at 40% 30%, rgba(220,38,38,0.12), transparent 60%)",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Bloco Esquerda - JC Academy / Grupo VIP WhatsApp */}
          <a
            href={linkAcademy}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-row items-center justify-between gap-3 sm:gap-6 rounded-2xl border border-red-600 p-4 sm:p-8 min-h-40 sm:min-h-48 shadow-2xl transition hover:scale-[1.01] overflow-hidden fade-in-up ${visibleItems.leftBlock ? "visible" : ""}`}
            style={{
              backgroundImage: 'url(https://blog.casadofitness.com.br/wp-content/uploads/2023/12/311.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div className="flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center transition group-hover:scale-110 flex-shrink-0 relative z-10" >
              <Image src="/logo_academy.png" alt="Logo Academy" width={192} height={192} className="h-full w-full object-contain"  />
            </div>
            <div className="flex flex-col items-end gap-2 relative z-10">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-right leading-tight">
                JC<br />ACADEMY
              </span>
              <span className="bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base md:text-base font-semibold uppercase inline-block transition group-hover:bg-red-500">
                Saiba mais
              </span>
            </div>
            {/* Overlay na parte inferior com "GRUPO VIP" */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-50 pointer-events-none flex items-center justify-center py-2 sm:py-3">
              <span className="text-white text-sm sm:text-base md:text-lg font-semibold uppercase opacity-90">
                GRUPO VIP
              </span>
            </div>
          </a>

          {/* Bloco Direita - BORDAS RESTAURADAS */}
          <a
            href={linkDireita}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-row items-center justify-start gap-4 sm:gap-6 rounded-2xl border border-red-600 p-4 sm:p-8 min-h-40 sm:min-h-48 shadow-2xl transition hover:scale-[1.01] overflow-hidden fade-in-up ${visibleItems.rightBlock ? "visible" : ""}`}
            style={{
              backgroundImage: 'url(https://blog.supertechfitness.com.br/wp-content/webp-express/webp-images/uploads/2023/07/equipamentos-nacionais-academia-1024x683.jpeg.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div  className="flex flex-col h-36 w-36 sm:h-64 sm:w-64 items-center justify-center transition group-hover:scale-110 flex-shrink-0 relative z-10 gap-2" >
              <Image  src="/logo.png" alt="Logo" width={220} height={160} className="object-contain w-32 h-auto sm:w-full" />
            
            </div>
            
            <div  className="flex flex-col items-end gap-1.5 sm:gap-2 relative z-10 flex-1 min-w-0 ml-auto min-w-[120px]" >
              <span  className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-right leading-tight">
               TIME<br />PADEIRO
              </span>
              <span className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase text-right leading-tight">
              FORMULÁRIO 
              </span>
              
              <button className="bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold uppercase transition hover:bg-red-500">
                Saiba mais
              </button>
            </div>
          </a>
        </div>

        {/* Ícones - Subi eles com mt-24 e mb-12 para dar espaço da sombra */}
        <div className={`relative z-20 flex justify-center items-center gap-6 sm:gap-10 mt-24 sm:mt-32  fade-in-up ${visibleItems.socialIcons ? "visible" : ""}`}>
          <a href={linkYouTube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition hover:scale-110">
            <FaYoutube className="text-5xl sm:text-6xl" />
          </a>
          <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition hover:scale-110">
            <FaInstagram className="text-5xl sm:text-6xl" />
          </a>
          <a href={linkTikTok} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition hover:scale-110">
            <FaTiktok className="text-5xl sm:text-6xl" />
          </a>
          {/* <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition hover:scale-110">
            <FaWhatsapp className="text-5xl sm:text-6xl" />
          </a> */}
        </div>
      </div>
      
      {/* Sombra de Rodapé - Reduzi para h-24 para não alcançar os ícones */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 100% at center bottom, rgba(220,38,38,0.3) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}

