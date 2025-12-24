import React, { useState } from "react";

const faqs = [
  {
    question: "What is AssetVerse?",
    answer:
      "AssetVerse is a company asset management system that helps organizations track, assign, and manage assets efficiently."
  },
  {
    question: "Who can use AssetVerse?",
    answer:
      "HR managers, admins, and employees can use AssetVerse with role-based access."
  },
  {
    question: "Is AssetVerse secure?",
    answer:
      "Yes. AssetVerse uses authentication, role-based authorization, and secure APIs."
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes, HR managers can upgrade their package anytime from the dashboard."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.question}</h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
