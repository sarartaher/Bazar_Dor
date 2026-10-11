import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-100 shadow-sm text-base-content p-4">
        <aside className="flex flex-col sm:flex-row gap-2 container mx-auto justify-between">
          <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
          <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
