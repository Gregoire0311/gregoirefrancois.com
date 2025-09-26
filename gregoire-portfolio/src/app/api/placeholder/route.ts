import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API endpoint placeholder',
    status: 'ready',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Placeholder for future contact form processing
    console.log('Contact form submission:', body);
    
    return NextResponse.json({
      message: 'Contact form received (placeholder)',
      status: 'success',
      data: body,
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
