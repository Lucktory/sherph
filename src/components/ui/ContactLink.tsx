import type { ReactNode } from 'react';
import { isExternalUrl, siteConfig } from '@/config/site';

type ContactLinkProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

/**
 * Every call-to-action points at `siteConfig.contactUrl`. Centralising it here
 * means the destination is set in exactly one place, and whether the link opens
 * a new tab follows from the destination itself rather than being hardcoded at
 * each call site.
 */
export function ContactLink({ className, children, onClick }: ContactLinkProps) {
  const external = isExternalUrl(siteConfig.contactUrl);

  return (
    <a
      className={className}
      href={siteConfig.contactUrl}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
