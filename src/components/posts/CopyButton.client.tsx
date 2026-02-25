'use client';

import { useState } from 'react';

import { Check, Copy } from 'lucide-react';

export default function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
    >
      {isCopied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
}
