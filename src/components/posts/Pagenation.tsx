import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  tag?: string;
}

export default function Pagination({ currentPage, totalPages, tag }: PaginationProps) {
  if (totalPages <= 1) return null;

  const baseHref = tag ? `/?tag=${tag}&` : `/?`;

  return (
    <div className="mt-12 flex justify-center gap-2">
      {/* 이전 페이지 */}
      {currentPage > 1 && (
        <Link
          href={`${baseHref}page=${currentPage - 1}`}
          className="hover:bg-secondary rounded border px-3 py-1"
        >
          이전
        </Link>
      )}

      {/* 페이지 번호 */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Link
          key={pageNum}
          href={`${baseHref}page=${pageNum}`}
          className={`rounded border px-3 py-1 transition-colors ${
            currentPage === pageNum
              ? 'bg-primary text-primary-foreground border-primary'
              : 'hover:bg-secondary'
          }`}
        >
          {pageNum}
        </Link>
      ))}

      {/* 다음 페이지 */}
      {currentPage < totalPages && (
        <Link
          href={`${baseHref}page=${currentPage + 1}`}
          className="hover:bg-secondary rounded border px-3 py-1"
        >
          다음
        </Link>
      )}
    </div>
  );
}
