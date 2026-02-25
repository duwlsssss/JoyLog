'use client';

import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

interface ZoomImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export default function ZoomImage({ src, alt, caption }: ZoomImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-8 [&+figure]:-mt-10">
        <div
          className="relative cursor-zoom-in overflow-hidden rounded-xl border border-white/10 shadow-md"
          onClick={() => setOpen(true)}
        >
          <img src={src} alt={alt} className="h-auto w-full object-cover" />
        </div>
        {caption && (
          <figcaption className="text-muted-foreground mt-3 text-center text-sm">
            {caption}
          </figcaption>
        )}
      </figure>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src }]}
        plugins={[Zoom]}
        // 슬라이드(Carousel) 기능 제한
        carousel={{
          finite: true,
        }}
        controller={{ closeOnBackdropClick: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          buttonZoom: () => null,
        }}
        zoom={{
          maxZoomPixelRatio: 3, // 최대 3배까지 확대
          scrollToZoom: true, // 휠로 줌 가능
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, .9)' },
          slide: { cursor: 'move' }, // 확대 후엔 이동할 수 있다는 힌트
        }}
      />
    </>
  );
}
