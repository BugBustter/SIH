import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translations } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  languages: Language[];
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

const translations: Translations = {
  en: {
    home: 'Home',
    services: 'Services',
    doctors: 'Doctors',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    doctorLogin: 'Doctor Login',
    patientLogin: 'Patient Login',
    pharmacyLogin: 'Pharmacy Login',
    bookAppointment: 'Book Appointment',
    videoConsultation: 'Video Consultation',
    findNearbyHospitals: 'Find Nearby Hospitals',
    sarthiBooth: 'Find Sarthi Booth',
    welcome: 'Welcome to Sarthi Healthcare',
    tagline: 'Your Health, Our Priority - Advanced Healthcare Solutions',
    emergencyServices: 'Emergency Services',
    onlineConsultation: 'Online Consultation',
    labTests: 'Lab Tests',
    pharmacy: 'Pharmacy',
    healthCheckup: 'Health Checkup',
    insurance: 'Insurance',
    askSarthi: 'Ask Sarthi AI',
    chatbotPlaceholder: 'Type your health question here...',
    send: 'Send',
    microphoneTooltip: 'Click to speak',
    imageUploadTooltip: 'Upload image for analysis',
  },
  hi: {
    home: 'होम',
    services: 'सेवाएं',
    doctors: 'डॉक्टर',
    about: 'के बारे में',
    contact: 'संपर्क',
    login: 'लॉगिन',
    doctorLogin: 'डॉक्टर लॉगिन',
    patientLogin: 'मरीज़ लॉगिन',
    pharmacyLogin: 'फार्मेसी लॉगिन',
    bookAppointment: 'अपॉइंटमेंट बुक करें',
    videoConsultation: 'वीडियो परामर्श',
    findNearbyHospitals: 'नजदीकी अस्पताल खोजें',
    sarthiBooth: 'सारथी बूथ खोजें',
    welcome: 'सारथी हेल्थकेयर में आपका स्वागत है',
    tagline: 'आपका स्वास्थ्य, हमारी प्राथमिकता - उन्नत स्वास्थ्य समाधान',
    emergencyServices: 'आपातकालीन सेवाएं',
    onlineConsultation: 'ऑनलाइन परामर्श',
    labTests: 'लैब टेस्ट',
    pharmacy: 'फार्मेसी',
    healthCheckup: 'स्वास्थ्य जांच',
    insurance: 'बीमा',
    askSarthi: 'सारथी AI से पूछें',
    chatbotPlaceholder: 'यहाँ अपना स्वास्थ्य प्रश्न टाइप करें...',
    send: 'भेजें',
    microphoneTooltip: 'बोलने के लिए क्लिक करें',
    imageUploadTooltip: 'विश्लेषण के लिए छवि अपलोड करें',
  },
  pa: {
    home: 'ਘਰ',
    services: 'ਸੇਵਾਵਾਂ',
    doctors: 'ਡਾਕਟਰ',
    about: 'ਬਾਰੇ',
    contact: 'ਸੰਪਰਕ',
    login: 'ਲਾਗਇਨ',
    doctorLogin: 'ਡਾਕਟਰ ਲਾਗਇਨ',
    patientLogin: 'ਮਰੀਜ਼ ਲਾਗਇਨ',
    pharmacyLogin: 'ਫਾਰਮੇਸੀ ਲਾਗਇਨ',
    bookAppointment: 'ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ',
    videoConsultation: 'ਵੀਡੀਓ ਸਲਾਹ',
    findNearbyHospitals: 'ਨੇੜਲੇ ਹਸਪਤਾਲ ਲੱਭੋ',
    sarthiBooth: 'ਸਾਰਥੀ ਬੂਥ ਲੱਭੋ',
    welcome: 'ਸਾਰਥੀ ਹੈਲਥਕੇਅਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
    tagline: 'ਤੁਹਾਡੀ ਸਿਹਤ, ਸਾਡੀ ਤਰਜੀਹ - ਉੱਨਤ ਸਿਹਤ ਹੱਲ',
    emergencyServices: 'ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ',
    onlineConsultation: 'ਔਨਲਾਈਨ ਸਲਾਹ',
    labTests: 'ਲੈਬ ਟੈਸਟ',
    pharmacy: 'ਫਾਰਮੇਸੀ',
    healthCheckup: 'ਸਿਹਤ ਜਾਂਚ',
    insurance: 'ਬੀਮਾ',
    askSarthi: 'ਸਾਰਥੀ AI ਤੋਂ ਪੁੱਛੋ',
    chatbotPlaceholder: 'ਇੱਥੇ ਆਪਣਾ ਸਿਹਤ ਸਵਾਲ ਟਾਈਪ ਕਰੋ...',
    send: 'ਭੇਜੋ',
    microphoneTooltip: 'ਬੋਲਣ ਲਈ ਕਲਿੱਕ ਕਰੋ',
    imageUploadTooltip: 'ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਚਿੱਤਰ ਅਪਲੋਡ ਕਰੋ',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};