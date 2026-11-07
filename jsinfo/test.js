"use client";

import {
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";

export default function StatusFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateStatus(status: string) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("status", status);
    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <button onClick={() => updateStatus("completed")}>
      Completed
    </button>
  );
}