export const showNewError = (messaje, status) => {
  throw new Error(messaje, { statusCode: status });
};
