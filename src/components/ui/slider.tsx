'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-900/20 dark:bg-neutral-50/20">
      <SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-neutral-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-4 h-4 transition-colors border rounded-full shadow dark:bg-neutral-150 cursor-grab border-neutral-200 border-neutral-900/50 bg-custom-red focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 hover:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50/50 dark:border-neutral-800 dark:focus-visible:ring-neutral-300" />
    <SliderPrimitive.Thumb className="block w-4 h-4 transition-colors border rounded-full shadow dark:bg-neutral-150 cursor-grab border-neutral-200 border-neutral-900/50 bg-custom-red focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 hover:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50/50 dark:border-neutral-800 dark:focus-visible:ring-neutral-300" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
