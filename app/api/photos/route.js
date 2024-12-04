import { NextResponse } from 'next/server';
import { getAllPhotos } from '@/lib/image-data';

export async function GET(request) {
  const photos = await getAllPhotos();
  return NextResponse.json(photos);
}
