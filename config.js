// ============================================================
//  PORTFOLIO CONFIGURATION — edit this file to update your site
// ============================================================
window.siteConfig = {

  // ── Personal Info ─────────────────────────────────────────
  personal: {
    name: "Tejasri Brungi",
    initials: "Tejasri",
    title: "Cloud & DevOps Engineer",
    typingTitles: [
      "AWS DevOps Engineer",
      "Kubernetes Specialist",
      "CI/CD Architect",
      "Cloud Infrastructure Expert",
      "GitOps Practitioner"
    ],
    tagline: "Designing resilient cloud infrastructure with automation at its core.",
    email: "tejasri.tejuu4@gmail.com",
    phone: "+91-9502216819",
    location: "Hyderabad, India",
    linkedin: "https://linkedin.com/in/tejasri-brungi-856336308",
    github: "",        // add your GitHub URL here if you have one
    resume_pdf: "assets/Tejasri_Brungi_Resume.docx"
  },

  // ── Hero Stats ────────────────────────────────────────────
  stats: [
    { value: "5+",  label: "Years Experience" },
    { value: "10+", label: "DevOps Tools" },
    { value: "30%", label: "Onboarding Time Saved" },
    { value: "1",   label: "Sole EKS Owner at CredRight" }
  ],

  // ── Professional Summary ──────────────────────────────────
  summary: "Passionate DevOps Engineer with 5 years of overall IT experience, including strong hands-on expertise in cloud-native DevOps practices. Experienced in designing and managing CI/CD pipelines using Jenkins and GitHub Actions, deploying containerized applications on AWS EKS using Docker and Helm, and implementing GitOps workflows with Argo CD. Proven ability to manage production environments with secure secrets handling via HashiCorp Vault and end-to-end monitoring using Grafana, Prometheus, and Loki.",

  // ── Key Highlights ────────────────────────────────────────
  highlights: [
    { icon: "fa-infinity",      text: "Designed & managed CI/CD pipelines reducing manual deployment effort significantly" },
    { icon: "fa-shield-halved", text: "Centralized secrets management with HashiCorp Vault, eliminating hard-coded credentials" },
    { icon: "fa-chart-line",    text: "End-to-end observability with Grafana, Prometheus, Loki improving issue detection speed" },
    { icon: "fa-rotate",        text: "GitOps deployments via Argo CD with improved traceability and rollback efficiency" },
    { icon: "fa-lock",          text: "SSL, Ingress & domain routing via AWS ALB & NGINX Ingress for secure access" },
    { icon: "fa-database",      text: "Backup & DR using Velero ensuring data protection & fast recovery" }
  ],

  // ── Work Experience ───────────────────────────────────────
  experience: [
    {
      company: "CredRight",
      logo_icon: "fa-building-columns",
      logo_color: "#f97316",
      role: "Cloud & DevOps Engineer",
      period: "Nov 2024 – Present",
      duration: "1+ year",
      type: "current",
      description: "Sole DevOps engineer independently managing the entire cloud platform — from CI/CD pipeline design to Kubernetes operations, security, monitoring, and production deployments.",
      highlights: [
        "Automated application delivery using Jenkins, Docker, Helm, and Argo CD",
        "Managed AWS EKS infrastructure including ingress, SSL, secrets, monitoring, and backups",
        "Proactively monitored cluster health and application performance for high availability",
        "Collaborated with development teams to onboard apps into EKS",
        "Authored comprehensive documentation reducing new-member onboarding time by 30%",
        "Integrated SonarQube for continuous code quality and vulnerability detection"
      ],
      tech: ["AWS EKS", "Jenkins", "Docker", "Helm", "Argo CD", "HashiCorp Vault", "Grafana", "Prometheus", "Loki", "Velero", "NGINX"]
    },
    {
      company: "Concentrix",
      logo_icon: "fa-headset",
      logo_color: "#38bdf8",
      role: "DevOps Engineer",
      period: "Oct 2017 – Jul 2021",
      duration: "3.5 years",
      type: "previous",
      description: "Provided system and application support while gaining foundational exposure to production operations, release cycles, and change management workflows.",
      highlights: [
        "Monitored application health and system performance using dashboards",
        "Performed basic log analysis and troubleshooting for root cause identification",
        "Managed tickets for technical issues following documented procedures",
        "Gained exposure to release cycles, change management, and production workflows"
      ],
      tech: ["Dashboard Monitoring", "Log Analysis", "Change Management", "ITIL"]
    }
  ],

  // ── Skills (grouped by category) ─────────────────────────
  // iconType: "devicon" | "simple" | "badge"
  // devicon: name from devicon library (https://devicon.dev)
  // variant: "original" | "plain" | "original-wordmark"
  // simple: slug from simpleicons.org
  // badge: shows abbr text in a colored box
  skills: {
    "Cloud & Infrastructure": [
      { name: "AWS",        subtitle: "EC2 · EKS · IAM · ALB · EBS · S3", iconType: "devicon", devicon: "amazonwebservices", variant: "original", color: "#FF9900" },
      { name: "EC2",        iconType: "badge", abbr: "EC2", color: "#FF9900" },
      { name: "S3",         iconType: "badge", abbr: "S3",  color: "#569A31" },
      { name: "IAM",        iconType: "badge", abbr: "IAM", color: "#DD344C" },
      { name: "ALB",        iconType: "badge", abbr: "ALB", color: "#8C4FFF" }
    ],
    "Containers & Orchestration": [
      { name: "Docker",        iconType: "devicon", devicon: "docker",     variant: "plain",    color: "#2496ED" },
      { name: "Kubernetes",    iconType: "devicon", devicon: "kubernetes", variant: "plain",    color: "#326CE5" },
      { name: "Amazon EKS",    iconType: "badge",   abbr: "EKS",                               color: "#FF9900" },
      { name: "Helm",          iconType: "devicon", devicon: "helm",       variant: "original", color: "#0F1689" },
      { name: "OpenShift",     iconType: "simple",  simple: "redhatopenshift",                 color: "#EE0000" }
    ],
    "CI/CD & GitOps": [
      { name: "Jenkins",         iconType: "devicon", devicon: "jenkins",  variant: "original", color: "#D33833" },
      { name: "Argo CD",         iconType: "simple",  simple: "argo",                           color: "#EF7B4D" },
      { name: "GitHub Actions",  iconType: "simple",  simple: "githubactions",                  color: "#2088FF" },
      { name: "Git",             iconType: "devicon", devicon: "git",      variant: "original", color: "#F05032" },
      { name: "Bitbucket",       iconType: "devicon", devicon: "bitbucket",variant: "original", color: "#0052CC" }
    ],
    "Security & Networking": [
      { name: "HashiCorp Vault", iconType: "simple", simple: "vault",      color: "#FFEC6E" },
      { name: "NGINX",           iconType: "devicon", devicon: "nginx",    variant: "original", color: "#009639" },
      { name: "SonarQube",       iconType: "simple", simple: "sonarqube",  color: "#4E9BCD" },
      { name: "AWS ALB",         iconType: "badge",  abbr: "ALB",          color: "#8C4FFF" }
    ],
    "Monitoring & Observability": [
      { name: "Grafana",    iconType: "devicon", devicon: "grafana",  variant: "original", color: "#F46800" },
      { name: "Prometheus", iconType: "simple",  simple: "prometheus",                    color: "#E6522C" },
      { name: "Loki",       iconType: "badge",   abbr: "LK",                              color: "#F0A500" },
      { name: "ELK Stack",  iconType: "simple",  simple: "elastic",                       color: "#005571" }
    ],
    "Backup & Languages": [
      { name: "Velero",  iconType: "badge",  abbr: "VL",                              color: "#3D8FD1" },
      { name: "Python",  iconType: "devicon", devicon: "python",  variant: "original", color: "#3776AB" },
      { name: "Java",    iconType: "devicon", devicon: "java",    variant: "original", color: "#007396" },
      { name: "Kafka",   iconType: "simple",  simple: "apachekafka",                   color: "#231F20" }
    ]
  },

  // ── Certifications ────────────────────────────────────────
  certifications: [
    {
      name: "Amazon EKS Auto Mode — Hands-on Workshop",
      issuer: "KubeCon CloudNativeCon 2025",
      year: "2025",
      iconType: "simple",
      simple: "cncf",
      badgeColor: "#326CE5",
      description: "Deep-dive workshop on running fully managed EKS Auto Mode clusters, covering node provisioning, scheduling policies, and production deployment patterns."
    }
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics & Communication Engineering",
      institution: "TKR College — JNTUH",
      period: "2012 – 2016",
      grade: "79%",
      icon: "fa-graduation-cap"
    }
  ],

  // ── Core Competencies (tag cloud) ────────────────────────
  competencies: [
    "CI/CD Automation",
    "GitOps Workflows",
    "Kubernetes Operations",
    "AWS Cloud Architecture",
    "Production Support",
    "Monitoring & Observability",
    "Security & Secrets Management",
    "Cloud Migration",
    "Disaster Recovery",
    "Infrastructure as Code",
    "Microservices Deployment",
    "Container Orchestration"
  ]
};
