export async function pushFileToGitHub({ owner, repo, path, content, token }) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  return { url, status: "ready", hasToken: Boolean(token) };
}
