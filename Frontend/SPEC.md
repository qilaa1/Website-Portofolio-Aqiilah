# Portfolio Website Specification

## Project Overview
- **Type**: Personal Portfolio Website
- **Core Functionality**: Showcase personal profile, projects with video demos, certificates with filtering, and contact form
- **Target Users**: Potential clients, recruiters, and collaborators

## UI/UX Specification

### Layout Structure
- **Navigation**: Fixed top navbar with smooth scroll to sections
- **Hero Section**: Full viewport with name, title, and CTA
- **About Section**: Profile photo, bio, skills list
- **Projects Section**: Grid of project cards with video galleries
- **Certificates Section**: Filterable grid with category tabs
- **Contact Section**: Contact form with email integration
- **Footer**: Social links and copyright

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design
- **Color Palette**:
  - Primary: #1a1a2e (Deep Navy)
  - Secondary: #16213e (Dark Blue)
  - Accent: #e94560 (Coral Red)
  - Background: #0f0f1a (Near Black)
  - Surface: #1f1f3a (Dark Surface)
  - Text Primary: #ffffff
  - Text Secondary: #a0a0b0
  - Success: #00d9a5

- **Typography**:
  - Headings: 'Outfit', sans-serif (weights: 600, 700)
  - Body: 'DM Sans', sans-serif (weights: 400, 500)
  - Font sizes: h1: 3.5rem, h2: 2.5rem, h3: 1.5rem, body: 1rem

- **Spacing**: 8px base unit, sections 120px vertical padding

- **Visual Effects**:
  - Glassmorphism cards with backdrop blur
  - Gradient borders on hover
  - Smooth parallax scrolling
  - Glow effects on interactive elements

### Components

1. **Navbar**
   - Fixed position, glassmorphism background
   - Logo/name on left
   - Navigation links: About, Projects, Certificates, Contact
   - Mobile: hamburger menu

2. **Hero Section**
   - Animated typing effect for role
   - Floating geometric shapes background
   - CTA buttons with gradient hover

3. **About Section**
   - Profile image with glow border
   - Bio text with highlight animations
   - Skills tags with hover effects

4. **Project Card**
   - Thumbnail with video preview
   - Title, description, tech stack
   - Modal for video gallery
   - Download documentation button
   - Tech badges

5. **Certificate Card**
   - Certificate image/thumbnail
   - Title, issuer, date
   - Category badge
   - Hover: slight scale and glow

6. **Contact Form**
   - Name, email, message fields
   - Submit button with loading state
   - Success/error toast notifications
   - Direct email link alternative

## Functionality Specification

### Core Features
1. **Smooth Scroll Navigation**: Click nav links to scroll to sections
2. **Project Gallery Modal**: 
   - Click project to open modal
   - Video player for demo
   - Multiple videos per project
   - Download documentation button

3. **Certificate Filtering**:
   - Category tabs: All, Programming, Design, Marketing, etc.
   - Smooth fade transition on filter change
   - Animated layout reflow

4. **Contact Form**:
   - Client-side validation
   - EmailJS integration for sending
   - Fallback: mailto link

### User Interactions
- Hover effects on all interactive elements
- Loading states for async operations
- Toast notifications for feedback

### Data Handling
- Static data for portfolio content (projects, certificates)
- Form data via EmailJS or mailto

## Acceptance Criteria
- [ ] All sections render correctly on all screen sizes
- [ ] Smooth scroll works for all navigation links
- [ ] Project modal opens with video player
- [ ] Download button triggers file download
- [ ] Certificate filter animates smoothly
- [ ] Contact form validates and shows feedback
- [ ] All transitions are smooth (300ms ease)
- [ ] No console errors on page load