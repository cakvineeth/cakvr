import { BlogAPI } from "@/lib/api"
import BlogPostContent from "@/components/blog/BlogPostContent"
import Logo from "@/components/Logo"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const blog = await BlogAPI.getBySlug(params.slug)

    return {
      title: `${blog.title} | K Vineeth Reddy & Co LLP Blog`,
      description: blog.excerpt,
    }
  } catch (error) {
    return {
      title: "Blog Post | K Vineeth Reddy & Co LLP",
      description: "Insights and expertise from our team of financial advisors",
    }
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const blog = await BlogAPI.getBySlug(params.slug)

    return (
      <>
        <div className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Logo size="large" />
              </div>
            </div>
          </div>
        </div>
        <BlogPostContent
          post={{
            id: blog.id,
            title: blog.title,
            content: blog.content,
            author: blog.author,
            created_at: blog.publishedAt,
            image_url: blog.coverImage,
          }}
        />
      </>
    )
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return (
      <>
        <div className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Logo size="large" />
              </div>
            </div>
          </div>
        </div>
        <BlogPostContent post={undefined} />
      </>
    )
  }
}
