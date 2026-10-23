export function summarizeArchive(entries = []) {
  return {
    totalFiles: entries.length,
    timestamp: new Date().toISOString()
  };
}
