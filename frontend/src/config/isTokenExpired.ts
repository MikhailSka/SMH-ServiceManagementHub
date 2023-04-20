import jwtDecode from 'jwt-decode';

export function isTokenExpired(token: string | null): boolean {
  if (!token) {
    return true;
  }

  const decodedToken: any = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);

  return decodedToken.exp < currentTime;
}