export type ServicePageConfig = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  highlights: { title: string; description: string }[];
};

// Per docs/samay-care-seo-metadata-keyword-guide.md §6. §6.6 (Hospital Stay
// / IPD Assistance) is intentionally omitted — the guide says only publish
// it once the service is actually operational.
export const servicePages: ServicePageConfig[] = [
  {
    slug: "hospital-companion",
    seoTitle: "Hospital Companion Service in Delhi NCR | Samay Care",
    metaDescription:
      "Need help during a hospital visit? Samay Care CareBuddies provide non-clinical companionship, hospital navigation, queue and paperwork assistance across Delhi NCR.",
    h1: "Hospital Companion Service in Delhi NCR",
    primaryKeyword: "hospital companion service Delhi NCR",
    secondaryKeywords: [
      "hospital companion Delhi",
      "patient companion Delhi NCR",
      "hospital visit assistance",
      "hospital assistance service",
      "hospital attendant service",
      "healthcare companion",
    ],
    intro:
      "A hospital visit rarely ends at the doctor's door — there's registration, queues, navigating departments, diagnostics, pharmacy and paperwork in between. A Samay Care CareBuddy is a trained, verified, non-clinical companion who can meet you at the hospital or accompany you from home, and stay with the patient through that whole visit.",
    highlights: [
      { title: "Meet at Hospital or Accompany from Home", description: "Choose whichever fits your situation — your CareBuddy joins you where it helps most." },
      { title: "Registration, tokens and queues", description: "Someone to handle the practical steps so the patient isn't navigating them alone." },
      { title: "Department & counter navigation", description: "Hospitals can be confusing — your CareBuddy helps find the right department, counter or floor." },
      { title: "Family updates", description: "Where the family can't be present, your CareBuddy keeps them informed at key points in the visit." },
    ],
  },
  {
    slug: "patient-companion",
    seoTitle: "Patient Companion Service in Delhi NCR | Samay Care",
    metaDescription:
      "A Samay Care CareBuddy can accompany patients during hospital visits, help with registration, navigation, queues, paperwork and family updates across Delhi NCR.",
    h1: "Patient Companion Service",
    primaryKeyword: "patient companion service",
    secondaryKeywords: [
      "patient companion Delhi",
      "patient assistance service",
      "hospital companion",
      "patient attendant",
      "hospital visit support",
    ],
    intro:
      "Not every patient has someone free to sit through a hospital visit with them. A Samay Care CareBuddy provides practical, non-clinical companionship — accompanying the patient, helping them get where they need to go, and making sure the visit doesn't feel like it has to be managed alone.",
    highlights: [
      { title: "A person, not just an app", description: "Your CareBuddy is physically present with the patient for the visit." },
      { title: "Registration & documentation help", description: "Practical support with the paperwork side of a hospital visit." },
      { title: "Consultation & diagnostics coordination", description: "Help getting to the right place at the right time, including tests and reports." },
      { title: "Dignity-first support", description: "Patients are treated as capable adults who need practical help, not pity." },
    ],
  },
  {
    slug: "opd-assistance",
    seoTitle: "OPD Assistance & Hospital Visit Support in Delhi NCR | Samay Care",
    metaDescription:
      "Get practical help during OPD visits with a Samay Care CareBuddy for registration, queues, hospital navigation, documentation and appointment coordination.",
    h1: "OPD Assistance in Delhi NCR",
    primaryKeyword: "OPD assistance Delhi NCR",
    secondaryKeywords: [
      "OPD companion",
      "OPD hospital assistance",
      "hospital appointment assistance",
      "doctor appointment companion",
      "hospital navigation",
    ],
    intro:
      "An OPD (outpatient) visit can involve appointment coordination, registration, a queue, the consultation itself, and often diagnostics or pharmacy afterward. A Samay Care CareBuddy helps with the non-clinical parts of that journey — so the visit takes less out of the patient and the family.",
    highlights: [
      { title: "Appointment coordination", description: "Practical help getting the visit organized before you arrive." },
      { title: "Registration & token/queue assistance", description: "One less thing for the patient to manage alone at the counter." },
      { title: "Diagnostics & pharmacy coordination", description: "Help getting tests done and medicines collected on the same visit where possible." },
      { title: "Non-clinical only", description: "Your CareBuddy assists with logistics — clinical decisions stay with the doctor." },
    ],
  },
  {
    slug: "hospital-navigation",
    seoTitle: "Hospital Navigation Assistance in Delhi NCR | Samay Care",
    metaDescription:
      "Hospitals can be confusing. Samay Care CareBuddies help patients navigate departments, counters, appointments, paperwork and the practical steps of a hospital visit.",
    h1: "Hospital Navigation Assistance",
    primaryKeyword: "hospital navigation service",
    secondaryKeywords: [
      "hospital assistance",
      "hospital visit support",
      "patient assistance",
      "OPD navigation",
      "hospital companion",
    ],
    intro:
      "Large hospitals can be genuinely disorienting — multiple buildings, departments, counters and floors, often while already anxious about a health concern. A Samay Care CareBuddy helps patients and families find their way through it, department to department, counter to counter.",
    highlights: [
      { title: "Department & floor navigation", description: "Help finding the right place, the first time." },
      { title: "Counter-to-counter coordination", description: "Registration, billing, diagnostics and pharmacy counters, handled in the right order." },
      { title: "Time saved", description: "Less time spent lost or re-asking directions, more time for what the visit is actually for." },
      { title: "Calm, practical support", description: "A steady presence for patients who find hospitals stressful to navigate alone." },
    ],
  },
  {
    slug: "medical-appointment-companion",
    seoTitle: "Medical Appointment Companion in Delhi NCR | Samay Care",
    metaDescription:
      "Can't accompany a loved one to a medical appointment? A Samay Care CareBuddy can provide practical visit support and keep families informed throughout the appointment.",
    h1: "Medical Appointment Companion",
    primaryKeyword: "medical appointment companion",
    secondaryKeywords: [
      "doctor appointment companion",
      "patient companion",
      "hospital visit assistance",
      "appointment assistance",
      "family healthcare support",
    ],
    intro:
      "When work, distance or timing means you can't be there for a loved one's medical appointment, a Samay Care CareBuddy can go in your place — providing practical, non-clinical companionship and keeping you informed of how the visit went.",
    highlights: [
      { title: "For when you can't be there", description: "Especially useful for families living in another city or working professionals who can't take the time off." },
      { title: "Present for the appointment", description: "Your CareBuddy accompanies the patient to and through the appointment itself." },
      { title: "Practical support, not clinical advice", description: "Help with logistics and coordination — medical decisions stay between patient and doctor." },
      { title: "You stay informed", description: "Relevant updates so you know how the appointment went, even from a distance." },
    ],
  },
];
