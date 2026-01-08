import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Bell, Heart, Smartphone, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import heroIllustration from '@/assets/hero-illustration.png';

const Index = () => {
  const { t, language } = useLanguage();

  const features = language === 'es' ? [
    {
      icon: Shield,
      title: 'Protección Personal',
      description: 'Herramientas para tu seguridad y la de tus seres queridos.',
    },
    {
      icon: Bell,
      title: 'Alertas Inteligentes',
      description: 'Notificaciones oportunas para mantenerte informado.',
    },
    {
      icon: Heart,
      title: 'Cuidado Integral',
      description: 'Recursos para tu bienestar físico y emocional.',
    },
    {
      icon: Smartphone,
      title: 'Fácil de Usar',
      description: 'Interfaz intuitiva diseñada para todos.',
    },
  ] : [
    {
      icon: Shield,
      title: 'Personal Protection',
      description: 'Tools for your safety and that of your loved ones.',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Timely notifications to keep you informed.',
    },
    {
      icon: Heart,
      title: 'Comprehensive Care',
      description: 'Resources for your physical and emotional wellbeing.',
    },
    {
      icon: Smartphone,
      title: 'Easy to Use',
      description: 'Intuitive interface designed for everyone.',
    },
  ];

  const benefits = language === 'es' ? [
    'Seguimiento de salud personalizado',
    'Alertas de emergencia instantáneas',
    'Conexión con servicios de apoyo',
    'Recursos de bienestar 24/7',
    'Protección de datos garantizada',
  ] : [
    'Personalized health tracking',
    'Instant emergency alerts',
    'Connection with support services',
    '24/7 wellness resources',
    'Guaranteed data protection',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                {language === 'es' ? 'Tu compañero de bienestar' : 'Your wellness companion'}
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                {t.hero.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/about">
                    {t.hero.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  {t.hero.downloadCta}
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src={heroIllustration}
                  alt="TeCuidApp"
                  className="relative w-80 md:w-96 lg:w-[450px] animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'es' ? '¿Por qué elegir TeCuidApp?' : 'Why choose TeCuidApp?'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Diseñada con amor para cuidar lo que más importa: tu bienestar y el de tu familia.'
                : 'Designed with love to care for what matters most: your wellbeing and that of your family.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === 'es' 
                  ? 'Todo lo que necesitas en una sola app'
                  : 'Everything you need in one app'}
              </h2>
              <p className="text-muted-foreground mb-8">
                {language === 'es'
                  ? 'TeCuidApp integra las herramientas esenciales para tu cuidado personal, cumpliendo con los más altos estándares de privacidad y seguridad.'
                  : 'TeCuidApp integrates essential tools for your personal care, meeting the highest standards of privacy and security.'}
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/about">
                    {language === 'es' ? 'Conocer Más' : 'Learn More'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center">
              <div className="relative bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl p-8">
                <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">TC</span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">TeCuidApp</h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'es' ? 'Tu bienestar importa' : 'Your wellbeing matters'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/10" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2.5 bg-muted rounded-full w-3/4" />
                          <div className="h-2 bg-muted/50 rounded-full w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {language === 'es' 
              ? '¿Listo para cuidar de ti?'
              : 'Ready to take care of yourself?'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {language === 'es'
              ? 'Descarga TeCuidApp hoy y comienza tu camino hacia un bienestar integral.'
              : 'Download TeCuidApp today and start your journey towards comprehensive wellbeing.'}
          </p>
          <Button variant="accent" size="lg">
            {t.hero.downloadCta}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
