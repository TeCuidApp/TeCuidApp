import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MapPin, Users, Phone, Bell, AlertTriangle, Map, Route, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import mascot from '@/assets/mascot.png';

const Index = () => {
  const { t, language } = useLanguage();

  const featureIcons = [AlertTriangle, Route, Map, Users, Phone, Bell];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                {t.hero.badge}
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {t.hero.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/about">
                    {t.hero.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" disabled>
                  {t.hero.downloadCta}
                </Button>
              </div>
            </div>

            {/* Hero Image - Mascot */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-110" />
                <img
                  src={mascot}
                  alt="TeCuidApp Mascot"
                  className="relative w-64 md:w-80 lg:w-96 animate-float drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.features.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual - App Preview Mock */}
            <div className="order-2 lg:order-1 relative flex justify-center">
              <div className="relative bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl p-6">
                <div className="bg-card rounded-2xl p-6 shadow-medium border border-border max-w-sm mx-auto">
                  {/* Phone mockup header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {language === 'es' ? 'Ubicación activada' : 'Location enabled'}
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-xs text-primary font-medium">
                        {language === 'es' ? 'Mapa de calor' : 'Heat map'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Map placeholder */}
                  <div className="aspect-[4/3] bg-secondary/50 rounded-xl mb-4 flex items-center justify-center">
                    <Map className="w-12 h-12 text-muted-foreground/30" />
                  </div>

                  {/* Quick actions */}
                  <div className="space-y-2">
                    {[
                      { icon: Route, label: language === 'es' ? 'Planificar ruta' : 'Plan route' },
                      { icon: Users, label: language === 'es' ? 'Usuarias cercanas' : 'Nearby users' },
                      { icon: Phone, label: language === 'es' ? 'SOS - Llamar 123' : 'SOS - Call 123' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === 'es' 
                  ? 'Seguridad colaborativa en tu bolsillo'
                  : 'Collaborative safety in your pocket'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'es'
                  ? 'TeCuidApp utiliza reportes de la comunidad para calcular rutas más seguras y mantenerte informada sobre incidentes en tu zona.'
                  : 'TeCuidApp uses community reports to calculate safer routes and keep you informed about incidents in your area.'}
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  language === 'es' ? 'Reportes verificados por la comunidad' : 'Community-verified reports',
                  language === 'es' ? 'Rutas con puntuación de seguridad' : 'Routes with safety scores',
                  language === 'es' ? 'Grupos de caminata en tiempo real' : 'Real-time walking groups',
                  language === 'es' ? 'Botón SOS siempre accesible' : 'Always accessible SOS button',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="gradient" size="lg" asChild>
                <Link to="/about">
                  {language === 'es' ? 'Conoce más' : 'Learn more'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src={mascot} alt="TeCuidApp" className="w-20 h-20 drop-shadow-lg" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Button variant="secondary" size="lg" disabled className="shadow-medium">
            {t.cta.button}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
