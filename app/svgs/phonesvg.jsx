import * as React from "react"
import "../globals.css";

import { baseVariant } from "@/tailwind.config";

export function PhoneSVGIcon({fill="#CACACA"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={baseVariant}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280zm0-200v120h400v-120H280zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140zM280-320h400v-400H280v400zm0-480h400v-40H280v40zm0 560v120-120zm0-560v-40 40z" />
    </svg>
  )
}

