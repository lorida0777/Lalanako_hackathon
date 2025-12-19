import { GraduationCap, Sparkles } from 'lucide-react';
import heroImage from 'figma:asset/7aee9cfc26250efafa9c5698226994e9efbaa911.png';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-indigo-600" />
          <span className="font-semibold text-xl">LALÀNAKO</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-900">Code Civil Malgache</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              LALÀNAKO
            </h1>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-slate-700">
                Le Code Civil Malgache, clair et vivant.
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => onNavigate('code')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-indigo-200"
            >
              <Sparkles className="w-5 h-5" />
              Accéder au Code Civil
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            {/* Geometric Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
            
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="LALÀNAKO - Code Civil Malgache" 
                className="w-full h-auto rounded-2xl scale-110"
              />
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
