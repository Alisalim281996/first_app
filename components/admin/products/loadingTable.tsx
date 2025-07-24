import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function LoadingTables({ rows = 4 }) {
  const fiveRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div className="mb-4" key={index}>
        <Skeleton className="w-full h-8 rounded" />
      </div>
    );
  });

  return <>{fiveRows}</>;
}

export default LoadingTables;
