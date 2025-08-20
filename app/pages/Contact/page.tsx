"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ContactPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to desktop with Contact folder open
    router.push('/Desktop');
  }, [router]);

  return <div>Redirecting to Contact...</div>;
}
