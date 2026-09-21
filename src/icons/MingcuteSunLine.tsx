import React, { SVGProps } from "react";

export function MingcuteSunLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE */}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 4V3m5.657 3.343l.707-.707M20 12h1m-3.343 5.657l.707.707M12 20v1m-5.657-3.343l-.707.707M4 12H3m3.343-5.657l-.707-.707M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"
      />
    </svg>
  );
}
export default MingcuteSunLine;
