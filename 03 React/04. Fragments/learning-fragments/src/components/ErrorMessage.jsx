function ErrorMessage({ items }) {
  if (items.length === 0) {
    return <p className="text-center no-food">No Food Items Found.</p>
  }
  return null;
}

export default ErrorMessage;