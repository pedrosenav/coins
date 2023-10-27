'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ComponentProps } from 'react'

interface CoinCardProps extends ComponentProps<'div'> {
  name: string
  flag: string
  coinCount: number
  index: number
}

export default function CoinCard({
  name,
  flag,
  coinCount,
  index,
}: CoinCardProps) {
  return (
    <div
      className={cn(
        'flex flex-1 basis-48 flex-col items-center justify-start gap-4 rounded-lg border border-white/50 p-10 text-center',
        [1, 2, 3].includes(index + 1) && 'lg:basis-1/4',
      )}
    >
      <Image
        src={flag}
        alt={name}
        height={240}
        width={240}
        className="h-10 w-fit overflow-hidden rounded-sm"
      />

      <p className="flex-1 text-lg">{name}</p>
      <p className="text-6xl font-semibold">{coinCount}</p>
    </div>
  )
}
