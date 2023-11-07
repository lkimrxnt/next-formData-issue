import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware (request: NextRequest) {
  if (request.method === 'POST') {
    const formData = await request.formData()
    console.log('username', formData.get('username'))
    console.log('password', formData.get('password'))
  }

  return NextResponse.next()
}
