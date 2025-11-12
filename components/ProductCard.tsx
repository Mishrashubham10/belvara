"use client"

import { Product } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { Card } from "./ui/card"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-300">
        <div className="aspect-4/5 overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-medium mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </Card>
    </Link>
  )
}