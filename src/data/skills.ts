import type { Skill, SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  "Data Analysis",
  "Business Intelligence",
  "Programming",
  "Database",
  "Tools",
];

export const skills: Skill[] = [
  { name: "Python", category: "Programming" },
  { name: "C#", category: "Programming" },
  { name: "Pandas", category: "Data Analysis" },
  { name: "NumPy", category: "Data Analysis" },
  { name: "Scikit-learn", category: "Data Analysis" },
  { name: "Excel", category: "Data Analysis" },
  { name: "Power BI", category: "Business Intelligence" },
  { name: "SQL", category: "Database" },
  { name: "Microsoft SQL Server", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
];
