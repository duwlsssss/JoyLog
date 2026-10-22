import type { ResumeProfile } from '@/types/resume';

interface ProfileHeaderProps {
  profile: ResumeProfile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="border-b border-slate-200 pb-10 dark:border-slate-800">
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight lg:text-5xl">{profile.name}</h1>
      <p className="mb-4 text-lg font-medium text-slate-500">{profile.role}</p>
      <p className="mb-6 text-xl text-slate-600 dark:text-slate-400">{profile.about}</p>
      <ul className="flex flex-wrap gap-3">
        {profile.contacts.map(({ label, href, icon: Icon }) => {
          // mailto 링크는 새 탭으로 열면 빈 탭이 남으므로 외부 URL만 새 탭으로 연다
          const isExternal = href.startsWith('http');
          return (
            <li key={label}>
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <Icon className="size-4 shrink-0" aria-hidden />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
