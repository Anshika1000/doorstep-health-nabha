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
    showLess: string;
    live: string;
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

  // Patient Home Page
  patientHome: {
    welcomeTo: string;
    consultDescription: string;
    vitalsDescription: string;
    hospitalNetwork: string;
    doctorsStaffed: string;
    servingVillages: string;
    availableEmergency: string;
    connected: string;
    yourHealthSummary: string;
    consultations: string;
    vitalsRecorded: string;
    prescriptions: string;
    lastCheckup: string;
    recentActivity: string;
    viewAll: string;
    communityHealthWorker: string;
    chwDescription: string;
    contactCHW: string;
    
    // Activity types
    activities: {
      consultCompleted: string;
      consultCompletedDesc: string;
      bloodPressureRecorded: string;
      bloodPressureDesc: string;
      prescriptionIssued: string;
      prescriptionDesc: string;
      bloodGlucoseMeasured: string;
      bloodGlucoseDesc: string;
      followupScheduled: string;
      followupDesc: string;
      labResults: string;
      labResultsDesc: string;
      temperatureRecorded: string;
      temperatureDesc: string;
    };
    
    // Status
    status: {
      completed: string;
      normal: string;
      available: string;
      scheduled: string;
    };
    
    // Time periods
    timeAgo: {
      hoursAgo: string;
      dayAgo: string;
      daysAgo: string;
      weekAgo: string;
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
      showLess: 'Show Less', 
      live: 'Live',
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

    patientHome: {
      welcomeTo: 'Welcome to',
      consultDescription: 'Get medical advice from qualified doctors',
      vitalsDescription: 'Record your health measurements',
      hospitalNetwork: 'Nabha Civil Hospital Network',
      doctorsStaffed: 'doctors staffed',
      servingVillages: 'Serving',
      availableEmergency: 'Available 24/7 for emergencies',
      connected: 'Connected',
      yourHealthSummary: 'Your Health Summary',
      consultations: 'Consultations',
      vitalsRecorded: 'Vitals Recorded',
      prescriptions: 'Prescriptions',
      lastCheckup: 'Last Checkup',
      recentActivity: 'Recent Activity',
      viewAll: 'View All',
      communityHealthWorker: 'Community Health Worker',
      chwDescription: 'Available for home visits and assistance',
      contactCHW: 'Contact CHW',
      
      activities: {
        consultCompleted: 'Video consultation completed',
        consultCompletedDesc: 'General Medicine',
        bloodPressureRecorded: 'Blood pressure recorded',
        bloodPressureDesc: 'Normal range',
        prescriptionIssued: 'E-prescription issued',
        prescriptionDesc: 'Available at local pharmacy',
        bloodGlucoseMeasured: 'Blood glucose measured',
        bloodGlucoseDesc: 'Normal fasting level',
        followupScheduled: 'Follow-up appointment scheduled',
        followupDesc: 'Pediatrics',
        labResults: 'Lab test results available',
        labResultsDesc: 'All values normal',
        temperatureRecorded: 'Temperature recorded',
        temperatureDesc: 'Normal body temperature',
      },
      
      status: {
        completed: 'completed',
        normal: 'normal',
        available: 'available',
        scheduled: 'scheduled',
      },
      
      timeAgo: {
        hoursAgo: 'hours ago',
        dayAgo: 'day ago',
        daysAgo: 'days ago',
        weekAgo: 'week ago',
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
      showLess: 'कम देखें',
      live: 'लाइव',
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

    patientHome: {
      welcomeTo: 'स्वागत है',
      consultDescription: 'योग्य डॉक्टरों से चिकित्सा सलाह लें',
      vitalsDescription: 'अपने स्वास्थ्य संकेत दर्ज करें',
      hospitalNetwork: 'नाभा सिविल अस्पताल नेटवर्क',
      doctorsStaffed: 'डॉक्टर कार्यरत',
      servingVillages: 'सेवा में',
      availableEmergency: 'आपातकाल के लिए 24/7 उपलब्ध',
      connected: 'जुड़ा हुआ',
      yourHealthSummary: 'आपका स्वास्थ्य सारांश',
      consultations: 'परामर्श',
      vitalsRecorded: 'जीवन संकेत दर्ज',
      prescriptions: 'नुस्खे',
      lastCheckup: 'अंतिम जांच',
      recentActivity: 'हाल की गतिविधि',
      viewAll: 'सभी देखें',
      communityHealthWorker: 'सामुदायिक स्वास्थ्य कार्यकर्ता',
      chwDescription: 'घर पर जाकर सेवा और सहायता के लिए उपलब्ध',
      contactCHW: 'CHW से संपर्क करें',
      
      activities: {
        consultCompleted: 'वीडियो परामर्श पूरा हुआ',
        consultCompletedDesc: 'सामान्य चिकित्सा',
        bloodPressureRecorded: 'रक्तचाप दर्ज किया गया',
        bloodPressureDesc: 'सामान्य सीमा',
        prescriptionIssued: 'ई-नुस्खा जारी किया गया',
        prescriptionDesc: 'स्थानीय फार्मेसी में उपलब्ध',
        bloodGlucoseMeasured: 'रक्त शर्करा मापी गई',
        bloodGlucoseDesc: 'सामान्य उपवास स्तर',
        followupScheduled: 'फॉलो-अप अपॉइंटमेंट निर्धारित',
        followupDesc: 'बाल चिकित्सा',
        labResults: 'प्रयोगशाला परीक्षण परिणाम उपलब्ध',
        labResultsDesc: 'सभी मान सामान्य',
        temperatureRecorded: 'तापमान दर्ज किया गया',
        temperatureDesc: 'सामान्य शरीर का तापमान',
      },
      
      status: {
        completed: 'पूर्ण',
        normal: 'सामान्य',
        available: 'उपलब्ध',
        scheduled: 'निर्धारित',
      },
      
      timeAgo: {
        hoursAgo: 'घंटे पहले',
        dayAgo: 'दिन पहले',
        daysAgo: 'दिन पहले',
        weekAgo: 'सप्ताह पहले',
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
      showLess: 'ਘੱਟ ਵੇਖੋ',
      live: 'ਲਾਈਵ',
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

    patientHome: {
      welcomeTo: 'ਜੀ ਆਇਆਂ ਨੂੰ',
      consultDescription: 'ਯੋਗ ਡਾਕਟਰਾਂ ਤੋਂ ਮੈਡੀਕਲ ਸਲਾਹ ਲਓ',
      vitalsDescription: 'ਆਪਣੇ ਸਿਹਤ ਮਾਪ ਦਰਜ ਕਰੋ',
      hospitalNetwork: 'ਨਾਭਾ ਸਿਵਲ ਹਸਪਤਾਲ ਨੈੱਟਵਰਕ',
      doctorsStaffed: 'ਡਾਕਟਰ ਤੈਨਾਤ',
      servingVillages: 'ਸੇਵਾ ਵਿੱਚ',
      availableEmergency: 'ਐਮਰਜੈਂਸੀ ਲਈ 24/7 ਉਪਲਬਧ',
      connected: 'ਜੁੜਿਆ ਹੋਇਆ',
      yourHealthSummary: 'ਤੁਹਾਡਾ ਸਿਹਤ ਸਾਰ',
      consultations: 'ਸਲਾਹ',
      vitalsRecorded: 'ਜੀਵਨ ਸੰਕੇਤ ਦਰਜ',
      prescriptions: 'ਨੁਸਖੇ',
      lastCheckup: 'ਆਖਰੀ ਜਾਂਚ',
      recentActivity: 'ਹਾਲ ਦੀ ਗਤੀਵਿਧੀ',
      viewAll: 'ਸਭ ਵੇਖੋ',
      communityHealthWorker: 'ਕਮਿਊਨਿਟੀ ਹੈਲਥ ਵਰਕਰ',
      chwDescription: 'ਘਰੇਲੂ ਮੁਲਾਕਾਤ ਅਤੇ ਸਹਾਇਤਾ ਲਈ ਉਪਲਬਧ',
      contactCHW: 'CHW ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
      
      activities: {
        consultCompleted: 'ਵੀਡੀਓ ਸਲਾਹ ਪੂਰੀ ਹੋਈ',
        consultCompletedDesc: 'ਜਨਰਲ ਮੈਡੀਸਨ',
        bloodPressureRecorded: 'ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ ਦਰਜ ਕੀਤਾ ਗਿਆ',
        bloodPressureDesc: 'ਸਾਧਾਰਣ ਰੇਂਜ',
        prescriptionIssued: 'ਈ-ਨੁਸਖਾ ਜਾਰੀ ਕੀਤਾ ਗਿਆ',
        prescriptionDesc: 'ਸਥਾਨਕ ਫਾਰਮੇਸੀ ਵਿੱਚ ਉਪਲਬਧ',
        bloodGlucoseMeasured: 'ਖੂਨ ਵਿੱਚ ਸ਼ੂਗਰ ਮਾਪੀ ਗਈ',
        bloodGlucoseDesc: 'ਸਾਧਾਰਣ ਖਾਲੀ ਪੇਟ ਪੱਧਰ',
        followupScheduled: 'ਫਾਲੋ-ਅੱਪ ਮੁਲਾਕਾਤ ਨਿਰਧਾਰਿਤ',
        followupDesc: 'ਬਾਲ ਰੋਗ ਵਿਭਾਗ',
        labResults: 'ਲੈਬ ਟੈਸਟ ਦੇ ਨਤੀਜੇ ਉਪਲਬਧ',
        labResultsDesc: 'ਸਾਰੇ ਮੁੱਲ ਸਾਧਾਰਣ',
        temperatureRecorded: 'ਤਾਪਮਾਨ ਦਰਜ ਕੀਤਾ ਗਿਆ',
        temperatureDesc: 'ਸਾਧਾਰਣ ਸਰੀਰਕ ਤਾਪਮਾਨ',
      },
      
      status: {
        completed: 'ਪੂਰਾ ਹੋਇਆ',
        normal: 'ਸਾਧਾਰਣ',
        available: 'ਉਪਲਬਧ',
        scheduled: 'ਨਿਰਧਾਰਿਤ',
      },
      
      timeAgo: {
        hoursAgo: 'ਘੰਟੇ ਪਹਿਲਾਂ',
        dayAgo: 'ਦਿਨ ਪਹਿਲਾਂ',
        daysAgo: 'ਦਿਨ ਪਹਿਲਾਂ',
        weekAgo: 'ਹਫ਼ਤਾ ਪਹਿਲਾਂ',
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
      showLess: 'কম দেখুন',
      live: 'লাইভ',
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

    patientHome: {
      welcomeTo: 'স্বাগতম',
      consultDescription: 'যোগ্য ডাক্তারদের কাছ থেকে চিকিৎসা পরামর্শ নিন',
      vitalsDescription: 'আপনার স্বাস্থ্য পরিমাপ রেকর্ড করুন',
      hospitalNetwork: 'নভা সিভিল হাসপাতাল নেটওয়ার্ক',
      doctorsStaffed: 'ডাক্তার কর্মরত',
      servingVillages: 'সেবা প্রদান',
      availableEmergency: 'জরুরী অবস্থার জন্য ২৪/৭ উপলব্ধ',
      connected: 'সংযুক্ত',
      yourHealthSummary: 'আপনার স্বাস্থ্য সারসংক্ষেপ',
      consultations: 'পরামর্শ',
      vitalsRecorded: 'জীবন সংকেত রেকর্ড',
      prescriptions: 'প্রেসক্রিপশন',
      lastCheckup: 'শেষ চেকআপ',
      recentActivity: 'সাম্প্রতিক কার্যকলাপ',
      viewAll: 'সব দেখুন',
      communityHealthWorker: 'কমিউনিটি স্বাস্থ্যকর্মী',
      chwDescription: 'বাড়িতে পরিদর্শন ও সহায়তার জন্য উপলব্ধ',
      contactCHW: 'CHW এর সাথে যোগাযোগ করুন',
      
      activities: {
        consultCompleted: 'ভিডিও পরামর্শ সম্পন্ন',
        consultCompletedDesc: 'সাধারণ চিকিৎসা',
        bloodPressureRecorded: 'রক্তচাপ রেকর্ড করা হয়েছে',
        bloodPressureDesc: 'স্বাভাবিক পরিসর',
        prescriptionIssued: 'ই-প্রেসক্রিপশন জারি করা হয়েছে',
        prescriptionDesc: 'স্থানীয় ফার্মেসিতে উপলব্ধ',
        bloodGlucoseMeasured: 'রক্তে গ্লুকোজ পরিমাপ করা হয়েছে',
        bloodGlucoseDesc: 'স্বাভাবিক উপবাসের মাত্রা',
        followupScheduled: 'ফলো-আপ অ্যাপয়েন্টমেন্ট নির্ধারিত',
        followupDesc: 'শিশু বিশেষজ্ঞ',
        labResults: 'ল্যাব পরীক্ষার ফলাফল উপলব্ধ',
        labResultsDesc: 'সব মান স্বাভাবিক',
        temperatureRecorded: 'তাপমাত্রা রেকর্ড করা হয়েছে',
        temperatureDesc: 'স্বাভাবিক শরীরের তাপমাত্রা',
      },
      
      status: {
        completed: 'সম্পন্ন',
        normal: 'স্বাভাবিক',
        available: 'উপলব্ধ',
        scheduled: 'নির্ধারিত',
      },
      
      timeAgo: {
        hoursAgo: 'ঘন্টা আগে',
        dayAgo: 'দিন আগে',
        daysAgo: 'দিন আগে',
        weekAgo: 'সপ্তাহ আগে',
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
      showLess: 'குறைவாக பார்க்க',
      live: 'நேரலை',
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

    patientHome: {
      welcomeTo: 'வரவேற்கிறோம்',
      consultDescription: 'தகுதிவாய்ந்த மருத்துவர்களிடமிருந்து மருத்துவ ஆலோசனை பெறுங்கள்',
      vitalsDescription: 'உங்கள் நலம் அளவீடுகளை பதிவு செய்யுங்கள்',
      hospitalNetwork: 'நபா சிவில் மருத்துவமனை நெட்வொர்க்',
      doctorsStaffed: 'மருத்துவர்கள் பணியில்',
      servingVillages: 'சேவை செய்யும்',
      availableEmergency: 'அவசரநிலைகளுக்கு 24/7 கிடைக்கும்',
      connected: 'இணைக்கப்பட்டது',
      yourHealthSummary: 'உங்கள் நலம் சுருக்கம்',
      consultations: 'ஆலோசனைகள்',
      vitalsRecorded: 'வாழ்க்கை அறிகுறிகள் பதிவு',
      prescriptions: 'மருந்து பரிந்துரைகள்',
      lastCheckup: 'கடைசி பரிசோதனை',
      recentActivity: 'சமீபத்திய செயல்பாடு',
      viewAll: 'அனைத்தையும் பார்க்கவும்',
      communityHealthWorker: 'சமுதாய நல ஊழியர்',
      chwDescription: 'வீட்டு விஜயங்கள் மற்றும் உதவிக்கு கிடைக்கும்',
      contactCHW: 'CHW ஐ தொடர்பு கொள்ளவும்',
      
      activities: {
        consultCompleted: 'வீடியோ ஆலோசனை முடிந்தது',
        consultCompletedDesc: 'பொது மருத்துவம்',
        bloodPressureRecorded: 'இரத்த அழுத்தம் பதிவு செய்யப்பட்டது',
        bloodPressureDesc: 'சாதாரண அளவு',
        prescriptionIssued: 'மின்-மருந்து பரிந்துரை வழங்கப்பட்டது',
        prescriptionDesc: 'உள்ளூர் மருந்தகத்தில் கிடைக்கும்',
        bloodGlucoseMeasured: 'இரத்த குளுக்கோஸ் அளவிடப்பட்டது',
        bloodGlucoseDesc: 'சாதாரண உண்ணாவிரத நிலை',
        followupScheduled: 'தொடர்-சிகிச்சை சந்திப்பு திட்டமிடப்பட்டது',
        followupDesc: 'குழந்தைகள் மருத்துவம்',
        labResults: 'ஆய்வக பரிசோதனை முடிவுகள் கிடைக்கும்',
        labResultsDesc: 'அனைத்து மதிப்புகளும் சாதாரணம்',
        temperatureRecorded: 'வெப்பநிலை பதிவு செய்யப்பட்டது',
        temperatureDesc: 'சாதாரண உடல் வெப்பநிலை',
      },
      
      status: {
        completed: 'முடிந்தது',
        normal: 'சாதாரணம்',
        available: 'கிடைக்கும்',
        scheduled: 'திட்டமிடப்பட்டது',
      },
      
      timeAgo: {
        hoursAgo: 'மணி நேரங்களுக்கு முன்',
        dayAgo: 'நாளுக்கு முன்',
        daysAgo: 'நாட்களுக்கு முன்',
        weekAgo: 'வாரத்திற்கு முன்',
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
      showLess: 'తక్కువ చూడండి',
      live: 'లైవ్',
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
      showLess: 'ઓછું જુઓ',
      live: 'લાઈવ',
      symptoms: 'લક્ષણો',
      precautions: 'સાવધાનીઓ',
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

    patientHome: {
      welcomeTo: 'స్వాగతం',
      consultDescription: 'అర్హత కలిగిన వైద్యుల నుండి వైద్య సలహా పొందండి',
      vitalsDescription: 'మీ ఆరోగ్య కొలతలను రికార్డు చేయండి',
      hospitalNetwork: 'నభా సివిల్ హాస్పిటల్ నెట్‌వర్క్',
      doctorsStaffed: 'వైద్యులు పనిలో',
      servingVillages: 'సేవ చేస్తున్న',
      availableEmergency: 'అత్యవసర పరిస్థితుల కోసం 24/7 అందుబాటులో',
      connected: 'కనెక్ట్ అయ్యింది',
      yourHealthSummary: 'మీ ఆరోగ్య సారాంశం',
      consultations: 'సలహాలు',
      vitalsRecorded: 'జీవన సంకేతాలు రికార్డు',
      prescriptions: 'మందుల ప్రిస్క్రిప్షన్లు',
      lastCheckup: 'చివరి చెకప్',
      recentActivity: 'ఇటీవలి కార్యకలాపం',
      viewAll: 'అన్నీ చూడండి',
      communityHealthWorker: 'కమ్యూనిటీ హెల్త్ వర్కర్',
      chwDescription: 'ఇంటికి వచ్చే సందర్శనలు మరియు సహాయం కోసం అందుబాటులో',
      contactCHW: 'CHW ని సంప్రదించండి',
      
      activities: {
        consultCompleted: 'వీడియో సలహా పూర్తయింది',
        consultCompletedDesc: 'సాధారణ వైద్యం',
        bloodPressureRecorded: 'రక్తపోటు రికార్డు చేయబడింది',
        bloodPressureDesc: 'సాధారణ పరిధి',
        prescriptionIssued: 'ఇ-ప్రిస్క్రిప్షన్ జారీ చేయబడింది',
        prescriptionDesc: 'స్థానిక ఫార్మసీలో అందుబాటులో',
        bloodGlucoseMeasured: 'రక్తంలో గ్లూకోజ్ కొలవబడింది',
        bloodGlucoseDesc: 'సాధారణ ఉపవాస స్థాయి',
        followupScheduled: 'ఫాలో-అప్ అపాయింట్మెంట్ షెడ్యూల్ చేయబడింది',
        followupDesc: 'పిల్లల వైద్యం',
        labResults: 'ల్యాబ్ టెస్ట్ ఫలితాలు అందుబాటులో',
        labResultsDesc: 'అన్ని విలువలు సాధారణం',
        temperatureRecorded: 'ఉష్ణోగ్రత రికార్డు చేయబడింది',
        temperatureDesc: 'సాధారణ శరీర ఉష్ణోగ్రత',
      },
      
      status: {
        completed: 'పూర్తయింది',
        normal: 'సాధారణం',
        available: 'అందుబాటులో',
        scheduled: 'షెడ్యూల్ చేయబడింది',
      },
      
      timeAgo: {
        hoursAgo: 'గంటల క్రితం',
        dayAgo: 'రోజు క్రితం',
        daysAgo: 'రోజుల క్రితం',
        weekAgo: 'వారం క్రితం',
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