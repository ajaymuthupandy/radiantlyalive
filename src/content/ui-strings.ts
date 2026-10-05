/** Interface wording used by blocks, per page language (content itself is never translated). */
export type Lang = 'en' | 'es'

const strings = {
  en: {
    home: 'Home',
    about: 'About',
    play: 'Play video',
    faqEyebrow: 'FAQ',
    faqHeading: 'Frequently Asked Questions',
    purchase: 'Purchase',
    formName: 'Name',
    formOptional: '(optional)',
    formEmail: 'Email Address',
    formSending: 'Sending…',
    formSubmit: 'Sign Up',
    formSuccess: 'Thank you!',
    formError: 'Something went wrong. Please try again in a moment.',
    formFallback: 'Opens the Radiantly Alive sign-up form in a new tab to confirm.',
    widgetLoading: 'Loading the live schedule…',
    widgetFailed: 'The live schedule could not load here.',
  },
  es: {
    home: 'Inicio',
    about: 'Sobre',
    play: 'Ver video',
    faqEyebrow: 'Preguntas frecuentes',
    faqHeading: 'Preguntas frecuentes',
    purchase: 'Comprar',
    formName: 'Nombre',
    formOptional: '(opcional)',
    formEmail: 'Correo electrónico',
    formSending: 'Enviando…',
    formSubmit: 'Enviar',
    formSuccess: '¡Gracias!',
    formError: 'Algo salió mal. Inténtalo de nuevo en un momento.',
    formFallback: 'Abre el formulario de Radiantly Alive en una pestaña nueva para confirmar.',
    widgetLoading: 'Cargando el horario…',
    widgetFailed: 'No se pudo cargar el horario aquí.',
  },
} as const

export type UiStrings = { [K in keyof (typeof strings)['en']]: string }

export function ui(lang: Lang = 'en'): UiStrings {
  return strings[lang]
}
