import type { ResumeItem } from '@/types/resume';

interface ResumeItemListProps {
  items: ResumeItem[];
}

export default function ResumeItemList({ items }: ResumeItemListProps) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.title} className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold">{item.title}</h3>
            <span className="shrink-0 text-sm font-medium text-slate-400">{item.period}</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">{item.organization}</p>
          {item.description && (
            <p className="text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
