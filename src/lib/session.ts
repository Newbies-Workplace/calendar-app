import 'server-only'

import {User} from "@prisma/client";
import {jwtVerify, SignJWT} from 'jose'
import {cookies} from "next/headers";

interface UserSession {
  userId: string;
  name: string;
  token: string;
}

const SESSION_COOKIE_NAME = 'session'
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

async function encrypt(payload: UserSession) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1y')
    .sign(encodedKey)
}

async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}


export const saveSession = async (user: User) => {
  const cookieStore = await cookies()
  const session: UserSession = {userId: user.id,
    name: user.name,
    token: user.token,}

  const encryptedSession = await encrypt(session)

  cookieStore.set(
    SESSION_COOKIE_NAME,
    encryptedSession,
    {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000), // 1 year
      sameSite: 'lax',
      path: '/',
    }
  )
}

export const getSession = async (): Promise<UserSession | null> => {
  const session = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  const payload = await decrypt(session)

  if (!session || !payload) {
    return null;
  }

  try {
    return payload as unknown as UserSession;
  } catch {
    return null;
  }
}
