import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import BlogContent from "@/components/blog/BlogContent"
import { formatBlogDate, getPublishedBlog } from "@/lib/blogs"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedBlog(slug)
  if (!post) return { title: "Blog not found | K Vineeth Reddy & Co LLP" }
  return {
    title: `${post.title} | K Vineeth Reddy & Co LLP`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://cakvr.com/blogs/${post.slug}`,
      images: post.coverImageUrl ? [post.coverImageUrl] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPublishedBlog(slug)
  if (!post) notFound()

  return (
    <article className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link href="/blogs" className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-ca-purple hover:underline">
          <ArrowLeft className="h-4 w-4" /> All blogs
        </Link>

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ca-purple">{post.category}</p>
        <h1 className="mb-5 text-3xl font-bold leading-tight text-ca-darkBlue md:text-4xl">{post.title}</h1>
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-gray-100 pb-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {post.authorName}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatBlogDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readMinutes} min read
          </span>
        </div>

        {post.coverImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.coverImageUrl} alt="" className="mb-10 max-h-[420px] w-full rounded-xl object-cover" />
        )}

        <BlogContent content={post.content} />

        <p className="mt-12 rounded-lg bg-gray-50 p-4 text-xs leading-relaxed text-gray-500">
          This article is for general information only and does not constitute professional advice. Please consult
          us before acting on it for your specific situation.
        </p>
      </div>
    </article>
  )
}
