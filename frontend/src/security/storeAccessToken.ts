import jwt_decode from 'jwt-decode';

export function storeAccessToken(token: string) {
  let decoded = jwt_decode(token) as { exp: number };

  localStorage.setItem('access_token', token);
  localStorage.setItem('access_token_exp', decoded.exp.toString());
}