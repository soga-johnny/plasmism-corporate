"use client";

import dynamic from "next/dynamic";

const CubeInteractive = dynamic(() => import("./CubeObject"), {
  ssr: false,
  loading: () => null,
});

export default CubeInteractive;
