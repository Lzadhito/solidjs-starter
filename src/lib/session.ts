export const sessionSet = (key: string, item: any) =>
  sessionStorage.setItem(key, btoa(JSON.stringify(item)));

export const sessionGet = (key: string) => {
  const stringifiedValue = sessionStorage.getItem(key);
  let result;
  try {
    if (stringifiedValue) result = JSON.parse(atob(stringifiedValue));
  } catch {}
  return result;
};
