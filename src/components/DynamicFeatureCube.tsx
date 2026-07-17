"use client";

import dynamic from "next/dynamic";

const FeatureScene = dynamic(() => import("./FeatureCube"), {
  ssr: false,
  loading: () => null,
});

export default FeatureScene;
