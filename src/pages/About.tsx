import { Heart, Target, Eye, Shield, Lightbulb, Users, Accessibility } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const About = () => {
  const { t } = useLanguage();

  const valueIcons = [Shield, Lightbulb, Heart, Accessibility];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                {t.about.mission.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                {t.about.vision.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            {t.about.values.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.items.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            {t.about.subtitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
