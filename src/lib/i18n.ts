import { createContext, useContext } from 'react';

export type Language = 'en' | 'hi' | 'pa';

export interface LocalizedStrings {
  // App basics
  appName: string;
  tagline: string;
  
  // Navigation
  home: string;
  consult: string;
  vitals: string;
  records: string;
  profile: string;
  
  // Actions
  bookConsult: string;
  submitCase: string;
  startCall: string;
  addVitals: string;
  syncPending: string;
  register: string;
  signIn: string;
  signOut: string;
  
  // Status
  online: string;
  offline: string;
  synced: string;
  pending: string;
  connecting: string;
  
  // Triage
  homeCare: string;
  chwVisit: string;
  doctorConsult: string;
  emergency: string;
  
  // Forms
  phoneNumber: string;
  aadhaarNumber: string;
  fullName: string;
  age: string;
  gender: string;
  village: string;
  symptoms: string;
  duration: string;
  severity: string;
  
  // Common
  save: string;
  cancel: string;
  submit: string;
  next: string;
  back: string;
  close: string;
  yes: string;
  no: string;
  
  // Offline messages
  workingSaved: string;
  willSyncWhenOnline: string;
  offlineMode: string;
}

const translations: Record<Language, LocalizedStrings> = {
  en: {
    appName: 'Nabha Health Connect',
    tagline: 'Doctor care, near you — anytime, in your language.',
    
    home: 'Home',
    consult: 'Consult',
    vitals: 'Vitals',
    records: 'Records',
    profile: 'Profile',
    
    bookConsult: 'Book Consult',
    submitCase: 'Submit Case',
    startCall: 'Start Call',
    addVitals: 'Add Vitals',
    syncPending: 'Sync Pending',
    register: 'Register',
    signIn: 'Sign In',
    signOut: 'Sign Out',
    
    online: 'Online',
    offline: 'Offline',
    synced: 'Synced',
    pending: 'Pending',
    connecting: 'Connecting',
    
    homeCare: 'Home Care',
    chwVisit: 'CHW Visit',
    doctorConsult: 'Doctor Consult',
    emergency: 'Emergency',
    
    phoneNumber: 'Phone Number',
    aadhaarNumber: 'Aadhaar Number',
    fullName: 'Full Name',
    age: 'Age',
    gender: 'Gender',
    village: 'Village',
    symptoms: 'Symptoms',
    duration: 'Duration',
    severity: 'Severity',
    
    save: 'Save',
    cancel: 'Cancel',
    submit: 'Submit',
    next: 'Next',
    back: 'Back',
    close: 'Close',
    yes: 'Yes',
    no: 'No',
    
    workingSaved: 'Your work has been saved',
    willSyncWhenOnline: 'It will sync when you are back online',
    offlineMode: 'Offline — your work will sync when connected',
  },
  hi: {
    appName: 'नाभा हेल्थ कनेक्ट',
    tagline: 'डॉक्टर की देखभाल, आपके पास — कभी भी, आपकी भाषा में।',
    
    home: 'होम',
    consult: 'परामर्श',
    vitals: 'जीवन संकेत',
    records: 'रिकॉर्ड',
    profile: 'प्रोफाइल',
    
    bookConsult: 'परामर्श बुक करें',
    submitCase: 'केस जमा करें',
    startCall: 'कॉल शुरू करें',
    addVitals: 'जीवन संकेत जोड़ें',
    syncPending: 'सिंक लंबित',
    register: 'पंजीकरण',
    signIn: 'साइन इन',
    signOut: 'साइन आउट',
    
    online: 'ऑनलाइन',
    offline: 'ऑफलाइन',
    synced: 'सिंक हो गया',
    pending: 'लंबित',
    connecting: 'कनेक्ट हो रहा है',
    
    homeCare: 'घर की देखभाल',
    chwVisit: 'CHW विजिट',
    doctorConsult: 'डॉक्टर परामर्श',
    emergency: 'आपातकाल',
    
    phoneNumber: 'फोन नंबर',
    aadhaarNumber: 'आधार नंबर',
    fullName: 'पूरा नाम',
    age: 'उम्र',
    gender: 'लिंग',
    village: 'गांव',
    symptoms: 'लक्षण',
    duration: 'अवधि',
    severity: 'गंभीरता',
    
    save: 'सेव करें',
    cancel: 'रद्द करें',
    submit: 'जमा करें',
    next: 'अगला',
    back: 'वापस',
    close: 'बंद करें',
    yes: 'हाँ',
    no: 'नहीं',
    
    workingSaved: 'आपका काम सेव हो गया है',
    willSyncWhenOnline: 'जब आप वापस ऑनलाइन होंगे तो यह सिंक हो जाएगा',
    offlineMode: 'ऑफलाइन — कनेक्ट होने पर आपका काम सिंक हो जाएगा',
  },
  pa: {
    appName: 'ਨਾਭਾ ਹੈਲਥ ਕਨੈਕਟ',
    tagline: 'ਡਾਕਟਰੀ ਦੇਖਭਾਲ, ਤੁਹਾਡੇ ਨੇੜੇ — ਕਦੇ ਵੀ, ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਵਿੱਚ।',
    
    home: 'ਘਰ',
    consult: 'ਸਲਾਹ',
    vitals: 'ਜੀਵਨ ਸੰਕੇਤ',
    records: 'ਰਿਕਾਰਡ',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    
    bookConsult: 'ਸਲਾਹ ਬੁੱਕ ਕਰੋ',
    submitCase: 'ਕੇਸ ਜਮ੍ਹਾ ਕਰੋ',
    startCall: 'ਕਾਲ ਸ਼ੁਰੂ ਕਰੋ',
    addVitals: 'ਜੀਵਨ ਸੰਕੇਤ ਜੋੜੋ',
    syncPending: 'ਸਿੰਕ ਬਾਕੀ',
    register: 'ਰਜਿਸਟਰ',
    signIn: 'ਸਾਈਨ ਇਨ',
    signOut: 'ਸਾਈਨ ਆਊਟ',
    
    online: 'ਔਨਲਾਈਨ',
    offline: 'ਔਫਲਾਈਨ',
    synced: 'ਸਿੰਕ ਹੋ ਗਿਆ',
    pending: 'ਬਾਕੀ',
    connecting: 'ਕਨੈਕਟ ਹੋ ਰਿਹਾ ਹੈ',
    
    homeCare: 'ਘਰੇਲੂ ਦੇਖਭਾਲ',
    chwVisit: 'CHW ਮੁਲਾਕਾਤ',
    doctorConsult: 'ਡਾਕਟਰ ਸਲਾਹ',
    emergency: 'ਐਮਰਜੈਂਸੀ',
    
    phoneNumber: 'ਫੋਨ ਨੰਬਰ',
    aadhaarNumber: 'ਆਧਾਰ ਨੰਬਰ',
    fullName: 'ਪੂਰਾ ਨਾਮ',
    age: 'ਉਮਰ',
    gender: 'ਲਿੰਗ',
    village: 'ਪਿੰਡ',
    symptoms: 'ਲੱਛਣ',
    duration: 'ਮਿਆਦ',
    severity: 'ਗੰਭੀਰਤਾ',
    
    save: 'ਸੇਵ ਕਰੋ',
    cancel: 'ਰੱਦ ਕਰੋ',
    submit: 'ਜਮ੍ਹਾ ਕਰੋ',
    next: 'ਅਗਲਾ',
    back: 'ਵਾਪਸ',
    close: 'ਬੰਦ ਕਰੋ',
    yes: 'ਹਾਂ',
    no: 'ਨਹੀਂ',
    
    workingSaved: 'ਤੁਹਾਡਾ ਕੰਮ ਸੇਵ ਹੋ ਗਿਆ ਹੈ',
    willSyncWhenOnline: 'ਜਦੋਂ ਤੁਸੀਂ ਵਾਪਸ ਔਨਲਾਈਨ ਹੋਵੋਗੇ ਤਾਂ ਇਹ ਸਿੰਕ ਹੋ ਜਾਵੇਗਾ',
    offlineMode: 'ਔਫਲਾਈਨ — ਕਨੈਕਟ ਹੋਣ ਤੇ ਤੁਹਾਡਾ ਕੰਮ ਸਿੰਕ ਹੋ ਜਾਵੇਗਾ',
  },
};

export const getTranslations = (language: Language): LocalizedStrings => {
  return translations[language] || translations.en;
};

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: LocalizedStrings;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};