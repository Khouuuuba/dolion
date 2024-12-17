import React from "react";
import { ModeToggle } from "./(components)/mode-toggle";
import "./globals.css";

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  // ... other metadata
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </head>
        <body>
            <div className="min-h-screen w-full bg-gradient-to-br from-green-900/90 via-slate-900 to-green-950">
              <div className="fixed top-4 right-4 z-50">
                <ModeToggle />
              </div>
              {children}
            </div>
        </body>
    </html>
  );
}
