# Samay Care — Phase 1 Pre-Launch Website
## Claude Code Build Specification / Master Markdown

**Website:** `https://samaycare.com`  
**Brand:** Samay Care  
**Service:** CareBuddy  
**Company:** Samay Invotech Private Limited  
**Phase:** Phase 1 — Pre-Launch / Market Entry  
**Primary objective:** Announce Samay Care, explain the CareBuddy model, build trust, capture launch-interest leads, and identify cities with demand.

---

# 1. IMPORTANT — BUILD THIS AS THE SOURCE OF TRUTH

Claude Code must treat this document as the implementation specification for the Phase 1 website.

The website should visually reproduce the approved Samay Care pre-launch landing-page concept shown in the reference visual:

- Clean premium healthcare SaaS/startup aesthetic
- Teal / healthcare green as the dominant brand color
- White and very light mint backgrounds
- Dark navy typography
- Rounded cards
- Soft shadows
- Large Indian healthcare photography
- Human + technology storytelling
- Spacious sections
- Strong but calm CTAs
- Mobile-first responsive behavior

Do **not** turn this into a generic hospital website.

Do **not** create a generic healthcare marketplace homepage.

The core story is:

> **Samay Care connects you with a trusted CareBuddy who can meet you at the hospital or accompany you from home and handle the non-clinical hassle of the healthcare journey.**

---

# 2. PRODUCT DEFINITION

## Samay Care

Samay Care is the healthcare convenience platform.

### Why "Samay"?

Healthcare is time-sensitive.

A delayed appointment, missed diagnostic test, long queue, confusing hospital process, or lack of someone to assist can create unnecessary stress.

**Samay means Time.**

### Why "Care"?

Care needs no definition.

It is the human purpose behind the service.

### Brand thought

> **Time. Care. Always.**

Official tagline:

> **Making Healthcare Convenient.**

---

# 3. CAREBUDDY DEFINITION

A CareBuddy is the person who assists the customer.

Think of the relationship simply:

- Ride-hailing app → Driver
- Food delivery platform → Rider
- Samay Care → **CareBuddy**

The CareBuddy is NOT a doctor and must never be presented as one.

The CareBuddy provides trained, verified, non-clinical assistance.

The customer can book a CareBuddy through the Samay Care app.

The customer chooses:

### Option A — Meet at Hospital

The customer travels to the hospital independently.

The CareBuddy meets the customer at the hospital and assists with the journey.

### Option B — Accompany from Home

The CareBuddy travels to the customer's home, accompanies them to the hospital, and assists them throughout the hospital journey.

Core message:

> **You focus on your health. Your CareBuddy handles the hassle.**

---

# 4. PHASE 1 OBJECTIVE

This is NOT the final nationwide Samay Care platform.

This is the **pre-launch / market-entry website**.

The website must communicate:

1. Samay Care exists.
2. CareBuddy is the human assistance service.
3. Samay Care is coming to cities near customers.
4. Customers can register their interest.
5. Customers can tell Samay Care where they live.
6. Customers can request the type of assistance they may need.
7. Samay Care can use these requests to understand launch demand.
8. Technology will enable faster assignment, tracking and communication.
9. The long-term platform can scale beyond hospital assistance.

Primary conversion:

> **Notify Me**

Secondary conversion:

> **I'm Interested**

Do NOT pretend that booking is already live everywhere.

---

# 5. PRIMARY WEBSITE MESSAGE

## Hero headline

> **Time matters in healthcare.**
>
> **We bring care on time.**

Supporting copy:

> Samay Care connects you with a trusted CareBuddy who can assist you at the hospital or accompany you from home — helping handle the queues, navigation, registration, coordination and other non-clinical hassles of the healthcare journey.

Primary CTA:

> **I'm Interested**

Secondary CTA:

> **Watch How It Works**

Pre-launch label:

> **Pre-Launch — Coming to Your City Soon!**

---

# 6. VISUAL DESIGN SYSTEM

## 6.1 Primary colors

Use the following as the initial design tokens.

```css
--sc-primary: #087F73;
--sc-primary-dark: #005E59;
--sc-primary-light: #E8F7F4;
--sc-primary-soft: #F2FAF8;

--sc-navy: #102B3A;
--sc-text: #203746;
--sc-text-muted: #60727D;

--sc-white: #FFFFFF;
--sc-surface: #F8FCFB;
--sc-border: #DDEBE8;

--sc-success: #14866F;
--sc-accent: #0C9A87;
```

The visual identity must feel:

**Teal first → healthcare green second → navy for text.**

Avoid making orange, purple, pink or blue the dominant colors.

---

# 7. TYPOGRAPHY

Use a modern, highly readable sans-serif.

Preferred:

```text
Inter
```

or another close modern sans-serif if the existing stack already provides one.

Typography hierarchy:

### Hero H1

Large, bold, approximately 60–72px desktop.

Example:

> Time matters in healthcare.  
> We bring care on time.

Highlight the second line / key phrase in teal.

### Section H2

Approximately 40–48px.

### Card heading

18–20px semibold.

### Body

16–18px with comfortable line height.

Avoid excessively thin typography.

---

# 8. GENERAL UI STYLE

Use:

- Border radius: 16–24px
- Buttons: 12–14px radius
- Cards: 16–20px radius
- Soft shadows only
- 1px subtle borders
- Large whitespace
- 1200–1280px maximum content width
- 24px mobile side padding
- 40–64px desktop section spacing minimum
- 80–120px major section spacing

Do not use:

- Glassmorphism everywhere
- Heavy gradients
- Excessive animations
- Neon colors
- Stock-photo collage styling
- Hospital-blue visual clichés
- Excessive icons
- Dense dashboards on the public landing page

---

# 9. HEADER

Desktop:

```text
Samay Care logo                         Navigation                         Notify Me
```

Navigation:

- Why Samay Care
- Services
- How It Works
- For Enterprises
- About Us

Primary button:

> **Notify Me**

Header should be sticky after scrolling.

Use a white background with a subtle bottom border/shadow when sticky.

Mobile:

- Logo
- Hamburger
- Notify Me button if space permits

Mobile menu:

- Why Samay Care
- Services
- How It Works
- For Enterprises
- About Us
- Notify Me

---

# 10. HERO SECTION

## Layout

Desktop:

```text
------------------------------------------------------------
| LEFT: headline + copy + choices | RIGHT: CareBuddy image |
|                                 | + app mockup            |
------------------------------------------------------------
```

The hero should occupy approximately 650–750px on desktop.

Left side:

Pre-launch badge:

> 🚀 Pre-Launch — Coming to Your City Soon!

H1:

> **Time matters in healthcare.**
> **We bring care on time.**

Supporting paragraph:

> Samay Care connects you with a trusted CareBuddy who will assist you at the hospital or accompany you from home and handle the non-clinical hassle of your healthcare journey.

### Two service-choice cards

#### Meet at Hospital

Icon: hospital

Copy:

> Your CareBuddy meets you at the hospital and assists you through your visit.

#### Accompany from Home

Icon: home

Copy:

> Your CareBuddy comes to you, accompanies you to the hospital and stays with you through the journey.

Primary CTA:

> **I'm Interested →**

Secondary:

> ◉ Watch How It Works

Under CTAs, show four trust indicators:

- Trained & Verified CareBuddies
- Background Verified
- Non-Clinical Support
- Your Time, Our Priority

---

# 11. HERO IMAGE

Use a high-quality realistic Indian healthcare scene.

Recommended visual:

A friendly, professionally dressed Indian male CareBuddy wearing:

- Teal/dark green polo
- CareBuddy identification badge
- Professional appearance

Assisting an elderly Indian woman in a wheelchair inside a modern Indian hospital.

The image should communicate:

- Human care
- Dignity
- Trust
- Mobility assistance
- Hospital environment
- Indian context

Avoid sad/pity-driven healthcare imagery.

The customer should look respected, not helpless.

---

# 12. APP MOCKUP

Show a modern Samay Care mobile app interface beside the hero image.

The app should visually communicate:

```text
Hello, Anita 👋

How can we help you today?

Book a CareBuddy

[ Meet at Hospital ]
[ Accompany from Home ]

Popular Services

[ Diagnostics ] [ Medicines ]
[ Reports ]     [ Insurance ]
```

This is a product concept / future interface.

Do not imply that the app is already publicly available unless it actually is.

Use a small label where necessary:

> Coming soon

---

# 13. TRUST STRIP

Immediately below hero:

Heading:

> **Trusted care starts with the right support.**

Four items:

### Coming to Your City

We are launching city by city.

### Personalized Assistance

A CareBuddy is assigned to your journey.

### Safe & Reliable

Verified CareBuddies and defined service standards.

### Care You Can Trust

Human support when you need it most.

---

# 14. HOW WE CARE

Section heading:

> **How Booking a CareBuddy Works**

Subtitle:

> Simple to request. Easy to understand. Human when it matters.

Use a five-step horizontal flow.

### 01 — Book in App

> Tell us what help you need in a few taps.

### 02 — We Assign

> A verified CareBuddy is assigned to you.

### 03 — CareBuddy Reaches You

Depending on your booking:

> Meet at the hospital

or

> Accompany from home

### 04 — We Handle the Hassle

The CareBuddy can assist with non-clinical activities such as:

- Registration
- Navigation
- Queues
- Billing coordination
- Diagnostics coordination
- Pharmacy coordination
- Reports
- Other approved non-clinical tasks

### 05 — You Focus on What Matters

> We take care of the coordination so you can focus on your health and family.

---

# 15. WHAT YOUR CAREBUDDY CAN HANDLE

Heading:

> **Your CareBuddy Handles the Hassle.**

Create seven compact cards.

### Registration & Billing

Hospital registration and non-clinical billing coordination.

### Doctor Consultation Support

Help with navigation and process coordination around the consultation.

### Diagnostics & Reports

Coordinate tests and report collection.

### Medicine Purchase & Delivery

Assist with medicine collection / partner fulfilment where available.

### Insurance Assistance

Help coordinate documents and non-clinical insurance processes.

### Admission & Discharge Help

Assist with non-clinical admission and discharge processes.

### Follow-up Coordination

Help keep the next healthcare steps organized.

IMPORTANT:

Do not use language that implies the CareBuddy provides medical advice, diagnosis, treatment, nursing or clinical decisions.

---

# 16. PRE-LAUNCH CONVERSION SECTION

This is one of the most important sections.

Background:

Very light mint / healthcare green.

Two-column layout.

## Left

Headline:

> **We're Pre-Launch**
>
> **and Coming to You Soon!**

Copy:

> Tell us where you are and what kind of healthcare assistance you need. Your interest helps us decide where Samay Care should launch next.

Benefits:

- Be the first to know when we launch in your city
- Get early access when available
- Help us design a better CareBuddy experience
- Receive only important launch updates

## Right — Form

Heading:

> **Show Your Interest**

Subtitle:

> Tell us where we should launch first.

Fields:

```text
Full Name *
Mobile Number *
City *
Email Address
What help do you need?
```

Dropdown:

```text
Select assistance

OPD / Hospital Visit
IPD / Admission Support
Senior Citizen Assistance
Accompany from Home
Diagnostics / Reports
Medicine Assistance
Insurance / Documentation
Other
```

Consent:

```text
☑ I agree to receive updates from Samay Care.
```

CTA:

> **Notify Me**

Privacy note:

> We respect your privacy. No spam, ever.

---

# 17. FORM FUNCTIONALITY

The form must be production-ready.

On submit:

1. Validate required fields.
2. Validate Indian mobile number.
3. Prevent duplicate accidental submissions.
4. Show loading state.
5. Send the lead to the configured backend/API.
6. Store:
   - timestamp
   - name
   - phone
   - email
   - city
   - service interest
   - source
7. Show success message.

Success:

> **You're on our list!**
>
> Thank you for showing interest in Samay Care. We'll let you know when CareBuddy launches near you.

Do not promise a launch date.

If backend credentials are not yet configured, create a clean adapter/service layer and environment-variable configuration rather than hardcoding a third-party service.

Example:

```env
SAMAYCARE_LEAD_API_URL=
SAMAYCARE_LEAD_API_KEY=
```

---

# 18. TECHNOLOGY SECTION

This section is essential because Samay Care is not intended to remain a manpower-only business.

Heading:

> **Technology That Enables Better Care**

Copy:

> Our technology helps us connect customers with CareBuddies faster, keep everyone informed and make every healthcare journey easier to coordinate.

Show:

- Samay Care mobile app
- Map
- CareBuddy location
- Customer
- ETA
- Status updates

Feature bullets:

### Faster Assignment

Help connect customers with available CareBuddies.

### Real-Time Updates

Keep customers informed about CareBuddy status.

### Digital Journey

Keep requests, visits and service information organized.

### Better Coordination

Connect the customer, CareBuddy and future healthcare partners.

### Privacy & Security

Customer information must be handled securely and only for legitimate service purposes.

---

# 19. TECHNOLOGY VISUAL

Use a clean illustration:

```text
Customer
   ↓
Samay Care App
   ↓
Assignment Engine
   ↓
CareBuddy
   ↓
Hospital
```

Overlay a map with:

```text
CareBuddy on the way
ETA: 10 min
```

Do not show real location data.

This is a conceptual visualization.

---

# 20. WHO WE ARE BUILDING FOR

Create four audience cards.

### Senior Citizens

> Compassionate assistance with dignity and respect.

### Families

> Peace of mind when you cannot be there yourself.

### Working Professionals

> Save time, avoid unnecessary leave and reduce stress.

### NRIs

> Trusted healthcare support for loved ones in India.

These are target audiences, not claims of existing customer scale.

---

# 21. WHY SAMAY CARE

Heading:

> **Why Samay Care?**

Four reasons:

### Time Matters

Healthcare rarely waits for a convenient time.

### Human Assistance

Technology connects you, but a real CareBuddy is there when physical help is needed.

### Verified & Trained

CareBuddies should go through defined onboarding and verification processes.

### Non-Clinical, Patient-Focused

We coordinate and assist; doctors and healthcare professionals provide clinical care.

---

# 22. BRAND STORY

Use a short, premium section.

Heading:

> **Why Samay Care?**

Copy:

> Healthcare is time-sensitive. When someone needs care, every minute matters — and families should not have to spend that time figuring out queues, counters, directions and paperwork.
>
> **Samay means time. Care needs no definition.**
>
> Samay Care brings both together.
>
> **Time. Care. Always.**

Do not over-explain the company history on the Phase 1 landing page.

---

# 23. FUTURE VISION — KEEP THIS SUBTLE

Do not turn Phase 1 into a huge marketplace pitch.

Show a small section:

> **Starting with a CareBuddy. Building for the complete healthcare journey.**

Visual journey:

```text
CareBuddy
   ↓
Hospital Assistance
   ↓
Diagnostics
   ↓
Medicines
   ↓
Insurance
   ↓
Home Care
   ↓
Follow-up
```

Caption:

> Today we start by making hospital visits easier. Over time, Samay Care will connect more of the healthcare journey around you.

This communicates scale without pretending all services are already live.

---

# 24. FINAL CTA

Dark teal full-width section.

Headline:

> **Healthcare is already complicated. Getting help shouldn't be.**

Subheading:

> Tell us where you are. We'll let you know when Samay Care comes to your city.

CTA:

> **Notify Me →**

Secondary:

> **I'm Interested**

---

# 25. FOOTER

Dark teal background.

Left:

Samay Care logo

> **Making Healthcare Convenient.**

Description:

> India's Healthcare Convenience Platform helping patients and families navigate healthcare with greater ease, support and confidence.

Columns:

### Quick Links

- Why Samay Care
- Services
- How It Works
- About Us

### For Enterprises

- Hospitals
- Corporate Programs
- Insurance Partners
- CareBuddy Network

### Support

- Help Center
- Contact Us
- Terms & Conditions
- Privacy Policy

### Contact

Use only verified company contact details.

Do not invent phone numbers or email addresses.

Social icons should only be shown when real social profiles exist.

Footer:

> © 2026 Samay Care. All rights reserved.

---

# 26. RESPONSIVE DESIGN

The website must be fully responsive.

## Desktop

Reference layout approximately:

```text
1280px content width
```

Hero:

```text
50% text
50% visual
```

## Tablet

- Reduce hero typography
- Stack complex cards where necessary
- Maintain two-column hero where possible

## Mobile

Order hero:

1. Badge
2. Headline
3. Copy
4. Meet at Hospital
5. Accompany from Home
6. CTA
7. Trust indicators
8. Image
9. App mockup

How it works becomes vertical or horizontally scrollable.

Service cards become:

```text
2 columns
```

or one column on very small screens.

Form becomes one column.

No horizontal overflow.

---

# 27. ANIMATION

Use restrained animations.

Recommended:

- Fade-up on section entry
- Small card hover movement
- Button hover
- App/map micro-animation
- Step connector animation

Do NOT use:

- Aggressive parallax
- Constant floating elements
- Excessive motion
- Auto-playing video
- Distracting animations

Respect:

```css
prefers-reduced-motion
```

---

# 28. IMAGE STRATEGY

Use realistic Indian photography.

Preferred scenes:

1. CareBuddy assisting elderly patient at hospital
2. CareBuddy meeting family at home
3. CareBuddy walking with patient through hospital
4. CareBuddy helping with registration/navigation
5. Family member receiving updates through phone
6. Technology + CareBuddy map concept

All people should look Indian and natural.

Avoid:

- Generic Western healthcare stock photos
- Sad hospital patients
- Overly staged doctor photos
- Medical treatment scenes
- Needles / surgery / blood
- Clinical diagnosis imagery

The website sells **convenience and trusted assistance**, not medical treatment.

---

# 29. CONTENT RULES

Always say:

- CareBuddy
- trained / verified where factually true
- non-clinical assistance
- hospital assistance
- healthcare convenience
- coordination
- support

Avoid saying:

- medical caregiver unless actually applicable
- nurse unless the person is qualified
- doctor
- treatment
- diagnosis
- medical advice
- guaranteed outcomes

Do not imply that CareBuddy replaces:

- doctors
- nurses
- hospitals
- emergency medical services

---

# 30. EMERGENCY DISCLAIMER

A subtle footer/support statement may say:

> **CareBuddy is a non-clinical assistance service. For medical emergencies, contact emergency medical services or your hospital immediately.**

Do not make Samay Care appear to be an emergency response service unless that service is actually operational.

---

# 31. SEO

## Title

> Samay Care | Healthcare Convenience Platform | CareBuddy Assistance

## Meta Description

> Samay Care makes healthcare convenient with CareBuddy assistance for hospital visits, patient navigation and non-clinical healthcare coordination. Coming soon to your city.

## Primary keywords

- healthcare convenience platform India
- hospital assistance
- hospital caregiver assistance
- CareBuddy
- hospital companion
- senior citizen hospital assistance
- patient assistance
- healthcare concierge India
- hospital navigation assistance
- healthcare support for parents

Do not keyword-stuff.

---

# 32. OPEN GRAPH

Title:

> **Samay Care — Making Healthcare Convenient**

Description:

> Meet CareBuddy — trusted human assistance for hospital visits, coming soon to your city.

Image:

Use a clean Samay Care brand image showing the CareBuddy + patient relationship.

---

# 33. ACCESSIBILITY

Must include:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible form labels
- ARIA only where necessary
- Alt text for all meaningful images
- Sufficient color contrast
- Accessible error messages
- Reduced motion support

Do not rely on color alone to communicate form errors or status.

---

# 34. PERFORMANCE

Target:

- Fast first load
- Optimized WebP/AVIF images
- Lazy-load below-fold images
- Responsive image sizes
- Minimal JavaScript
- No unnecessary third-party libraries
- No autoplay video
- Lighthouse performance target: 90+

The hero image must be optimized aggressively because it is the largest visual asset.

---

# 35. ANALYTICS

Prepare events for:

```text
hero_notify_click
hero_interest_click
how_it_works_click
service_card_click
app_interest_click
prelaunch_form_start
prelaunch_form_submit
prelaunch_form_success
prelaunch_form_error
city_selected
service_interest_selected
footer_contact_click
```

If analytics is not configured yet, create a clean analytics adapter.

Do not hardcode private analytics credentials.

---

# 36. LEAD SOURCE TRACKING

Capture campaign information when available:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
landing_page
referrer
```

This will help evaluate:

- LinkedIn
- Google
- Instagram
- WhatsApp
- Referral
- Hospital campaigns

---

# 37. CITY DEMAND DATA

The pre-launch form is strategically important.

Store:

```text
city
service_interest
timestamp
source
```

This will eventually allow Samay Care to identify:

```text
Top demand cities
Top requested services
Top customer segments
Campaign performance
```

Potential internal output:

```text
Delhi NCR
1,250 interests

Mumbai
980 interests

Bengaluru
730 interests
```

These are examples only.

Never publish fabricated numbers.

---

# 38. CITY-SPECIFIC FUTURE LANDING PAGES

Architect the code so we can later create:

```text
/samay-care-delhi
/samay-care-mumbai
/samay-care-bengaluru
/samay-care-hyderabad
```

without duplicating the entire codebase.

Example configuration:

```ts
const cityConfig = {
  city: "Delhi NCR",
  launchStatus: "coming-soon",
  headline: "Samay Care is coming to Delhi NCR",
}
```

Phase 1 homepage remains:

> **Coming to your city soon.**

---

# 39. TRUST CLAIM RULE

VERY IMPORTANT.

Do not publish fabricated:

- customer counts
- hospital counts
- city counts
- ratings
- testimonials
- partner logos
- revenue numbers
- CareBuddy counts

If verified data is unavailable:

**remove the statistic rather than inventing it.**

Use qualitative trust statements instead.

---

# 40. TESTIMONIAL RULE

Do not show fake testimonials.

The reference visual may contain testimonial-style cards for design exploration, but the production website should use:

- real testimonials
- approved anonymized testimonials
- or no testimonials

until real customer feedback exists.

---

# 41. HOSPITAL LOGO RULE

Do not show Apollo, Max, Fortis, Manipal, Medanta, Narayana, etc. unless a formal relationship exists and the use of the logo is authorized.

The visual concept may use hospital logos as placeholders.

Production implementation must remove them until verified.

---

# 42. TECH STACK

If an existing Samay Care website codebase exists:

**Do not replace the stack unnecessarily.**

First inspect:

```text
package.json
README
src/
app/
pages/
components/
public/
```

If building from scratch, preferred stack:

- Next.js
- TypeScript
- Tailwind CSS
- Reusable React components
- Responsive CSS
- Accessible semantic HTML

Use a component architecture such as:

```text
components/
  Header
  Hero
  BookingOptions
  TrustStrip
  HowItWorks
  CareBuddyServices
  TechnologySection
  AudienceSection
  PreLaunchForm
  VisionSection
  FinalCTA
  Footer
```

---

# 43. COMPONENT REQUIREMENTS

Every major section should be independently reusable.

Avoid one huge page component.

Recommended structure:

```text
app/
  page.tsx

components/
  site/
    Header.tsx
    Footer.tsx

  home/
    Hero.tsx
    BookingModeCard.tsx
    TrustStrip.tsx
    HowItWorks.tsx
    CareBuddyServices.tsx
    TechnologySection.tsx
    AudienceSection.tsx
    WhySamayCare.tsx
    PreLaunchForm.tsx
    FutureVision.tsx
    FinalCTA.tsx

  ui/
    Button.tsx
    Card.tsx
    Input.tsx
    Select.tsx
```

---

# 44. DATA-DRIVEN SERVICE CARDS

Do not hardcode repeated cards directly in JSX.

Use arrays:

```ts
const services = [
  {
    title: "Registration & Billing",
    description: "...",
    icon: "..."
  },
  ...
]
```

This makes future expansion easier.

---

# 45. FORM DATA MODEL

Recommended:

```ts
type PreLaunchLead = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  assistanceType: string;
  consent: boolean;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  submittedAt: string;
};
```

Do not collect unnecessary sensitive medical information during Phase 1.

The form should ask for the type of assistance, not detailed medical history.

---

# 46. SECURITY

Implement:

- Server-side validation
- Input sanitization
- Rate limiting if backend is available
- CAPTCHA / bot protection if abuse occurs
- No sensitive health information in URL parameters
- HTTPS
- Secure API keys
- No secrets in frontend code

Never expose backend credentials through `NEXT_PUBLIC_*`.

---

# 47. PRIVACY

The website must not claim:

> "Your medical information is completely safe"

unless the underlying technical and organizational controls support that statement.

Use accurate language:

> "We respect your privacy and only collect information needed to respond to your request."

A proper Privacy Policy should eventually explain data handling.

---

# 48. BUILD SEQUENCE FOR CLAUDE CODE

Claude Code should execute in this order.

## Step 1 — Inspect

Inspect the existing repository and determine:

- framework
- routing
- styling
- deployment
- existing assets
- existing brand components

Do not rewrite existing infrastructure unnecessarily.

## Step 2 — Create design tokens

Implement:

- colors
- typography
- spacing
- radius
- shadows
- breakpoints

## Step 3 — Build header

Desktop + mobile.

## Step 4 — Build hero

Match the reference visual closely.

## Step 5 — Build trust strip.

## Step 6 — Build How We Care.

## Step 7 — Build CareBuddy service cards.

## Step 8 — Build pre-launch form.

## Step 9 — Build technology section.

## Step 10 — Build audience section.

## Step 11 — Build Why Samay Care / brand story.

## Step 12 — Build future vision.

## Step 13 — Build final CTA.

## Step 14 — Build footer.

## Step 15 — Responsive pass.

## Step 16 — Accessibility pass.

## Step 17 — Performance pass.

## Step 18 — SEO pass.

## Step 19 — Form/API integration.

## Step 20 — QA against the reference visual.

---

# 49. CLAUDE CODE VISUAL QA

After implementation, Claude Code must compare the rendered website against the supplied reference visual.

Check:

### Layout

- Header height
- Hero proportions
- Image placement
- Card spacing
- Section widths
- CTA positions
- Footer height

### Typography

- H1 size
- H1 line breaks
- H2 hierarchy
- Body text width
- Button typography

### Colors

- Teal consistency
- Navy text
- Mint backgrounds
- Border contrast

### Visual hierarchy

The eye should move:

```text
Brand
 ↓
Time matters
 ↓
CareBuddy explanation
 ↓
Meet at Hospital / Accompany from Home
 ↓
I'm Interested
 ↓
How it works
 ↓
What CareBuddy handles
 ↓
Technology
 ↓
Pre-launch form
 ↓
Why Samay Care
 ↓
Final CTA
```

---

# 50. MOBILE QA

Test at minimum:

```text
375 × 812
390 × 844
430 × 932
768 × 1024
1024 × 768
1280 × 800
1440 × 900
```

Check:

- no overflow
- no clipped text
- form usability
- CTA visibility
- image cropping
- menu behavior
- readable typography
- touch target sizes

---

# 51. FINAL ACCEPTANCE CRITERIA

The website is complete only when:

### Brand

- Samay Care is clearly the brand.
- CareBuddy is clearly the human assistance service.
- "Making Healthcare Convenient." is retained.
- "Time matters in healthcare. We bring care on time." is the Phase 1 hero campaign.

### Product

- Meet at Hospital is clearly explained.
- Accompany from Home is clearly explained.
- CareBuddy's role is clear.
- Non-clinical boundaries are clear.

### Pre-launch

- Customer can show interest.
- Customer can submit a request.
- City is captured.
- Assistance type is captured.
- Success state works.
- Lead data can reach the configured backend.

### Technology

- App concept is shown.
- Assignment / tracking / coordination story is shown.
- Technology supports care rather than replacing human care.

### Trust

- No fake statistics.
- No fake testimonials.
- No unauthorized hospital logos.
- No unsupported claims.

### UX

- Premium
- Simple
- Warm
- Trustworthy
- Indian
- Healthcare-focused
- Fast
- Mobile-friendly

---

# 52. FINAL COPY REFERENCE

## Primary headline

> **Time matters in healthcare.**
> **We bring care on time.**

## Brand explanation

> **Samay means time. Care needs no definition.**

## Supporting line

> Samay Care connects you with a trusted CareBuddy who can assist you at the hospital or accompany you from home — helping handle the non-clinical hassle of your healthcare journey.

## Service choices

> **Meet at Hospital**  
> Your CareBuddy meets you at the hospital and assists you.

> **Accompany from Home**  
> Your CareBuddy comes to you and accompanies you to the hospital.

## Core promise

> **You focus on what matters. We handle the hassle.**

## Technology promise

> **Technology that enables better care.**

## Pre-launch CTA

> **We're Pre-Launch and Coming to You Soon!**

## Final CTA

> **Healthcare is already complicated. Getting help shouldn't be.**

---

# 53. DO NOT OVERBUILD PHASE 1

This is critical.

Do not build:

- full healthcare marketplace
- doctor booking platform
- pharmacy marketplace
- insurance marketplace
- complex patient records
- clinical AI
- medical diagnosis
- nationwide CareBuddy dispatch
- complex enterprise dashboards

unless explicitly requested.

Phase 1 is a **credible pre-launch website + demand-generation engine**.

The website should create the perception:

> "Samay Care is real, thoughtful, trustworthy and coming soon."

Not:

> "Samay Care already operates a nationwide healthcare super-app."

---

# 54. THE SCALE STORY

The website should quietly establish the long-term architecture:

```text
TODAY

Samay Care
    ↓
CareBuddy
    ↓
Hospital Assistance


NEXT

CareBuddy
    ↓
Patient Journey Coordination
    ↓
Diagnostics / Pharmacy / Reports


LATER

Healthcare Coordination
    ↓
Insurance / Corporate / Home Care


LONG TERM

Samay Care
    ↓
Healthcare Convenience Infrastructure
    ↓
Entire Patient Journey
```

The initial product is deliberately narrow.

The ambition is deliberately large.

---

# 55. FINAL IMPLEMENTATION PRINCIPLE

Build the website with this philosophy:

> **Start narrow. Build wide.**

We start by putting a trusted human beside the patient.

That human is the **CareBuddy**.

Technology helps us discover, assign, coordinate and communicate faster.

Over time, Samay Care can connect more of the healthcare journey.

But the first promise must remain simple:

> **When healthcare needs your time, Samay Care helps you spend less of it dealing with the hassle.**

---

# 56. CLAUDE CODE INSTRUCTION

When this markdown is supplied to Claude Code, begin by inspecting the current repository.

Then state:

1. What stack is currently being used.
2. Which existing files/components can be reused.
3. Which files will be created or modified.
4. Any missing assets or backend configuration required.

Then implement the website.

Do not ask for approval for every small UI decision.

Make sensible implementation decisions while staying strictly within this specification.

If a requirement conflicts with an existing technical constraint, preserve the existing architecture and document the deviation.

After implementation, run:

- lint
- typecheck
- build
- responsive checks
- accessibility checks where tooling exists

Fix all errors before declaring completion.

---

# END OF SPECIFICATION

**Samay Care — Making Healthcare Convenient.**

**Phase 1: Coming to your city.**
