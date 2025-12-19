import { TabsContent } from '../app/components/ui/tabs';
import { CardContent } from '../app/components/ui/card';

export default function ArticleText({ article }) {
  if (!article) {
    return (
      <TabsContent value="original" className="mt-0">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <p className="text-slate-500 italic">Sélectionnez un article pour afficher son contenu.</p>
          </div>
        </CardContent>
      </TabsContent>
    );
  }

  return (
    <TabsContent value="original" className="mt-0">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">
              {article.number}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {article.text}
            </p>
          </div>
        </div>
      </CardContent>
    </TabsContent>
  );
}
