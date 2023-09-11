import { useEffect, useState } from 'react';
import useAuth from "@/hooks/useAuth";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setExpiresAt, setSession } = useAuth();

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${url}`)
        setExpiresAt(response.headers.get("x-session-expires"))

        if (response.status === 401) {
          setSession(null);
        }
        if( !response.ok ) {
          throw new Error(response.statusText);
        }

        const data = await response.json()
        setData(data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [url, setExpiresAt, setSession]);

  return {
    data,
    error,
    loading
  }
}

export default useFetch;
