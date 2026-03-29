import Link from 'next/link';
import { useRouter } from 'next/router';

import { cn } from '@/utils/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex justify-center p-6">
      <div className="shadow-card flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                isActive
                  ? 'shadow-gold bg-[var(--color-gold)] text-black'
                  : 'text-[var(--color-text-muted)] hover:bg-white/5 hover:text-[var(--color-text)]',
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
