export function FileCard({ name, targetPath, size }) {
  return (
    <div className="file-card">
      <strong>{name}</strong>
      <span>{targetPath} ({size} bytes)</span>
    </div>
  );
}
