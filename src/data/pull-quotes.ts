/**
 * Pull-quote extracts from recommendations.
 *
 * Source: /Users/gallifrey/madscience/leigh-ann-ea/public/recommendations.csv
 * Most entries are drafts Leigh-Ann wrote and sent to former colleagues for approval/editing.
 * Only Pam Connealy's recommendation is live on LinkedIn. Every non-live attribution is
 * anonymized to role + sector out of respect for the authors, matching the pattern used
 * on leigh-ann-ea's public homepage.
 *
 * `size` hints visual weight on the proof wall (L = feature, M = medium, S = micro).
 */

export interface PullQuote {
  extract: string;
  role: string;
  sector: string;
  size: "L" | "M" | "S";
  status: "live" | "draft";
}

export const pullQuotes: PullQuote[] = [
  // Pam Connealy (live on LinkedIn)
  {
    extract:
      "She didn't just move documents around. She understood what was in them, flagged issues before they became problems.",
    role: "Pam Connealy, Former CFO and COO",
    sector: "Immunovant",
    size: "L",
    status: "live",
  },
  {
    extract: "Any executive team would be lucky to have her.",
    role: "Pam Connealy",
    sector: "Live on LinkedIn",
    size: "M",
    status: "live",
  },

  // Ascend leader reference (internal reference call, live)
  {
    extract:
      "She is constantly asking questions to create a better system. Constantly thinking about processes.",
    role: "Internal reference",
    sector: "public-company cannabis MSO",
    size: "M",
    status: "live",
  },

  // CEO, Immunovant (Pete) -- draft
  {
    extract: "She improved our executive decision-making effectiveness by 30%.",
    role: "Former CEO",
    sector: "clinical-stage biotech",
    size: "M",
    status: "draft",
  },
  {
    extract: "What set her apart was not just execution but anticipation.",
    role: "Former CEO",
    sector: "clinical-stage biotech",
    size: "S",
    status: "draft",
  },

  // Senior Leader, Immunovant (Julia) -- draft
  {
    extract: "She operated as a true strategic partner, not a task executor.",
    role: "Senior Leader",
    sector: "clinical-stage biotech",
    size: "L",
    status: "draft",
  },

  // Executive, Immunovant (Eric) -- draft
  {
    extract: "What stood out most was her judgment.",
    role: "Executive",
    sector: "clinical-stage biotech",
    size: "S",
    status: "draft",
  },
  {
    extract:
      "She flagged issues early, never needed hand-holding on confidential matters, and consistently put the company ahead of the task.",
    role: "Executive",
    sector: "clinical-stage biotech",
    size: "M",
    status: "draft",
  },

  // Founder & Chairman, Ascend (Abner) -- draft
  {
    extract: "She operates at the highest level.",
    role: "Founder and Chairman",
    sector: "public-company cannabis MSO",
    size: "S",
    status: "draft",
  },

  // Former CEO, Ascend (John) -- draft
  {
    extract:
      "In a fast-moving, heavily regulated environment, she never missed a beat.",
    role: "Former CEO",
    sector: "public-company cannabis MSO",
    size: "M",
    status: "draft",
  },

  // President & Co-Founder, Ascend (Frank) -- draft
  {
    extract:
      "You could hand Leigh-Ann a complex, multi-market project and trust it would be executed flawlessly.",
    role: "President and Co-Founder",
    sector: "public-company cannabis MSO",
    size: "M",
    status: "draft",
  },

  // Former CFO, Ascend (Dan) -- draft
  {
    extract:
      "She brought emotional intelligence to the role. She found ways to reduce friction rather than add to it.",
    role: "Former CFO",
    sector: "public-company cannabis MSO",
    size: "M",
    status: "draft",
  },

  // CCO, Ascend (David) -- draft
  {
    extract:
      "Cannabis is a volatile, heavily regulated industry, and Leigh-Ann navigated it with composure and professionalism you don't often see.",
    role: "Chief Commercial Officer",
    sector: "public-company cannabis MSO",
    size: "M",
    status: "draft",
  },

  // Senior Consultant, Mattio (Courtney) -- external IR partner, draft
  {
    extract: "Working with her made our job easier every single quarter.",
    role: "Senior Consultant",
    sector: "external IR agency",
    size: "L",
    status: "draft",
  },
  {
    extract: "She was the single most important internal counterpart we worked with.",
    role: "Senior Consultant",
    sector: "external IR agency",
    size: "S",
    status: "draft",
  },
];

export const liveQuotes = pullQuotes.filter((q) => q.status === "live");
export const draftQuotes = pullQuotes.filter((q) => q.status === "draft");
