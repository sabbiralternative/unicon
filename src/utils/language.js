export const languageValue = (valueByLanguage, key) => {
  const language = localStorage.getItem("language") || "english";

  if (!key) return "";

  return valueByLanguage && valueByLanguage?.[key]?.[language]
    ? valueByLanguage?.[key]?.[language]
    : key
        .split("_") // Split by underscores
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        ) // Capitalize each word
        .join(" ");
};
