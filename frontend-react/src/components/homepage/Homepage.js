import React from "react";
import employee1 from "../assests/person1.jpg";

const Homepage = () => {
  return (
    <div class="bg-red-500 h-screen mt-12">
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        {/* Top row with 2 images */}
        <div class="w-1/5 p-4  ml-24">
          <img
            src={employee1}
            alt="John Doe"
            class="w-auto h-auto rounded-full bg-center bg-cover"
          />
        </div>
        <div class="w-1/5 p-4 ml-24">
          <img
            src={employee1}
            alt="John Doe"
            class="w-auto h-auto rounded-full bg-center bg-cover"
          />
        </div>

        {/* Gap */}
        <div class="w-full h-24"></div>

        {/* Bottom row with 3 images */}
        <div className="w-1/5 p-4  ml-24">
          <img
            src={employee1}
            alt="John Doe"
            class="w-auto h-auto rounded-full bg-center bg-cover"
          />
        </div>
        <div className="w-1/5 p-4  ml-24">
          <img
            src={employee1}
            alt="John Doe"
            class="w-auto h-auto rounded-full bg-center bg-cover"
          />
        </div>
        <div className="w-1/5 p-4  ml-24">
          <img
            src={employee1}
            alt="John Doe"
            class="w-auto h-auto rounded-full bg-center bg-cover"
          />
        </div>
        <div class="w-full h-24"></div>
      </div>
    </div>
  );
};

export default Homepage;
