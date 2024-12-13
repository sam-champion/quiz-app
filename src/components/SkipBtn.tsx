import React from "react";

type SkipBtnProps = {
  handleSkip: () => void;
  skipsRemaining: number;
};

const SkipBtn: React.FC<SkipBtnProps> = ({ handleSkip, skipsRemaining }) => {
  return (
    <>
      {skipsRemaining > 0 && (
        <button
          className="mt-10 px-10 py-2 border-4 border-pink-700 bg-gradient-to-b from-pink-500 to-rose-600 text-white rounded-xl shadow-lg focus:ring-2 focus:ring-white"
          onClick={handleSkip}
        >
          <div className="flex flex-row items-center justify-center">
            <span className="me-1 text-lg">Skip</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              width="24px"
              viewBox="0 -960 960 960"
              fill="currentColor"
              className="text-white"
            >
              <path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240ZM180-480Zm400 0Zm-400 90 136-90-136-90v180Zm400 0 136-90-136-90v180Z" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
};

export default SkipBtn;
