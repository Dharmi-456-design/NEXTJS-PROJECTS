"use client";

import { useState } from "react";
import { Student } from "@/types/student";
import SearchInput from "./SearchInput";
import StudentGrid from "./StudentGrid";
import EmptyState from "./EmptyState";

interface StudentDirectoryProps {
  initialStudents: Student[];
}

export default function StudentDirectory({ initialStudents }: StudentDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = initialStudents.filter((student) => {
    return student.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="mb-6 rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      {filteredStudents.length > 0 ? (
        <StudentGrid students={filteredStudents} />
      ) : (
        <EmptyState onReset={() => setSearchQuery("")} />
      )}

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-4 sm:flex-row">
        <span className="text-xs text-slate-500">
          Showing <span className="font-semibold text-slate-700">{filteredStudents.length}</span> of{" "}
          <span className="font-semibold text-slate-700">{initialStudents.length}</span> students
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
