// import React from "react";


// // Five distinct HelloBuddy logo/icon React components using Tailwind CSS.
// // Each component accepts: size (number, px), className (string) and primary (Tailwind color class or hex)
// // There's also a HelloBuddyLogoGallery default export to preview all five.


// function Logo({ size = 64, className = "", primary = "bg-blue-500" }) {
// // Chat-bubble + smile icon
// return (
// <div className={`flex items-center space-x-3 ${className}`} style={{ width: size * 3 }}>
// <div
// className={`flex items-center justify-center rounded-lg p-2 ${primary} text-white shadow-lg`}
// style={{ width: size, height: size }}
// >
// <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} aria-hidden>
// <path fill="currentColor" d="M21 6.5A4.5 4.5 0 0 0 16.5 2h-9A4.5 4.5 0 0 0 3 6.5v5A4.5 4.5 0 0 0 7.5 16H9v3l3-3h4.5A4.5 4.5 0 0 0 21 11.5v-5z" />
// <circle fill="white" cx="9.5" cy="9" r="1" />
// <circle fill="white" cx="13.5" cy="9" r="1" />
// <path fill="white" d="M8.5 12.2c1 1 3 1 4 0" stroke="white" strokeWidth="0" />
// </svg>
// </div>
// <div>
// <div className="text-lg font-semibold">HelloBuddy</div>
// <div className="text-xs text-gray-500">chat + friendly</div>
// </div>
// </div>



// );
// }
// export { Logo };