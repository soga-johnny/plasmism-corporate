"use client";

import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  // TODO: SplineのシーンURLを設定
  const splineSceneUrl = "YOUR_SPLINE_SCENE_URL"; // ここにSplineのURLを貼り付け

  return (
    <div>
      {/* SplineのViewerをレンダリング */}
      {/* <Spline scene={splineSceneUrl} /> */}
      <p>ここにSplineシーンが表示されます</p> {/* 開発中はプレースホルダを表示 */}
    </div>
  );
} 