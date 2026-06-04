// Base API URL - use environment variable or default to localhost in development
const API_BASE_URL = "/api"

import { supabase, getAuthenticatedClient, mapNewsFields, mapBlogFields } from "./supabase"

const isBrowser = typeof window !== "undefined"

async function fetchNewsApi<T>(path: string): Promise<T> {
  try {
    const response = await fetch(path, { cache: "no-store" })
    if (!response.ok) {
      const message = await response.text()
      console.error("Error fetching news:", message || response.statusText)
      return [] as T
    }
    return (await response.json()) as T
  } catch (error) {
    console.error("Error fetching news:", error)
    return [] as T
  }
}

export type NewsItem = {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  imageUrl: string
  publishedAt: string
  source: string
  sourceUrl: string
  category: string
  isPublished: boolean
}

export type Blog = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  coverImage: string
  publishedAt: string
  tags: string[]
  isPublished: boolean
}

// Add this type definition after the existing types
export type ImportantDate = {
  id: string
  title: string
  date: string
  description: string
  category: string
  isActive: boolean
}

// Blog API functions
export const BlogAPI = {
  // Public methods
  getAll: async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching blogs:", error)
      throw error
    }

    return data.map(mapBlogFields)
  },

  getBySlug: async (slug: string) => {
    const { data, error } = await supabase.from("blogs").select("*").eq("slug", slug).single()

    if (error) {
      console.error("Error fetching blog by slug:", error)
      throw error
    }

    return mapBlogFields(data)
  },

  getById: async (id: string) => {
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching blog by ID:", error)
      throw error
    }

    return mapBlogFields(data)
  },

  // Admin methods
  getAllAdmin: async () => {
    const { data, error } = await supabase.from("blogs").select("*").order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching all blogs:", error)
      throw error
    }

    return data.map(mapBlogFields)
  },

  create: async (blogData: Partial<Blog>) => {
    // Format the data for Supabase
    const supabaseData = {
      title: blogData.title,
      slug: blogData.slug,
      content: blogData.content,
      excerpt: blogData.excerpt,
      author: blogData.author,
      cover_image: blogData.coverImage,
      published_at: blogData.publishedAt || new Date().toISOString(),
      tags: blogData.tags || [],
      is_published: blogData.isPublished !== false,
    }

    const { data, error } = await supabase.from("blogs").insert([supabaseData]).select().single()

    if (error) {
      console.error("Error creating blog:", error)
      throw error
    }

    return mapBlogFields(data)
  },

  update: async (id: string, updates: Partial<Blog>) => {
    // Format the data for Supabase
    const supabaseData = {
      title: updates.title,
      slug: updates.slug,
      content: updates.content,
      excerpt: updates.excerpt,
      author: updates.author,
      cover_image: updates.coverImage,
      published_at: updates.publishedAt,
      tags: updates.tags,
      is_published: updates.isPublished,
    }

    const { data, error } = await supabase.from("blogs").update(supabaseData).eq("id", id).select().single()

    if (error) {
      console.error("Error updating blog:", error)
      throw error
    }

    return mapBlogFields(data)
  },

  delete: async (id: string) => {
    const { error } = await supabase.from("blogs").delete().eq("id", id)

    if (error) {
      console.error("Error deleting blog:", error)
      throw error
    }

    return true
  },
}

// News API functions
export const NewsAPI = {
  // Get all categories
  getCategories: async () => {
    if (isBrowser) {
      return fetchNewsApi<string[]>(`${API_BASE_URL}/news?categories=true`)
    }

    const { data, error } = await supabase.from("news").select("category").eq("is_published", true)

    if (error) {
      console.error("Error fetching categories:", error)
      throw error
    }

    // Get unique categories
    return [...new Set(data.map((item) => item.category))]
  },

  // Get news by category
  getByCategory: async (category: string) => {
    if (isBrowser) {
      return fetchNewsApi<NewsItem[]>(`${API_BASE_URL}/news?category=${encodeURIComponent(category)}`)
    }

    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("category", category)
      .eq("is_published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching news by category:", error)
      throw error
    }

    return data.map(mapNewsFields)
  },

  // Get all published news
  getAll: async () => {
    if (isBrowser) {
      return fetchNewsApi<NewsItem[]>(`${API_BASE_URL}/news`)
    }

    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching news:", error)
      throw error
    }

    return data.map(mapNewsFields)
  },

  // Get news by ID
  getById: async (id: string) => {
    if (isBrowser) {
      try {
        const response = await fetch(`${API_BASE_URL}/news?id=${encodeURIComponent(id)}`, { cache: "no-store" })
        if (!response.ok) {
          throw new Error((await response.text()) || "News item not found")
        }
        return (await response.json()) as NewsItem
      } catch (error) {
        console.error("Error fetching news by ID:", error)
        throw error
      }
    }

    const { data, error } = await supabase.from("news").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching news by ID:", error)
      throw error
    }

    return mapNewsFields(data)
  },

  // Admin methods
  // Get all news (including unpublished)
  getAllAdmin: async () => {
    console.log("Fetching all news items (admin)")
    const { data, error } = await supabase.from("news").select("*").order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching all news:", error)
      throw error
    }

    if (!data) {
      console.warn("No news data returned from Supabase")
      return []
    }

    console.log(`Found ${data.length} news items`)
    return data.map(mapNewsFields)
  },

  // Create a new news item
  create: async (newsData: Partial<NewsItem>) => {
    // Format the data for Supabase
    const supabaseData = {
      title: newsData.title,
      content: newsData.content,
      excerpt: newsData.excerpt,
      author: newsData.author,
      image_url: newsData.imageUrl,
      published_at: newsData.publishedAt || new Date().toISOString(),
      source: newsData.source,
      url: newsData.sourceUrl,
      category: newsData.category,
      is_published: newsData.isPublished !== false,
    }

    const { data, error } = await supabase.from("news").insert([supabaseData]).select().single()

    if (error) {
      console.error("Error creating news:", error)
      throw error
    }

    return mapNewsFields(data)
  },

  // Update a news item
  update: async (id: string, updates: Partial<NewsItem>) => {
    console.log("Updating news item:", id, updates)

    // Remove undefined values
    const cleanUpdates = Object.fromEntries(
      Object.entries({
        title: updates.title,
        content: updates.content,
        excerpt: updates.excerpt,
        author: updates.author,
        image_url: updates.imageUrl,
        published_at: updates.publishedAt,
        source: updates.source,
        url: updates.sourceUrl,
        category: updates.category,
        is_published: updates.isPublished,
      }).filter(([_, v]) => v !== undefined),
    )

    console.log("Cleaned updates for Supabase:", cleanUpdates)

    const { data, error } = await supabase.from("news").update(cleanUpdates).eq("id", id).select().single()

    if (error) {
      console.error("Error updating news:", error)
      throw error
    }

    if (!data) {
      throw new Error("No data returned after update")
    }

    console.log("News item updated successfully:", data)
    return mapNewsFields(data)
  },

  // Delete a news item
  delete: async (id: string) => {
    console.log("Deleting news item:", id)
    const { error } = await supabase.from("news").delete().eq("id", id)

    if (error) {
      console.error("Error deleting news:", error)
      throw error
    }

    console.log("News item deleted successfully")
    return true
  },
}

// Add this at the end of the file, after the NewsAPI object

// Function to map the fields from Supabase to the ImportantDate type
const mapImportantDateFields = (data: any): ImportantDate => ({
  id: data.id,
  title: data.title,
  date: data.date,
  description: data.description,
  category: data.category,
  isActive: data.is_active,
})

// Important Dates API functions
export const ImportantDatesAPI = {
  // Get all published dates
  getAll: async () => {
    const { data, error } = await supabase
      .from("important_dates")
      .select("*")
      .eq("is_active", true)
      .order("date", { ascending: true })

    if (error) {
      console.error("Error fetching important dates:", error)
      throw error
    }

    return data.map(mapImportantDateFields)
  },

  // Admin methods
  getAllAdmin: async () => {
    // Use authenticated client for admin operations
    const client = await getAuthenticatedClient()
    const { data, error } = await client.from("important_dates").select("*").order("date", { ascending: true })

    if (error) {
      console.error("Error fetching all important dates:", error)
      throw error
    }

    return data.map(mapImportantDateFields)
  },

  getById: async (id: string) => {
    // Use authenticated client for admin operations
    const client = await getAuthenticatedClient()
    const { data, error } = await client.from("important_dates").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching important date by ID:", error)
      throw error
    }

    return mapImportantDateFields(data)
  },

  create: async (dateData: Partial<ImportantDate>) => {
    console.log("Creating new important date:", dateData)

    // Use authenticated client for admin operations
    const client = await getAuthenticatedClient()

    // Format the data for Supabase
    const supabaseData = {
      title: dateData.title,
      date: dateData.date,
      description: dateData.description,
      category: dateData.category,
      is_active: dateData.isActive !== false,
    }

    // Check if we have a valid session before proceeding
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session) {
      console.error("No authenticated session found")
      throw new Error("You must be logged in to perform this action")
    }

    console.log("Authenticated user:", session.user.email)

    const { data, error } = await client.from("important_dates").insert([supabaseData]).select().single()

    if (error) {
      console.error("Error creating important date:", error)
      throw error
    }

    console.log("Successfully created important date:", data)
    return mapImportantDateFields(data)
  },

  update: async (id: string, updates: Partial<ImportantDate>) => {
    console.log("Updating important date with ID:", id)

    // Use authenticated client for admin operations
    const client = await getAuthenticatedClient()

    // Format the data for Supabase, removing any undefined values
    const supabaseData = Object.fromEntries(
      Object.entries({
        title: updates.title,
        date: updates.date,
        description: updates.description,
        category: updates.category,
        is_active: updates.isActive,
      }).filter(([_, v]) => v !== undefined),
    )

    console.log("Update data:", supabaseData)

    // Check if we have a valid session before proceeding
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session) {
      console.error("No authenticated session found")
      throw new Error("You must be logged in to perform this action")
    }

    // Perform the update without trying to get the data back in the same call
    const { error: updateError } = await client.from("important_dates").update(supabaseData).eq("id", id)

    if (updateError) {
      console.error("Error updating important date:", updateError)
      throw updateError
    }

    // Fetch the updated record separately
    const { data: updatedData, error: fetchError } = await client
      .from("important_dates")
      .select("*")
      .eq("id", id)
      .single()

    if (fetchError) {
      console.error("Error fetching updated important date:", fetchError)
      throw fetchError
    }

    if (!updatedData) {
      console.error("No data found after update for ID:", id)
      throw new Error(`No data found after update for ID: ${id}`)
    }

    console.log("Successfully updated and fetched important date:", updatedData)
    return mapImportantDateFields(updatedData)
  },

  delete: async (id: string) => {
    console.log("Attempting to delete important date with ID:", id)

    // Use authenticated client for admin operations
    const client = await getAuthenticatedClient()

    // Check if we have a valid session before proceeding
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session) {
      console.error("No authenticated session found")
      throw new Error("You must be logged in to perform this action")
    }

    // First check if the record exists
    const { data: existingData, error: checkError } = await client.from("important_dates").select("id").eq("id", id)

    if (checkError) {
      console.error("Error checking if important date exists:", checkError)
      throw checkError
    }

    if (!existingData || existingData.length === 0) {
      console.error("Important date with ID not found:", id)
      throw new Error(`Important date with ID ${id} not found`)
    }

    console.log("Found record to delete, proceeding with deletion")

    // Perform the delete operation
    const { error: deleteError } = await client.from("important_dates").delete().eq("id", id)

    if (deleteError) {
      console.error("Error deleting important date:", deleteError)
      throw deleteError
    }

    console.log("Successfully deleted important date with ID:", id)
    return true
  },
}
