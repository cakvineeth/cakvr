import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Calendar, Clock } from "lucide-react"
import { formatBlogDate, getPublishedBlogs } from "@/lib/blogs"

export const metadata: Metadata = {
  title: "Blogs | K Vineeth Reddy & Co LLP",
  description: "Articles on tax, GST, audit and compliance from the team at K Vineeth Reddy & Co LLP.",
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const posts = await getPublishedBlogs()
  const categories = posts ? Array.from(new Set(posts.map((post) => post.category))).sort() : []
  const visible = posts && category ? posts.filter((post) => post.category === category) : posts

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ca-purple">Insights</p>
          <h1 className="mb-4 text-4xl font-bold text-ca-darkBlue">Blogs</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Practical articles on taxation, GST, audit and compliance, written by our team.
          </p>
        </header>

        {categories.length > 1 && (
          <nav className="mb-10 flex flex-wrap justify-center gap-2" aria-label="Filter by category">
            {["All", ...categories].map((name) => {
              const active = name === "All" ? !category : name === category
              return (
                <Link
                  key={name}
                  href={name === "All" ? "/blogs" : `/blogs?category=${encodeURIComponent(name)}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-ca-darkBlue text-white" : "bg-white text-gray-600 shadow-sm hover:bg-gray-100"
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </nav>
        )}

        {visible === null ? (
          <p className="rounded-xl border border-gray-200 bg-white p-10 text-center text-gray-500">
            Our articles are unavailable right now. Please check back shortly.
          </p>
        ) : visible.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <BookOpen className="mx-auto mb-3 h-10 w-10 text-gray-300" />
            <p className="text-gray-500">No articles published yet. New posts from our team will appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {post.coverImageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.coverImageUrl} alt="" className="h-44 w-full object-cover" />
                ) : (
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-ca-darkBlue to-ca-purple">
                    <BookOpen className="h-10 w-10 text-white/60" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-ca-purple">{post.category}</span>
                  <h2 className="mb-2 text-lg font-bold leading-snug text-ca-darkBlue group-hover:text-ca-purple">
                    {post.title}
                  </h2>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatBlogDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readMinutes} min read
                    </span>
                    <span>by {post.authorName}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
