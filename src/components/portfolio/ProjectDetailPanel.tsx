import ZoomImage from '@components/posts/ZoomImage.client';

import type { ProjectDetail } from '@/types/project';

interface ProjectDetailPanelProps {
  detail: ProjectDetail;
}

export default function ProjectDetailPanel({ detail }: ProjectDetailPanelProps) {
  return (
    <div className="space-y-8 pt-6">
      {detail.images && detail.images.length > 0 && (
        <div className="grid gap-x-4 sm:grid-cols-2">
          {/* ZoomImage의 연속 figure 음수 마진([&+figure]:-mt-5)이 그리드에서 어긋나지 않도록 div로 감싼다 */}
          {detail.images.map((image) => (
            <div key={image.src}>
              <ZoomImage src={image.src} alt={image.alt} caption={image.alt} />
            </div>
          ))}
        </div>
      )}

      {detail.techStack && detail.techStack.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-widest uppercase">Tech Stack</h4>
          <dl className="divide-y divide-slate-200 dark:divide-slate-800">
            {detail.techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col gap-1 py-2.5 sm:flex-row sm:gap-6">
                <dt className="w-48 shrink-0 text-sm font-semibold">{tech.name}</dt>
                <dd className="text-sm text-slate-600 dark:text-slate-400">{tech.usedIn}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
