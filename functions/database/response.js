const generateResponse = (isSuccessful, errors) => (
  {
    success: isSuccessful,
    errors: errors
  }
)

export { generateResponse };