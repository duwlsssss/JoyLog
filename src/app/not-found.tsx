import Link from 'next/link';

import { Button } from '@components/ui/Button';

import { ROUTES } from '@constants/routes';

const NotFound = () => {
  return (
    <main className="flex flex-1 items-center justify-center">
      <section className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold">페이지를 찾을 수 없습니다</h2>
        <p className="mt-4 text-xl text-gray-400">
          찾으시는 페이지가 존재하지 않거나 <br />
          이동되었을 수 있습니다.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={ROUTES.ROOT}>홈으로 돌아가기</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
