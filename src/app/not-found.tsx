import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4 max-w-md">
        <h2 className="text-6xl font-black text-[#EA580C] font-['Outfit']">404</h2>
        <h3 className="text-2xl font-bold text-slate-900">Page Not Found</h3>
        <p className="text-sm text-slate-600">
          The requested railway page could not be located.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-[#EA580C] hover:bg-[#D94E06] text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
