export const initialTopics = [
  {
    title: "FullStack Developer",
    active: true
  },
  {
    title: "Frontend Developer",
    active: false
  },
  {
    title: "Backend Developer",
    active: false
  },
  {
    title: "Devops Engineer",
    active: false
  },
  {
    title: "Data Science",
    active: false
  },
  {
    title: "UI/UX Designer",
    active: false
  }
]

type TechStack = {
  [key: string]: { title: string; active: boolean }[];
};

export const techStack: TechStack = {
  "Frontend Developer": [
    { title: "HTML", active: false },
    { title: "CSS", active: false },
    { title: "JavaScript", active: false },
    { title: "React", active: false },
    { title: "Angular", active: false },
    { title: "Vue.js", active: false },
    { title: "Svelte", active: false },
    { title: "TypeScript", active: false },
    { title: "Bootstrap", active: false },
    { title: "Tailwind CSS", active: false }
  ],
  "Backend Developer": [
    { title: "Node.js", active: false },
    { title: "Express.js", active: false },
    { title: "Django", active: false },
    { title: "Flask", active: false },
    { title: "Ruby on Rails", active: false },
    { title: "Spring Boot", active: false },
    { title: "ASP.NET", active: false },
    { title: "Laravel", active: false },
    { title: "PHP", active: false },
    { title: "Java", active: false }
  ],
  "FullStack Developer": [
    { title: "JavaScript", active: false },
    { title: "Node.js", active: false },
    { title: "Express.js", active: false },
    { title: "React", active: false },
    { title: "Angular", active: false },
    { title: "Vue.js", active: false },
    { title: "Django", active: false },
    { title: "Flask", active: false },
    { title: "Ruby on Rails", active: false },
    { title: "ASP.NET", active: false }
  ],
  "Devops Engineer": [
    { title: "Docker", active: false },
    { title: "Kubernetes", active: false },
    { title: "Jenkins", active: false },
    { title: "Terraform", active: false },
    { title: "Ansible", active: false },
    { title: "Puppet", active: false },
    { title: "Chef", active: false },
    { title: "AWS", active: false },
    { title: "Azure", active: false },
    { title: "Google Cloud Platform", active: false }
  ],
  "Data Science": [
    { title: "Python", active: false },
    { title: "R", active: false },
    { title: "Pandas", active: false },
    { title: "NumPy", active: false },
    { title: "SciPy", active: false },
    { title: "Scikit-learn", active: false },
    { title: "TensorFlow", active: false },
    { title: "Keras", active: false },
    { title: "PyTorch", active: false },
    { title: "Jupyter Notebook", active: false }
  ],
  "UI/UX Designer": [
    { title: "Figma", active: false },
    { title: "Photoshop", active: false },
    { title: "Adobe Sketch", active: false },
    { title: "Wireframing", active: false },
    { title: "Responsive Design", active: false },
    { title: "Prototyping", active: false },
  ]
}

export const interviewRoles = ["Intern", "Junior", "Senior"]