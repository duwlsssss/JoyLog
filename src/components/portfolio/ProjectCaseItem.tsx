import { ChevronRight } from 'lucide-react';

import type { ProjectCase } from '@/types/project';

const CASE_STEPS: { key: Exclude<keyof ProjectCase, 'title'>; label: string }[] = [
  { key: 'problem', label: '문제' },
  { key: 'cause', label: '원인' },
  { key: 'decision', label: '판단' },
  { key: 'action', label: '해결' },
  { key: 'result', label: '결과' },
];

interface ProjectCaseItemProps {
  projectCase: ProjectCase;
}

// details/summary로 펼침 상태를 브라우저에 맡겨 별도 상태 없이 키보드·스크린리더 접근을 지원한다
export default function ProjectCaseItem({ projectCase }: ProjectCaseItemProps) {
  return (
    <li>
      <details className="group">
        <summary className="flex cursor-pointer list-none gap-3 text-sm leading-relaxed font-medium text-slate-900 dark:text-slate-100 [&::-webkit-details-marker]:hidden">
          <ChevronRight className="mt-0.5 size-4 shrink-0 transition-transform duration-200 group-open:rotate-90" />
          <span>{projectCase.title}</span>
        </summary>
        <dl className="mt-2 ml-7 divide-y divide-slate-200 dark:divide-slate-800">
          {CASE_STEPS.map(({ key, label }) => (
            <div key={key} className="flex flex-col gap-1 py-2.5 sm:flex-row sm:gap-6">
              <dt className="w-10 shrink-0 text-sm font-semibold">{label}</dt>
              <dd className="text-sm text-slate-600 dark:text-slate-400">{projectCase[key]}</dd>
            </div>
          ))}
        </dl>
      </details>
    </li>
  );
}
