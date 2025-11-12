"use client";

import { ThemeProvider as ThemeContextProvider } from '@/context/ThemeContext';

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}