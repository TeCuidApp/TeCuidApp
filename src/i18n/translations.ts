export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      terms: 'Términos y Condiciones',
      privacy: 'Privacidad',
      download: 'Descargar App',
    },
    hero: {
      title: 'Tu bienestar, nuestra prioridad',
      subtitle: 'TeCuidApp te acompaña en cada momento, brindándote herramientas para cuidar tu salud y la de tus seres queridos.',
      cta: 'Conoce Más',
      downloadCta: 'Descargar Ahora',
    },
    about: {
      title: 'Sobre Nosotros',
      subtitle: '¿Quiénes Somos?',
      description: 'TeCuidApp nace de la pasión por mejorar la calidad de vida de los colombianos a través de la tecnología. Somos un equipo comprometido con tu bienestar.',
      mission: {
        title: 'Nuestra Misión',
        description: 'Empoderar a las personas para que tomen control de su salud y seguridad mediante herramientas tecnológicas accesibles, intuitivas y confiables.',
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser la aplicación líder en Colombia que conecta a las personas con los recursos que necesitan para vivir más seguros y saludables.',
      },
      values: {
        title: 'Nuestros Valores',
        items: [
          { title: 'Confianza', description: 'Construimos relaciones basadas en la transparencia y la honestidad.' },
          { title: 'Innovación', description: 'Buscamos constantemente nuevas formas de mejorar tu experiencia.' },
          { title: 'Compromiso', description: 'Tu bienestar es nuestra prioridad número uno.' },
          { title: 'Accesibilidad', description: 'Tecnología para todos, sin importar tu ubicación.' },
        ],
      },
    },
    terms: {
      title: 'Términos y Condiciones',
      lastUpdate: 'Última actualización: 8 de enero de 2026',
      sections: [
        {
          title: '1. Aceptación de los Términos',
          content: 'Al descargar, instalar o utilizar la aplicación TeCuidApp, usted acepta estar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestra aplicación. Estos términos se rigen por las leyes de la República de Colombia, en particular la Ley 1480 de 2011 (Estatuto del Consumidor) y demás normas aplicables.',
        },
        {
          title: '2. Descripción del Servicio',
          content: 'TeCuidApp es una aplicación móvil diseñada para proporcionar herramientas de bienestar y cuidado personal. El servicio incluye funcionalidades de seguimiento de salud, alertas de emergencia y recursos informativos. La aplicación no sustituye el consejo médico profesional.',
        },
        {
          title: '3. Requisitos de Uso',
          content: 'Para utilizar TeCuidApp, debe: (a) ser mayor de 18 años o contar con autorización de un padre o tutor legal; (b) proporcionar información veraz y actualizada; (c) mantener la confidencialidad de sus credenciales de acceso; (d) no utilizar la aplicación para fines ilegales o no autorizados.',
        },
        {
          title: '4. Propiedad Intelectual',
          content: 'Todos los derechos de propiedad intelectual sobre TeCuidApp, incluyendo pero no limitándose a marcas, logos, diseños, código fuente y contenido, son propiedad exclusiva de TeCuidApp o sus licenciantes. Queda prohibida cualquier reproducción, modificación o distribución sin autorización expresa por escrito.',
        },
        {
          title: '5. Limitación de Responsabilidad',
          content: 'TeCuidApp proporciona la aplicación "tal cual" y no garantiza resultados específicos. En la máxima medida permitida por la legislación colombiana, no seremos responsables por daños indirectos, incidentales o consecuentes derivados del uso de la aplicación. Las garantías legales establecidas en el Estatuto del Consumidor permanecen vigentes.',
        },
        {
          title: '6. Modificaciones',
          content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en la aplicación. El uso continuado de TeCuidApp después de cualquier modificación constituye su aceptación de los nuevos términos.',
        },
        {
          title: '7. Ley Aplicable y Jurisdicción',
          content: 'Estos términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia. Cualquier disputa será sometida a los tribunales competentes de Colombia, sin perjuicio del derecho del consumidor a acudir a la Superintendencia de Industria y Comercio.',
        },
        {
          title: '8. Contacto',
          content: 'Para preguntas sobre estos Términos y Condiciones, puede contactarnos a través de: contacto@tecuidapp.com',
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidad y Tratamiento de Datos Personales',
      lastUpdate: 'Última actualización: 8 de enero de 2026',
      intro: 'En cumplimiento de la Ley 1581 de 2012 (Ley de Protección de Datos Personales), el Decreto 1377 de 2013 y demás normatividad aplicable en Colombia, TeCuidApp se compromete a proteger la privacidad y los datos personales de sus usuarios.',
      sections: [
        {
          title: '1. Responsable del Tratamiento',
          content: 'TeCuidApp, identificada con NIT [número], con domicilio en Colombia, es la responsable del tratamiento de sus datos personales. Puede contactarnos en: contacto@tecuidapp.com',
        },
        {
          title: '2. Datos que Recopilamos',
          content: 'Recopilamos los siguientes tipos de datos: (a) Datos de identificación: nombre, correo electrónico, número de teléfono; (b) Datos de salud: información que usted voluntariamente proporcione sobre su estado de salud; (c) Datos de ubicación: cuando active esta función para servicios de emergencia; (d) Datos de uso: información sobre cómo utiliza la aplicación.',
        },
        {
          title: '3. Finalidades del Tratamiento',
          content: 'Sus datos personales serán utilizados para: (a) Proveer los servicios de la aplicación; (b) Enviar alertas y notificaciones relevantes; (c) Mejorar nuestros servicios; (d) Cumplir con obligaciones legales; (e) Atender peticiones, quejas y reclamos. El tratamiento de datos sensibles relacionados con salud se realizará únicamente con su autorización expresa.',
        },
        {
          title: '4. Autorización',
          content: 'Al usar TeCuidApp y aceptar esta política, usted autoriza expresamente el tratamiento de sus datos personales conforme a las finalidades descritas. Para datos sensibles, solicitaremos autorización específica y expresa de acuerdo con el artículo 6 de la Ley 1581 de 2012.',
        },
        {
          title: '5. Derechos del Titular (ARCO)',
          content: 'De conformidad con el artículo 8 de la Ley 1581 de 2012, usted tiene derecho a: (a) Acceder a sus datos personales; (b) Rectificar datos incorrectos o incompletos; (c) Cancelar o solicitar la supresión de datos; (d) Oponerse al tratamiento en casos específicos; (e) Revocar la autorización otorgada. Para ejercer estos derechos, envíe su solicitud a: contacto@tecuidapp.com',
        },
        {
          title: '6. Seguridad de los Datos',
          content: 'Implementamos medidas técnicas, humanas y administrativas para proteger sus datos contra acceso no autorizado, pérdida o alteración. Utilizamos encriptación y protocolos de seguridad conforme a las mejores prácticas de la industria.',
        },
        {
          title: '7. Transferencia de Datos',
          content: 'Sus datos podrán ser transferidos a terceros proveedores de servicios tecnológicos ubicados en Colombia o en el exterior, garantizando niveles adecuados de protección conforme a la normatividad colombiana. No vendemos ni compartimos sus datos con fines comerciales de terceros.',
        },
        {
          title: '8. Conservación de Datos',
          content: 'Conservaremos sus datos personales mientras mantenga una cuenta activa en TeCuidApp y durante el tiempo necesario para cumplir con obligaciones legales. Podrá solicitar la eliminación de sus datos en cualquier momento.',
        },
        {
          title: '9. Menores de Edad',
          content: 'El uso de TeCuidApp por menores de edad requiere la autorización del padre, madre o representante legal, quien será responsable del tratamiento de los datos del menor conforme al artículo 7 de la Ley 1581 de 2012.',
        },
        {
          title: '10. Autoridad de Control',
          content: 'Si considera que sus derechos han sido vulnerados, puede presentar una queja ante la Superintendencia de Industria y Comercio (SIC), autoridad encargada de vigilar el cumplimiento de la normativa de protección de datos en Colombia.',
        },
      ],
    },
    footer: {
      description: 'Cuidando de ti y los tuyos, un día a la vez.',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      contact: 'Contacto',
      rights: '© 2026 TeCuidApp. Todos los derechos reservados.',
      madeWith: 'Hecho con ❤️ en Colombia',
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
      title: 'Your wellbeing, our priority',
      subtitle: 'TeCuidApp accompanies you every step of the way, providing tools to care for your health and that of your loved ones.',
      cta: 'Learn More',
      downloadCta: 'Download Now',
    },
    about: {
      title: 'About Us',
      subtitle: 'Who We Are',
      description: 'TeCuidApp was born from the passion to improve the quality of life for Colombians through technology. We are a team committed to your wellbeing.',
      mission: {
        title: 'Our Mission',
        description: 'To empower people to take control of their health and safety through accessible, intuitive, and reliable technological tools.',
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading application in Colombia that connects people with the resources they need to live safer and healthier lives.',
      },
      values: {
        title: 'Our Values',
        items: [
          { title: 'Trust', description: 'We build relationships based on transparency and honesty.' },
          { title: 'Innovation', description: 'We constantly seek new ways to improve your experience.' },
          { title: 'Commitment', description: 'Your wellbeing is our number one priority.' },
          { title: 'Accessibility', description: 'Technology for everyone, no matter your location.' },
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
          content: 'TeCuidApp is a mobile application designed to provide personal care and wellness tools. The service includes health tracking features, emergency alerts, and informational resources. The application does not replace professional medical advice.',
        },
        {
          title: '3. Requirements for Use',
          content: 'To use TeCuidApp, you must: (a) be 18 years of age or older or have authorization from a parent or legal guardian; (b) provide truthful and updated information; (c) maintain the confidentiality of your access credentials; (d) not use the application for illegal or unauthorized purposes.',
        },
        {
          title: '4. Intellectual Property',
          content: 'All intellectual property rights over TeCuidApp, including but not limited to trademarks, logos, designs, source code, and content, are the exclusive property of TeCuidApp or its licensors. Any reproduction, modification, or distribution without express written authorization is prohibited.',
        },
        {
          title: '5. Limitation of Liability',
          content: 'TeCuidApp provides the application "as is" and does not guarantee specific results. To the maximum extent permitted by Colombian law, we will not be liable for indirect, incidental, or consequential damages arising from the use of the application. Legal warranties established in the Consumer Statute remain in effect.',
        },
        {
          title: '6. Modifications',
          content: 'We reserve the right to modify these terms at any time. Modifications will take effect from their publication in the application. Continued use of TeCuidApp after any modification constitutes your acceptance of the new terms.',
        },
        {
          title: '7. Applicable Law and Jurisdiction',
          content: 'These terms shall be governed and interpreted in accordance with the laws of the Republic of Colombia. Any dispute shall be submitted to the competent courts of Colombia, without prejudice to the consumer\'s right to approach the Superintendence of Industry and Commerce.',
        },
        {
          title: '8. Contact',
          content: 'For questions about these Terms and Conditions, you can contact us at: contacto@tecuidapp.com',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy and Personal Data Processing',
      lastUpdate: 'Last updated: January 8, 2026',
      intro: 'In compliance with Law 1581 of 2012 (Personal Data Protection Law), Decree 1377 of 2013, and other applicable regulations in Colombia, TeCuidApp is committed to protecting the privacy and personal data of its users.',
      sections: [
        {
          title: '1. Data Controller',
          content: 'TeCuidApp, identified with NIT [number], domiciled in Colombia, is responsible for processing your personal data. You can contact us at: contacto@tecuidapp.com',
        },
        {
          title: '2. Data We Collect',
          content: 'We collect the following types of data: (a) Identification data: name, email, phone number; (b) Health data: information you voluntarily provide about your health status; (c) Location data: when you activate this function for emergency services; (d) Usage data: information about how you use the application.',
        },
        {
          title: '3. Purposes of Processing',
          content: 'Your personal data will be used to: (a) Provide application services; (b) Send relevant alerts and notifications; (c) Improve our services; (d) Comply with legal obligations; (e) Handle requests, complaints, and claims. Processing of sensitive health-related data will only be done with your express authorization.',
        },
        {
          title: '4. Authorization',
          content: 'By using TeCuidApp and accepting this policy, you expressly authorize the processing of your personal data in accordance with the purposes described. For sensitive data, we will request specific and express authorization in accordance with Article 6 of Law 1581 of 2012.',
        },
        {
          title: '5. Rights of the Data Subject (ARCO)',
          content: 'In accordance with Article 8 of Law 1581 of 2012, you have the right to: (a) Access your personal data; (b) Rectify incorrect or incomplete data; (c) Cancel or request deletion of data; (d) Object to processing in specific cases; (e) Revoke the authorization granted. To exercise these rights, send your request to: contacto@tecuidapp.com',
        },
        {
          title: '6. Data Security',
          content: 'We implement technical, human, and administrative measures to protect your data against unauthorized access, loss, or alteration. We use encryption and security protocols in accordance with industry best practices.',
        },
        {
          title: '7. Data Transfer',
          content: 'Your data may be transferred to third-party technology service providers located in Colombia or abroad, ensuring adequate levels of protection in accordance with Colombian regulations. We do not sell or share your data for third-party commercial purposes.',
        },
        {
          title: '8. Data Retention',
          content: 'We will retain your personal data while you maintain an active account with TeCuidApp and for the time necessary to comply with legal obligations. You may request the deletion of your data at any time.',
        },
        {
          title: '9. Minors',
          content: 'The use of TeCuidApp by minors requires authorization from a parent, mother, or legal representative, who will be responsible for processing the minor\'s data in accordance with Article 7 of Law 1581 of 2012.',
        },
        {
          title: '10. Supervisory Authority',
          content: 'If you believe your rights have been violated, you may file a complaint with the Superintendence of Industry and Commerce (SIC), the authority responsible for monitoring compliance with data protection regulations in Colombia.',
        },
      ],
    },
    footer: {
      description: 'Taking care of you and yours, one day at a time.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      contact: 'Contact',
      rights: '© 2026 TeCuidApp. All rights reserved.',
      madeWith: 'Made with ❤️ in Colombia',
    },
  },
};
