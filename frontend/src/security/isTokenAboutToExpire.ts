export function isTokenAboutToExpire() {
    let exp = localStorage.getItem('access_token_exp');
  
    let expInMs = parseInt(exp ?? "0", 10) * 1000;
  
    return Date.now() + (5 * 60 * 1000) >= expInMs;
  }