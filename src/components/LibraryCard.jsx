import React from 'react'


const Cards=["Card 1", "Card 2", "Card 3"]

const LibraryCard = () => {
  return (
    <div className="flex mx-10 gap-5">
        {Cards.map((card) => (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
            <div className="relative">
              <img className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Course Thumbnail" />
              <span className="absolute bottom-2 left-2 bg-white text-blue-400 text-xs px-2 py-1 rounded-full">E-Book</span>
              <span className="absolute bottom-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded-full">124 MB</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm">Fundamentals of Web Development</h3>
              <p className="text-xs text-gray-500 mt-1">by Dr. Sarah Johnson</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                <span>📅 May 15, 2023</span>
                <span>⬇️ 1245 downloads</span>
              </div>
              <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded">Download</button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default LibraryCard