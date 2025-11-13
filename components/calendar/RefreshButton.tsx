"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() =>
        startTransition(() => {
          router.refresh();
        })
      }
      disabled={isPending}
      className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-sky-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`h-4 w-4 ${isPending ? "animate-spin" : ""}`}
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3.172 7.172a4.001 4.001 0 015.656-5.657l.707.708a.75.75 0 001.061-1.06l-.707-.708a5.501 5.501 0 107.778 7.778l.708-.707a.75.75 0 00-1.061-1.06l-.708.707a4.001 4.001 0 01-5.656 0 4.001 4.001 0 010-5.657.75.75 0 10-1.06-1.06 5.501 5.501 0 000 7.778 5.501 5.501 0 007.778 0l.708-.707a.75.75 0 10-1.061-1.06l-.708.707a4.001 4.001 0 01-5.656 0 4.001 4.001 0 010-5.657.75.75 0 10-1.06-1.06 5.501 5.501 0 000 7.778z"
          clipRule="evenodd"
        />
      </svg>
      {isPending ? "Refreshing..." : "Refresh schedule"}
    </button>
  );
}


