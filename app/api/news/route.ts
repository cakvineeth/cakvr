import { NextResponse } from "next/server"
import { supabase, mapNewsFields } from "@/lib/supabase"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const id = searchParams.get("id")
  const categoriesOnly = searchParams.get("categories") === "true"

  try {
    if (categoriesOnly) {
      const { data, error } = await supabase.from("news").select("category").eq("is_published", true)

      if (error) {
        console.error("Error fetching categories:", error)
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      return NextResponse.json([...new Set(data.map((item) => item.category))])
    }

    if (id) {
      const { data, error } = await supabase.from("news").select("*").eq("id", id).single()

      if (error) {
        console.error("Error fetching news by ID:", error)
        return NextResponse.json({ error: error.message }, { status: 404 })
      }

      return NextResponse.json(mapNewsFields(data))
    }

    let query = supabase.from("news").select("*").eq("is_published", true).order("published_at", { ascending: false })

    if (category) {
      query = query.eq("category", category)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching news:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data.map(mapNewsFields))
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}
