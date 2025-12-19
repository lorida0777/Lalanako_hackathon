import { Tabs as TabsUI, TabsContent, TabsList, TabsTrigger } from '../app/components/ui/tabs';

export default function Tabs({ activeTab, onTabChange, children }) {
  return (
    <TabsUI 
      value={activeTab} 
      onValueChange={onTabChange}
      className="gap-0"
    >
      <div className="border-b border-indigo-100 px-4 sm:px-6 pt-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger 
            value="original" 
            className="flex-1 sm:flex-none transition-all duration-300 border border-gray-300 rounded-md"
            aria-label="Afficher le texte original"
          >
            Texte Original
          </TabsTrigger>
          <TabsTrigger 
            value="simple" 
            className="flex-1 sm:flex-none transition-all duration-300 border border-gray-300 rounded-md"
            aria-label="Afficher l'explication simple"
          >
            Explication Simple
          </TabsTrigger>
        </TabsList>
      </div>

      {children}
    </TabsUI>
  );
}
