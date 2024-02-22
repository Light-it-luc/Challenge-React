import { useState, Dispatch, SetStateAction } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const currentlyInLocalStorage = localStorage.getItem(key);
  const isInLocalStorage = !!currentlyInLocalStorage;

  const initialValue = isInLocalStorage
    ? (JSON.parse(currentlyInLocalStorage) as T)
    : defaultValue;

  const [item, setItem] = useState(initialValue);

  const saveItem: Dispatch<SetStateAction<T>> = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setItem(newValue);
  };

  return [item, saveItem];
};
