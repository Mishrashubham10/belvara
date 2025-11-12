'use client';

import { CartProvider as CartContextProvider } from '@/context/CartContext';

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CartContextProvider>{children}</CartContextProvider>;
}