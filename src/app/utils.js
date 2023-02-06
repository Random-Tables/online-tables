export const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

export const breakUpCamelCase = (s) => s.replace(/([a-z])([A-Z])/g, `$1 $2`);
