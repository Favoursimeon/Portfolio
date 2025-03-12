import { useEffect, useState } from "react";
import backgroundImg from "/assets/Hello.png";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World, This is Favour/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (

      <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-gray-100"
          style={{
              background: `url(${backgroundImg}) no-repeat center center/cover`,
          }}
      >
          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

          {/* Text Animation */}
          <div className="relative z-10 mb-4 text-4xl font-mono font-bold text-white">
              {text} <span className="animate-blink ml-1"> | </span>
          </div>

          {/* Glowing Progress Bar */}
          <div className="relative z-10 w-[200px] h-[4px] bg-gray-800 rounded overflow-hidden">
              <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
          </div>
      </div>
  );
};