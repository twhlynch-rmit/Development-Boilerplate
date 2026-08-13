export interface TeamMember {
  name: string
  role: string
  blurb: string
  photoUrl?: string
}

export interface TeamInfo {
  name: string
  tagline: string
  members: TeamMember[]
}
