import React from 'react';

const Things = ["Wake Up", "Pray", "Get Ready", "Come to Work"];
const age = [10, 13, 13, 1323, 89];

const Test = () => {
  return (
    <div className="bg-teal-500 text-white text-center p-5">
      {/* ✅ Corrected List Rendering for Things */}
      {Things.map((item, index) => (
        <form key={index} className="grid grid-cols-1">
          <div className="flex justify-between p-4 mx-auto bg-teal-950 w-80 rounded-md">
            <label>{item}</label>
            <input type="checkbox" />
          </div>
        </form>
      ))}

      {/* ✅ Corrected List Rendering for Age */}
      <div className="bg-red-500 min-h-screen p-5">
        <ul className="bg-blue-700  mx-auto rounded-md p-2">
          {age.map(numb => (
            <li className="ml-5 text-white">
              {numb}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
