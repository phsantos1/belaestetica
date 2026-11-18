export const CLINIC_INFO = {
  name: 'Clínica Bela Estética',
  shortName: 'Clínica Bela',
  address: 'Rua José Francisco de Paula, 85, Centro, Formiga/MG',
  cityState: 'Formiga, Minas Gerais',
  phoneDisplay: '(37) 99952-4322',
  whatsappNumber: '5537999524322',
  whatsappMessage:
    'Olá! Conheci o site da Clínica Bela e gostaria de saber mais sobre os serviços e consultar a disponibilidade de horários.',
} as const;

export const WHATSAPP_URL = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
  CLINIC_INFO.whatsappMessage
)}`;

export const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rua José Francisco de Paula, 85, Centro, Formiga, MG'
)}`;

export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  'Rua José Francisco de Paula, 85, Centro, Formiga, MG'
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'estetica-facial',
    number: '01',
    title: 'Estética Facial',
    description:
      'Cuidados voltados para a saúde, a luminosidade e a vitalidade da pele do rosto, respeitando as características de cada pessoa.',
    imageSrc: '/src/assets/images/service_facial_1795015034806.jpg',
    imageAlt: 'Tratamento de estética facial com aplicação delicada de cuidados para a pele',
  },
  {
    id: 'design-de-sobrancelhas',
    number: '02',
    title: 'Design de Sobrancelhas',
    description:
      'Modelagem cuidadosa para valorizar a expressão natural do olhar, trazendo harmonia e definição aos traços faciais.',
    imageSrc: '/src/assets/images/service_brows_1795015035674.jpg',
    imageAlt: 'Detalhe editorial de design de sobrancelhas com acabamento natural',
  },
  {
    id: 'cuidados-com-cilios',
    number: '03',
    title: 'Cuidados com Cílios',
    description:
      'Atenção dedicada ao realce e à delicadeza dos cílios, destacando a beleza do olhar com leveza e naturalidade.',
    imageSrc: '/src/assets/images/service_lashes_1795015036573.jpg',
    imageAlt: 'Close editorial destacando cílios alongados e delicados',
  },
  {
    id: 'depilacao',
    number: '04',
    title: 'Depilação',
    description:
      'Atendimento cuidadoso e confortável pensado para proporcionar uma pele macia, bem tratada e com acabamento delicado.',
    imageSrc: '/src/assets/images/service_epilation_1795015037254.jpg',
    imageAlt: 'Pele luminosa e macia em fotografia editorial de cuidados estéticos',
  },
  {
    id: 'cuidados-corporais',
    number: '05',
    title: 'Cuidados Corporais',
    description:
      'Momentos de cuidado corporal e bem-estar dedicados a promover conforto, relaxamento e sintonia com a sua autoestima.',
    imageSrc: '/src/assets/images/service_body_1795015037042.jpg',
    imageAlt: 'Ritual de cuidados corporais com pedras e óleos botânicos',
  },
];

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  accent: 'magenta' | 'turquoise';
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'cuidado-em-cada-detalhe',
    title: 'Cuidado em cada detalhe.',
    description:
      'Da recepção à finalização de cada atendimento, cada etapa é conduzida com zelo, organização e atenção genuína.',
    accent: 'magenta',
  },
  {
    id: 'atencao-a-sua-beleza',
    title: 'Atenção à sua beleza.',
    description:
      'Um olhar sensível para valorizar seus traços naturais, respeitando suas preferências e o ritmo do seu autocuidado.',
    accent: 'turquoise',
  },
  {
    id: 'um-momento-dedicado-a-voce',
    title: 'Um momento dedicado a você.',
    description:
      'Uma pausa tranquila na rotina para renovar a confiança, cuidar de si e desfrutar de uma experiência acolhedora.',
    accent: 'magenta',
  },
];

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;
