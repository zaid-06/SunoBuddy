import React from "react";
import { Users, Target, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 px-6 py-12">
      {/* 🏢 Header Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          About <span className="text-cyan-600">HelloBuddy </span>
        </h1>
        <p className="text-gray-600  text-lg max-w-2xl mx-auto">
          We built this platform to help you improve your English through real conversations. 
        </p>
      </div>

      {/* 👥 Team & Vision Section */}
      <div className="max-w-6xl mx-auto mt-16 ml-35  grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <Target className="text-cyan-600 h-6 w-6" /> Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
           If you make a mistake while conversation, our AI assistant will first correct your sentence — then reply and continue the conversation with you.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mt-6">
            <Heart className="text-pink-500 h-6 w-6" /> Our Values
          </h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Transparency & Trust</li>
            <li>Innovation with Purpose</li>
            <li>Empathy & Inclusion</li>
            <li>Excellence in Execution</li>
          </ul>
        </div>

        {/* 🖼️ Image or Illustration */}
        <div className="flex justify-center">
          <img
            // src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"

            // src="/images/WhatsApp Image 2025-10-16 at 20.22.08_b25899b5.jpg"
            src="/images/WhatsApp Image 2025-10-16 at 20.30.57_3d4a5828.jpg"
            

            alt="Team working together"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>

      {/* 🌟 Achievements Section */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Users className="h-8 w-8 text-cyan-600" />, title: "10k+ Users", desc: "Trusted by users worldwide" },
            { icon: <Award className="h-8 w-8 text-yellow-500" />, title: "5+ Awards", desc: "Recognized for innovation" },
            { icon: <Heart className="h-8 w-8 text-pink-500" />, title: "100% Passion", desc: "Driven by love for what we do" },
            { icon: <Target className="h-8 w-8 text-green-600" />, title: "Global Reach", desc: "Expanding across 15+ countries" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center"
            >
              {card.icon}
              <h3 className="font-semibold text-lg mt-3 text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 💬 Footer */}
      <div className="max-w-4xl mx-auto mt-16 text-center text-gray-500 border-t border-gray-200 pt-6">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-cyan-600">HelloBudy</span>.  
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
