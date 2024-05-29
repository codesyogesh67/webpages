import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const Container = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
          )}>
          {/* <div className="
            max-w-[2520px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4
        "> */}
      
      {children}
    </div>
  )
}

export default Container