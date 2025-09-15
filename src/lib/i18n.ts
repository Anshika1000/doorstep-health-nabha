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