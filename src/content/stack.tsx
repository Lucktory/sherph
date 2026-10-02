import type { ComponentType } from 'react';
import {
  SiAngular,
  SiCloudflare,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGo,
  SiGraphql,
  SiJest,
  SiLinux,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiStorybook,
  SiStripe,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
} from '@icons-pack/react-simple-icons';
import type { Dictionary } from '@/i18n/types';

export type Tech = {
  name: string;
  Icon: ComponentType<{ className?: string }>;
  /**
   * Colour the logo takes on hover.
   *
   * Usually the official brand hex. Several brands are near-black - Next.js is
   * #000000, GitHub #181717, Express #0A0A0A, Vercel #000000 - and would be
   * invisible on this panel, so those use a light neutral or the brand's
   * secondary colour instead. Trading exact brand fidelity for being visible
   * at all is the right way round.
   */
  color: string;
};

export type StackGroup = {
  /** Key into `dictionary.stack.groups`, so the heading follows the language. */
  labelKey: keyof Dictionary['stack']['groups'];
  items: Tech[];
};

const LIGHT = '#E8E8F2';

export const stackGroups: readonly StackGroup[] = [
  {
    labelKey: 'frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: LIGHT },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Nuxt', Icon: SiNuxt, color: '#00DC82' },
      { name: 'Svelte', Icon: SiSvelte, color: '#FF3E00' },
      { name: 'Angular', Icon: SiAngular, color: LIGHT },
      { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
      { name: 'Sass', Icon: SiSass, color: '#CC6699' },
      { name: 'Motion', Icon: SiFramer, color: '#5B7CFF' },
      { name: 'Vite', Icon: SiVite, color: '#9135FF' },
    ],
  },
  {
    labelKey: 'backend',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Python', Icon: SiPython, color: '#4B8BBE' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', Icon: SiRedis, color: '#FF4438' },
      { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
      { name: 'Prisma', Icon: SiPrisma, color: '#7DD3FC' },
      { name: 'Go', Icon: SiGo, color: '#00ADD8' },
      { name: 'Django', Icon: SiDjango, color: '#44B78B' },
      { name: 'Express', Icon: SiExpress, color: LIGHT },
      { name: 'Supabase', Icon: SiSupabase, color: '#3FCF8E' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFA000' },
    ],
  },
  {
    labelKey: 'tools',
    items: [
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', Icon: SiVercel, color: LIGHT },
      { name: 'GitHub', Icon: SiGithub, color: LIGHT },
      { name: 'Git', Icon: SiGit, color: '#F03C2E' },
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      { name: 'Cloudflare', Icon: SiCloudflare, color: '#F38020' },
      { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7' },
      { name: 'Stripe', Icon: SiStripe, color: '#8B85FF' },
      { name: 'Jest', Icon: SiJest, color: '#E4416B' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'Storybook', Icon: SiStorybook, color: '#FF4785' },
      { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
    ],
  },
] as const;

/** Row direction: alternating, so neighbouring rows never scroll in step. */
export const rowDirection = (index: number): 1 | -1 => (index % 2 === 0 ? -1 : 1);

/** Seconds for one full pass. Staggered so the rows never sync up visually. */
export const rowDuration = (index: number): number => [46, 58, 52][index] ?? 50;
