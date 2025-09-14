# Nabha Health Connect - Rural Telemedicine Platform

**Doctor care, near you — anytime, in your language.**

A production-quality, accessible, offline-first Progressive Web App (PWA) that enables rural patients in Nabha and surrounding villages to access telemedicine services through Community Health Worker (CHW) assistance, asynchronous consultations, and live video/audio when connectivity allows.

## 🌟 Features

### Core Functionality
- **Offline-First Architecture**: Full functionality without internet connection
- **Multilingual Support**: Punjabi (Gurmukhi), Hindi, and English with voice guidance
- **Touch-Optimized UI**: Large touch targets (≥44px) for low dexterity users
- **PWA Capabilities**: Installable, fast, and reliable

### Patient Features
- 🔍 **AI Symptom Checker**: Voice and image-enabled symptom assessment
- 📊 **Vitals Tracking**: Manual entry and Bluetooth device pairing
- 💬 **Consultation Options**: Async (store-and-forward) and live video calls
- 📋 **Digital Health Records**: FHIR-compatible patient data
- 💊 **E-Prescription & Pharmacy**: Medicine availability and ordering

### Healthcare Provider Features
- 🩺 **Doctor Dashboard**: Queue management and patient consultations
- 👥 **CHW Mode**: Simplified interface for Community Health Workers
- 🏥 **Admin Analytics**: Health metrics and village coverage insights
- 🔄 **Sync Management**: Offline data synchronization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser with PWA support

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nabha-health-connect

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

### PWA Installation
- **Mobile**: Open in browser → "Add to Home Screen"
- **Desktop**: Look for install prompt in address bar

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui with enhanced variants
- **State Management**: React Query + Context API
- **Offline Storage**: IndexedDB with custom sync queue
- **PWA**: Service Worker + Web App Manifest

### Offline-First Design
- **Service Worker**: Caches app shell and API responses
- **IndexedDB**: Local data persistence and sync queue
- **Background Sync**: Automatic data synchronization when online
- **Conflict Resolution**: User-friendly merge strategies

### Design System
```css
/* Color Palette */
--primary: #0B6E6E (Deep Teal - Medical Trust)
--secondary: #E07A2C (Warm Saffron - Approachable)
--success: #22C55E (Health/Normal)
--warning: #F59E0B (Attention Needed)
--emergency: #DC2626 (Urgent Care)

/* Typography */
font-family: 'Noto Sans', 'Noto Sans Gurmukhi' (Multilingual)
Touch targets: ≥48px (WCAG AA compliance)
```

## 📱 User Flows

### Patient Registration (CHW-Assisted)
1. CHW opens registration form
2. Captures phone number + optional Aadhaar
3. Voice consent recording in local language
4. Photo ID capture if needed
5. Offline storage with sync when online

### Symptom Assessment
1. Patient describes symptoms (text/voice)
2. Photo upload for visual symptoms
3. AI triage recommendation with confidence
4. Escalation path: Home Care → CHW → Doctor → Emergency

### Async Consultation
1. Submit case with symptoms + vitals + photos
2. Store locally if offline
3. Doctor reviews and responds asynchronously
4. SMS notification for patient response
5. E-prescription generation

## 🌐 API Integration

### Mock API Endpoints
```typescript
// Authentication
POST /api/auth/otp - Send OTP
POST /api/auth/verify - Verify OTP

// Patients
GET /api/patients - List patients
POST /api/patients - Create patient
GET /api/patients/:id - Get patient details

// Consultations
GET /api/consults - List consultations
POST /api/consults - Create consultation
PUT /api/consults/:id - Update consultation

// Vitals
GET /api/vitals/:patientId - Get patient vitals
POST /api/vitals - Record vitals

// Pharmacy
GET /api/pharmacy/inventory - Medicine availability
POST /api/pharmacy/reserve - Reserve medicine

// Sync
POST /api/sync - Sync offline data
GET /api/sync/status - Get sync status
```

### Sample Data Structure
```typescript
interface Patient {
  id: string;
  phoneNumber: string;
  fullName: string;
  village: string;
  // ... additional fields
}

interface Consult {
  id: string;
  patientId: string;
  symptoms: string;
  triage: 'home-care' | 'chw-visit' | 'doctor-consult' | 'emergency';
  // ... additional fields
}
```

## 🎯 Performance Optimization

### Bundle Size Optimization
- **Code Splitting**: Route-based chunks
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: WebP with fallbacks
- **Font Loading**: Font-display: swap

### Network Resilience
- **2G/3G Optimization**: <100KB initial load
- **Progressive Enhancement**: Core features first
- **Graceful Degradation**: Fallback for unsupported features
- **Retry Logic**: Exponential backoff for failed requests

## 🔧 Development

### Running Tests
```bash
npm run test        # Unit tests
npm run test:e2e    # End-to-end tests
npm run test:a11y   # Accessibility tests
```

### Code Quality
```bash
npm run lint        # ESLint
npm run format      # Prettier
npm run type-check  # TypeScript
```

### Environment Setup
```bash
# Copy environment variables
cp .env.example .env.local

# Required variables
VITE_API_BASE_URL=http://localhost:3001
VITE_WEBRTC_SERVER=ws://localhost:8080
```

## 🚀 Deployment

### Vercel/Netlify
```bash
# Build and deploy
npm run build
npm run deploy
```

### Production Checklist
- [ ] Service worker registered
- [ ] Manifest.json configured
- [ ] Icons generated (192px, 512px)
- [ ] Offline page functional
- [ ] Analytics configured
- [ ] Error monitoring setup

## 📊 Analytics & Monitoring

### Key Metrics
- **Usage**: Daily/Monthly Active Users
- **Performance**: Core Web Vitals, Load Times
- **Offline**: Sync success rates, offline usage
- **Medical**: Consultation completion rates, triage accuracy

### Error Handling
- **Offline Tolerance**: Graceful offline mode
- **Network Errors**: User-friendly error messages
- **Data Validation**: Input sanitization and validation
- **Crash Recovery**: Error boundaries and fallbacks

## 🔒 Security & Privacy

### Data Protection
- **Local Encryption**: Sensitive data encrypted in IndexedDB
- **HTTPS Only**: Secure transport layer
- **Token Management**: Secure JWT handling
- **Data Retention**: Configurable data lifecycle

### Compliance Considerations
- **HIPAA Alignment**: Healthcare data protection
- **GDPR Compliance**: User consent and data rights
- **Accessibility**: WCAG 2.1 AA standards
- **Audit Trail**: Consultation and data access logs

## 🌍 Internationalization

### Supported Languages
- **English**: Default interface language
- **Hindi**: हिन्दी भाषा समर्थन
- **Punjabi**: ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਹਾਇਤਾ

### Voice Support
- **Text-to-Speech**: Key flow narration
- **Voice Input**: Symptom description recording
- **Local Accents**: Regional pronunciation support

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled
- **React**: Functional components with hooks
- **CSS**: Tailwind classes, no inline styles
- **Accessibility**: ARIA labels, semantic HTML

## 📋 Acceptance Criteria

✅ **Core Functionality**
- [ ] User can register offline via CHW assistance
- [ ] Patient can submit async consult with photos offline
- [ ] Doctor can respond to consultations in dashboard
- [ ] E-prescription created and visible to patient
- [ ] Pharmacy widget shows availability and reservations
- [ ] Language switching works across all screens
- [ ] Sync queue visible and resolves when online

✅ **Performance**
- [ ] Initial load <3 seconds on 3G
- [ ] Core flows work smoothly on low-end Android
- [ ] PWA installable and functional offline
- [ ] Service worker caches critical resources

✅ **Accessibility**
- [ ] WCAG 2.1 AA compliant
- [ ] Screen reader compatible
- [ ] High contrast mode support
- [ ] Large touch targets (≥44px)

## 📞 Support

### Technical Support
- **Documentation**: [Internal Wiki]
- **Issue Tracking**: GitHub Issues
- **Community**: [Discord/Slack Channel]

### Medical Advisory
- **Clinical Oversight**: Dr. [Name], Chief Medical Officer
- **Rural Healthcare Expert**: [CHW Coordinator Name]
- **Technology Ethics**: [Ethics Committee]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Nabha Civil Hospital**: Medical expertise and rural healthcare insights
- **ASHA/Anganwadi Workers**: Community health worker feedback
- **Rural Patient Advisory Group**: User experience validation
- **Technology Partners**: Open source community contributions

---

**Built with ❤️ for rural healthcare accessibility in Punjab, India**

*"Technology should bridge gaps, not create them. Every person deserves access to quality healthcare, regardless of their location or connectivity."*