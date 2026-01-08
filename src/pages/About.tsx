import { Heart, Target, Eye, Shield, Lightbulb, Users, UserCheck, MapPin, Route, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import mascot from '@/assets/mascot.png';

const About = () => {
  const { t, language } = useLanguage();

  const valueIcons = [Heart, Lightbulb, Shield, Users];
  const stepIcons = [UserCheck, MapPin, Shield, Route];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img src={mascot} alt="TeCuidApp" className="w-24 h-24 drop-shadow-lg animate-float" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.about.title}
            </h1>
            <p className="text-lg text-primary font-medium mb-4">
              {t.about.tagline}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
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
                <Eye className="w-7 h-7 text-accent-foreground" />
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
      <section className="py-20 bg-gradient-soft">
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

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            {t.about.howItWorks.title}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Empezar a usar TeCuidApp es muy fácil. Sigue estos pasos y únete a la comunidad.'
              : 'Getting started with TeCuidApp is very easy. Follow these steps and join the community.'}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
                  )}
                  
                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-soft transition-shadow relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <img src={mascot} alt="TeCuidApp" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            {language === 'es' ? '¿Tienes preguntas?' : 'Have questions?'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'es' 
              ? 'Contáctanos en nuestras redes sociales o por correo electrónico'
              : 'Contact us on our social media or by email'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://instagram.com/tecuidapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <span className="font-medium text-foreground">@tecuidapp</span>
            </a>
            <a 
              href="mailto:contacto@tecuidapp.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <span className="font-medium text-foreground">contacto@tecuidapp.com</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
