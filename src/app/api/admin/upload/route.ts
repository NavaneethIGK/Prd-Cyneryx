import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    // Verify admin token
    const token = request.cookies.get('adminToken');
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${timestamp}-${originalName}`;
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Save file
    const filepath = path.join(uploadsDir, filename);
    const buffer = await file.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    
    // Set file permissions to be readable
    fs.chmodSync(filepath, 0o644);
    
    // Verify file was created
    if (!fs.existsSync(filepath)) {
      throw new Error(`Failed to create file: ${filepath}`);
    }

    // Return the API route URL for dynamic file serving
    const publicUrl = `/api/uploads/${filename}`;

    const response = NextResponse.json({
      success: true,
      url: publicUrl,
      filename: filename,
    });
    
    // Add no-cache headers
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    
    console.log(`✓ File uploaded successfully: ${filename}`);
    
    return response;
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
