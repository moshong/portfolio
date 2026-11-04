// Edit this file to personalise the whole portfolio.
export const profile = {
  name: "John Robert R. Tipon",
  handle: "johnrobert",
  initials: "JRT",
  roles: ["Automation Specialist", "Software Developer", "Systems Analyst", "Data Analyst / Engineer"],
  headline: "Automation Specialist · Software Developer · Systems Analyst",
  tagline: "Stop acting like a robot.",
  intro:
    "I build the resilient software and automated workflows that buy your time back. Six years of turning messy business processes into custom systems, now connecting them with GoHighLevel, Zapier, Make and n8n.",
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

export const career = [
  { role: "Freelance Systems Developer & Automation Specialist", org: "Self-employed", period: "Ongoing", points: ["Built customized systems for pharmacies, hardware stores, gasoline stations, clinics and minimarts.", "Delivered school management, billing, hotel and restaurant systems that fit each client's process.", "Building automations with GoHighLevel, Zapier, Make and n8n."] },
  { role: "Systems Analyst", org: "Concurrent with teaching", period: "6 years", points: ["Analysed business processes and translated them into working systems.", "Supported rollout, training and ongoing improvements."] },
  { role: "Educator", org: "CVIF, Jagna, Bohol", period: "Until October 2026", points: ["Taught students while continuing systems and automation work."] },
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

// Sample automations. Add a screenshot in /public and set image, and fill in desc when ready.
export const workflows: { platform: "GHL" | "Zapier" | "n8n"; name: string; desc: string; image?: string }[] = [
  { platform: "GHL", name: "Lead follow-up sequence", desc: "Sample workflow coming soon." },
  { platform: "Zapier", name: "Form to CRM & notifications", desc: "Sample workflow coming soon." },
  { platform: "n8n", name: "Data sync & reporting", desc: "Sample workflow coming soon." },
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
  { quote: "John took the time to understand our business problems, then tailored the system to fit our process. Our workflows are now more organized, more efficient and a lot smarter.", who: "Client", title: "Clinic, Laboratory & POS Integration" },
  { quote: "John advised us on our warehouse stocking and delivery, and set up our in-house POS. We can now easily track our best-selling items, and the accurate data helps us plan how to expand the business.", who: "Client", title: "Warehouse & In-house POS" },
  { quote: "John is technically strong and easy to work with. He knows what he's doing, and he understands the business side as well. I treat him as a partner because of his technical and business knowledge.", who: "Business Partner", title: "Business Partner" },
  { quote: "Sir John helped us build our school clinic system. He guided us and got the system working without spoon-feeding us. He's a great and friendly mentor.", who: "Student", title: "School Clinic System" },
];

// Paste your Google Calendar "appointment schedule" booking page URL here
// (Google Calendar → Create → Appointment schedule → Open booking page).
export const bookingUrl = "https://calendar.app.google/k9cRp1o4m8gcVEEJ8";
