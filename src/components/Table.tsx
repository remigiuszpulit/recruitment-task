import React from "react";

interface TableProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Table({ children }: TableProps) {
  return (
    <div>
      <div>
        <h1>Kraje</h1>
      </div>
      {children}
    </div>
  );
}
