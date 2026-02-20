import Link from 'next/link';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-y-4 py-10">
      {/* SNS 아이콘 섹션 */}
      <div className="text-muted-foreground flex items-center gap-x-6">
        <Link
          href="mailto:rladuwls0814@gmail.com"
          className="hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </Link>
        <Link
          href="https://github.com/duwlsssss"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/여진-김-712033249"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
      </div>
      {/* 카피라이트 섹션 */}
      <div className="text-muted-foreground text-m font-medium">© {currentYear} JOY Blog</div>
    </footer>
  );
}
