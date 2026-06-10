import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
const isConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// Valid placeholders so createClient does not throw when env is unset (dev only).
const DEV_PLACEHOLDER_URL = "http://127.0.0.1:54321"
const DEV_PLACEHOLDER_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"

let client: SupabaseClient | null = null
let warnedMissingEnv = false

function getSupabaseClient(): SupabaseClient {
  if (client) {
    return client
  }

  if (isConfigured) {
    client = createClient(supabaseUrl!, supabaseAnonKey!)
    return client
  }

  if (!warnedMissingEnv) {
    console.warn(
      "[supabase] NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are not set. Copy .env.example to .env.local and add your project credentials from https://supabase.com/dashboard/project/_/settings/api",
    )
    warnedMissingEnv = true
  }

  client = createClient(DEV_PLACEHOLDER_URL, DEV_PLACEHOLDER_ANON_KEY)
  return client
}

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    const value = Reflect.get(getSupabaseClient(), prop, receiver)
    return typeof value === "function" ? value.bind(getSupabaseClient()) : value
  },
})

// Create a function to get an authenticated client using the current session
export const getAuthenticatedClient = async () => {
  // Get the current session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If there's a session, use it to create an authenticated client
  if (session) {
    return supabase
  }

  // Otherwise, return the regular client (which will be subject to RLS)
  return supabase
}

// Map Supabase blog fields to our Blog type
export function mapBlogFields(blog: any) {
  return {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    content: blog.content,
    excerpt: blog.excerpt,
    author: blog.author,
    coverImage: blog.cover_image,
    publishedAt: blog.published_at,
    tags: blog.tags || [],
    isPublished: blog.is_published,
  }
}

// Map Supabase news fields to our NewsItem type
export function mapNewsFields(news: any) {
  return {
    id: news.id,
    title: news.title,
    content: news.content,
    excerpt: news.excerpt,
    author: news.author,
    imageUrl: news.image_url,
    publishedAt: news.published_at,
    source: news.source,
    sourceUrl: news.url,
    category: news.category,
    isPublished: news.is_published,
  }
}

// Add this function after the existing mapping functions
export function mapImportantDateFields(date: any) {
  return {
    id: date.id,
    title: date.title,
    date: date.date,
    description: date.description,
    category: date.category,
    isActive: date.is_active,
  }
}
