import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemberCard } from '@/features/team/components/MemberCard'
import type { TeamMember } from '@/features/team/types'

vi.mock('next/image', () => ({
  default: ({
    unoptimized: _unoptimized,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { unoptimized?: boolean }) => <img {...props} />,
}))

const baseMember: TeamMember = {
  name: 'Rishi Verma',
  role: 'Project Manager',
  blurb: 'Coordinates planning, team delivery, communication and final project sign-off.',
}

describe('MemberCard', () => {
  it('renders the member name, role and blurb', () => {
    render(<MemberCard member={baseMember} />)

    expect(screen.getByRole('heading', { name: 'Rishi Verma' })).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText(baseMember.blurb)).toBeInTheDocument()
  })

  it('shows an initials fallback when no photo is available', () => {
    render(<MemberCard member={baseMember} />)

    const avatar = screen.getByRole('img', { name: 'Photo not available for Rishi Verma' })
    expect(avatar).toHaveTextContent('RV')
    expect(screen.queryByRole('img', { name: 'Rishi Verma photo' })).not.toBeInTheDocument()
  })

  it('renders the photo when a photoUrl is provided', () => {
    const member = { ...baseMember, photoUrl: 'https://example.com/rishi.jpg' }
    render(<MemberCard member={member} />)

    const img = screen.getByRole('img', { name: 'Rishi Verma photo' })
    expect(img).toHaveAttribute('src', 'https://example.com/rishi.jpg')
    expect(
      screen.queryByRole('img', { name: 'Photo not available for Rishi Verma' })
    ).not.toBeInTheDocument()
  })

  it('lets an unusually long blurb wrap in full without truncation', () => {
    const member = {
      ...baseMember,
      blurb:
        'This is an unusually long blurb that is deliberately much longer than the others so it can ' +
        'confirm the card grows vertically and wraps the text cleanly instead of truncating, ' +
        'overlapping neighbouring cards or breaking the row layout — per the EC-04 edge case.',
    }
    const { container } = render(<MemberCard member={member} />)

    expect(screen.getByText(member.blurb)).toBeInTheDocument()
    const paragraph = container.querySelector('p')
    expect(paragraph?.className).not.toContain('line-clamp')
  })
})
