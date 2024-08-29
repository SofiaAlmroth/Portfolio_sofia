// "use client";
// import React, { ForwardedRef, forwardRef } from "react";

// interface Props {
//   color: string;
//   size: string; // Use string to allow for flexible units like 'rem', 'px', etc.
// }

// // Define the Circle component as a regular function
// function Circle({ color, size }: Props, ref: ForwardedRef<HTMLDivElement>) {
//   return (
//     <div
//       ref={ref}
//       className="absolute rounded-full z-0"
//       style={{
//         backgroundColor: color,
//         width: size, // Flexible size based on props
//         height: size, // Flexible size based on props
//         transformOrigin: "center center",
//       }}
//     ></div>
//   );
// }

// // Wrap the function in forwardRef
// const ForwardedCircle = forwardRef(Circle);

// ForwardedCircle.displayName = "Circle"; // For better debugging and readability

// export default ForwardedCircle;
