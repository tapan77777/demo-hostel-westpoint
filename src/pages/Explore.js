import React from "react";
import Navbar from "../components/Navbar";

function ExploreUs(){
    return(
<div className="bg-white text-gray-800 min-h-screen">
    <Navbar />
<h2 className="text-3xl font-bold mb-6 text-[#FF5E5B]">Things To Do</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg">
          <li>🌄 Sunrise from Tiger Hill</li>
          <li>🚡 Ropeway adventure</li>
          <li>🚶‍♀️ Walk to Batasia Loop</li>
          <li>☕ Local tea tasting</li>
          <li>🏞️ Visit Peace Pagoda</li>
          <li>📸 Explore local cafes & culture</li>
        </ul>
</div>
    );
}
export default ExploreUs;
