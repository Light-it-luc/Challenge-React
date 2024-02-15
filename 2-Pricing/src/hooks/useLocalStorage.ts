import { useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, (newValue: T) => void] => {
  const currentlyInLocalStorage = localStorage.getItem(key);
  const itemIsNotInLocalStorage = !currentlyInLocalStorage;

  const initialValue = itemIsNotInLocalStorage
    ? defaultValue
    : (JSON.parse(currentlyInLocalStorage) as T);

  const [item, setItem] = useState(initialValue);

  const saveItem = (newValue: T): void => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setItem(newValue);
  };

  return [item, saveItem];
};
