import Link from 'next/link';

import { ROUTES } from '@constants/routes';

const NotFound = () => {
  return (
    <main className="flex flex-1 items-center justify-center">
      <section className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h2>
        <p className="mt-4 text-lg text-gray-400">
          찾으시는 페이지가 존재하지 않거나 <br />
          이동되었을 수 있습니다.
        </p>
        <div className="mt-10">
          <Link
            href={ROUTES.ROOT}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50 transition-colors hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
