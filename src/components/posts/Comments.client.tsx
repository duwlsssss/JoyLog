'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comments({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className={className} id="comments">
      <Giscus
        repo="duwlsssss/JoyLog"
        repoId="R_kgDOOGj4hg"
        category="Comments"
        categoryId="DIC_kwDOOGj4hs4C2wg5"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="ko"
      />
    </div>
  );
}
