import { NextRequest } from 'next/server';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthenticatedRequest extends NextRequest {
  user?: User;
}

// export async function GET(
//   request: NextRequest,
//   { params }: { parmas: { yyyymmddStr: string } },
// ): Promise<AuthenticatedRequest> {
//   const token = request.headers.get('Authorization')?.split(' ')[1];

//   if (!token) {
//     throw new Error('No Token provied');
//   }

//   try {
//   } catch (error) {}

//   const { yyyymmddStr } = await request.json();

//   return;
// }
