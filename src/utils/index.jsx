export const extractImageUrls = (data) => {
  const urlRegex = /https?:\/\/[^";]+/g;
  return data?.match(urlRegex) || [];
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const formattedNumber = new Intl.NumberFormat("en-US");
