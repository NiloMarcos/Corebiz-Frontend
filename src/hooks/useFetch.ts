import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://corebiz-test-server.onrender.com/api/v1/",
});

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { data, error };
}
