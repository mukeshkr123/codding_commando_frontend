export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const formatCreatedAtDate = (createdAt) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(createdAt).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};
