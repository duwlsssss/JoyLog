'use client';

import { useId, useState } from 'react';

import { CheckCircle2, ChevronDown, ExternalLink, Github } from 'lucide-react';

import ProjectDetailPanel from '@components/portfolio/ProjectDetailPanel';

import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const detailId = useId();

  return (
    <section className="group relative flex flex-col gap-y-4 border-b border-slate-200 py-10 last:border-none dark:border-slate-800">
      {/* 제목 및 기간 */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight transition-all duration-300 group-hover:text-blue-300">
            {project.title}
          </h3>
          <span className="text-sm font-medium text-slate-400">{project.period}</span>
        </div>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 핵심 성과 리스트 */}
      <div className="mt-2 space-y-3">
        <h4 className="text-xs font-bold tracking-widest uppercase">Key Solutions</h4>
        <ul className="space-y-2.5">
          {project.achievements.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 푸터 영역: 링크 버튼 */}
      <div className="mt-4 flex gap-3">
        {project.links.site && (
          <a
            href={project.links.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <ExternalLink className="size-4" />
            웹사이트 방문
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            <Github className="size-4" />
            GitHub
          </a>
        )}
        {project.detail && (
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls={detailId}
            className="ml-auto inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            {isOpen ? '상세 닫기' : '상세 보기'}
            <ChevronDown
              className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {/* 상세 영역: grid-rows 0fr↔1fr 전환으로 콘텐츠 높이를 몰라도 높이 애니메이션 적용.
          닫혀 있을 때는 inert로 포커스·스크린리더 접근을 막는다 */}
      {project.detail && (
        <div
          id={detailId}
          inert={!isOpen}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <ProjectDetailPanel detail={project.detail} />
          </div>
        </div>
      )}
    </section>
  );
}
