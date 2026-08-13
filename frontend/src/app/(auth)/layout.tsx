import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-8">
      {children}
    </div>
  )
}
