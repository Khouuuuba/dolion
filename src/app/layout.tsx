'use client';

import React from "react";
import { ModeToggle } from "./(components)/mode-toggle";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <body>
            <div
      className="min-h-screen bg-gradient-to-br from-green-900/90 via-slate-900 to-green-950"
    >
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      {children}
    </div>
        </body>
    </html>

  );
}
