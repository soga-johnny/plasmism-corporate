"use client";

import dynamic from "next/dynamic";

const AboutScene = dynamic(() => import("./AboutCube"), {
  ssr: false,
  loading: () => null,
});

export default AboutScene;
