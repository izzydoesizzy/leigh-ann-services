/**
 * Content for the capability brief. Shared by both visual versions:
 *   /capability-brief        (editorial theme)  src/pages/capability-brief.astro
 *   /new/capability-brief    (Teal & Clay)      src/pages/new/capability-brief.astro
 * Edit copy here once and both pages update. The archived copy under
 * /archive/editorial keeps its own frozen content.
 */
import { pullQuotes } from "./pull-quotes.ts";

// Brief-friendly subset: print-first rhythm, 6 pulls total.
export const briefPamFeature = pullQuotes.find(q => q.extract.startsWith("She didn't just move"))!;
export const briefPamCloser = pullQuotes.find(q => q.extract === "Any executive team would be lucky to have her.")!;
export const briefJulia = pullQuotes.find(q => q.extract.startsWith("She operated as a true"))!;
export const briefCourtney = pullQuotes.find(q => q.extract.startsWith("Working with her made"))!;
export const briefShorts = [
  pullQuotes.find(q => q.extract === "What stood out most was her judgment."),
  pullQuotes.find(q => q.extract.startsWith("You could hand")),
].filter(Boolean) as typeof pullQuotes;
// Keep the industry in the background: show "public company" rather than the sector detail.
export const sectorLabel = (sector: string) => sector.replace("public-company cannabis MSO", "public company");

// Intake form: qualifies the lead, then offers a 30-minute Google Calendar slot.
export const BOOK_URL = "https://docs.google.com/forms/d/1NiMiUdhcx3ph5VCF6yI_nZJgvUZbihtdkXCPmrCju1E/viewform";
export const EMAIL = "info@leighannmartin.com";

export const stats = [
  { value: "12+", label: "years supporting C-suite", sub: "PwC, Third Bridge, Immunovant, Ascend, To Be Hosted" },
  { value: "5", label: "C-suite execs as sole EA", sub: "Immunovant, by March 2020" },
  { value: "200+", label: "stakeholders coordinated", sub: "across 7 markets at Ascend" },
  { value: "98%", label: "stakeholder satisfaction", sub: "C-suite, board, and IR partners" },
  { value: "25%", label: "operational efficiency lift", sub: "M&A, IR, and ELT alignment" },
  { value: "22%", label: "employee satisfaction lift", sub: "hybrid work and policy modernization" },
  { value: "20%", label: "faster EA onboarding", sub: "scalable training frameworks" },
  { value: "$10M+", label: "monthly processing", sub: "100% regulatory compliance" },
];

export const cases = [
  {
    num: "00",
    company: "To Be Hosted",
    role: "Fractional EA and operations partner to the founder",
    headline: "A small business, run on systems.",
    body: "To Be Hosted is an event management company. I run the operational layer for the founder and her team: calendar, scheduling, meeting prep, expense and income coding, invoices and receipts, gifting, reservations, and travel for a team of four. I manage the master project and client trackers, the client and event folders, and contract and invoice tracking, all inside the Google Workspace the business already pays for. On the growth side, I develop proposals, run new business outreach and follow-up, and join new client meetings when it helps.",
    metrics: [
      { label: "people supported", value: "Founder + 4" },
      { label: "built in", value: "Google Workspace" },
      { label: "scope", value: "Admin to proposals" },
    ],
  },
  {
    num: "01",
    company: "Ascend Wellness Holdings",
    role: "EA to the CEO and President",
    headline: "Board cadence from zero.",
    body: "When I arrived there were no board meetings on the calendar. I coordinated an 8-person quarterly board convening (4 external directors plus CEO, CFO, President, and Chief Counsel) and two standing committees (Audit and Compensation). Anchored dates against earnings and legal review windows, and locked in member availability 12 months ahead.",
    metrics: [
      { label: "months planned ahead", value: "12" },
      { label: "standing committees", value: "2" },
      { label: "board convening", value: "8-person" },
    ],
  },
  {
    num: "02",
    company: "Immunovant",
    role: "Senior EA to CEO and General Counsel",
    headline: "The EA function, from zero.",
    body: "Employee #17 at hire. Built the EA function from scratch as Immunovant scaled. Sole EA for five C-suite executives by March 2020. Designed onboarding programs for 6 administrative professionals that reduced ramp-up time by 20%. Co-founded the Culture Committee with HR and partnered with Facilities and ELT on policies that lifted employee satisfaction by 22%.",
    metrics: [
      { label: "C-suite execs as sole EA", value: "5" },
      { label: "faster new-hire ramp", value: "20%" },
      { label: "employee satisfaction lift", value: "22%" },
    ],
  },
  {
    num: "03",
    company: "Ascend Wellness Holdings",
    role: "EA, Investor Relations",
    headline: "Earnings prep, rebuilt.",
    body: "One cycle in-role exposed the gaps. July 2025, I rebuilt the system. Aligned external IR (Mattio Communications), Legal, VP Financial Planning, PR, and C-suite on a shared 6 to 8 week cadence with SharePoint template discipline. Granted the Chief Commercial Officer script access mid-cycle and pulled the VP of Marketing into live prep, closing the input loops that had forced post-draft revisions. Deployed for Q2 2025 and ran through my tenure.",
    metrics: [
      { label: "week system", value: "6 to 8" },
      { label: "stakeholder satisfaction", value: "98%" },
      { label: "efficiency improvement", value: "25%" },
    ],
  },
];

export const process = [
  { num: "01", phase: "Book a call", time: "2 minutes", title: "Tell me what's breaking.", body: "A short form asks what you're dealing with, what you've tried, and when you need it fixed. Then you pick a 30-minute time on my calendar." },
  { num: "02", phase: "Discovery call", time: "Free, 30 minutes", title: "We talk it through.", body: "I ask the questions I need to understand the real problem, and tell you honestly whether I'm the right fit." },
  { num: "03", phase: "Scope", time: "After the call", title: "I recommend the right way to work together.", body: "Done by you, done with you, or done for you. In writing: what I'll build or run, what you'll have at the end, and the timeline. No surprises, no scope creep." },
  { num: "04", phase: "Kickoff", time: "Week 1", title: "I get into your systems.", body: "Access to the tools you already use, a look at what's working and what isn't, and a clear first priority. I build in your systems so nothing depends on me." },
  { num: "05", phase: "Handoff or ongoing", time: "Your call", title: "You own it, or I keep running it.", body: "Templates and setup work end with documentation and a walkthrough so your team can run it. Done-for-you clients keep me on as their fractional partner." },
];

export const packages = [
  {
    num: "01",
    name: "Done by you.",
    tag: "Templates and instructions",
    for: "Founders and small teams who want a proven system and will run it themselves.",
    body: "I hand over the templates I use with my own clients: project and client trackers, contract and invoice tracking, folder structures, meeting prep. Ready to run in the Google Workspace or Microsoft tools you already pay for, with clear instructions.",
  },
  {
    num: "02",
    name: "Done with you.",
    tag: "Guided setup, 1 to 2 weeks",
    for: "Teams that want it built properly and want to learn how it works.",
    body: "We set up your systems together. I tailor the trackers and workflows to how your business actually runs, train you and your team, and stay close until it sticks.",
  },
  {
    num: "03",
    name: "Done for you.",
    tag: "Full setup and ongoing support",
    for: "Founders and executives who want the operational layer off their plate.",
    body: "I build the systems and run them as your fractional EA and operations partner: calendar, inbox, scheduling, invoices, travel, follow-up, and the projects that keep slipping.",
  },
];

export const disciplinesCovered = [
  { name: "Operations", body: "Trackers, invoicing, vendor and contract management, the systems that keep a business running." },
  { name: "Executive partnership", body: "Calendar, inbox, meeting prep, travel, and gatekeeping for a founder or C-suite leader." },
  { name: "Board and governance", body: "Board calendars, committee cadence, materials, and minutes." },
  { name: "Investor relations", body: "Earnings prep cadence and coordination across finance, legal, PR, and IR partners." },
];

export const credentials = [
  {
    kind: "Professional",
    name: "Certified Administrative Professional",
    detail: "CAP &middot; International Association of Administrative Professionals",
  },
  {
    kind: "Platform",
    name: "Salesforce Certified Platform Administrator",
    detail: "Salesforce, in progress",
  },
  {
    kind: "Platform",
    name: "Microsoft Office Certified Specialist",
    detail: "Microsoft, certified",
  },
  {
    kind: "Professional",
    name: "Concentration: Business Administration",
    detail: "SBCS Global Learning Institute, Trinidad and Tobago",
  },
  {
    kind: "Education",
    name: "Institute of Culinary Education",
    detail: "Culinary Arts",
  },
];

// Chapter 1 bio. Paragraphs contain a little inline HTML (<em>), so render with set:html.
export const bio = [
  "I grew up in Trinidad &amp; Tobago, where I started at age 18 in the Office of the VP of Oil and Refining at the Petroleum Company of Trinidad &amp; Tobago. I moved to New York City in 2006 and have worked in executive offices ever since. I've supported C-suite and senior leaders in financial investment, insight and research, public accounting, biopharma and event management industries.",
  "Alongside 12+ years as a Senior Administrative Professional, I trained as a chef at the Institute of Culinary Education and graduated with high honors. I also built <em>A Table For Four</em>, a pop-up dinner series that ran in New York, London, Wisconsin, and Grenada. <em>The New York Times</em>, <em>Eater</em>, and <em>The Washington Post</em> covered it. It taught me to curate, lead, and operate at any volume. The two careers have always fed each other.",
  "My approach is simple. Anticipate, don't react. Own it, don't just execute. Build systems that survive transitions. Treat confidentiality as the default, not a policy.",
  "I'm a Certified Administrative Professional, fluent in AI tools and the trusted platforms offices run on. I do my best work with executives who value that, whether I'm embedded or fractional.",
];

export const glance = [
  { label: "Based", value: "Union City, NJ &middot; NYC tri-state" },
  { label: "Open to", value: "Hybrid or in-office senior EA roles in NYC. Fully remote fractional engagements." },
  { label: "Sectors", value: "Biotech, finance, fintech, public and private-company operations" },
  { label: "Board work", value: "Past board member, Kind Kitchen Group" },
  { label: "Languages", value: "English (native)" },
];

export const tagline = "Operations &middot; EA function &middot; Board cadence &middot; Earnings coordination";
export const LINKEDIN = "linkedin.com/in/leigh-ann-martin";
