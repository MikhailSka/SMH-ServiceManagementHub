export function getAccessToken(): string | null {
    const token = localStorage.getItem('access_token');
    console.log("Access token from getAccessToken:", token);
    return token;
  }