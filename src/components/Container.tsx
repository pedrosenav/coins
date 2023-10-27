import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'>

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn('relative mx-auto max-w-7xl px-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}
