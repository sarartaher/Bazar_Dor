"use client";

const BanglaDate = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return <p suppressHydrationWarning>{date}</p>;
};

export default BanglaDate;
