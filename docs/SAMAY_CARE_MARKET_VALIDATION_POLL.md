# SAMAY CARE — MARKET VALIDATION POLL
## `/poll` Website Specification

**Project:** Samay Care  
**Website:** `samaycare.com`  
**Route:** `/poll`  
**Purpose:** Phase 1 market validation and demand discovery  
**Primary goal:** Understand whether Samay Care is solving a real, recurring healthcare-journey problem and identify willingness to use/pay.

---

## 1. PURPOSE

Create a standalone public market-research page at:

`https://samaycare.com/poll`

This page is separate from the main pre-launch homepage but must use the same Samay Care brand system.

The survey should capture:
- hospital visit frequency
- who accompanies family members
- biggest hospital-journey challenges
- work/personal disruption
- postponed hospital visits
- OPD time burden
- perceived usefulness of CareBuddy assistance
- situations where Samay Care may be used
- trust requirements
- willingness to pay

This is a **market validation survey**, not a sales booking page.

---

## 2. PAGE POSITIONING

### Headline

> **Help Us Make Healthcare More Convenient**

### Supporting copy

> We're exploring how patients and families experience the hospital journey — and what kind of support would genuinely make it easier.

> Your feedback will help us understand the real challenges families face and shape Samay Care around those needs.

### Completion indicator

> **10 questions · Takes about 3–5 minutes**

Do not claim a precise completion time if actual testing shows otherwise.

---

## 3. BRAND CONTEXT

Core positioning:

> **Samay Care simplifies the complex OPD & IPD journey for patients and their attendants.**

CareBuddy:

> **A trusted person on the ground who can accompany patients, help navigate the non-clinical healthcare journey and keep families informed.**

Tagline:

> **Making Healthcare Convenient.**

Brand thought:

> **Time. Care. Always.**

Do not reposition Samay Care as:
- an eldercare app
- a caregiver marketplace
- a homecare-first company
- a hospital replacement

---

## 4. VISUAL DESIGN

Use the existing Samay Care design system.

Primary:
`#087F73`

Dark:
`#005E59`

Light:
`#E8F7F4`

Soft:
`#F2FAF8`

Navy:
`#102B3A`

Text:
`#203746`

Muted:
`#60727D`

White:
`#FFFFFF`

Typography:
**Inter**

The page should feel:
- trustworthy
- simple
- human
- professional
- healthcare-focused
- non-commercial
- mobile-first

---

## 5. PAGE STRUCTURE

```text
HEADER
  ↓
SURVEY INTRO
  ↓
PROGRESS INDICATOR
  ↓
QUESTIONS 1–10
  ↓
OPTIONAL RESPONDENT PROFILE
  ↓
CONSENT
  ↓
SUBMIT
  ↓
THANK YOU / SUCCESS
```

Prefer a one-question-at-a-time or small-group stepper experience instead of one very long form.

---

## 6. PROGRESS

Show:

> **Question 1 of 10**

with a visual progress bar.

Example:

```text
Question 3 of 10

████████░░░░░░░░░░
```

Update accurately as the respondent progresses.

---

# 7. SURVEY INTRO

### Help Us Understand the Real Healthcare Journey

> Hospital visits can involve appointments, registration, queues, navigation, diagnostics, pharmacy, reports and follow-ups. We'd like to understand where families experience the most difficulty and what kind of support would actually be useful.

> Your responses will help us validate the problem before we scale Samay Care.

Primary button:

> **Start Survey**

---

# 8. QUESTION 1

### How often do you or your family members visit a hospital?

Single selection.

- More than once a month
- Once a month
- Every 2–3 months
- 2–4 times a year
- Rarely

Required.

---

# 9. QUESTION 2

### Who usually accompanies an elderly/family member to the hospital?

Single selection.

- Son/Daughter
- Spouse
- Other family member
- Friend/Neighbour
- Paid attendant
- Patient usually goes alone

Required.

---

# 10. QUESTION 3

### What are the biggest challenges during a hospital visit?

Supporting text:

> Select up to 3.

Multi-select.

- Parking & walking
- Registration/token
- Queues & waiting
- Finding departments/doctor
- Vitals/nursing coordination
- Billing/payment
- Medicines
- Diagnostic tests/reports
- Understanding hospital processes

Required.

Maximum selections: **3**

---

# 11. QUESTION 4

### Have you ever cancelled or postponed work/personal commitments to accompany a family member to the hospital?

Single selection.

- Frequently
- Sometimes
- Once or twice
- Never

Required.

---

# 12. QUESTION 5

### Have you ever postponed a hospital visit because nobody was available to accompany the patient?

Single selection.

- Yes, frequently
- Yes, sometimes
- Once
- Never

Required.

Do not visually bias respondents toward any answer.

---

# 13. QUESTION 6

### Typically, how much time does a hospital OPD visit take, including waiting and formalities?

Single selection.

- Less than 1 hour
- 1–2 hours
- 2–3 hours
- 3–4 hours
- More than 4 hours

Required.

---

# 14. QUESTION 7

### Imagine you could book a trained CareBuddy from Samay Care who accompanies your family member from home or hospital and helps manage registration, queues, navigation, vitals, consultation, billing, medicines and tests. How useful would this be?

Single selection.

- Extremely useful
- Very useful
- Somewhat useful
- Not very useful
- Not useful

Required.

Important positioning:

Use **"trained CareBuddy from Samay Care"** rather than "trained professional Samay Care" so the survey matches the current product narrative.

Do not imply that a CareBuddy independently performs clinical activities.

If "vitals" or any other listed activity is not actually part of the planned service, remove or revise it before public launch.

---

# 15. QUESTION 8

### In which situations would you use Samay Care?

Supporting text:

> Select all that apply.

Multi-select.

- Elderly parents
- Parents living in another city
- Routine OPD visits
- Diagnostic tests
- Follow-up visits
- Hospital admission/discharge
- When I am travelling or unavailable
- Emergency situations

Required.

Important:

"Emergency situations" is retained because it is part of the supplied market-research questionnaire.

However, Samay Care must **not** be positioned as an emergency medical-response service.

Add a neutral note if appropriate:

> Samay Care is designed for healthcare convenience and non-clinical assistance; it is not an emergency medical response service.

---

# 16. QUESTION 9

### What would make you comfortable trusting a CareBuddy with your family member?

Supporting text:

> Select up to 3.

Multi-select.

- Background verification
- Healthcare/elder-care training
- Hospital-authorized professional
- Live tracking & family updates
- ID card/uniform
- Ratings & reviews
- Dedicated Samay Care support
- Insurance/safety coverage

Required.

Maximum selections: **3**

This question measures expected trust mechanisms. Do not imply that every listed mechanism currently exists.

---

# 17. QUESTION 10

### How much would you be willing to pay for a 2–3 hour Samay Care hospital assistance service?

Single selection.

- ₹200–300
- ₹300–500
- ₹500–750
- ₹750–1,000
- ₹1,000+
- I would not pay for this service

Required.

Add a small clarification:

> **For research purposes, what would you be willing to pay?**

Do not present these as official Samay Care prices.

---

# 18. OPTIONAL RESPONDENT PROFILE

The supplied survey is 10 questions. Do not turn profile questions into mandatory survey questions.

If segmentation is required, add these as optional fields after Q10:

### Your city
City input/dropdown.

### Your relationship to the person who needs healthcare support
- Myself
- Parent
- Spouse
- Child
- Other family member
- Other

### Are you currently working?
- Yes
- No

### Are you currently living in the same city as your parents?
- Yes
- No

Do not collect sensitive medical information.

---

# 19. CONSENT

Required checkbox:

> I understand that my responses will be used for Samay Care's market research and product development.

If marketing communication is collected, use a separate optional checkbox.

Do not combine research consent and marketing consent into one mandatory checkbox.

---

# 20. DATA PRIVACY

Do not collect:
- diagnosis
- medical history
- prescriptions
- health records
- Aadhaar
- PAN
- financial account information
- unnecessary personal information

The survey is for market research.

---

# 21. UX

Make completion frictionless.

Use:
- one question visible at a time on mobile
- one or two questions per screen on desktop if appropriate
- large touch-friendly options
- clear selected state
- Next button
- Back button
- progress indicator
- keyboard accessibility
- preserved answers when navigating backward

Do not make respondents restart the survey.

Buttons:

Start:
> **Start Survey**

Previous:
> **Back**

Next:
> **Next**

Final:
> **Submit My Response**

Avoid sales-oriented wording.

---

# 22. SUCCESS STATE

### Thank you for sharing your experience.

> Your feedback will help us understand the real challenges families face during healthcare journeys and help shape Samay Care.

> **Together, we can make healthcare more convenient.**

Optional:

> **Learn About Samay Care →**

Link to `/`.

Optional:

> **Want Samay Care in your city?**

Link to the existing pre-launch interest form.

Do not automatically add respondents to marketing communications unless they separately consented.

---

# 23. ERROR STATE

### We couldn't submit your response.

> Please check your connection and try again.

Button:

> **Try Again**

Preserve entered answers.

---

# 24. ANALYTICS

Track:

```text
poll_page_view
poll_start
poll_question_view
poll_question_answered
poll_question_back
poll_question_next
poll_form_abandon
poll_submit
poll_submit_success
poll_submit_error
```

Capture attribution:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
referrer
landing_page
```

Avoid sending sensitive free-text data to analytics.

---

# 25. MARKET VALIDATION OBJECTIVES

### Problem frequency
Q1, Q2

### Pain
Q3, Q4, Q5, Q6

### Need
Q7, Q8

### Trust
Q9

### Willingness to pay
Q10

The survey is designed to determine whether the problem is recurring and meaningful, not merely whether respondents like the idea.

---

# 26. RESPONDENT TARGET

For the first market study, target approximately:

> **200–300 respondents**

Deliberately seek representation from:

- Working professionals with elderly parents
- People who regularly accompany parents/family to hospitals
- Senior citizens
- NRIs / people living away from parents

Use these segments to understand whether the problem is recurring across different family situations.

Do not present the target as achieved until actual responses reach it.

---

# 27. DATA MODEL

Suggested submission:

```json
{
  "surveyVersion": "samay-care-market-validation-v1",
  "q1_hospitalVisitFrequency": "",
  "q2_usualCompanion": "",
  "q3_hospitalChallenges": [],
  "q4_workCommitmentImpact": "",
  "q5_postponedHospitalVisit": "",
  "q6_opdVisitDuration": "",
  "q7_careBuddyUsefulness": "",
  "q8_useSituations": [],
  "q9_trustFactors": [],
  "q10_willingnessToPay": "",
  "city": "",
  "relationship": "",
  "workingStatus": "",
  "parentsSameCity": "",
  "consent": true,
  "source": "",
  "utm_source": "",
  "utm_medium": "",
  "utm_campaign": "",
  "utm_content": "",
  "utm_term": "",
  "submittedAt": ""
}
```

Only include optional fields actually collected.

---

# 28. TECHNICAL IMPLEMENTATION

Before coding, Claude Code must read:

```text
SAMAY_CARE_BRAND_GUIDELINES.md
SAMAY_CARE_PHASE1_WEBSITE_CLAUDE_CODE.md
SAMAY_CARE_PHASE1_WEBSITE_V2.md
SAMAY_CARE_MARKET_VALIDATION_POLL.md
```

Then inspect the existing repository.

Do not create a separate application.

Create:

```text
/poll
```

Reuse existing:
- header
- footer
- typography
- colors
- buttons
- form components
- analytics abstraction
- API/service layer

Suggested structure, adapted to the existing architecture:

```text
components/
  poll/
    PollIntro
    PollProgress
    PollQuestion
    PollOption
    PollNavigation
    PollSuccess
    PollError

app/
  poll/
    page
```

Use a data-driven question model rather than hardcoding ten separate implementations.

---

# 29. QUESTION DATA MODEL

Conceptually:

```ts
type PollQuestion = {
  id: string;
  question: string;
  type: "single" | "multi";
  required: boolean;
  maxSelections?: number;
  options: {
    id: string;
    label: string;
  }[];
};
```

This should make future market surveys easier to create.

---

# 30. BACKEND / STORAGE

If an existing Samay Care backend/API exists, reuse it.

If no backend exists:

1. Create a clean survey submission service abstraction.
2. Use an environment variable for the API endpoint.
3. Make the frontend ready for API submission.
4. Document the required endpoint/schema.
5. Do not silently send responses to an unapproved third-party service.
6. Do not show success unless the response was actually accepted/stored.

---

# 31. SECURITY

Implement where applicable:
- server-side validation
- rate limiting / abuse protection
- CSRF protection
- input validation
- duplicate-submit protection
- safe error handling

Never expose API secrets in client-side code.

---

# 32. RESPONSIVE

Test:

```text
375 × 812
390 × 844
430 × 932
768 × 1024
1024 × 768
1280 × 800
1440 × 900
```

The mobile experience is especially important because respondents may arrive from WhatsApp, LinkedIn or social media.

---

# 33. SEO

Title:

> Samay Care Market Research | Help Us Make Healthcare More Convenient

Meta description:

> Share your experience of hospital visits and help Samay Care understand the challenges patients and families face during the healthcare journey.

Use appropriate canonical and Open Graph metadata.

Open Graph title:

> Help Us Make Healthcare More Convenient

Open Graph description:

> Share your experience of hospital visits and help shape the future of Samay Care.

---

# 34. IMPLEMENTATION QA

After implementation:

1. Run lint.
2. Run typecheck.
3. Run build.
4. Test all 10 questions.
5. Test required validation.
6. Test Q3 maximum of 3.
7. Test Q9 maximum of 3.
8. Test Q8 multi-select.
9. Test Back/Next navigation.
10. Test mobile.
11. Test refresh behavior.
12. Test successful submission.
13. Test failed submission.
14. Verify responses are actually stored.
15. Verify analytics events.
16. Verify no sensitive medical data is requested.
17. Verify no false CareBuddy capabilities are presented.
18. Verify `/poll` works directly.

---

# 35. ORIGINAL 10-QUESTION QUESTIONNAIRE

The following is the supplied source questionnaire and should remain substantively intact.

### 1. How often do you or your family members visit a hospital?

- More than once a month
- Once a month
- Every 2–3 months
- 2–4 times a year
- Rarely

### 2. Who usually accompanies an elderly/family member to the hospital?

- Son/Daughter
- Spouse
- Other family member
- Friend/Neighbour
- Paid attendant
- Patient usually goes alone

### 3. What are the biggest challenges during a hospital visit? (Select up to 3)

- Parking & walking
- Registration/token
- Queues & waiting
- Finding departments/doctor
- Vitals/nursing coordination
- Billing/payment
- Medicines
- Diagnostic tests/reports
- Understanding hospital processes

### 4. Have you ever cancelled or postponed work/personal commitments to accompany a family member to the hospital?

- Frequently
- Sometimes
- Once or twice
- Never

### 5. Have you ever postponed a hospital visit because nobody was available to accompany the patient?

- Yes, frequently
- Yes, sometimes
- Once
- Never

### 6. Typically, how much time does a hospital OPD visit take, including waiting and formalities?

- Less than 1 hour
- 1–2 hours
- 2–3 hours
- 3–4 hours
- More than 4 hours

### 7. Imagine you could book a trained professional Samay Care who accompanies your family member from home or hospital and manages registration, queues, navigation, vitals, consultation, billing, medicines and tests. How useful would this be?

- Extremely useful
- Very useful
- Somewhat useful
- Not very useful
- Not useful

### 8. In which situations would you use Samay Care? (Select all that apply)

- Elderly parents
- Parents living in another city
- Routine OPD visits
- Diagnostic tests
- Follow-up visits
- Hospital admission/discharge
- When I am travelling or unavailable
- Emergency situations

### 9. What would make you comfortable trusting a Samay Care with your family member? (Select up to 3)

- Background verification
- Healthcare/elder-care training
- Hospital-authorized professional
- Live tracking & family updates
- ID card/uniform
- Ratings & reviews
- Dedicated SamayCare support
- Insurance/safety coverage

### 10. How much would you be willing to pay for a 2–3 hour Samay Care hospital assistance service?

- ₹200–300
- ₹300–500
- ₹500–750
- ₹750–1,000
- ₹1,000+
- I would not pay for this service

---

# 36. IMPORTANT PRODUCT-SAFETY / POSITIONING CHECK

Before publishing the poll, review Q7, Q8 and Q9 against the actual Phase 1 service model.

In particular:
- Do not promise clinical services.
- Do not imply emergency response.
- Do not claim hospital authorization unless it exists.
- Do not claim insurance/safety coverage unless it exists.
- Do not claim live tracking unless it exists.
- Treat these as **research questions about desired features/trust factors**, not promises.

---

# 37. FINAL EXPERIENCE

The respondent should finish thinking:

> **That was easy.**

And understand:

> **Samay Care wants to understand the real healthcare journey before scaling.**

The page should feel like genuine market research, not a sales funnel.

---

# END

**Samay Care**

**Making Healthcare Convenient.**

**Your loved one is not alone. Neither are you.**

**Time. Care. Always.**
