import { getViews } from '@libs/actions';

// 이 컴포넌트는 캐시하지 않고 매번 DB에서 새로 가져오도록 설정
export const dynamic = 'force-dynamic';

export default async function ViewCounter({ slug }: { slug: string }) {
  const views = await getViews(slug);

  return <span className="tabular-nums">조회수 {views.toLocaleString()}회</span>;
}
