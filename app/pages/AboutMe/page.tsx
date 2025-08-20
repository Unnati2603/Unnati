"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AboutMePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to desktop with AboutMe folder open
    router.push('/Desktop');
  }, [router]);

  return <div>Redirecting to About Me...</div>;
}
