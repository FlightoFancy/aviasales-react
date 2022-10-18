import { useState } from "react";

export const useFetching = (callback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (e) {
      setError("Что-то пошло не так...");
    } finally {
      setLoading(false);
    }
  };
  return [fetching, loading, error]
};
