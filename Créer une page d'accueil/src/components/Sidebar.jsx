import { ScrollArea } from '../app/components/ui/scroll-area';
import { Button } from '../app/components/ui/button';

export default function Sidebar({ codeCivilData, onArticleSelect, selectedArticleId }) {
  if (!codeCivilData || !codeCivilData.titles || codeCivilData.titles.length === 0) {
    return (
      <div className="p-6">
        <p className="text-sm text-slate-500">Chargement...</p>
      </div>
    );
  }

  const currentTitle = codeCivilData.titles[0];

  return (
    <div className="p-6">
      <h2 className="font-bold text-lg text-red-700 mb-6">
        {currentTitle.title}
      </h2>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <nav className="space-y-4 pr-4" role="navigation" aria-label="Navigation du Code Civil">
          {currentTitle.sections.map((section) => (
            <div key={section.id}>
              <h3 className="font-semibold text-sm text-slate-900 mb-2">
                {section.title}
              </h3>
              <ul className="space-y-1 ml-4" role="list">
                {section.articles.map((article) => (
                  <li key={article.id}>
                    <Button
                      variant="ghost"
                      onClick={() => onArticleSelect(article)}
                      className={`w-full justify-start text-sm px-3 py-1.5 h-auto font-normal ${
                        selectedArticleId === article.id
                          ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-700'
                          : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                      aria-label={`Aller à ${article.number}`}
                      aria-current={selectedArticleId === article.id ? 'page' : undefined}
                    >
                      {article.number}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
