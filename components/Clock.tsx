"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 20000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return (
    <span>
      {hours}:{minutes} {ampm}
    </span>
  );
}
