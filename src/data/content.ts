// Edit this file to personalise the whole portfolio.
export const profile = {
  name: "John Robert R. Tipon",
  handle: "johnrobert",
  initials: "JRT",
  roles: ["Automation Specialist", "Systems Analyst", "Software Developer", "Data Analyst / Engineer", "Educator", "Photo Editor"],
  headline: "Automation Specialist · Systems Analyst · Software Developer · Educator",
  intro:
    "Educator at CVIF in Jagna, Bohol, and a Systems Analyst for 6 years. I build customized systems that fit how businesses really work, and I'm now levelling up in automation with GHL, Make and n8n to help teams get more done with less effort.",
  email: "you@example.com",
  location: "Jagna, Bohol, Philippines",
  resume: "#",
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

export const stack = ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "PHP", "SQL", "GoHighLevel", "Make", "n8n"];

export const services = [
  { title: "Customized Systems", body: "Tailor-made software for pharmacies, hardware stores, gasoline stations, hotels and restaurants — designed around each business's own process." },
  { title: "School & Billing Systems", body: "School management systems and billing systems that simplify records, enrollment, invoicing and collections." },
  { title: "Automation (GHL · Make · n8n)", body: "Currently upskilling to automate repetitive tasks and connect tools, increasing efficiency for teams and small businesses." },
  { title: "Data Analysis & Engineering", body: "Turning business data into clean databases, reports and insights that support better decisions." },
  { title: "Teaching & Mentoring", body: "Educator at CVIF, Jagna, Bohol — making technical topics practical and approachable for students." },
  { title: "Photo Editing", body: "Retouching and editing photos with a careful eye for detail and consistent style." },
];

export const career = [
  { role: "Educator", org: "CVIF, Jagna, Bohol", period: "Present", points: ["Teaching students while continuing systems and automation work.", "Bringing real-world systems experience into the classroom."] },
  { role: "Freelance Systems Developer (Part-time)", org: "Self-employed", period: "Ongoing", points: ["Built customized systems for pharmacies, hardware stores and gasoline stations.", "Delivered school management, billing, hotel and restaurant systems that fit each client's process."] },
  { role: "Systems Analyst", org: "Concurrent with teaching", period: "6 years", points: ["Analysed business processes and translated them into working systems.", "Supported rollout, training and ongoing improvements."] },
];

export const projects: { name: string; desc: string; tags: string[]; link?: string }[] = [
  { name: "Mobile App — Gleaning", desc: "A mobile application built for gleaning, designed for easy day-to-day use on the phone.", tags: ["Mobile App"] },
  { name: "Clinic with Laboratory & POS Integration", desc: "Clinic management with laboratory records and an integrated point-of-sale for billing.", tags: ["Clinic", "Laboratory", "POS"] },
  { name: "Minimart System", desc: "Sales, inventory and daily reporting for minimart operations.", tags: ["POS", "Inventory", "Reports"] },
  { name: "Website Development — Rhij Aesthetics", desc: "Business website for Rhij Aesthetics.", tags: ["Website", "Web Development"], link: "https://rhijaesthetics.com" },
  { name: "LGU Budget System with Tracker", desc: "Budget management for a local government unit, with a tracker to monitor allocations and spending.", tags: ["Government", "Budget", "Tracker"] },
  { name: "Pharmacy System", desc: "Inventory, sales and expiry tracking tailored to a pharmacy's daily workflow.", tags: ["Custom System", "SQL"] },
  { name: "Hardware & Gas Station Systems", desc: "Point-of-sale, stock and daily reporting for hardware and fuel businesses.", tags: ["POS", "Inventory", "Reports"] },
  { name: "School Management System", desc: "Student records, enrollment and grading in one place.", tags: ["Education", "Database"] },
  { name: "Hotel & Restaurant Billing", desc: "Billing and order systems that match the way the staff already work.", tags: ["Billing", "Hospitality"] },
  { name: "Workflow Automations", desc: "Learning projects with GHL, Make and n8n to automate follow-ups, notifications and data syncing.", tags: ["GHL", "Make", "n8n"] },
];

export const skills = {
  automation: ["GoHighLevel", "Make", "n8n"],
  systems: ["Systems Analysis", "Process Mapping", "Billing Systems", "POS", "School Management"],
  development: ["TypeScript", "React", "Next.js", "PHP", "SQL"],
  data: ["Data Analysis", "Data Engineering", "Reporting"],
  other: ["Teaching", "Photo Editing"],
};

export const education = [
  { school: "Bohol Island State University", degree: "BS Mechanical Engineering", period: "Graduated 2019" },
];

export const testimonials = [
  { quote: "Replace with a client testimonial about a system you built for them.", who: "Client Name", title: "Business Owner" },
  { quote: "Replace with feedback from a student or colleague.", who: "Name", title: "CVIF" },
  { quote: "Replace with a note about your automation or analysis work.", who: "Name", title: "Role" },
];
