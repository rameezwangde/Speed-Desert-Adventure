import { en } from './en'
import { ru } from './ru'
import { fr } from './fr'
import { ar } from './ar'

export const translations = {
  en,
  ru,
  fr,
  ar
}

export const languages = [
  { code: 'en', label: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ru', label: 'Russian', native: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'fr', label: 'French', native: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', native: 'العربية', flag: '🇦🇪', dir: 'rtl' }
]
