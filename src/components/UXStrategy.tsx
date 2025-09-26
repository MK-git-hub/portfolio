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

type UXDeliverable = {
  title: string;
  type: "Journey Map" | "Ecosystem Model" | "Experience Vision";
  description: string;
  project: string;
  impact: string;
  toolCategory: string;
  topTools: {
    labels: string[];
    data: number[];
  };
};

const uxDeliverables: UXDeliverable[] = [
  {
    title: "Donor Lifecycle Journey Map",
    type: "Journey Map",
    description: "Comprehensive mapping of donor journey from awareness to advocacy using Figma, Sketch, and Adobe XD. Identified 8 key touchpoints and 12 pain points that led to 40% increase in donor retention.",
    project: "Community Brands",
    impact: "40% increase in donor retention",
    toolCategory: "Design / UI & Prototyping",
    topTools: {
      labels: ["Figma", "Sketch", "Adobe XD", "InVision", "Principle"],
      data: [95, 75, 60, 70, 45]
    }
  },
  {
    title: "Healthcare Compliance Ecosystem",
    type: "Ecosystem Model",
    description: "Ecosystem model connecting state agencies, healthcare providers, auditors, and patients using Figma, Balsamiq, and Marvel. Identified 15 integration points that streamlined compliance processes.",
    project: "NYS Department of Health",
    impact: "60% improvement in compliance rates",
    toolCategory: "Wireframing / Low-Fidelity Prototyping",
    topTools: {
      labels: ["Figma", "Balsamiq", "Marvel", "InVision Freehand", "Whimsical", "Draw.io", "Lucidchart", "MockFlow"],
      data: [90, 85, 70, 65, 60, 75, 55, 50]
    }
  },
  {
    title: "Sales Analytics Experience Vision",
    type: "Experience Vision",
    description: "Future-state vision for predictive sales analytics using Figma, Axure RP, and Proto.io. Created automated insights and real-time recommendations that guided development of next-generation dashboard features.",
    project: "First Help Financial",
    impact: "35% increase in sales team efficiency",
    toolCategory: "Complex Prototypes / Logic / Data-Driven Flows",
    topTools: {
      labels: ["Figma", "Axure RP", "Justinmind", "Proto.io", "Origami Studio", "Principle", "Keynote"],
      data: [85, 90, 70, 65, 60, 50, 45]
    }
  },
  {
    title: "Graduate Auto Loan Journey",
    type: "Journey Map",
    description: "End-to-end journey mapping from graduation to first car purchase using Figma, Maze, and UserTesting. Identified critical decision points and emotional moments that influenced loan application design.",
    project: "Cars for Grad",
    impact: "45% increase in loan applications",
    toolCategory: "User Testing / Research / Validation",
    topTools: {
      labels: ["Figma", "Maze", "UserTesting", "Hotjar", "FullStory", "Lookback", "Validately", "UsabilityHub"],
      data: [80, 88, 82, 75, 70, 65, 60, 55]
    }
  },
  {
    title: "Banking Customer Ecosystem",
    type: "Ecosystem Model",
    description: "Complex ecosystem model mapping relationships between customers, branches, digital channels, and third-party services using FigJam, Miro, and Conceptboard for Santander's online banking platform.",
    project: "Horizon International",
    impact: "25% increase in digital adoption",
    toolCategory: "Collaboration / Whiteboarding / Ideation",
    topTools: {
      labels: ["FigJam", "Miro", "Conceptboard", "Stormboard", "Lucidspark", "Milanote", "Notion"],
      data: [92, 85, 75, 70, 65, 60, 55]
    }
  },
  {
    title: "Healthcare Provider Experience Vision",
    type: "Experience Vision",
    description: "Vision for seamless healthcare provider experience using Figma, ProtoPie, and After Effects. Created integrated compliance tracking, automated reporting, and predictive analytics for regulatory requirements.",
    project: "NYS Department of Health",
    impact: "50% reduction in compliance processing time",
    toolCategory: "Motion / Micro-interaction / Animation",
    topTools: {
      labels: ["Figma", "ProtoPie", "After Effects", "Principle", "Adobe Animate"],
      data: [75, 87, 70, 55, 45]
    }
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Journey Map":
      return "from-purple-500 to-pink-500";
    case "Ecosystem Model":
      return "from-blue-500 to-cyan-500";
    case "Experience Vision":
      return "from-green-500 to-emerald-500";
    default:
      return "from-gray-500 to-slate-500";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Journey Map":
      return "🗺️";
    case "Ecosystem Model":
      return "🌐";
    case "Experience Vision":
      return "🎯";
    default:
      return "📋";
  }
};

// Chart component for UX tools usage
function UXToolsChart({ deliverable }: { deliverable: UXDeliverable }) {
  const chartData = {
    labels: deliverable.topTools.labels,
    datasets: [
      {
        label: 'Usage %',
        data: deliverable.topTools.data,
        backgroundColor: [
          '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#6366F1', '#EC4899', '#F97316', '#84CC16', '#06B6D4', '#8B5CF6', '#EC4899'
        ].slice(0, deliverable.topTools.labels.length),
        borderColor: [
          '#7C3AED', '#0891B2', '#059669', '#D97706', '#DC2626', '#4F46E5', '#DB2777', '#EA580C', '#65A30D', '#0891B2', '#7C3AED', '#DB2777'
        ].slice(0, deliverable.topTools.labels.length),
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
        barThickness: 8,
        maxBarThickness: 12,
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
    <div className="h-32 w-full">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default function UXStrategy() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          UX Strategy Deliverables
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Journey maps, ecosystem models, and experience visions that drive user-centered design decisions and measurable business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {uxDeliverables.map((deliverable, index) => (
          <div
            key={deliverable.title}
            className="group relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-white/80 to-white/60 dark:from-black/40 dark:to-black/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Type indicator */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(deliverable.type)} text-white text-xs font-semibold flex items-center gap-1`}>
              <span>{getTypeIcon(deliverable.type)}</span>
              {deliverable.type}
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

            <div className="relative z-10 p-6">
              {/* Project badge */}
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                  {deliverable.project}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                {deliverable.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {deliverable.description}
              </p>

              {/* Impact */}
              <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                  📈 Impact: {deliverable.impact}
                </p>
              </div>

              {/* Tool Category */}
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                  🛠️ Tool Category: {deliverable.toolCategory}
                </p>
              </div>

              {/* UX Tools Chart */}
              <div className="bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/30 dark:border-white/10">
                <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                  Top UX Tools Usage
                </h5>
                <UXToolsChart deliverable={deliverable} />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        ))}
      </div>

      {/* Methodology section */}
      <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-white/30">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          UX Strategy Methodology
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="text-4xl">🗺️</div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Journey Mapping</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              End-to-end user experience mapping identifying touchpoints, emotions, and opportunities for improvement.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">🌐</div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Ecosystem Modeling</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Comprehensive mapping of stakeholder relationships, data flows, and system interactions.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">🎯</div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Experience Visions</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Future-state experience designs that guide product development and strategic decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
