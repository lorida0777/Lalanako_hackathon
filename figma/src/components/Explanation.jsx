import { TabsContent } from '../app/components/ui/tabs';
import { CardContent } from '../app/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function Explanation({ article }) {
  if (!article) {
    return (
      <TabsContent value="simple" className="mt-0">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <p className="text-slate-500 italic">Sélectionnez un article pour afficher son explication.</p>
          </div>
        </CardContent>
      </TabsContent>
    );
  }

  return (
    <TabsContent value="simple" className="mt-0">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-indigo-900 mb-2">
                Explication simple
              </h4>
              <p className="text-slate-700 leading-relaxed">
                {article.explication}
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-4 mt-4">
            <p className="text-sm text-slate-500 italic">
              Cette explication est fournie à titre informatif uniquement et ne constitue pas un conseil juridique.
            </p>
          </div>
        </div>
      </CardContent>
    </TabsContent>
  );
}
