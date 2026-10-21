import Link from "next/link";

const departments = [
  {
    name: "Computer Science",
    slug: "computer-science",
    description: "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: 4,
    studentsCount: 320,
    icon: "💻",
  },
  {
    name: "Design",
    slug: "design",
    description: "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: 3,
    studentsCount: 185,
    icon: "🎨",
  },
  {
    name: "Business",
    slug: "business",
    description: "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: 3,
    studentsCount: 240,
    icon: "📈",
  },
];

export default function DepartmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Departments
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:self-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          3 Active Academic Faculties
        </span>
      </div>

      <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">{dept.icon}</span>
                <h2 className="text-base font-bold text-slate-900">
                  {dept.name}
                </h2>
              </div>
              <p className="max-w-2xl text-xs text-slate-600">
                {dept.description}
              </p>
              <div className="flex items-center gap-4 pt-1 text-xs text-slate-400">
                <span>{dept.specializations} Specializations</span>
                <span>·</span>
                <span>{dept.studentsCount} Enrolled Students</span>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition whitespace-nowrap"
            >
              <span>View students</span>
              <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
