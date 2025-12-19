import { useState, useEffect } from 'react';
import { GraduationCap, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../app/components/ui/button';
import { Card, CardFooter } from '../app/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../app/components/ui/sheet';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import ArticleText from '../components/ArticleText';
import Explanation from '../components/Explanation';
import codeCivilData from '../data/code_civil.json';

export default function CodeCivil({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('original');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    // Aplatir tous les articles pour faciliter la navigation
    const articles = [];
    if (codeCivilData.titles && codeCivilData.titles.length > 0) {
      codeCivilData.titles[0].sections.forEach(section => {
        section.articles.forEach(article => {
          articles.push(article);
        });
      });
    }
    setAllArticles(articles);
    
    // Sélectionner le premier article par défaut
    if (articles.length > 0) {
      setSelectedArticle(articles[0]);
    }
  }, []);

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
    setActiveTab('original'); // Revenir à l'onglet original lors de la sélection
  };

  const handlePrevious = () => {
    if (!selectedArticle) return;
    const currentIndex = allArticles.findIndex(a => a.id === selectedArticle.id);
    if (currentIndex > 0) {
      setSelectedArticle(allArticles[currentIndex - 1]);
      setActiveTab('original');
    }
  };

  const handleNext = () => {
    if (!selectedArticle) return;
    const currentIndex = allArticles.findIndex(a => a.id === selectedArticle.id);
    if (currentIndex < allArticles.length - 1) {
      setSelectedArticle(allArticles[currentIndex + 1]);
      setActiveTab('original');
    }
  };

  const currentIndex = selectedArticle ? allArticles.findIndex(a => a.id === selectedArticle.id) : -1;
  const isFirstArticle = currentIndex === 0;
  const isLastArticle = currentIndex === allArticles.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-indigo-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" aria-hidden="true" />
              <span className="font-semibold text-lg sm:text-xl text-slate-900">LALÀNAKO</span>
            </div>
            
            {/* Mobile Menu & Back Button */}
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 w-9 lg:hidden border bg-background text-foreground hover:bg-accent hover:text-accent-foreground">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Ouvrir le menu de navigation</span>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 sm:w-96 p-0">
                  <SheetHeader className="p-6 pb-0">
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <Sidebar 
                    codeCivilData={codeCivilData}
                    onArticleSelect={handleArticleSelect}
                    selectedArticleId={selectedArticle?.id}
                  />
                </SheetContent>
              </Sheet>

              <Button 
                variant="ghost" 
                onClick={() => onNavigate('home')}
                className="text-sm text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
              >
                Retour à l'accueil
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside 
          className="hidden lg:block w-80 border-r border-indigo-100 bg-white"
          role="complementary"
          aria-label="Navigation latérale"
        >
          <Sidebar 
            codeCivilData={codeCivilData}
            onArticleSelect={handleArticleSelect}
            selectedArticleId={selectedArticle?.id}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8" role="main">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="font-bold text-2xl sm:text-3xl text-red-700 mb-6 sm:mb-8">
              {codeCivilData.titles && codeCivilData.titles.length > 0 
                ? codeCivilData.titles[0].title 
                : 'Code Civil Malgache'}
            </h1>

            {/* Tabs Card */}
            <Card className="overflow-hidden shadow-sm border-indigo-100">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
                <ArticleText article={selectedArticle} />
                <Explanation article={selectedArticle} />
              </Tabs>

              <CardFooter className="flex-col sm:flex-row gap-4 border-t border-indigo-100 bg-slate-50">
                <Button 
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={isFirstArticle}
                  className="w-full sm:w-auto border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 disabled:opacity-50"
                  aria-label="Article précédent"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Précédent
                </Button>
                
                <div className="flex-1 text-center">
                  <p className="text-sm text-slate-600 italic">
                    "Ity dia fanazavana tsotra ihany. Tsy misolo vovava."
                  </p>
                </div>
                
                <Button 
                  onClick={handleNext}
                  disabled={isLastArticle}
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                  aria-label="Article suivant"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}