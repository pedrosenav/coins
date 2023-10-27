import { cn } from '@/lib/utils'

export default function CoinCardSkeleton({ index }: { index: number }) {
  return (
    <div
      className={cn(
        'flex flex-1 basis-48 flex-col items-center justify-start gap-4 rounded-lg border border-white/50 p-10 text-center',
        [1, 2, 3].includes(index + 1) && 'lg:basis-1/4',
      )}
    >
      {/* Flag */}
      <div className="h-10 w-16 animate-pulse overflow-hidden rounded-sm bg-white/50" />

      {/* Name */}
      <div className="h-8">
        <div className="h-6 w-16 animate-pulse bg-white/50"></div>
      </div>
      {/* Coin Count */}
      <div className="h-16 w-20 animate-pulse bg-white/50"></div>
    </div>
  )
}
