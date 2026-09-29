// Blog posts are written by staff in Manager Pro and appear here once an admin approves them.

const MANAGER_PRO_API_URL = (process.env.MANAGER_PRO_API_URL || "https://managerpro-production.up.railway.app").replace(/\/$/, "")

// Pages refresh at most this often on their own; Manager Pro also pings
// /api/revalidate-blogs on approve/unpublish so changes show up right away.
export const BLOG_REVALIDATE_SECONDS = 300
export const BLOG_CACHE_TAG = "blogs"

export interface BlogSummary {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  coverImageUrl: string | null
  authorName: string
  publishedAt: string | null
  readMinutes: number
}

export interface BlogPost extends BlogSummary {
  content: string
}

async function fetchFromManagerPro<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${MANAGER_PRO_API_URL}${path}`, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS, tags: [BLOG_CACHE_TAG] },
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch (error) {
    console.error(`Could not reach Manager Pro for ${path}`, error)
    return null
  }
}

export async function getPublishedBlogs(): Promise<BlogSummary[] | null> {
  return fetchFromManagerPro<BlogSummary[]>("/api/public/blogs?limit=100")
}

export async function getPublishedBlog(slug: string): Promise<BlogPost | null> {
  return fetchFromManagerPro<BlogPost>(`/api/public/blogs/${encodeURIComponent(slug)}`)
}

export function formatBlogDate(value: string | null): string {
  if (!value) return ""
  return new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
}
