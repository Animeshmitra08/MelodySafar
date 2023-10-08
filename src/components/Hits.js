import React from 'react'

const Hits = () => {
  return (
    <>
        <div className="w-full p-2 rounded-md h-44 gap-2 overflow-x-auto grid grid-flow-col-dense justify-start">
            <div className="p-2 w-48 rounded-md bg-gradient-to-tr from-cyan-700 to-light-green-50 shadow-lg">
              <h1 className="text-3xl font-sans">
                Top 10 <br /> Bollywood Hits
              </h1>
            </div>
            <div className="p-2 w-48 rounded-md bg-gradient-to-tr from-deep-purple-900 to-light-green-50 shadow-lg">
              <h1 className="text-3xl font-serif">
                Today's Most Hits
              </h1>
            </div>
            <div className="p-2 w-48 rounded-md bg-gradient-to-tr from-purple-600 to-light-green-50 shadow-lg">
              <h1 className="text-3xl font-serif">
                Top Bengali Songs
              </h1>
            </div>
            <div className="p-2 w-48 rounded-md bg-gradient-to-tr from-teal-500 to-light-green-50 shadow-lg">
              <h1 className="text-3xl font-serif">
                Recently Added
              </h1>
            </div>
        </div>
    </>
  )
}

export default Hits