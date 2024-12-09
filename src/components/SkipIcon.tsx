import React from "react";

type SkipIconProps = {
  size?: number;
  className?: string;
};

const SkipIcon: React.FC<SkipIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 -960 960 960"
      fill="currentColor"
      className={className}
    >
      <path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240ZM180-480Zm400 0Zm-400 90 136-90-136-90v180Zm400 0 136-90-136-90v180Z" />
    </svg>
  );
};

export default SkipIcon;
