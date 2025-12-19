import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardFooter, CardContent } from '../components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import { Tabs as TabsUI, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ScrollArea } from '../components/ui/scroll-area';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import ArticleText from '../components/ArticleText';
import Explanation from '../components/Explanation';
import data from '../data/code_civil.json';

const CodeCivil = () => {
  const [activeTab, setActiveTab] = useState('original');
  const [selectedItem, setSelectedItem] = useState(null);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    
    const articles = [];
    if (data.parts && data.parts.length > 0) {
      data.parts.forEach((part, partIndex) => {
        if (part.chapters) {
          part.chapters.forEach((chapter, chapterIndex) => {
            if (chapter.articles) {
              chapter.articles.forEach((article, articleIndex) => {
                articles.push({
                  ...article,
                  id: `${partIndex}-${chapterIndex}-${articleIndex}`
                });
              });
            }
          });
        }
      });
    }
    setAllArticles(articles);
    
    
    if (articles.length > 0) {
      setSelectedItem(articles[0]);
    }
  }, []);

  const handleArticleSelect = (item) => {
    setSelectedItem(item);
    setActiveTab('original'); 
  };

  const handlePrevious = () => {
    if (!selectedItem) return;
    const currentIndex = allArticles.findIndex(a => a.id === selectedItem.id);
    if (currentIndex > 0) {
      setSelectedItem(allArticles[currentIndex - 1]);
      setActiveTab('original');
    }
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = allArticles.findIndex(a => a.id === selectedItem.id);
    if (currentIndex < allArticles.length - 1) {
      setSelectedItem(allArticles[currentIndex + 1]);
      setActiveTab('original');
    }
  };

  const currentIndex = selectedItem ? allArticles.findIndex(a => a.id === selectedItem.id) : -1;
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
                  <ScrollArea className="h-full p-6 pt-0">
                    <Sidebar data={data} onSelect={handleArticleSelect} />
                  </ScrollArea>
                </SheetContent>
              </Sheet>

              <Button 
                variant="ghost" 
                asChild
                className="text-sm text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
              >
                <Link to="/">Retour à l'accueil</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <style dangerouslySetInnerHTML={{
        __html: `
          aside::-webkit-scrollbar {
            width: 8px;
          }
          aside::-webkit-scrollbar-track {
            background: #f7fafc;
          }
          aside::-webkit-scrollbar-thumb {
            background: #cbd5e0;
            border-radius: 4px;
          }
          aside::-webkit-scrollbar-thumb:hover {
            background: #a0aec0;
          }
        `
      }} />

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside 
          className="fixed left-0 top-0 h-screen overflow-y-auto hidden lg:block w-80 border-r border-indigo-100 bg-white"
          role="complementary"
          aria-label="Navigation latérale"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e0 #f7fafc'
          }}
        >
          <div className="p-6">
            <Sidebar data={data} onSelect={handleArticleSelect} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80 p-4 sm:p-6 lg:p-8 pt-16 lg:pt-4" role="main">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="font-bold text-2xl sm:text-3xl text-red-700 mb-6 sm:mb-8">
              {data.title || 'Code Civil Malgache'}
            </h1>

{/* Tabs Card */}
            <Card className="overflow-hidden shadow-sm border-indigo-100">
              <TabsUI value={activeTab} onValueChange={setActiveTab} className="gap-0">
                <div className="border-b border-indigo-100 px-4 sm:px-6 pt-4 pb-2">
                  <TabsList className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg bg-indigo-50/60 p-1 text-indigo-700 shadow-inner">
                    <TabsTrigger 
                      value="original" 
                      className="flex-1 sm:flex-none inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-semibold transition-all duration-200
                                 border border-transparent
                                 data-[state=active]:bg-white data-[state=active]:text-indigo-800 data-[state=active]:border-indigo-300 data-[state=active]:shadow-md data-[state=active]:scale-105
                                 hover:bg-indigo-100 hover:text-indigo-900 hover:border-indigo-200"
                      aria-label="Afficher le texte original"
                    >
                      Texte Original
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="simple" 
                      className="flex-1 sm:flex-none inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-semibold transition-all duration-200
                                 border border-transparent
                                 data-[state=active]:bg-white data-[state=active]:text-indigo-800 data-[state=active]:border-indigo-300 data-[state=active]:shadow-md data-[state=active]:scale-105
                                 hover:bg-indigo-100 hover:text-indigo-900 hover:border-indigo-200"
                      aria-label="Afficher l'explication simple"
                    >
                      Explication Simple
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Article Text */}
                <TabsContent value="original" className="mt-0">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {selectedItem ? (
                        <div>
                          <h3 className="font-bold text-xl text-slate-900 mb-3">
                            {selectedItem.number}
                          </h3>
                          <ArticleText item={selectedItem} />
                        </div>
                      ) : (
                        <p className="text-slate-500 italic">Sélectionnez un article pour afficher son contenu.</p>
                      )}
                    </div>
                  </CardContent>
                </TabsContent>

                {/* Explanation */}
                <TabsContent value="simple" className="mt-0">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {selectedItem ? (
                        <Explanation text={selectedItem.text || selectedItem.expose} />
                      ) : (
                        <p className="text-slate-500 italic">Sélectionnez un article pour afficher son explication.</p>
                      )}
                    </div>
                  </CardContent>
                </TabsContent>
              </TabsUI>

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
};

export default CodeCivil;