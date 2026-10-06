import { Suspense } from 'react';
import Invite from '@/components/Invite';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Invite />
    </Suspense>
  );
}
