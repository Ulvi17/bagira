# Bagira AI - React Application

A modern, component-based React application for Bagira AI legal services, featuring voice assistant integration and client lead management.

## 🚀 Features

- **Modern Tech Stack**: React + Vite + TypeScript + Tailwind CSS
- **Voice Assistant**: VAPI integration for voice interactions
- **Real-time Updates**: Supabase listener for live call updates
- **Responsive Design**: Mobile-first design with dark/purple theme
- **Russian Language**: Full Russian language support
- **Modal Forms**: Contact and pilot program signup forms
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Voice AI**: VAPI Web SDK
- **Database**: Supabase (for real-time call listening)
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Font Awesome 6

## 📦 Installation

1. **Clone and navigate to the project**:
   ```bash
   cd bagira-react
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_VAPI_PUBLIC=58f89212-0e94-4123-8f9e-3bc0dde56fe0
   VITE_SUPABASE_URL=https://wirwojaiknnvtpzaxzjv.supabase.co
   VITE_SUPABASE_KEY=your_supabase_anon_key
   VITE_N8N_WEBHOOK=https://backendemze.dayeler.com/webhook/toolCall
   VITE_VAPI_ASSISTANT_ID=4c5c9cf8-2001-4566-8c65-8318b8814db4
   VITE_PILOT_WEBHOOK=https://primary-production-3672.up.railway.app/webhook/vapi-pilotform
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

## 🎨 Design System

### Colors
- **Primary**: `#635BFF` (Electric Purple)
- **Primary Dark**: `#5246E0`
- **Accent**: `#FFCA1B` (Warning Yellow)
- **Black**: `#000000`
- **Gray 900**: `#1A1A1A`
- **Gray 500**: `#8C94A3`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Components
- **Rounded Sections**: 48px top border radius for section blocks
- **Cards**: 12px border radius with purple left border
- **Buttons**: Rounded, hover effects with scale transform
- **Modals**: Backdrop blur with smooth animations

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Site header with logo
│   ├── Hero.tsx            # Hero section with CTA
│   ├── InfoSection.tsx     # Reusable info grid sections
│   ├── CTASection.tsx      # Call-to-action section
│   ├── VapiButton.tsx      # Floating voice assistant button
│   ├── Modal.tsx           # Reusable modal component
│   └── Footer.tsx          # Site footer
├── hooks/
│   └── useSupabaseCallListener.ts  # Real-time call listener
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

## 🔧 Key Features

### Voice Assistant Integration
- Floating microphone button (bottom-right)
- VAPI integration for voice interactions
- Automatic modal trigger on specific phrases
- Real-time call status updates

### Supabase Real-time Listener
- Listens for call creation events
- Automatically populates call IDs in forms
- Console logging for debugging

### Modal System
- **Contact Modal**: Phone and email collection
- **Pilot Program Modal**: Business information collection
- Escape key and backdrop click to close
- Form validation and submission states

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Adaptive component layouts
- Touch-friendly interactions

## 🚢 Deployment

### Build for Production
```bash
npm run build
npm run preview
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

## 🧪 Development

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npm run type-check
```

### Preview Build
```bash
npm run preview
```

## 🎯 Performance Considerations

- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: YouTube iframe with proper aspect ratios
- **Bundle Size**: Optimized with tree-shaking

## 🔒 Security

- Environment variables for sensitive data
- No hardcoded secrets in source code
- Secure API endpoints
- HTTPS-only communications

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 84+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for all new features
3. Test on multiple devices/browsers
4. Maintain Russian language strings
5. Update documentation for new features

## 📄 License

© 2024 Bagira AI. All rights reserved.
