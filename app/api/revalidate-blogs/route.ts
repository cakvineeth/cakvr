import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse, type NextRequest } from "next/server"
import { BLOG_CACHE_TAG } from "@/lib/blogs"

// Manager Pro calls this after an admin approves, edits or unpublishes a post,
// so the website shows the change without waiting for the cache to expire.
export async function POST(request: NextRequest) {
  const secret = process.env.BLOG_REVALIDATE_SECRET
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const body = (await request.json().catch(() => ({}))) as { slug?: string }
  revalidateTag(BLOG_CACHE_TAG, { expire: 0 })
  revalidatePath("/blogs")
  if (body.slug) revalidatePath(`/blogs/${body.slug}`)

  return NextResponse.json({ ok: true })
}
