import { useState } from "react";

export const useCheckNetwork = () => {
  const [status, setStatus] = useState(null);

  window.addEventListener("offline", () => {
    setStatus(true);
  });

  window.addEventListener("online", () => {
    setStatus(false);
  });

  return status;
};
