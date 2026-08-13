import Image from 'next/image'
import type { TeamMember } from '@/features/team/types'

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

export function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="dark:border-border dark:bg-surface w-[230px] rounded-[10px] border border-zinc-200 bg-white p-[18px] shadow-sm">
      {member.photoUrl ? (
        <Image
          src={member.photoUrl}
          alt={`${member.name} photo`}
          width={48}
          height={48}
          unoptimized
          className="size-12 rounded-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`Photo not available for ${member.name}`}
          className="bg-accent-bg text-accent flex size-12 items-center justify-center rounded-full text-sm font-semibold"
        >
          {getInitials(member.name)}
        </div>
      )}
      <h3 className="mt-2.5 mb-0.5 text-[15px] font-semibold text-zinc-900 dark:text-white">
        {member.name}
      </h3>
      <p className="dark:text-muted mb-2 text-xs text-zinc-500">{member.role}</p>
      <p className="dark:text-muted text-xs leading-normal text-zinc-500">{member.blurb}</p>
    </article>
  )
}
