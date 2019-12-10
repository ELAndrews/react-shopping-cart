import React, { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedData, setStoredData] = useState(() => {
    const keyValue = window.localStorage.getItem(key);
    return keyValue ? JSON.parse(keyValue) : initialValue;
  });
  const setKeyValue = value => {
    setStoredData(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedData, setKeyValue];
}
