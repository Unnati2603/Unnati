"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to desktop with Projects folder open
    router.push('/Desktop');
  }, [router]);

  return <div>Redirecting to Projects...</div>;
}
