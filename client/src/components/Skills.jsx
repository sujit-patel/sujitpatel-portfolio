import React from "react";

function Skills() {
  return (
    <div className="px-20">
      <div className="px-10 space-y-5 py-8 border rounded-md">
        <div className="px-5 py-3 border rounded-md">
          <h1>What I Do</h1>
          <p>Work Samples</p>
        </div>
        <div className="border px-5 py-3 space-y-5 rounded-md">
          <h1>Tools I Use</h1>
          <div className="flex flex-row flex-wrap py-5 rounded-md border">
            <img className="h-16" src="https://sujit-patel.github.io/skill/canva.png" alt="" />
            <img className="h-16" src="https://sujit-patel.github.io/skill/figma.png" alt="" />
            <img className="h-16" src="D:\sujitpatel portfolio\client\src\assets\mongodb.png" alt="" />
          </div>
        </div>
        <div className="border px-5 py-3 space-y-5 rounded-md">
          <h1>Professional Skillset</h1>
          <div className="flex flex-row flex-wrap space-x-5  py-5 rounded-md border">
            <img className="h-16" src="https://sujit-patel.github.io/skill/html%20css%20js.png" alt="" />
            <img className="h-16" src="https://sujit-patel.github.io/skill/node%20js.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
