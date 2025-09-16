import { createContext, useContext } from 'react';

export type Language = 'en' | 'hi' | 'pa' | 'bn' | 'ta' | 'te' | 'gu' | 'mr' | 'ur';

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
  
  // Health Notice Board
  healthNoticeBoard: {
    title: string;
    subtitle: string;
    seeMore: string;
    symptoms: string;
    precautions: string;
    diseases: {
      viralFever: {
        name: string;
        symptoms: string[];
        precautions: string[];
      };
      dengue: {
        name: string;
        symptoms: string[];
        precautions: string[];
      };
      seasonalFlu: {
        name: string;
        symptoms: string[];
        precautions: string[];
      };
      gastroenteritis: {
        name: string;
        symptoms: string[];
        precautions: string[];
      };
    };
  };
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
    
    healthNoticeBoard: {
      title: 'Health Notice Board',
      subtitle: 'Current Health Alerts & Prevention Tips',
      seeMore: 'See More',
      symptoms: 'Symptoms',
      precautions: 'Precautions',
      diseases: {
        viralFever: {
          name: 'Viral Fever',
          symptoms: ['High fever (101°F+)', 'Body aches and headache', 'Weakness and fatigue'],
          precautions: ['Drink plenty of fluids', 'Take adequate rest', 'Consult doctor if fever persists'],
        },
        dengue: {
          name: 'Dengue Fever',
          symptoms: ['Sudden high fever', 'Severe headache', 'Pain behind eyes'],
          precautions: ['Remove stagnant water', 'Use mosquito nets', 'Seek immediate medical help'],
        },
        seasonalFlu: {
          name: 'Seasonal Flu',
          symptoms: ['Cough and cold', 'Runny or stuffy nose', 'Mild fever'],
          precautions: ['Wash hands frequently', 'Avoid crowded places', 'Cover mouth when coughing'],
        },
        gastroenteritis: {
          name: 'Gastroenteritis',
          symptoms: ['Stomach pain', 'Nausea and vomiting', 'Diarrhea'],
          precautions: ['Drink clean water', 'Eat freshly cooked food', 'Maintain proper hygiene'],
        },
      },
    },
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
    
    healthNoticeBoard: {
      title: 'स्वास्थ्य सूचना बोर्ड',
      subtitle: 'वर्तमान स्वास्थ्य चेतावनी और रोकथाम की जानकारी',
      seeMore: 'और देखें',
      symptoms: 'लक्षण',
      precautions: 'सावधानियां',
      diseases: {
        viralFever: {
          name: 'वायरल बुखार',
          symptoms: ['तेज बुखार (101°F+)', 'शरीर में दर्द और सिरदर्द', 'कमजोरी और थकान'],
          precautions: ['भरपूर तरल पदार्थ पिएं', 'पर्याप्त आराम करें', 'बुखार जारी रहने पर डॉक्टर से सलाह लें'],
        },
        dengue: {
          name: 'डेंगू बुखार',
          symptoms: ['अचानक तेज बुखार', 'गंभीर सिरदर्द', 'आंखों के पीछे दर्द'],
          precautions: ['रुका हुआ पानी हटाएं', 'मच्छरदानी का उपयोग करें', 'तुरंत चिकित्सा सहायता लें'],
        },
        seasonalFlu: {
          name: 'मौसमी फ्लू',
          symptoms: ['खांसी और जुकाम', 'नाक बहना या बंद होना', 'हल्का बुखार'],
          precautions: ['बार-बार हाथ धोएं', 'भीड़भाड़ वाली जगहों से बचें', 'खांसते समय मुंह ढकें'],
        },
        gastroenteritis: {
          name: 'गैस्ट्रोएंटेराइटिस',
          symptoms: ['पेट में दर्द', 'जी मिचलाना और उल्टी', 'दस्त'],
          precautions: ['साफ पानी पिएं', 'ताजा पका हुआ खाना खाएं', 'उचित स्वच्छता बनाए रखें'],
        },
      },
    },
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
    
    healthNoticeBoard: {
      title: 'ਸਿਹਤ ਸੂਚਨਾ ਬੋਰਡ',
      subtitle: 'ਮੌਜੂਦਾ ਸਿਹਤ ਚੇਤਾਵਨੀਆਂ ਅਤੇ ਰੋਕਥਾਮ ਦੀ ਜਾਣਕਾਰੀ',
      seeMore: 'ਹੋਰ ਵੇਖੋ',
      symptoms: 'ਲੱਛਣ',
      precautions: 'ਸਾਵਧਾਨੀਆਂ',
      diseases: {
        viralFever: {
          name: 'ਵਾਇਰਲ ਬੁਖਾਰ',
          symptoms: ['ਤੇਜ਼ ਬੁਖਾਰ (101°F+)', 'ਸਰੀਰ ਵਿੱਚ ਦਰਦ ਅਤੇ ਸਿਰ ਦਰਦ', 'ਕਮਜ਼ੋਰੀ ਅਤੇ ਥਕਾਵਟ'],
          precautions: ['ਬਹੁਤ ਸਾਰਾ ਪਾਣੀ ਪੀਓ', 'ਚੰਗੀ ਆਰਾਮ ਕਰੋ', 'ਬੁਖਾਰ ਜਾਰੀ ਰਹਿਣ ਤੇ ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ'],
        },
        dengue: {
          name: 'ਡੇਂਗੂ ਬੁਖਾਰ',
          symptoms: ['ਅਚਾਨਕ ਤੇਜ਼ ਬੁਖਾਰ', 'ਗੰਭੀਰ ਸਿਰ ਦਰਦ', 'ਅੱਖਾਂ ਦੇ ਪਿੱਛੇ ਦਰਦ'],
          precautions: ['ਰੁਕਿਆ ਹੋਇਆ ਪਾਣੀ ਹਟਾਓ', 'ਮੱਛਰਦਾਨੀ ਦੀ ਵਰਤੋਂ ਕਰੋ', 'ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਲਓ'],
        },
        seasonalFlu: {
          name: 'ਮੌਸਮੀ ਫਲੂ',
          symptoms: ['ਖੰਘ ਅਤੇ ਜ਼ੁਕਾਮ', 'ਨੱਕ ਵਗਣਾ ਜਾਂ ਬੰਦ ਹੋਣਾ', 'ਹਲਕਾ ਬੁਖਾਰ'],
          precautions: ['ਵਾਰ-ਵਾਰ ਹੱਥ ਧੋਵੋ', 'ਭੀੜ ਵਾਲੀਆਂ ਥਾਵਾਂ ਤੋਂ ਬਚੋ', 'ਖੰਘਦੇ ਸਮੇਂ ਮੂੰਹ ਢੱਕੋ'],
        },
        gastroenteritis: {
          name: 'ਗੈਸਟਰੋਐਂਟੇਰਾਇਟਿਸ',
          symptoms: ['ਪੇਟ ਵਿੱਚ ਦਰਦ', 'ਜੀ ਮਿਚਲਾਉਣਾ ਅਤੇ ਉਲਟੀ', 'ਦਸਤ'],
          precautions: ['ਸਾਫ਼ ਪਾਣੀ ਪੀਓ', 'ਤਾਜ਼ਾ ਪਕਿਆ ਖਾਣਾ ਖਾਓ', 'ਸਫ਼ਾਈ ਬਣਾਈ ਰੱਖੋ'],
        },
      },
    },
  },
  bn: {
    appName: 'নভা হেলথ কানেক্ট',
    tagline: 'ডাক্তারি সেবা, আপনার কাছে — যেকোনো সময়, আপনার ভাষায়।',
    
    home: 'হোম',
    consult: 'পরামর্শ',
    vitals: 'জীবন সংকেত',
    records: 'রেকর্ড',
    profile: 'প্রোফাইল',
    
    bookConsult: 'পরামর্শ বুক করুন',
    submitCase: 'কেস জমা দিন',
    startCall: 'কল শুরু করুন',
    addVitals: 'জীবন সংকেত যোগ করুন',
    syncPending: 'সিঙ্ক বাকি',
    register: 'নিবন্ধন',
    signIn: 'সাইন ইন',
    signOut: 'সাইন আউট',
    
    online: 'অনলাইন',
    offline: 'অফলাইন',
    synced: 'সিঙ্ক হয়েছে',
    pending: 'বাকি',
    connecting: 'সংযোগ হচ্ছে',
    
    homeCare: 'ঘরের পরিচর্যা',
    chwVisit: 'CHW পরিদর্শন',
    doctorConsult: 'ডাক্তারি পরামর্শ',
    emergency: 'জরুরী',
    
    phoneNumber: 'ফোন নম্বর',
    aadhaarNumber: 'আধার নম্বর',
    fullName: 'পূর্ণ নাম',
    age: 'বয়স',
    gender: 'লিঙ্গ',
    village: 'গ্রাম',
    symptoms: 'লক্ষণ',
    duration: 'সময়কাল',
    severity: 'তীব্রতা',
    
    save: 'সংরক্ষণ',
    cancel: 'বাতিল',
    submit: 'জমা দিন',
    next: 'পরবর্তী',
    back: 'ফিরে',
    close: 'বন্ধ',
    yes: 'হ্যাঁ',
    no: 'না',
    
    workingSaved: 'আপনার কাজ সংরক্ষণ করা হয়েছে',
    willSyncWhenOnline: 'আপনি আবার অনলাইন হলে এটি সিঙ্ক হবে',
    offlineMode: 'অফলাইন — সংযোগ হলে আপনার কাজ সিঙ্ক হবে',
    
    healthNoticeBoard: {
      title: 'স্বাস্থ্য নোটিশ বোর্ড',
      subtitle: 'বর্তমান স্বাস্থ্য সতর্কতা ও প্রতিরোধের তথ্য',
      seeMore: 'আরো দেখুন',
      symptoms: 'লক্ষণ',
      precautions: 'সতর্কতা',
      diseases: {
        viralFever: {
          name: 'ভাইরাল জ্বর',
          symptoms: ['উচ্চ জ্বর (১০১°F+)', 'শরীরে ব্যথা ও মাথাব্যথা', 'দুর্বলতা ও ক্লান্তি'],
          precautions: ['প্রচুর তরল পান করুন', 'পর্যাপ্ত বিশ্রাম নিন', 'জ্বর অব্যাহত থাকলে ডাক্তারের পরামর্শ নিন'],
        },
        dengue: {
          name: 'ডেঙ্গু জ্বর',
          symptoms: ['হঠাৎ উচ্চ জ্বর', 'প্রচণ্ড মাথাব্যথা', 'চোখের পিছনে ব্যথা'],
          precautions: ['আটকে থাকা পানি সরান', 'মশারি ব্যবহার করুন', 'তাৎক্ষণিক চিকিৎসা নিন'],
        },
        seasonalFlu: {
          name: 'মৌসুমী ফ্লু',
          symptoms: ['কাশি ও সর্দি', 'নাক দিয়ে পানি পড়া বা বন্ধ হওয়া', 'হালকা জ্বর'],
          precautions: ['ঘন ঘন হাত ধুয়ে নিন', 'ভিড়ের জায়গা এড়িয়ে চলুন', 'কাশির সময় মুখ ঢেকে রাখুন'],
        },
        gastroenteritis: {
          name: 'গ্যাস্ট্রোএন্টেরাইটিস',
          symptoms: ['পেটে ব্যথা', 'বমি বমি ভাব ও বমি', 'ডায়রিয়া'],
          precautions: ['পরিষ্কার পানি পান করুন', 'তাজা রান্না করা খাবার খান', 'যথাযথ স্বাস্থ্যবিধি মেনে চলুন'],
        },
      },
    },
  },
  ta: {
    appName: 'நபா ஹெல்த் கனெக்ட்',
    tagline: 'மருத்துவ பராமரிப்பு, உங்கள் அருகில் — எப்போது வேண்டுமானாலும், உங்கள் மொழியில்।',
    
    home: 'முகப்பு',
    consult: 'ஆலோசனை',
    vitals: 'வாழ்க்கை அறிகுறிகள்',
    records: 'பதிவுகள்',
    profile: 'சுயவிவரம்',
    
    bookConsult: 'ஆலோசனை பதிவு',
    submitCase: 'வழக்கு சமர்ப்பிக்கவும்',
    startCall: 'அழைப்பு தொடங்கு',
    addVitals: 'வாழ்க்கை அறிகுறிகள் சேர்க்கவும்',
    syncPending: 'ஒத்திசைவு நிலுவையில்',
    register: 'பதிவு',
    signIn: 'உள்நுழைய',
    signOut: 'வெளியேறு',
    
    online: 'ஆன்லைன்',
    offline: 'ஆஃப்லைன்',
    synced: 'ஒத்திசைக்கப்பட்டது',
    pending: 'நிலுவையில்',
    connecting: 'இணைக்கிறது',
    
    homeCare: 'வீட்டு பராமரிப்பு',
    chwVisit: 'CHW விஜிட்',
    doctorConsult: 'மருத்துவர் ஆலோசனை',
    emergency: 'அவசர',
    
    phoneNumber: 'தொலைபேசி எண்',
    aadhaarNumber: 'ஆதார் எண்',
    fullName: 'முழு பெயர்',
    age: 'வயது',
    gender: 'பாலினம்',
    village: 'கிராமம்',
    symptoms: 'அறிகுறிகள்',
    duration: 'கால அளவு',
    severity: 'தீவிரத்தன்மை',
    
    save: 'சேமிக்கவும்',
    cancel: 'ரத்து',
    submit: 'சமர்ப்பிக்கவும்',
    next: 'அடுத்தது',
    back: 'திரும்பு',
    close: 'மூடு',
    yes: 'ஆம்',
    no: 'இல்லை',
    
    workingSaved: 'உங்கள் வேலை சேமிக்கப்பட்டது',
    willSyncWhenOnline: 'நீங்கள் மீண்டும் ஆன்லைனில் வரும்போது இது ஒத்திசைக்கப்படும்',
    offlineMode: 'ஆஃப்லைன் — இணைக்கப்பட்டதும் உங்கள் வேலை ஒத்திசைக்கப்படும்',
    
    healthNoticeBoard: {
      title: 'சுகாதார அறிவிப்பு பலகை',
      subtitle: 'தற்போதைய சுகாதார எச்சரிக்கைகள் & தடுப்பு குறிப்புகள்',
      seeMore: 'மேலும் பார்க்க',
      symptoms: 'அறிகுறிகள்',
      precautions: 'முன்னெச்சரிக்கைகள்',
      diseases: {
        viralFever: {
          name: 'வைரல் காய்ச்சல்',
          symptoms: ['அதிக காய்ச்சல் (101°F+)', 'உடல் வலி மற்றும் தலைவலி', 'பலவீனம் மற்றும் சோர்வு'],
          precautions: ['நிறைய திரவங்கள் குடிக்கவும்', 'போதுமான ஓய்வு எடுத்துக் கொள்ளவும்', 'காய்ச்சல் தொடர்ந்தால் மருத்துவரை அணுகவும்'],
        },
        dengue: {
          name: 'டெங்கு காய்ச்சல்',
          symptoms: ['திடீர் அதிக காய்ச்சல்', 'கடுமையான தலைவலி', 'கண்களுக்குப் பின்னால் வலி'],
          precautions: ['தேங்கிய நீரை அகற்றவும்', 'கொசு வலைகளைப் பயன்படுத்தவும்', 'உடனடி மருத்துவ உதவி பெறவும்'],
        },
        seasonalFlu: {
          name: 'பருவகால காய்ச்சல்',
          symptoms: ['இருமல் மற்றும் சளி', 'மூக்கு ஒழுகுதல் அல்லது அடைப்பு', 'லேசான காய்ச்சல்'],
          precautions: ['அடிக்கடி கைகளைக் கழுவவும்', 'கூட்டமான இடங்களைத் தவிர்க்கவும்', 'இருமும்போது வாயை மூடவும்'],
        },
        gastroenteritis: {
          name: 'வயிற்றுப்போக்கு',
          symptoms: ['வயிற்று வலி', 'குமட்டல் மற்றும் வாந்தி', 'வயிற்றுப்போக்கு'],
          precautions: ['சுத்தமான நீர் குடிக்கவும்', 'புதிதாக சமைத்த உணவை உண்ணவும்', 'சரியான சுகாதாரத்தைப் பேணவும்'],
        },
      },
    },
  },
  te: {
    appName: 'నభా హెల్త్ కనెక్ట్',
    tagline: 'వైద్య సంరక్షణ, మీ దగ్గర — ఎప్పుడైనా, మీ భాషలో।',
    
    home: 'హోమ్',
    consult: 'సలహా',
    vitals: 'జీవన సంకేతాలు',
    records: 'రికార్డులు',
    profile: 'ప్రొఫైల్',
    
    bookConsult: 'సలహా బుక్ చేయండి',
    submitCase: 'కేస్ సమర్పించండి',
    startCall: 'కాల్ ప్రారంభించండి',
    addVitals: 'జీవన సంకేతాలు జోడించండి',
    syncPending: 'సింక్ పెండింగ్',
    register: 'రిజిస్టర్',
    signIn: 'సైన్ ఇన్',
    signOut: 'సైన్ అవుట్',
    
    online: 'ఆన్‌లైన్',
    offline: 'ఆఫ్‌లైన్',
    synced: 'సింక్ అయ్యింది',
    pending: 'పెండింగ్',
    connecting: 'కనెక్ట్ అవుతోంది',
    
    homeCare: 'ఇంటి సంరక్షణ',
    chwVisit: 'CHW విజిట్',
    doctorConsult: 'వైద్యుల సలహా',
    emergency: 'అత్యవసరం',
    
    phoneNumber: 'ఫోన్ నంబర్',
    aadhaarNumber: 'ఆధార్ నంబర్',
    fullName: 'పూర్తి పేరు',
    age: 'వయస్సు',
    gender: 'లింగం',
    village: 'గ్రామం',
    symptoms: 'లక్షణాలు',
    duration: 'వ్యవధి',
    severity: 'తీవ్రత',
    
    save: 'సేవ్ చేయండి',
    cancel: 'రద్దు',
    submit: 'సమర్పించండి',
    next: 'తదుపరి',
    back: 'వెనుకకు',
    close: 'మూసివేయండి',
    yes: 'అవును',
    no: 'లేదు',
    
    workingSaved: 'మీ పని సేవ్ అయ్యింది',
    willSyncWhenOnline: 'మీరు మళ్లీ ఆన్‌లైన్‌కు వచ్చినప్పుడు ఇది సింక్ అవుతుంది',
    offlineMode: 'ఆఫ్‌లైన్ — కనెక్ట్ అయినప్పుడు మీ పని సింక్ అవుతుంది',
    
    healthNoticeBoard: {
      title: 'ఆరోగ్య నోటీసు బోర్డు',
      subtitle: 'ప్రస్తుత ఆరోగ్య హెచ్చరికలు & నివారణ చిట్కాలు',
      seeMore: 'మరింత చూడండి',
      symptoms: 'లక్షణాలు',
      precautions: 'జాగ్రత్తలు',
      diseases: {
        viralFever: {
          name: 'వైరల్ జ్వరం',
          symptoms: ['అధిక జ్వరం (101°F+)', 'శరీర నొప్పులు మరియు తలనొప్పి', 'బలహీనత మరియు అలసట'],
          precautions: ['చాలా ద్రవాలు త్రాగండి', 'తగినంత విశ్రాంతి తీసుకోండి', 'జ్వరం కొనసాగితే వైద్యుడిని సంప్రదించండి'],
        },
        dengue: {
          name: 'డెంగ్యూ జ్వరం',
          symptoms: ['అకస్మాత్తుగా అధిక జ్వరం', 'తీవ్రమైన తలనొప్పి', 'కళ్ళ వెనుక నొప్పి'],
          precautions: ['నిలిచిన నీటిని తొలగించండి', 'దోమల వలలను వాడండి', 'వెంటనే వైద్య సహాయం తీసుకోండి'],
        },
        seasonalFlu: {
          name: 'కాలానుగుణ ఫ్లూ',
          symptoms: ['దగ్గు మరియు జలుబు', 'ముక్కు కారడం లేదా మూసుకోవడం', 'తేలికపాటి జ్వరం'],
          precautions: ['తరచుగా చేతులు కడుక్కోండి', 'రద్దీ ఉన్న ప్రాంతాలను తప్పించండి', 'దగ్గేటప్పుడు నోరు కప్పుకోండి'],
        },
        gastroenteritis: {
          name: 'గ్యాస్ట్రోఎంటరైటిస్',
          symptoms: ['కడుపు నొప్పి', 'వికారం మరియు వాంతులు', 'అతిసారం'],
          precautions: ['శుభ్రమైన నీరు త్రాగండి', 'తాజాగా వండిన ఆహారం తినండి', 'సరైన పరిశుభ్రతను పాటించండి'],
        },
      },
    },
  },
  gu: {
    appName: 'નભા હેલ્થ કનેક્ટ',
    tagline: 'ડૉક્ટરની સંભાળ, તમારી નજીક — કોઈપણ સમયે, તમારી ભાષામાં।',
    
    home: 'હોમ',
    consult: 'સલાહ',
    vitals: 'જીવન સંકેતો',
    records: 'રેકોર્ડ',
    profile: 'પ્રોફાઇલ',
    
    bookConsult: 'સલાહ બુક કરો',
    submitCase: 'કેસ સબમિટ કરો',
    startCall: 'કૉલ શરૂ કરો',
    addVitals: 'જીવન સંકેતો ઉમેરો',
    syncPending: 'સિંક બાકી',
    register: 'નોંધણી',
    signIn: 'સાઇન ઇન',
    signOut: 'સાઇન આઉટ',
    
    online: 'ઓનલાઇન',
    offline: 'ઓફલાઇન',
    synced: 'સિંક થઈ ગયું',
    pending: 'બાકી',
    connecting: 'કનેક્ટ થઈ રહ્યું છે',
    
    homeCare: 'ઘરની સંભાળ',
    chwVisit: 'CHW મુલાકાત',
    doctorConsult: 'ડૉક્ટરની સલાહ',
    emergency: 'કટોકટી',
    
    phoneNumber: 'ફોન નંબર',
    aadhaarNumber: 'આધાર નંબર',
    fullName: 'પૂરું નામ',
    age: 'ઉંમર',
    gender: 'લિંગ',
    village: 'ગામ',
    symptoms: 'લક્ષણો',
    duration: 'અવધિ',
    severity: 'ગંભીરતા',
    
    save: 'સેવ કરો',
    cancel: 'રદ કરો',
    submit: 'સબમિટ કરો',
    next: 'આગળ',
    back: 'પાછળ',
    close: 'બંધ કરો',
    yes: 'હા',
    no: 'ના',
    
    workingSaved: 'તમારું કામ સેવ થઈ ગયું છે',
    willSyncWhenOnline: 'જ્યારે તમે ફરીથી ઓનલાઈન આવશો ત્યારે તે સિંક થશે',
    offlineMode: 'ઓફલાઇન — કનેક્ટ થાય ત્યારે તમારું કામ સિંક થશે',
    
    healthNoticeBoard: {
      title: 'આરોગ્ય સૂચના બોર્ડ',
      subtitle: 'વર્તમાન આરોગ્ય ચેતવણીઓ અને નિવારણ ટિપ્સ',
      seeMore: 'વધુ જુઓ',
      symptoms: 'લક્ષણો',
      precautions: 'સાવચેતીઓ',
      diseases: {
        viralFever: {
          name: 'વાઇરલ તાવ',
          symptoms: ['વધારે તાવ (101°F+)', 'શરીરમાં દુખાવો અને માથાનો દુખાવો', 'નબળાઇ અને થાક'],
          precautions: ['ઘણું પાણી પીવો', 'પૂરતો આરામ કરો', 'તાવ ચાલુ રહે તો ડૉક્ટરની સલાહ લો'],
        },
        dengue: {
          name: 'ડેન્ગ્યુ તાવ',
          symptoms: ['અચાનક વધારે તાવ', 'તીવ્ર માથાનો દુખાવો', 'આંખોની પાછળ દુખાવો'],
          precautions: ['ઉભું પાણી હટાવો', 'મચ્છરદાનીનો ઉપયોગ કરો', 'તુરંત વૈદ્યકીય મદદ લો'],
        },
        seasonalFlu: {
          name: 'સીઝનલ ફ્લૂ',
          symptoms: ['ઉધરસ અને સર્દી', 'નાક વહેવું કે બંધ થવું', 'હળવો તાવ'],
          precautions: ['વારંવાર હાથ ધોવા', 'ભીડવાળી જગ્યાઓ ટાળો', 'ઉધરસ આવે ત્યારે મોં ઢાંકો'],
        },
        gastroenteritis: {
          name: 'ગેસ્ટ્રોએન્ટેરાઇટિસ',
          symptoms: ['પેટમાં દુખાવો', 'ઉલટી અને ઘેન', 'ઝાડા'],
          precautions: ['સાફ પાણી પીવો', 'તાજું બનાવેલું ખાનું ખાવું', 'યોગ્ય સ્વચ્છતા જાળવો'],
        },
      },
    },
  },
  mr: {
    appName: 'नभा हेल्थ कनेक्ट',
    tagline: 'डॉक्टरांची काळजी, तुमच्या जवळ — कधीही, तुमच्या भाषेत।',
    
    home: 'होम',
    consult: 'सल्ला',
    vitals: 'जीवन चिन्हे',
    records: 'रेकॉर्ड',
    profile: 'प्रोफाइल',
    
    bookConsult: 'सल्ला बुक करा',
    submitCase: 'केस सादर करा',
    startCall: 'कॉल सुरू करा',
    addVitals: 'जीवन चिन्हे जोडा',
    syncPending: 'सिंक प्रलंबित',
    register: 'नोंदणी',
    signIn: 'साइन इन',
    signOut: 'साइन आउट',
    
    online: 'ऑनलाईन',
    offline: 'ऑफलाईन',
    synced: 'सिंक झाले',
    pending: 'प्रलंबित',
    connecting: 'कनेक्ट होत आहे',
    
    homeCare: 'घरगुती काळजी',
    chwVisit: 'CHW भेट',
    doctorConsult: 'डॉक्टरांचा सल्ला',
    emergency: 'आपत्कालीन',
    
    phoneNumber: 'फोन नंबर',
    aadhaarNumber: 'आधार नंबर',
    fullName: 'पूर्ण नाव',
    age: 'वय',
    gender: 'लिंग',
    village: 'गाव',
    symptoms: 'लक्षणे',
    duration: 'कालावधी',
    severity: 'तीव्रता',
    
    save: 'सेव्ह करा',
    cancel: 'रद्द करा',
    submit: 'सादर करा',
    next: 'पुढील',
    back: 'मागे',
    close: 'बंद करा',
    yes: 'होय',
    no: 'नाही',
    
    workingSaved: 'तुमचे काम सेव्ह झाले आहे',
    willSyncWhenOnline: 'तुम्ही पुन्हा ऑनलाईन आल्यावर ते सिंक होईल',
    offlineMode: 'ऑफलाईन — कनेक्ट झाल्यावर तुमचे काम सिंक होईल',
    
    healthNoticeBoard: {
      title: 'आरोग्य सूचना फलक',
      subtitle: 'सध्याच्या आरोग्य इशाऱ्या आणि प्रतिबंधक टिप्स',
      seeMore: 'अधिक पहा',
      symptoms: 'लक्षणे',
      precautions: 'खबरदारी',
      diseases: {
        viralFever: {
          name: 'व्हायरल ताप',
          symptoms: ['जास्त ताप (101°F+)', 'शरीरात दुखणे आणि डोकेदुखी', 'कमकुवतपणा आणि थकवा'],
          precautions: ['भरपूर पाणी प्या', 'पुरेशी विश्रांती घ्या', 'ताप सुरू राहिल्यास डॉक्टरांचा सल्ला घ्या'],
        },
        dengue: {
          name: 'डेंग्यू ताप',
          symptoms: ['अचानक जास्त ताप', 'तीव्र डोकेदुखी', 'डोळ्यांच्या मागे दुखणे'],
          precautions: ['साचलेले पाणी काढून टाका', 'डासांच्या जाळ्यांचा वापर करा', 'ताबडतोब वैद्यकीय मदत घ्या'],
        },
        seasonalFlu: {
          name: 'हंगामी फ्लू',
          symptoms: ['खोकला आणि सर्दी', 'नाक वाहणे किंवा बंद होणे', 'हलका ताप'],
          precautions: ['वारंवार हात धुवा', 'गर्दीची ठिकाणे टाळा', 'खोकताना तोंड झाकून घ्या'],
        },
        gastroenteritis: {
          name: 'गॅस्ट्रोएन्टेरायटिस',
          symptoms: ['पोटात दुखणे', 'मळमळ आणि उलट्या', 'जुलाब'],
          precautions: ['स्वच्छ पाणी प्या', 'ताजे शिजवलेले अन्न खा', 'योग्य स्वच्छता पाळा'],
        },
      },
    },
  },
  ur: {
    appName: 'نبھا ہیلتھ کنیکٹ',
    tagline: 'ڈاکٹر کی دیکھ بھال، آپ کے قریب — کبھی بھی، آپ کی زبان میں۔',
    
    home: 'ہوم',
    consult: 'مشورہ',
    vitals: 'حیاتی علامات',
    records: 'ریکارڈ',
    profile: 'پروفائل',
    
    bookConsult: 'مشورہ بک کریں',
    submitCase: 'کیس جمع کریں',
    startCall: 'کال شروع کریں',
    addVitals: 'حیاتی علامات شامل کریں',
    syncPending: 'سنک باقی',
    register: 'رجسٹر',
    signIn: 'سائن ان',
    signOut: 'سائن آؤٹ',
    
    online: 'آن لائن',
    offline: 'آف لائن',
    synced: 'سنک ہو گیا',
    pending: 'باقی',
    connecting: 'کنیکٹ ہو رہا ہے',
    
    homeCare: 'گھریلو نگہداشت',
    chwVisit: 'CHW ملاقات',
    doctorConsult: 'ڈاکٹر کا مشورہ',
    emergency: 'ایمرجنسی',
    
    phoneNumber: 'فون نمبر',
    aadhaarNumber: 'آدھار نمبر',
    fullName: 'مکمل نام',
    age: 'عمر',
    gender: 'جنس',
    village: 'گاؤں',
    symptoms: 'علامات',
    duration: 'مدت',
    severity: 'شدت',
    
    save: 'محفوظ کریں',
    cancel: 'منسوخ کریں',
    submit: 'جمع کریں',
    next: 'اگلا',
    back: 'واپس',
    close: 'بند کریں',
    yes: 'ہاں',
    no: 'نہیں',
    
    workingSaved: 'آپ کا کام محفوظ ہو گیا ہے',
    willSyncWhenOnline: 'جب آپ واپس آن لائن ہوں گے تو یہ سنک ہو جائے گا',
    offlineMode: 'آف لائن — کنیکٹ ہونے پر آپ کا کام سنک ہو جائے گا',
    
    healthNoticeBoard: {
      title: 'صحت کا اطلاعی بورڈ',
      subtitle: 'موجودہ صحت کی خبردار اور احتیاطی تجاویز',
      seeMore: 'مزید دیکھیں',
      symptoms: 'علامات',
      precautions: 'احتیاطات',
      diseases: {
        viralFever: {
          name: 'وائرل بخار',
          symptoms: ['تیز بخار (101°F+)', 'جسم میں درد اور سر درد', 'کمزوری اور تھکان'],
          precautions: ['زیادہ پانی پئیں', 'کافی آرام کریں', 'بخار برقرار رہے تو ڈاکٹر سے مشورہ لیں'],
        },
        dengue: {
          name: 'ڈینگو بخار',
          symptoms: ['اچانک تیز بخار', 'شدید سر درد', 'آنکھوں کے پیچھے درد'],
          precautions: ['کھڑا پانی ہٹائیں', 'مچھردانی استعمال کریں', 'فوری طبی مدد لیں'],
        },
        seasonalFlu: {
          name: 'موسمی فلو',
          symptoms: ['کھانسی اور زکام', 'ناک بہنا یا بند ہونا', 'ہلکا بخار'],
          precautions: ['بار بار ہاتھ دھوئیں', 'بھیڑ والی جگہوں سے بچیں', 'کھانستے وقت منہ ڈھانپیں'],
        },
        gastroenteritis: {
          name: 'گیسٹرو انٹرائٹس',
          symptoms: ['پیٹ میں درد', 'متلی اور قے', 'اسہال'],
          precautions: ['صاف پانی پئیں', 'تازہ پکا ہوا کھانا کھائیں', 'مناسب صفائی برقرار رکھیں'],
        },
      },
    },
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