import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Student Directory
        </h1>
        <p className="mt-2 text-slate-600">
          Browse students and view their academic profiles.
        </p>
      </div>
    </main>
  );
}
