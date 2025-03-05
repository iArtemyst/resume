import * as React from "react"
import "../globals.css";

import { baseVariant } from "@/tailwind.config";

export function EmailSVGIcon({fill="#CACACA"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={baseVariant}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160zm320-280L160-640v400h640v-400L480-440zm0-80l320-200H160l320 200zM160-640v-80 480-400z" />
    </svg>
  )
}
