import { NextResponse } from 'next/server';
import { getPhotoById } from '@/lib/image-data';

export async function GET(request, { params }) {
  const photiId = params?.id;
  const data = await getPhotoById(photiId);
  return NextResponse.json(data);
}
