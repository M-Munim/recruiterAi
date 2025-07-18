'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md text-center shadow-2xl rounded-2xl">
        <CardHeader>
          <div className="flex justify-center mb-2">
            <AlertTriangle className="text-red-500 h-12 w-12" />
          </div>
          <CardTitle className="text-3xl font-bold text-destructive">404 - Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">⬅ Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
