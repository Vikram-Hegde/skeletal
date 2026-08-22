/** Lowercase and strip separators so "AlertDialog" and "alert dialog" compare equal. */
export function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

/** True when `query`'s characters appear in order inside `haystack`. */
export function isSubsequence(query: string, haystack: string): boolean {
  let i = 0;
  for (let j = 0; j < haystack.length && i < query.length; j++) {
    if (query[i] === haystack[j]) i += 1;
  }
  return i === query.length;
}

/** Classic DP edit distance between two strings. */
export function editDistance(a: string, b: string): number {
  const n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    for (let j = 1; j <= n; j++) {
      const left = curr[j - 1] ?? 0;
      const up = prev[j] ?? 0;
      const diag = prev[j - 1] ?? 0;
      curr[j] = Math.min(left + 1, up + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = curr;
  }
  return prev[n] ?? 0;
}

/**
 * Typo-tolerant search against one or more fields. Accepts substring matches
 * first, then in-order subsequences (word boundaries, dropped letters), then
 * edit distance for small typos ("command pallete" → CommandPalette).
 */
export function fuzzyMatch(query: string, ...haystacks: string[]): boolean {
  const q = normalize(query);
  if (!q) return true;
  const candidates = haystacks.map(normalize).filter(Boolean);
  for (const candidate of candidates) {
    if (candidate.includes(q)) return true;
    if (isSubsequence(q, candidate)) return true;
  }
  const maxDist = q.length >= 8 ? 2 : 1;
  return candidates.some((candidate) => editDistance(q, candidate) <= maxDist);
}
