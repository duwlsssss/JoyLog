'use client';

export function VideoPlayer({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="my-8 flex flex-col items-center gap-2">
      <div className="border-border bg-muted w-full overflow-hidden rounded-xl border shadow-sm">
        <video controls preload="metadata" className="aspect-video w-full">
          <source src={src} type="video/mp4" />
          브라우저가 비디오 재생을 지원하지 않습니다.
        </video>
      </div>
      {caption && <figcaption className="text-muted-foreground text-sm">{caption}</figcaption>}
    </figure>
  );
}
