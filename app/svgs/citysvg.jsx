import * as React from "react"
import "../globals.css";

import { baseVariant } from "@/tailwind.config";


export function CitySVGIcon({fill="#CACACA"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={baseVariant}
    >
      <path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120zm80-80h80v-80h-80v80zm0-160h80v-80h-80v80zm0-160h80v-80h-80v80zm160 160h80v-80h-80v80zm0-160h80v-80h-80v80zm0-160h80v-80h-80v80zm160 320h80v-80h-80v80zm0-160h80v-80h-80v80zm0-160h80v-80h-80v80zm160 480h80v-80h-80v80zm0-160h80v-80h-80v80z" />
    </svg>
  )
}
