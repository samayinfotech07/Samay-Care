export type LocationPageConfig = {
  slug: string;
  city: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
};

// Per docs/samay-care-seo-metadata-keyword-guide.md §7 (Delhi NCR is the
// launch market: Delhi, Gurugram/Gurgaon, Noida, Faridabad). Coverage
// language says "launching first in" rather than the guide's literal
// "currently serving" — the site is still pre-launch everywhere (see
// docs/PENDING_INTEGRATIONS.md, docs/SAMAY_CARE_PHASE1_WEBSITE_V2.md), so
// this keeps the geographic SEO focus the guide asks for without claiming
// live operational coverage that doesn't exist yet.
export const locationPages: LocationPageConfig[] = [
  {
    slug: "delhi-ncr",
    city: "Delhi NCR",
    seoTitle: "Hospital Companion Service in Delhi NCR | Samay Care",
    metaDescription:
      "Samay Care CareBuddies help patients and families with hospital visits, OPD appointments, navigation, queues and paperwork across Delhi NCR.",
    h1: "Hospital Companion Service in Delhi NCR",
    primaryKeyword: "hospital companion service Delhi NCR",
    secondaryKeywords: [
      "patient companion Delhi NCR",
      "hospital assistance Delhi NCR",
      "OPD assistance Delhi NCR",
      "patient attendant Delhi NCR",
      "hospital visit support",
    ],
    intro:
      "Samay Care is launching first in Delhi NCR — Delhi/New Delhi, Gurugram (Gurgaon), Noida and Faridabad. A CareBuddy can meet you at the hospital or accompany you from home, and help with the non-clinical side of the visit: registration, queues, navigation, diagnostics and pharmacy coordination, and keeping the family informed.",
  },
  {
    slug: "delhi",
    city: "Delhi",
    seoTitle: "Hospital Companion Service in Delhi | Samay Care",
    metaDescription:
      "Book a Samay Care CareBuddy for hospital visits, OPD assistance, navigation, queues and practical patient support across Delhi.",
    h1: "Hospital Companion Service in Delhi",
    primaryKeyword: "hospital companion Delhi",
    secondaryKeywords: [
      "patient companion Delhi",
      "hospital assistance Delhi",
      "OPD companion Delhi",
      "hospital visit assistance Delhi",
      "patient attendant Delhi",
    ],
    intro:
      "Samay Care is launching first in Delhi, alongside the rest of Delhi NCR. A CareBuddy can meet a patient at the hospital or accompany them from home, helping with registration, queues, navigation, diagnostics and pharmacy coordination — while keeping family members informed along the way.",
  },
  {
    slug: "gurugram",
    city: "Gurugram (Gurgaon)",
    seoTitle: "Hospital Companion Service in Gurugram (Gurgaon) | Samay Care",
    metaDescription:
      "Need help at a hospital in Gurugram? Samay Care CareBuddies provide practical, non-clinical support for hospital visits, OPD appointments and navigation.",
    h1: "Hospital Companion Service in Gurugram (Gurgaon)",
    primaryKeyword: "hospital companion Gurugram",
    secondaryKeywords: [
      "hospital companion Gurgaon",
      "patient companion Gurugram",
      "hospital assistance Gurgaon",
      "OPD companion Gurugram",
      "hospital visit assistance Gurgaon",
    ],
    intro:
      "Samay Care is launching first in Gurugram (Gurgaon), as part of the initial Delhi NCR rollout. A CareBuddy can meet a patient at the hospital or accompany them from home, helping with registration, queues, navigation, diagnostics and pharmacy coordination — while keeping family members informed.",
  },
  {
    slug: "noida",
    city: "Noida",
    seoTitle: "Hospital Companion Service in Noida | Samay Care",
    metaDescription:
      "Get practical hospital visit support in Noida with a Samay Care CareBuddy for OPD appointments, navigation, queues, paperwork and coordination.",
    h1: "Hospital Companion Service in Noida",
    primaryKeyword: "hospital companion Noida",
    secondaryKeywords: [
      "patient companion Noida",
      "hospital assistance Noida",
      "OPD companion Noida",
      "hospital attendant Noida",
      "hospital visit assistance Noida",
    ],
    intro:
      "Samay Care is launching first in Noida, as part of the initial Delhi NCR rollout. A CareBuddy can meet a patient at the hospital or accompany them from home, helping with registration, queues, navigation, diagnostics and pharmacy coordination — while keeping family members informed.",
  },
  {
    slug: "faridabad",
    city: "Faridabad",
    seoTitle: "Hospital Companion Service in Faridabad | Samay Care",
    metaDescription:
      "Samay Care CareBuddies provide practical support for hospital visits in Faridabad, including OPD assistance, navigation, queues and coordination.",
    h1: "Hospital Companion Service in Faridabad",
    primaryKeyword: "hospital companion Faridabad",
    secondaryKeywords: [
      "patient companion Faridabad",
      "hospital assistance Faridabad",
      "OPD companion Faridabad",
      "hospital attendant Faridabad",
      "hospital visit assistance Faridabad",
    ],
    intro:
      "Samay Care is launching first in Faridabad, as part of the initial Delhi NCR rollout. A CareBuddy can meet a patient at the hospital or accompany them from home, helping with registration, queues, navigation, diagnostics and pharmacy coordination — while keeping family members informed.",
  },
];
