import type { WithChildren } from '@/types';

export function Tag({ children }: WithChildren) {
  return <span className="tag">{children}</span>;
}
