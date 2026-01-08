export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotras',
      terms: 'Términos y Condiciones',
      privacy: 'Privacidad',
      download: 'Descargar App',
    },
    hero: {
      badge: 'Seguridad personal para mujeres',
      title: 'Tecnología para sentirte segura, conectada y acompañada',
      subtitle: 'TeCuidApp combina reportes colaborativos, rutas seguras, grupos de caminata y botón SOS en una sola experiencia diseñada para tu seguridad en la ciudad.',
      cta: 'Conoce Más',
      downloadCta: 'Próximamente',
    },
    features: {
      title: 'Funcionalidades principales',
      subtitle: 'Todo lo que necesitas para moverte segura por la ciudad',
      items: [
        {
          title: 'Reportes en tiempo real',
          description: 'Crea, verifica y explora incidentes geolocalizados: robos, acoso, zonas inseguras y más.',
        },
        {
          title: 'Rutas seguras',
          description: 'Planifica rutas con penalización de zonas peligrosas y puntuación de seguridad 0-100.',
        },
        {
          title: 'Mapa de calor',
          description: 'Visualiza zonas de riesgo con mapas de calor dinámicos generados desde índices de seguridad.',
        },
        {
          title: 'Grupos de caminata',
          description: 'Únete o crea grupos de caminata cercanos para moverte acompañada.',
        },
        {
          title: 'Botón SOS',
          description: 'Acceso rápido al número de emergencias 123 con widget de escritorio.',
        },
        {
          title: 'Contactos de emergencia',
          description: 'Gestiona tus contactos de confianza para alertas rápidas.',
        },
      ],
    },
    about: {
      title: 'Sobre Nosotras',
      subtitle: '¿Quiénes Somos?',
      description: 'TeCuidApp nace del compromiso de crear tecnología que empodere a las mujeres colombianas para moverse seguras por la ciudad. Desarrollada con pasión por un equipo que cree en la seguridad como derecho.',
      tagline: 'Tecnología para sentirte segura, conectada y acompañada',
      mission: {
        title: 'Nuestra Misión',
        description: 'Empoderar a las mujeres para que se muevan seguras por la ciudad, combinando tecnología colaborativa con herramientas de prevención y respuesta ante situaciones de riesgo.',
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser la aplicación de referencia en Colombia para la seguridad personal de mujeres, creando comunidades conectadas y espacios urbanos más seguros para todas.',
      },
      values: {
        title: 'Nuestros Valores',
        items: [
          { title: 'Sororidad', description: 'Creemos en el poder de las mujeres apoyándose mutuamente.' },
          { title: 'Innovación', description: 'Usamos tecnología de punta para resolver problemas reales.' },
          { title: 'Seguridad', description: 'Tu protección y privacidad son nuestra prioridad absoluta.' },
          { title: 'Comunidad', description: 'Juntas somos más fuertes y podemos crear cambio.' },
        ],
      },
      howItWorks: {
        title: '¿Cómo funciona?',
        steps: [
          { title: 'Regístrate', description: 'Crea tu cuenta con email o Google Sign-In de forma segura.' },
          { title: 'Explora el mapa', description: 'Visualiza reportes, zonas de riesgo y rutas seguras en tu ciudad.' },
          { title: 'Reporta y verifica', description: 'Contribuye con la comunidad reportando incidentes y verificando reportes.' },
          { title: 'Muévete segura', description: 'Usa rutas seguras, únete a grupos y ten el SOS siempre a la mano.' },
        ],
      },
    },
    terms: {
      title: 'Términos y Condiciones',
      lastUpdate: 'Última actualización: 8 de enero de 2026',
      sections: [
        {
          title: '1. Aceptación de los Términos',
          content: 'Al descargar, instalar o utilizar la aplicación TeCuidApp, usted acepta estar vinculada por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestra aplicación. Estos términos se rigen por las leyes de la República de Colombia, en particular la Ley 1480 de 2011 (Estatuto del Consumidor) y demás normas aplicables.',
        },
        {
          title: '2. Descripción del Servicio',
          content: 'TeCuidApp es una aplicación móvil de seguridad personal que proporciona: reportes de seguridad geolocalizados en tiempo real, planificación de rutas seguras con análisis de zonas de riesgo, mapas de calor de incidentes, grupos de caminata colaborativos, botón de emergencia SOS con acceso al 123, gestión de contactos de emergencia y notificaciones personalizables. La aplicación no sustituye los servicios de emergencia oficiales ni garantiza seguridad absoluta.',
        },
        {
          title: '3. Requisitos de Uso',
          content: 'Para utilizar TeCuidApp, debe: (a) ser mayor de 18 años o contar con autorización de un padre o tutor legal; (b) proporcionar información veraz y actualizada; (c) mantener la confidencialidad de sus credenciales de acceso; (d) no utilizar la aplicación para crear reportes falsos o malintencionados; (e) no utilizar la aplicación para fines ilegales o que pongan en riesgo a otras usuarias.',
        },
        {
          title: '4. Uso Responsable de Reportes',
          content: 'Al crear reportes de seguridad, usted se compromete a: proporcionar información veraz sobre incidentes; no crear reportes falsos que puedan generar pánico o desinformación; respetar la privacidad de terceros; no incluir información que identifique a víctimas sin su consentimiento. TeCuidApp se reserva el derecho de eliminar reportes que violen estas normas y suspender cuentas que incurran en uso indebido.',
        },
        {
          title: '5. Limitaciones del Servicio',
          content: 'TeCuidApp proporciona herramientas de apoyo para la seguridad personal pero: no garantiza la exactitud de todos los reportes de terceras usuarias; las rutas sugeridas son orientativas y pueden no reflejar condiciones en tiempo real; el servicio depende de conectividad a internet y GPS; el botón SOS requiere permisos de llamada y cobertura celular. En emergencias reales, siempre contacte directamente al 123 o servicios de emergencia.',
        },
        {
          title: '6. Propiedad Intelectual',
          content: 'Todos los derechos de propiedad intelectual sobre TeCuidApp, incluyendo pero no limitándose a marcas, logos (incluyendo la mascota característica), diseños, código fuente, algoritmos de cálculo de rutas y contenido, son propiedad exclusiva de TeCuidApp o sus licenciantes. Queda prohibida cualquier reproducción, modificación o distribución sin autorización expresa por escrito.',
        },
        {
          title: '7. Limitación de Responsabilidad',
          content: 'TeCuidApp proporciona la aplicación "tal cual" como herramienta de apoyo. En la máxima medida permitida por la legislación colombiana, no seremos responsables por: daños derivados de reportes inexactos de terceras usuarias; incidentes que ocurran a pesar del uso de rutas sugeridas; fallas técnicas, de conectividad o GPS; uso indebido de la aplicación por terceros. Las garantías legales establecidas en el Estatuto del Consumidor permanecen vigentes.',
        },
        {
          title: '8. Modificaciones',
          content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en la aplicación. El uso continuado de TeCuidApp después de cualquier modificación constituye su aceptación de los nuevos términos. Notificaremos cambios significativos a través de la aplicación.',
        },
        {
          title: '9. Ley Aplicable y Jurisdicción',
          content: 'Estos términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia. Cualquier disputa será sometida a los tribunales competentes de Colombia, sin perjuicio del derecho del consumidor a acudir a la Superintendencia de Industria y Comercio.',
        },
        {
          title: '10. Contacto',
          content: 'Para preguntas sobre estos Términos y Condiciones, puede contactarnos a través de: contacto@tecuidapp.com o en nuestras redes sociales @tecuidapp',
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidad y Tratamiento de Datos Personales',
      lastUpdate: 'Última actualización: 8 de enero de 2026',
      intro: 'En cumplimiento de la Ley 1581 de 2012 (Ley de Protección de Datos Personales), el Decreto 1377 de 2013 y demás normatividad aplicable en Colombia, TeCuidApp se compromete a proteger la privacidad y los datos personales de sus usuarias. Entendemos la sensibilidad de los datos que manejamos y aplicamos los más altos estándares de seguridad.',
      sections: [
        {
          title: '1. Responsable del Tratamiento',
          content: 'TeCuidApp, con domicilio en Colombia, es la responsable del tratamiento de sus datos personales. Puede contactarnos en: contacto@tecuidapp.com o a través de nuestras redes sociales @tecuidapp',
        },
        {
          title: '2. Datos que Recopilamos',
          content: 'Recopilamos los siguientes tipos de datos: (a) Datos de identificación: nombre, correo electrónico para autenticación con email/contraseña o Google Sign-In; (b) Datos de ubicación: cuando active esta función para visualizar el mapa, crear reportes geolocalizados, calcular rutas seguras o unirse a grupos de caminata; (c) Datos de contactos de emergencia: información que usted voluntariamente proporcione sobre sus contactos de confianza; (d) Datos de reportes: información sobre incidentes que usted reporte (tipo, severidad, ubicación); (e) Datos de uso: información sobre rutas guardadas, grupos y preferencias de notificación.',
        },
        {
          title: '3. Finalidades del Tratamiento',
          content: 'Sus datos personales serán utilizados para: (a) Proveer los servicios de la aplicación incluyendo mapas, reportes, rutas y grupos; (b) Calcular rutas seguras evitando zonas con reportes de riesgo; (c) Generar mapas de calor agregados y anónimos de zonas de riesgo; (d) Permitir la funcionalidad de grupos de caminata cercanos; (e) Activar el botón SOS y contactar sus contactos de emergencia; (f) Enviar notificaciones sobre reportes cercanos y cambios en rutas; (g) Mejorar nuestros algoritmos y servicios; (h) Cumplir con obligaciones legales.',
        },
        {
          title: '4. Tratamiento de Datos de Ubicación',
          content: 'Los datos de ubicación son especialmente sensibles. Por ello: (a) Solo se recopilan cuando usted activa explícitamente la función de ubicación; (b) Se utilizan únicamente para las funcionalidades que los requieren; (c) La ubicación en grupos de caminata es visible solo para miembros del grupo; (d) Las rutas guardadas se almacenan localmente en su dispositivo con caché cifrada; (e) Si niega el permiso de ubicación, la app funciona con ubicación aproximada de ciudad; (f) Puede desactivar la ubicación en cualquier momento desde la configuración.',
        },
        {
          title: '5. Autorización',
          content: 'Al usar TeCuidApp y aceptar esta política, usted autoriza expresamente el tratamiento de sus datos personales conforme a las finalidades descritas. Para datos de ubicación, solicitamos autorización específica a través de los permisos del sistema operativo de acuerdo con el artículo 6 de la Ley 1581 de 2012.',
        },
        {
          title: '6. Derechos de la Titular (ARCO)',
          content: 'De conformidad con el artículo 8 de la Ley 1581 de 2012, usted tiene derecho a: (a) Acceder a sus datos personales almacenados; (b) Rectificar datos incorrectos o incompletos; (c) Cancelar o solicitar la supresión de datos y su cuenta; (d) Oponerse al tratamiento en casos específicos; (e) Revocar la autorización otorgada; (f) Solicitar copia de la autorización otorgada. Para ejercer estos derechos, envíe su solicitud a: contacto@tecuidapp.com indicando su nombre y el derecho que desea ejercer.',
        },
        {
          title: '7. Seguridad de los Datos',
          content: 'Implementamos medidas técnicas, humanas y administrativas robustas para proteger sus datos: (a) Autenticación segura con Firebase Authentication; (b) Datos almacenados en Firestore con reglas de acceso estrictas; (c) Rutas cacheadas localmente con Room (SQLite) cifrado; (d) Comunicaciones sobre HTTPS; (e) Cada usuaria solo puede modificar sus propios documentos; (f) Validación de campos críticos antes de almacenar.',
        },
        {
          title: '8. Transferencia de Datos',
          content: 'Sus datos pueden ser procesados por proveedores tecnológicos: (a) Firebase (Google) para autenticación y base de datos Firestore; (b) Google Maps, Places, Directions y Geocoding APIs para funcionalidades de mapas y rutas. Estos proveedores cumplen con estándares internacionales de protección de datos. No vendemos ni compartimos sus datos con fines comerciales de terceros.',
        },
        {
          title: '9. Conservación de Datos',
          content: 'Conservaremos sus datos personales mientras mantenga una cuenta activa en TeCuidApp. Los reportes de seguridad se mantienen para el funcionamiento del servicio comunitario. Las rutas cacheadas expiran automáticamente. Podrá solicitar la eliminación completa de su cuenta y datos asociados en cualquier momento.',
        },
        {
          title: '10. Menores de Edad',
          content: 'TeCuidApp está diseñada para usuarias mayores de 18 años. El uso por menores de edad requiere la autorización del padre, madre o representante legal, quien será responsable del tratamiento de los datos del menor conforme al artículo 7 de la Ley 1581 de 2012.',
        },
        {
          title: '11. Uso del Botón SOS',
          content: 'El botón SOS permite llamar al 123 (línea de emergencias de Colombia). Para funcionar, requiere permiso de llamada telefónica. Si no otorga el permiso, se abrirá el marcador con el número prellenado. La app no almacena registros de llamadas de emergencia realizadas.',
        },
        {
          title: '12. Autoridad de Control',
          content: 'Si considera que sus derechos han sido vulnerados, puede presentar una queja ante la Superintendencia de Industria y Comercio (SIC), autoridad encargada de vigilar el cumplimiento de la normativa de protección de datos personales en Colombia.',
        },
      ],
    },
    footer: {
      description: 'Tecnología para sentirte segura, conectada y acompañada.',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      contact: 'Contacto',
      rights: '© 2026 TeCuidApp. Todos los derechos reservados.',
      madeWith: 'Hecho con ❤️ en Colombia',
      social: 'Síguenos',
    },
    cta: {
      title: '¿Lista para moverte segura?',
      subtitle: 'Únete a la comunidad de mujeres que se cuidan entre sí. Próximamente disponible en Google Play.',
      button: 'Próximamente',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      terms: 'Terms & Conditions',
      privacy: 'Privacy',
      download: 'Download App',
    },
    hero: {
      badge: 'Personal safety for women',
      title: 'Technology to feel safe, connected and accompanied',
      subtitle: 'TeCuidApp combines collaborative reports, safe routes, walking groups and SOS button in a single experience designed for your safety in the city.',
      cta: 'Learn More',
      downloadCta: 'Coming Soon',
    },
    features: {
      title: 'Main Features',
      subtitle: 'Everything you need to move safely through the city',
      items: [
        {
          title: 'Real-time reports',
          description: 'Create, verify and explore geolocated incidents: robberies, harassment, unsafe areas and more.',
        },
        {
          title: 'Safe routes',
          description: 'Plan routes with dangerous zone penalties and safety score from 0-100.',
        },
        {
          title: 'Heat map',
          description: 'Visualize risk zones with dynamic heat maps generated from security indices.',
        },
        {
          title: 'Walking groups',
          description: 'Join or create nearby walking groups to move accompanied.',
        },
        {
          title: 'SOS Button',
          description: 'Quick access to emergency number 123 with desktop widget.',
        },
        {
          title: 'Emergency contacts',
          description: 'Manage your trusted contacts for quick alerts.',
        },
      ],
    },
    about: {
      title: 'About Us',
      subtitle: 'Who We Are',
      description: 'TeCuidApp was born from the commitment to create technology that empowers Colombian women to move safely through the city. Developed with passion by a team that believes in safety as a right.',
      tagline: 'Technology to feel safe, connected and accompanied',
      mission: {
        title: 'Our Mission',
        description: 'To empower women to move safely through the city, combining collaborative technology with prevention and response tools for risk situations.',
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the reference application in Colombia for women\'s personal safety, creating connected communities and safer urban spaces for all.',
      },
      values: {
        title: 'Our Values',
        items: [
          { title: 'Sisterhood', description: 'We believe in the power of women supporting each other.' },
          { title: 'Innovation', description: 'We use cutting-edge technology to solve real problems.' },
          { title: 'Security', description: 'Your protection and privacy are our absolute priority.' },
          { title: 'Community', description: 'Together we are stronger and can create change.' },
        ],
      },
      howItWorks: {
        title: 'How does it work?',
        steps: [
          { title: 'Sign up', description: 'Create your account with email or Google Sign-In securely.' },
          { title: 'Explore the map', description: 'View reports, risk zones and safe routes in your city.' },
          { title: 'Report and verify', description: 'Contribute to the community by reporting incidents and verifying reports.' },
          { title: 'Move safely', description: 'Use safe routes, join groups and keep SOS always at hand.' },
        ],
      },
    },
    terms: {
      title: 'Terms & Conditions',
      lastUpdate: 'Last updated: January 8, 2026',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By downloading, installing, or using the TeCuidApp application, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our application. These terms are governed by the laws of the Republic of Colombia, particularly Law 1480 of 2011 (Consumer Statute) and other applicable regulations.',
        },
        {
          title: '2. Description of Service',
          content: 'TeCuidApp is a personal safety mobile application that provides: real-time geolocated security reports, safe route planning with risk zone analysis, incident heat maps, collaborative walking groups, SOS emergency button with access to 123, emergency contact management, and customizable notifications. The application does not replace official emergency services and does not guarantee absolute security.',
        },
        {
          title: '3. Requirements for Use',
          content: 'To use TeCuidApp, you must: (a) be 18 years of age or older or have authorization from a parent or legal guardian; (b) provide truthful and updated information; (c) maintain the confidentiality of your access credentials; (d) not use the application to create false or malicious reports; (e) not use the application for illegal purposes or that put other users at risk.',
        },
        {
          title: '4. Responsible Use of Reports',
          content: 'When creating security reports, you agree to: provide truthful information about incidents; not create false reports that may generate panic or misinformation; respect the privacy of third parties; not include information that identifies victims without their consent. TeCuidApp reserves the right to delete reports that violate these rules and suspend accounts that engage in misuse.',
        },
        {
          title: '5. Service Limitations',
          content: 'TeCuidApp provides personal safety support tools but: does not guarantee the accuracy of all third-party user reports; suggested routes are indicative and may not reflect real-time conditions; the service depends on internet connectivity and GPS; the SOS button requires call permissions and cellular coverage. In real emergencies, always contact 123 or emergency services directly.',
        },
        {
          title: '6. Intellectual Property',
          content: 'All intellectual property rights over TeCuidApp, including but not limited to trademarks, logos (including the characteristic mascot), designs, source code, route calculation algorithms, and content, are the exclusive property of TeCuidApp or its licensors. Any reproduction, modification, or distribution without express written authorization is prohibited.',
        },
        {
          title: '7. Limitation of Liability',
          content: 'TeCuidApp provides the application "as is" as a support tool. To the maximum extent permitted by Colombian law, we will not be liable for: damages derived from inaccurate third-party user reports; incidents that occur despite using suggested routes; technical, connectivity, or GPS failures; misuse of the application by third parties. Legal warranties established in the Consumer Statute remain in effect.',
        },
        {
          title: '8. Modifications',
          content: 'We reserve the right to modify these terms at any time. Modifications will take effect from their publication in the application. Continued use of TeCuidApp after any modification constitutes your acceptance of the new terms. We will notify significant changes through the application.',
        },
        {
          title: '9. Applicable Law and Jurisdiction',
          content: 'These terms shall be governed and interpreted in accordance with the laws of the Republic of Colombia. Any dispute shall be submitted to the competent courts of Colombia, without prejudice to the consumer\'s right to approach the Superintendence of Industry and Commerce.',
        },
        {
          title: '10. Contact',
          content: 'For questions about these Terms and Conditions, you can contact us at: contacto@tecuidapp.com or on our social media @tecuidapp',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy and Personal Data Processing',
      lastUpdate: 'Last updated: January 8, 2026',
      intro: 'In compliance with Law 1581 of 2012 (Personal Data Protection Law), Decree 1377 of 2013, and other applicable regulations in Colombia, TeCuidApp is committed to protecting the privacy and personal data of its users. We understand the sensitivity of the data we handle and apply the highest security standards.',
      sections: [
        {
          title: '1. Data Controller',
          content: 'TeCuidApp, domiciled in Colombia, is responsible for processing your personal data. You can contact us at: contacto@tecuidapp.com or through our social media @tecuidapp',
        },
        {
          title: '2. Data We Collect',
          content: 'We collect the following types of data: (a) Identification data: name, email for authentication with email/password or Google Sign-In; (b) Location data: when you activate this function to view the map, create geolocated reports, calculate safe routes, or join walking groups; (c) Emergency contact data: information you voluntarily provide about your trusted contacts; (d) Report data: information about incidents you report (type, severity, location); (e) Usage data: information about saved routes, groups, and notification preferences.',
        },
        {
          title: '3. Purposes of Processing',
          content: 'Your personal data will be used to: (a) Provide application services including maps, reports, routes, and groups; (b) Calculate safe routes avoiding areas with risk reports; (c) Generate aggregated and anonymous heat maps of risk zones; (d) Enable nearby walking group functionality; (e) Activate the SOS button and contact your emergency contacts; (f) Send notifications about nearby reports and route changes; (g) Improve our algorithms and services; (h) Comply with legal obligations.',
        },
        {
          title: '4. Location Data Processing',
          content: 'Location data is especially sensitive. Therefore: (a) It is only collected when you explicitly activate the location function; (b) It is used only for functionalities that require it; (c) Location in walking groups is visible only to group members; (d) Saved routes are stored locally on your device with encrypted cache; (e) If you deny location permission, the app works with approximate city location; (f) You can disable location at any time from settings.',
        },
        {
          title: '5. Authorization',
          content: 'By using TeCuidApp and accepting this policy, you expressly authorize the processing of your personal data in accordance with the purposes described. For location data, we request specific authorization through operating system permissions in accordance with Article 6 of Law 1581 of 2012.',
        },
        {
          title: '6. Rights of the Data Subject (ARCO)',
          content: 'In accordance with Article 8 of Law 1581 of 2012, you have the right to: (a) Access your stored personal data; (b) Rectify incorrect or incomplete data; (c) Cancel or request deletion of data and your account; (d) Object to processing in specific cases; (e) Revoke the authorization granted; (f) Request a copy of the authorization granted. To exercise these rights, send your request to: contacto@tecuidapp.com indicating your name and the right you wish to exercise.',
        },
        {
          title: '7. Data Security',
          content: 'We implement robust technical, human, and administrative measures to protect your data: (a) Secure authentication with Firebase Authentication; (b) Data stored in Firestore with strict access rules; (c) Locally cached routes with encrypted Room (SQLite); (d) Communications over HTTPS; (e) Each user can only modify their own documents; (f) Validation of critical fields before storing.',
        },
        {
          title: '8. Data Transfer',
          content: 'Your data may be processed by technology providers: (a) Firebase (Google) for authentication and Firestore database; (b) Google Maps, Places, Directions, and Geocoding APIs for map and route functionalities. These providers comply with international data protection standards. We do not sell or share your data for third-party commercial purposes.',
        },
        {
          title: '9. Data Retention',
          content: 'We will retain your personal data while you maintain an active account with TeCuidApp. Security reports are maintained for the operation of the community service. Cached routes expire automatically. You may request complete deletion of your account and associated data at any time.',
        },
        {
          title: '10. Minors',
          content: 'TeCuidApp is designed for users over 18 years of age. Use by minors requires authorization from a parent or legal representative, who will be responsible for processing the minor\'s data in accordance with Article 7 of Law 1581 of 2012.',
        },
        {
          title: '11. Use of SOS Button',
          content: 'The SOS button allows calling 123 (Colombia emergency line). To function, it requires phone call permission. If you do not grant permission, the dialer will open with the pre-filled number. The app does not store records of emergency calls made.',
        },
        {
          title: '12. Supervisory Authority',
          content: 'If you believe your rights have been violated, you may file a complaint with the Superintendence of Industry and Commerce (SIC), the authority responsible for monitoring compliance with personal data protection regulations in Colombia.',
        },
      ],
    },
    footer: {
      description: 'Technology to feel safe, connected and accompanied.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      contact: 'Contact',
      rights: '© 2026 TeCuidApp. All rights reserved.',
      madeWith: 'Made with ❤️ in Colombia',
      social: 'Follow Us',
    },
    cta: {
      title: 'Ready to move safely?',
      subtitle: 'Join the community of women who take care of each other. Coming soon to Google Play.',
      button: 'Coming Soon',
    },
  },
};
