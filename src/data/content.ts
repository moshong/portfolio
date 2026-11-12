// Edit this file to personalise the whole portfolio.
export const profile = {
  name: "John Robert R. Tipon",
  handle: "johnrobert",
  initials: "JRT",
  roles: ["Automation Specialist", "Software Developer", "Systems Analyst", "Data Analyst / Engineer"],
  headline: "Automation Specialist · Software Developer · Systems Analyst",
  tagline: "Let’s give you your time back.",
  intro:
    "I build the custom software and automated workflows that run the busywork for you. Six years of turning messy business processes into systems that work on their own, now connected with GoHighLevel, Zapier, Make and n8n. So you can focus on the business, and still have time for family and leisure time.",
  email: "johnrobertrtipon@gmail.com",
  location: "Jagna, Bohol, Philippines",
  resume: "/John%20Robert%20R.%20Tipon%20-%20CV.docx",
  links: {
    github: "https://github.com/moshong",
    linkedin: "https://www.linkedin.com/in/john-robert-tipon-18836215b/",
    facebook: "https://www.facebook.com/hiphoprince/",
    discord: "https://discord.com/users/719514771811991592",
    steam: "https://steamcommunity.com/id/moshaanng/",
  },
};

// Hero photos (files in /public). Add more, e.g. "/lecture.jpg", and they auto-rotate with dots.
export const photos = ["/me.png"];

// Optional head-turn photos. When the pointer moves up/down/left/right of your photo, the matching image fades in.
// Put the files in /public and fill in any of them, e.g. { up: "/me-up.png", down: "/me-down.png", left: "/me-left.png", right: "/me-right.png" }
export const lookPhotos: Partial<Record<"up" | "down" | "left" | "right", string>> = {};

export const stats = [
  { value: "6+", label: "Years as systems analyst" },
  { value: "6", label: "Industries served" },
  { value: "2019", label: "Engineering graduate" },
  { value: "∞", label: "Cups of coffee" },
];

export const stack = ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "PHP", "SQL", "GoHighLevel", "Zapier", "Make", "n8n"];

export const services = [
  { title: "Customized Systems", body: "Tailor-made software for pharmacies, hardware stores, gasoline stations, hotels and restaurants — designed around each business's own process." },
  { title: "School & Billing Systems", body: "School management systems and billing systems that simplify records, enrollment, invoicing and collections." },
  { title: "Automation (GHL · Zapier · Make · n8n)", body: "Workflows that remove repetitive tasks and connect your tools, so follow-ups, notifications and data syncing run without anyone babysitting them." },
  { title: "Data Analysis & Engineering", body: "Turning business data into clean databases, reports and insights that support better decisions." },
  { title: "Photo Editing", body: "Retouching and editing photos with a careful eye for detail and consistent style." },
];

export const career: { role: string; org: string; period: string; points: string[]; impact?: string[] }[] = [
  {
    role: "Freelance Systems Developer & Automation Specialist", org: "Self-employed", period: "Ongoing",
    points: ["Built customized systems for pharmacies, hardware stores, gasoline stations, clinics and minimarts.", "Delivered school management, billing, hotel and restaurant systems that fit each client's process.", "Building automations with GoHighLevel, Zapier, Make and n8n."],
    impact: [
      "Replaces paper logs and scattered spreadsheets with one system, so owners see sales, stock and cash in real time.",
      "Accurate data shows best sellers and low stock, so owners can plan purchasing and expansion with confidence.",
      "Automations take over repetitive follow-ups, notifications and data entry, cutting errors and freeing staff for real work.",
    ],
  },
  {
    role: "Systems Analyst", org: "CVIF, Jagna, Bohol · School", period: "April 2021 – October 2026",
    points: [
      "Analysed business processes and translated them into working systems.",
      "Supported rollout, training and ongoing improvements.",
      "Developed and maintain the School Management System: Enrollment, Student Accounts Billing, Accounting, Registrar, Clinic, Tabulation, and Attendance with integrated biometrics.",
    ],
    impact: [
      "Did more than digitize: I redesigned each process to remove duplicate steps, so the work became easier and faster for staff.",
      "Every transaction (enrollment, payments, grades, clinic visits, attendance) is recorded, so workflows can be audited and traced.",
      "Enrollment, billing, accounting and the registrar share one source of data, so there is no re-encoding and fewer errors.",
      "Biometric attendance and tabulation give accurate, real-time records without manual computation.",
    ],
  },
  {
    role: "Senior High School Instructor", org: "CVIF, Jagna, Bohol", period: "January 2020 – October 2026",
    points: [
      "Taught programming fundamentals, from the basics to building a working system from scratch, in C, Java, MySQL, Python and JavaScript.",
      "Guided students through work immersion so they apply theory to real, actual work.",
      "Taught Empowerment Technologies, helping non-technical students learn web tools and advanced Excel functions.",
      "Mentored ICT Research Projects and Inquiries, Immersion and Investigation case studies related to students' fields.",
    ],
    impact: [
      "Students graduate with practical, job-ready skills and real projects, not just theory.",
    ],
  },
];

// images: add screenshots in /public (e.g. "/projects/clinic-1.png"). impact: what the system improved.
export const projects: { name: string; desc: string; tags: string[]; link?: string; images?: string[]; impact?: string }[] = [
  { name: "Mobile App — Gleaning", desc: "A mobile application built for gleaning, designed for easy day-to-day use on the phone.", tags: ["Mobile App"] },
  { name: "Clinic with Laboratory & POS Integration", desc: "Clinic management with laboratory records and an integrated point-of-sale for billing.", tags: ["Clinic", "Laboratory", "POS"] },
  { name: "Minimart System", desc: "Sales, inventory and daily reporting for minimart operations.", tags: ["POS", "Inventory", "Reports"] },
  { name: "Website Development — Rhij Aesthetics", desc: "Business website for Rhij Aesthetics.", tags: ["Website", "Web Development"], link: "https://rhijaesthetics.com" },
  { name: "LGU Budget System with Tracker", desc: "Budget management for a local government unit, with a tracker to monitor allocations and spending.", tags: ["Government", "Budget", "Tracker"] },
  { name: "Pharmacy System", desc: "Inventory, sales and expiry tracking tailored to a pharmacy's daily workflow.", tags: ["Custom System", "SQL"] },
  { name: "Hardware & Gas Station Systems", desc: "Point-of-sale, stock and daily reporting for hardware and fuel businesses.", tags: ["POS", "Inventory", "Reports"] },
  { name: "School Management System", desc: "Student records, enrollment and grading in one place.", tags: ["Education", "Database"] },
  { name: "Hotel & Restaurant Billing", desc: "Billing and order systems that match the way the staff already work.", tags: ["Billing", "Hospitality"] },
  { name: "Workflow Automations", desc: "Automations with GHL, Zapier, Make and n8n for follow-ups, notifications and data syncing.", tags: ["GHL", "Zapier", "Make", "n8n"] },
];

// Sample automations. Add a screenshot in /public and set image: "/workflows/xyz.png" when ready.
export type Platform = "n8n" | "GHL" | "Make" | "Zapier";
export const specializations = [
  "Healthcare & Medical Clinic",
  "Dental Practice",
  "Medical Aesthetics & Med Spa",
  "Retail & E-commerce",
  "Industrial & Manufacturing",
];
export const workflows: { platform: Platform; name: string; desc: string; helps: string; tools: string[]; image?: string }[] = [
  {
    platform: "n8n", name: "Medical Clinic Patient Intake & Appointment Automation",
    desc: "Automates patient intake, appointment scheduling, confirmations, reminders, and clinic staff notifications.",
    helps: "Front-desk staff stop handling requests and reminders by hand, and fewer patients miss appointments.",
    tools: ["n8n", "Google Forms", "Google Calendar", "Gmail", "Twilio", "Google Sheets"],
  },
  {
    platform: "n8n", name: "Dental Clinic Patient Follow-Up & Recall System",
    desc: "Automates post-visit follow-ups, patient feedback requests, routine dental recall reminders, and appointment rebooking.",
    helps: "Patients return for routine checkups without anyone chasing them, keeping the chair schedule full.",
    tools: ["n8n", "Airtable", "Google Calendar", "Gmail", "Twilio"],
  },
  {
    platform: "GHL", name: "Med Spa Lead Generation & Booking Funnel",
    desc: "Creates an automated lead generation system that captures inquiries, manages leads, sends follow-ups, and converts prospects into booked consultations.",
    helps: "Every inquiry gets a fast reply and follow-up, so more leads turn into booked consultations.",
    tools: ["GoHighLevel", "Facebook Lead Ads", "GHL CRM", "Calendar", "SMS", "Email"],
  },
  {
    platform: "GHL", name: "Dental Clinic Missed-Call Recovery & Patient Reactivation",
    desc: "Automatically responds to missed calls, sends appointment booking links, follows up with potential patients, and reactivates inactive contacts.",
    helps: "Missed calls no longer mean lost patients, and dormant contacts become appointments again.",
    tools: ["GoHighLevel", "CRM", "SMS", "Email", "Calendar"],
  },
  {
    platform: "Make", name: "Retail Order Processing & Inventory Management",
    desc: "Automates online order processing, inventory tracking, order confirmations, warehouse notifications, and shipping updates.",
    helps: "Orders flow to the warehouse with no re-typing, and stock counts stay accurate so you don't oversell.",
    tools: ["Make.com", "Shopify", "Airtable", "Gmail", "Google Sheets"],
  },
  {
    platform: "Make", name: "Medical Aesthetics Client Journey Automation",
    desc: "Automates appointment confirmations, treatment preparation instructions, post-visit check-ins, review requests, and future booking reminders.",
    helps: "Clients are prepared and cared for at every step, which brings more reviews and repeat bookings.",
    tools: ["Make.com", "Typeform", "Airtable", "Gmail", "Twilio", "Google Calendar"],
  },
  {
    platform: "Zapier", name: "Industrial Maintenance Request & Work Order Management",
    desc: "Automates equipment maintenance requests, task assignments, technician notifications, work order tracking, and completion updates.",
    helps: "Requests reach the right technician right away and every work order is tracked to completion, cutting downtime.",
    tools: ["Zapier", "Jotform", "Airtable", "Slack", "Asana", "Gmail"],
  },
  {
    platform: "Zapier", name: "Retail & Industrial Purchase Order Approval System",
    desc: "Automates purchase requests, approval routing, manager notifications, purchase order creation, and procurement tracking.",
    helps: "Approvals move quickly and every purchase leaves a clear record, with no lost requests or email chasing.",
    tools: ["Zapier", "Jotform", "Airtable", "Gmail", "Slack", "Google Drive"],
  },
];

export const tiers = [
  { id: "basic", name: "Basic Automation", price: "$950", note: "Starts at", features: ["One focused workflow", "Up to 3 connected apps", "Testing and handover"] },
  { id: "intermediate", name: "Intermediate Automation", price: "$1,200", note: "Starts at", features: ["Multi-step workflows", "Branching logic and data syncing", "Testing, handover and walkthrough"] },
  { id: "enterprise", name: "Enterprise", price: "Custom", note: "Tailored to you", features: ["Customised systems and automations", "Scoped around your processes", "Ongoing support options"] },
];

export const skills = {
  automation: ["GoHighLevel", "Zapier", "Make", "n8n"],
  systems: ["Systems Analysis", "Process Mapping", "Billing Systems", "POS", "School Management"],
  development: ["TypeScript", "React", "Next.js", "PHP", "SQL"],
  data: ["Data Analysis", "Data Engineering", "Reporting"],
  other: ["Photo Editing"],
};

export const education = [
  { school: "Bohol Island State University", degree: "BS Mechanical Engineering", period: "Graduated 2019" },
];

export const testimonials = [
  { quote: "John took the time to understand our business problems, then tailored the system to fit our process. Our workflows are now more organized, more efficient and a lot smarter.", who: "Doc Bompat", title: "Client · Clinic, Laboratory & POS Integration" },
  { quote: "John advised us on our warehouse stocking and delivery, and set up our in-house POS. We can now easily track our best-selling items, and the accurate data helps us plan how to expand the business.", who: "Lilibeth Rara", title: "Client · Warehouse & In-house POS" },
  { quote: "John is technically strong and easy to work with. He knows what he's doing, and he understands the business side as well. I treat him as a partner because of his technical and business knowledge.", who: "Edwin Salaan", title: "Client & Business Partner · Construction, Hardware & Gasoline Systems" },
  { quote: "Sir John helped us build our school clinic system. He guided us and got the system working without spoon-feeding us. He's a great and friendly mentor.", who: "John Paul Pagalan", title: "Student · School Clinic System" },
  { quote: "John did an outstanding job bringing our vision to life! He designed our website exactly according to our preferences and went above and beyond by adding thoughtful features and creative touches that made it even more exceptional. We truly appreciate his creativity, attention to detail, and dedication. Highly recommend!", who: "Rhij", title: "Client · Aesthetic Clinic Website" },
];

// Dropdown options for the pre-booking questions. Edit freely.
export const bookingQuestions = [
  { id: "automate", label: "What do you want to automate?", options: ["Lead follow-up & CRM", "Billing & invoicing", "Inventory & POS reporting", "Notifications & reminders", "Data syncing between apps", "Custom system (not sure yet)", "Other / not sure"] },
  { id: "field", label: "Field of business", options: ["Retail / Minimart", "Pharmacy / Clinic", "Hardware / Construction", "Gasoline station", "School / Education", "Hotel / Restaurant", "Agency / Services", "Government / LGU", "Other"] },
  { id: "budget", label: "Budget for the system", options: ["Under $500", "$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+", "Not sure yet"] },
];

// Paste your Google Calendar "appointment schedule" booking page URL here
// (Google Calendar → Create → Appointment schedule → Open booking page).
export const bookingUrl = "https://calendar.app.google/k9cRp1o4m8gcVEEJ8";
