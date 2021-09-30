import React from 'react'

export default function CategoryItem() {
    return (
        <div>
          <div className="flex flex-row gap-5 ">
            <div className="bg-gray-200 p-5 flex flex-col gap-4 w-72 rounded-xl">
              <div className="flex flex-row justify-between border-b items-center border-gray-400 py-4">
                <h5 className=" font-semibold text-gray-700">Accounting & Finance</h5>
                <p className=" text-red-500 font-semibold">231</p>
              </div>
              <div className="flex flex-row justify-between border-b items-center border-gray-400 py-4">
                <h5 className=" font-semibold text-gray-700">Design & Art</h5>
                <p className=" text-red-500 font-semibold">231</p>
              </div>
              <div className="flex flex-row justify-between border-b items-center border-gray-400 py-4">
                <h5 className=" font-semibold text-gray-700">Sales & Marketing</h5>
                <p className=" text-red-500 font-semibold">231</p>
              </div>
              <div className="flex flex-row justify-between border-b items-center border-gray-400 py-4">
                <h5 className=" font-semibold text-gray-700">Information Technology</h5>
                <p className=" text-red-500 font-semibold">231</p>
              </div>
            </div>
          </div>
        </div>
    )
}
