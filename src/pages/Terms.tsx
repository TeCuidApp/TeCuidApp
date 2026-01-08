import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              {t.terms.title}
            </h1>
            <p className="text-muted-foreground">
              {t.terms.lastUpdate}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-soft">
              {t.terms.sections.map((section, index) => (
                <div key={index} className={index > 0 ? 'mt-8 pt-8 border-t border-border' : ''}>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
