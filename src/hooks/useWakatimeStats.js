import { useState, useEffect } from 'react';

const WAKATIME_API_KEY = import.meta.env.VITE_WAKATIME_API_KEY;

const useWakaTimeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!WAKATIME_API_KEY) {
      setError("WakaTime API Key is missing. Check your .env file.");
      setLoading(false);
      return;
    }

    const fetchWakaTimeStats = async () => {
      const proxyUrl = '/api/api/v1/users/current/stats?range=all_time';

      try {
        const response = await fetch(proxyUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${btoa(WAKATIME_API_KEY + ':')}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP Error ${response.status}: ${errorText || response.statusText}`);
        }

        const json = await response.json();
        setStats(json.data);
      } catch (e) {
        console.error("WakaTime Hook Fetch Error:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWakaTimeStats();
  }, []); 

  return { stats, loading, error };
};

export default useWakaTimeStats;