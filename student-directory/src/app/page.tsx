import { students } from "@/data/students";
import StudentGrid from "@/components/StudentGrid";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Students
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Browse students and view their profiles.
        </p>
      </div>

      <StudentGrid students={students} />

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-4 sm:flex-row">
        <span className="text-xs text-slate-500">
          Showing <span className="font-semibold text-slate-700">{students.length}</span> of{" "}
          <span className="font-semibold text-slate-700">{students.length}</span> students
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-400 opacity-60 cursor-not-allowed"
          >
            Previous
          </button>
          <button
            type="button"
            disabled
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-400 opacity-60 cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
