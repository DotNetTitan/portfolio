"use client";

import { useState, useEffect } from "react";

export default function Duration({ start, end }: { start: string; end?: string }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const s = new Date(start);
    const e = end ? new Date(end) : new Date();
    const totalMonths = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
    const yrs = Math.floor(totalMonths / 12);
    const mos = totalMonths % 12;
    setText(mos === 0 ? `${yrs} yr${yrs !== 1 ? "s" : ""}` : `${yrs} yr${yrs !== 1 ? "s" : ""} ${mos} mo`);
  }, [start, end]);

  return <>{text}</>;
}
