export const formatText = (text: string) => {
  if (!text) return "";
  return (
    text.replace(/_/g, " ").charAt(0).toUpperCase() +
    text.slice(1).replace(/_/g, " ")
  );
};

export const formatUnit = (value: string | number) => {
  if (typeof value !== "string") return value;

  return value.replace(/(\d+)(\s*)([a-zA-Z]+)/, "$1 $3");
};
