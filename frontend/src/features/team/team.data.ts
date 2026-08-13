import type { TeamInfo } from '@/features/team/types'

export const team: TeamInfo = {
  name: 'Team 15',
  tagline: 'Meet the team behind this project.',
  members: [
    {
      name: 'Rishi Verma',
      role: 'Project Manager',
      blurb: 'Coordinates planning, team delivery, communication and sign-off.',
    },
    {
      name: 'Aditya Barot',
      role: 'Business Analyst',
      blurb: 'Defines requirements, validates design against requirements.',
    },
    {
      name: 'Abin Siju',
      role: 'UX Designer',
      blurb: 'Designs the visual experience and layouts for the login and team pages.',
    },
    {
      name: 'Tom Lynch',
      role: 'Developer',
      blurb: 'Implements approved functionality and supports delivery of the working application.',
    },
    {
      name: 'Varinder Pal Singh Bhatti',
      role: 'Developer',
      blurb: 'Supports implementation and independent testing activities.',
    },
  ],
}
