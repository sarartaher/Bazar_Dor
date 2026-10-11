"use client";
import { useEffect, useState } from "react";

const BanglaDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);

  return <p className="min-h-6">{date}</p>;
};

export default BanglaDate;
