import React from "react";
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex text-white flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              What is the difference between dog and cat?
            </p>
            <p className="infoText">What is the color of the Mars?</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              What is the difference between dog and cat?
            </p>
            <p className="infoText">What is the color of the Mars?</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              What is the difference between dog and cat?
            </p>
            <p className="infoText">What is the color of the Mars?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
