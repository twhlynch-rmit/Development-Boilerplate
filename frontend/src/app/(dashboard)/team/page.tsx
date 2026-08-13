import type { Metadata } from 'next'
import { team } from '@/features/team/team.data'
import { MemberCard } from '@/features/team/components/MemberCard'

export const metadata: Metadata = {
  title: 'Team',
}

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-[26px] font-bold tracking-tight">{team.name}</h1>
        <p className="dark:text-muted text-sm text-zinc-500">{team.tagline}</p>
      </div>

      <div className="flex flex-wrap gap-5">
        {team.members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
