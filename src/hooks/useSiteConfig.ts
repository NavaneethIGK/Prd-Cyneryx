import { useEffect, useState } from 'react';

export function useSiteConfig() {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/content')
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch site config:', error);
        setLoading(false);
      });
  }, []);

  return { config, loading };
}
