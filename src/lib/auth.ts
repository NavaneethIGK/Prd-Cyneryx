// Simple authentication utility for admin
const ADMIN_CREDENTIALS = {
  username: 'cyneryx',
  password: 'cyneryx@123',
};

export function validateAdminCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

export function setAdminToken(token: string): void {
  if (typeof document !== 'undefined') {
    document.cookie = `adminToken=${token}; path=/; max-age=86400`; // 24 hours
  }
}

export function getAdminToken(): string | null {
  if (typeof document === 'undefined') return null;
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'adminToken') return value;
  }
  return null;
}

export function clearAdminToken(): void {
  if (typeof document !== 'undefined') {
    document.cookie = 'adminToken=; path=/; max-age=0';
  }
}

export function generateAdminToken(): string {
  return 'admin_' + Math.random().toString(36).substr(2, 9);
}
