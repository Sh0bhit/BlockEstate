import React from "react";

export default function Loading() {
  return (
    <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[99]">
      <img src="/images/logo/loading.gif" alt="loading" className="w-20 h-20" />
      <h1 className="text-primary font-orbitron">Loading....</h1>
    </div>
  );
}
