import {User} from "@prisma/client";
import {cookies} from "next/headers";

interface UserSession {
  userId: string;
  name: string;
  token: string;
}

const SESSION_COOKIE_NAME = 'session'

export const saveSession = async (user: User) => {
  const cookieStore = await cookies()
  cookieStore.set(
    SESSION_COOKIE_NAME,
    JSON.stringify({
      userId: user.id,
      name: user.name,
      token: user.token,
    }),
    {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    }
  )
}

export const getSession = async (): Promise<UserSession | null> => {
  const userString = (await cookies()).get(SESSION_COOKIE_NAME)?.value;

  if (!userString) {
    return null;
  }

  try {
    return JSON.parse(userString);
  } catch {
    return null;
  }
}
