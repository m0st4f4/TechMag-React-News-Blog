interface FormatDateOptions {
  locale?: string;
  calendar?: "persian" | "gregory" | "islamic";
  dateStyle?: "full" | "long" | "medium" | "short";
}

export const formatUserDate = (
  date: Date | string | number,
  options: FormatDateOptions = {}
): string => {
  const {
    locale = "fa-IR",
    calendar = "persian",
    dateStyle = "long",
  } = options;

  const dateObject = date instanceof Date ? date : new Date(date);

  if (isNaN(dateObject.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(`${locale}-u-ca-${calendar}`, {
    dateStyle,
  }).format(dateObject);
};
