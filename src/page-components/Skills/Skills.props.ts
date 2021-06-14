import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface SkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skills: string[]
}

export type { SkillsProps }
