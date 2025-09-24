"use client";

import Image from "next/image";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Project = {
  title: string;
  company: string;
  tech: string[];
  link: string;
  gradient: string;
  imageSrc: string;
  imageAlt?: string;
  caseStudy: {
    title: string;
    description: string;
    achievements: string[];
  };
  techUsage: {
    labels: string[];
    data: number[];
  };
};

const projects: Project[] = [
  {
    title: "Donor Portal & Fundraising Platform",
    company: "Community Brands (NCU)",
    tech: ["Angular 14+", "Next.js", "GraphQL", "RxJS", "AWS ECS/K8s"],
    link: "#",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    imageSrc: "/community%20brands.png",
    imageAlt: "Community Brands",
    caseStudy: {
      title: "Fundraising & Events Platform",
      description: "Led end-to-end development of donor, fundraising & event portals.",
      achievements: [
        "⚡ Built Angular Reactive Forms & implemented route-level code splitting",
        "📊 Migrated Google Analytics UA → GA4 with GTM for precise tracking",
        "🛠 Modernized legacy systems into Docker-based microservices on AWS"
      ]
    },
    techUsage: {
      labels: ["Angular (14+)", "React.js", "Next.js", "HTML5/CSS3", "GraphQL", "AWS", "Google Analytics"],
      data: [60, 40, 30, 90, 70, 65, 50]
    }
  },
  {
    title: "SalesBI Dashboard & AutoPortal",
    company: "First Help Financial",
    tech: ["React.js", "Angular", "Next.js", "Redux", "D3.js"],
    link: "#",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    imageSrc: "/fhf.jpg",
    imageAlt: "First Help Financial",
    caseStudy: {
      title: "Sales & Analytics Dashboards",
      description: "Developed SalesBI and Inside Sales dashboards with React & D3.js.",
      achievements: [
        "🌐 Integrated AWS Lambda & S3 for serverless, real-time analytics",
        "♿ Ensured WCAG compliance with automated accessibility testing",
        "🤝 Collaborated across teams to deliver stable production releases"
      ]
    },
    techUsage: {
      labels: ["React.js", "Angular", "HTML5/CSS3", "D3.js", "AWS", "Accessibility"],
      data: [70, 30, 90, 80, 60, 70]
    }
  },
  {
    title: "Santander, BBH Fund Admin, Sanofi Health Dashboard",
    company: "Horizon International",
    tech: ["Angular", "React.js", "Java/J2EE", "D3.js", "Microservices"],
    link: "#",
    gradient: "from-orange-500 via-yellow-500 to-amber-500",
    imageSrc: "/accenture.png",
    imageAlt: "Accenture themed image",
    caseStudy: {
      title: "Enterprise Solutions",
      description: "Delivered banking, healthcare & eLearning apps for Fortune 500 clients.",
      achievements: [
        "📱 Built responsive portals with Angular, React, and Java/J2EE",
        "🔧 Modernized legacy apps with MVC/MVVM patterns for scalability",
        "✅ Implemented automated testing & WCAG accessibility compliance"
      ]
    },
    techUsage: {
      labels: ["Angular", "React.js", "JavaScript", "HTML5/CSS3", "Java/J2EE", "Oracle/MySQL", "D3.js"],
      data: [40, 30, 90, 95, 60, 50, 40]
    }
  },
  {
    title: "CHRC & OLTC Healthcare Portals",
    company: "NYS Department of Health",
    tech: ["Java/J2EE", "JSP", "MVC", "Accessibility", "Oracle DB"],
    link: "#",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    imageSrc: "/NY%20state.png",
    imageAlt: "New York State",
    caseStudy: {
      title: "Compliance Portals",
      description: "Developed CHRC & OLTC applications for healthcare compliance.",
      achievements: [
        "🖥 Built secure MVC-based Java/JSP applications with accessible UI",
        "🧪 Led full SDLC including testing & production deployments",
        "👥 Partnered with stakeholders to ensure regulatory alignment"
      ]
    },
    techUsage: {
      labels: ["Java/J2EE", "JSP", "MVC", "HTML5/CSS3", "Oracle DB", "Accessibility"],
      data: [80, 75, 85, 90, 70, 85]
    }
  },
  {
    title: "Cars for Grad - Web App",
    company: "First Help Financial",
    tech: ["React.js", "Next.js", "Tailwind CSS", "AWS", "REST APIs"],
    link: "#",
    gradient: "from-blue-500 via-teal-500 to-green-500",
    imageSrc: "/fhf2.png",
    imageAlt: "Cars for Grad",
    caseStudy: {
      title: "Cars for Grad Program",
      description: "Designed and built a responsive platform to help recent graduates explore and qualify for auto loans with transparent pricing and guidance.",
      achievements: [
        "🚗 Created conversion-optimized flows and accessible UI for applicants",
        "⚡ Improved performance with image optimization and route-level code splitting",
        "☁️ Integrated AWS (S3/CloudFront/Lambda) for scalable content and APIs"
      ]
    },
    techUsage: {
      labels: ["React.js", "Next.js", "Tailwind CSS", "AWS", "REST APIs", "Accessibility"],
      data: [90, 85, 80, 70, 75, 85]
    }
  }  
];

// Chart component for tech usage
function TechUsageChart({ project }: { project: Project }) {
  const chartData = {
    labels: project.techUsage.labels,
    datasets: [
      {
        label: 'Usage %',
        data: project.techUsage.data,
        backgroundColor: [
          '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#6366F1', '#EC4899'
        ].slice(0, project.techUsage.labels.length),
        borderColor: [
          '#7C3AED', '#0891B2', '#059669', '#D97706', '#DC2626', '#4F46E5', '#DB2777'
        ].slice(0, project.techUsage.labels.length),
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: { label: string; parsed: { y: number } }) {
            return `${context.label}: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 0,
          font: {
            size: 10
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: string | number) {
            return value + '%';
          },
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(0,0,0,0.1)'
        }
      },
    },
  };

  return (
    <div className="h-48 w-full">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl">
      {projects.map((p, index) => (
        <div 
          key={p.title} 
          className={`group relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br ${p.gradient} backdrop-blur-sm shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Enhanced background gradient on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          
          <div className="relative z-10 p-8 bg-white/80 dark:bg-black/40 backdrop-blur-sm">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Project Card Section */}
              <div className="space-y-6">
                <div className="flex flex-col gap-4">
                  {/* Image section */}
                  <div className="relative h-64 md:h-72 w-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <Image 
                      src={p.imageSrc} 
                      alt={p.imageAlt ?? "Project image"} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                      {p.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium mt-1">
                      {p.company}
                    </p>
                  </div>
                  
                  {/* Tech stack with enhanced styling */}
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="text-xs lg:text-sm px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/60 text-gray-800 dark:text-gray-200 font-medium border border-white/50 dark:border-white/20 group-hover:bg-white group-hover:shadow-lg group-hover:border-white/80 transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${(index * 100) + (techIndex * 50)}ms`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </div>

              {/* Case Study Section */}
              <div className="space-y-4">
                <div className="bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-white/10">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {p.caseStudy.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {p.caseStudy.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {p.caseStudy.achievements.map((achievement, achievementIndex) => (
                      <div 
                        key={achievementIndex}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        style={{
                          animationDelay: `${(index * 100) + (achievementIndex * 100)}ms`,
                        }}
                      >
                        <span className="text-base leading-none mt-0.5">{achievement.split(' ')[0]}</span>
                        <span className="leading-relaxed">{achievement.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Usage Chart */}
                <div className="bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-white/10">
                  <h5 className="text-md font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-500">
                    Tech Usage Distribution
                  </h5>
                  <TechUsageChart project={p} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      ))}
    </div>
  );
}


