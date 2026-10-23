export function validateRepoPath(path) {
  return Boolean(path && !path.startsWith("/") && !path.includes(".."));
}
