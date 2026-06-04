"use client"

import { useEffect, useState } from "react"
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import Table from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import Underline from "@tiptap/extension-underline"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { common, createLowlight } from "lowlight"

const lowlight = createLowlight(common)
import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  LinkIcon,
  Unlink,
  ImageIcon,
  TableIcon,
  FileText,
  Check,
  Palette,
  Highlighter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"
import { marked } from "marked"
import DOMPurify from "dompurify"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [linkUrl, setLinkUrl] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [imageAlt, setImageAlt] = useState("")
  const [markdownText, setMarkdownText] = useState("")
  const [isDetectingMarkdown, setIsDetectingMarkdown] = useState(false)
  const { toast } = useToast()

  // Configure the editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: "Write your content here...",
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline hover:text-blue-800",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[300px] max-w-none",
      },
    },
  })

  // Inject styles for the editor
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      .ProseMirror {
        padding: 1rem;
        border-radius: 0.375rem;
        border: 1px solid #e2e8f0;
        min-height: 300px;
        background-color: white;
        color: #333;
      }
      .ProseMirror:focus {
        outline: none;
        border-color: #6366f1;
        box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
      }
      .ProseMirror p {
        margin-bottom: 0.75rem;
        line-height: 1.6;
      }
      .ProseMirror h1 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        color: #111;
      }
      .ProseMirror h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        color: #111;
      }
      .ProseMirror h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-top: 1.25rem;
        margin-bottom: 0.75rem;
        color: #111;
      }
      .ProseMirror ul, .ProseMirror ol {
        padding-left: 1.5rem;
        margin-bottom: 1rem;
      }
      .ProseMirror ul li, .ProseMirror ol li {
        margin-bottom: 0.25rem;
      }
      .ProseMirror blockquote {
        border-left: 4px solid #e2e8f0;
        padding-left: 1rem;
        font-style: italic;
        margin: 1rem 0;
        color: #4a5568;
        background-color: #f8fafc;
        padding: 0.5rem 1rem;
        border-radius: 0 0.25rem 0.25rem 0;
      }
      .ProseMirror pre {
        background-color: #1e293b;
        color: #e2e8f0;
        padding: 0.75rem 1rem;
        border-radius: 0.375rem;
        overflow-x: auto;
        margin: 1rem 0;
      }
      .ProseMirror code {
        font-family: monospace;
        background-color: #f1f5f9;
        padding: 0.125rem 0.25rem;
        border-radius: 0.25rem;
        font-size: 0.875em;
        color: #334155;
      }
      .ProseMirror pre code {
        background-color: transparent;
        padding: 0;
        color: inherit;
      }
      .ProseMirror img {
        max-width: 100%;
        height: auto;
        border-radius: 0.375rem;
        margin: 1rem 0;
      }
      .ProseMirror a {
        color: #2563eb;
        text-decoration: underline;
      }
      .ProseMirror a:hover {
        color: #1d4ed8;
      }
      .ProseMirror table {
        border-collapse: collapse;
        width: 100%;
        margin: 1rem 0;
        overflow: hidden;
      }
      .ProseMirror table td, .ProseMirror table th {
        border: 1px solid #e2e8f0;
        padding: 0.5rem;
        position: relative;
      }
      .ProseMirror table th {
        background-color: #f8fafc;
        font-weight: 600;
      }
      .ProseMirror table tr:nth-child(even) {
        background-color: #f8fafc;
      }
      .ProseMirror hr {
        border: none;
        border-top: 2px solid #e2e8f0;
        margin: 1.5rem 0;
      }
      .ProseMirror mark {
        background-color: #fef9c3;
        padding: 0.125rem 0;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Set initial content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value)
    }
  }, [editor, value])

  // Handle link insertion
  const setLink = () => {
    if (!linkUrl) return

    // Check if the link has http:// or https:// prefix
    const url = linkUrl.startsWith("http://") || linkUrl.startsWith("https://") ? linkUrl : `https://${linkUrl}`

    if (editor) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
    }

    setLinkUrl("")
  }

  // Handle image insertion
  const addImage = () => {
    if (!imageUrl) return

    if (editor) {
      editor.chain().focus().setImage({ src: imageUrl, alt: imageAlt }).run()
    }

    setImageUrl("")
    setImageAlt("")
  }

  // Handle markdown conversion
  const convertMarkdown = () => {
    if (!markdownText) return

    try {
      // Convert markdown to HTML
      const html = DOMPurify.sanitize(marked.parse(markdownText))

      // Insert the HTML at the current cursor position
      if (editor) {
        editor.chain().focus().insertContent(html).run()
      }

      setMarkdownText("")
      toast({
        title: "Markdown converted",
        description: "Your markdown has been converted to rich text.",
      })
    } catch (error) {
      console.error("Error converting markdown:", error)
      toast({
        title: "Conversion error",
        description: "There was an error converting your markdown.",
        variant: "destructive",
      })
    }
  }

  // Handle paste to detect markdown
  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const text = event.clipboardData?.getData("text/plain")

      if (text && editor && !isDetectingMarkdown) {
        // Check if the text looks like markdown
        const looksLikeMarkdown =
          /(#{1,6}\s.+)|(\*\*.+\*\*)|(\*.+\*)|(\[.+\]$$.+$$)|(\n\s*[*\-+]\s.+)|(\n\s*\d+\.\s.+)|(\n\s*>.+)/.test(text)

        if (looksLikeMarkdown) {
          setIsDetectingMarkdown(true)

          // Prevent default paste
          event.preventDefault()

          // Ask user if they want to convert markdown
          const confirmConvert = window.confirm("This looks like markdown. Would you like to convert it to rich text?")

          if (confirmConvert) {
            try {
              // Convert markdown to HTML
              const html = DOMPurify.sanitize(marked.parse(text))

              // Insert the HTML at the current cursor position
              editor.chain().focus().insertContent(html).run()

              toast({
                title: "Markdown converted",
                description: "Your markdown has been converted to rich text.",
              })
            } catch (error) {
              console.error("Error converting markdown:", error)

              // If conversion fails, just paste the plain text
              editor.chain().focus().insertContent(text).run()

              toast({
                title: "Conversion error",
                description: "There was an error converting your markdown. The text was inserted as plain text.",
                variant: "destructive",
              })
            }
          } else {
            // User declined, just paste the plain text
            editor.chain().focus().insertContent(text).run()
          }

          setIsDetectingMarkdown(false)
        }
      }
    }

    document.addEventListener("paste", handlePaste)

    return () => {
      document.removeEventListener("paste", handlePaste)
    }
  }, [editor, toast, isDetectingMarkdown])

  if (!editor) {
    return <div>Loading editor...</div>
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-200" : ""}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-gray-200" : ""}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "bg-gray-200" : ""}
          title="Underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "bg-gray-200" : ""}
          title="Strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""}
          title="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "bg-gray-200" : ""}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-gray-200" : ""}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-gray-200" : ""}
          title="Ordered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "bg-gray-200" : ""}
          title="Code Block"
        >
          <Code className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""}
          title="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={editor.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""}
          title="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""}
          title="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={editor.isActive({ textAlign: "justify" }) ? "bg-gray-200" : ""}
          title="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </Button>

        {/* Link Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={editor.isActive("link") ? "bg-gray-200" : ""}
              title="Insert Link"
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h3 className="font-medium">Insert Link</h3>
              <Input
                type="url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => editor.chain().focus().unsetLink().run()}
                  disabled={!editor.isActive("link")}
                >
                  <Unlink className="h-4 w-4 mr-2" />
                  Remove Link
                </Button>
                <Button size="sm" onClick={setLink}>
                  <Check className="h-4 w-4 mr-2" />
                  Insert
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Image Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" title="Insert Image">
              <ImageIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h3 className="font-medium">Insert Image</h3>
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mb-2"
              />
              <Input
                type="text"
                placeholder="Alt text (for accessibility)"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
              />
              <div className="flex justify-end mt-2">
                <Button size="sm" onClick={addImage}>
                  <Check className="h-4 w-4 mr-2" />
                  Insert
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Table Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          title="Insert Table"
        >
          <TableIcon className="h-4 w-4" />
        </Button>

        {/* Markdown Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" title="Paste Markdown">
              <FileText className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h3 className="font-medium">Paste Markdown</h3>
              <Textarea
                placeholder="Paste your markdown here..."
                value={markdownText}
                onChange={(e) => setMarkdownText(e.target.value)}
                rows={6}
              />
              <div className="flex justify-end">
                <Button size="sm" onClick={convertMarkdown}>
                  <Check className="h-4 w-4 mr-2" />
                  Convert & Insert
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Text Color Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" title="Text Color">
              <Palette className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <h3 className="font-medium">Text Color</h3>
              <div className="grid grid-cols-5 gap-2">
                {[
                  "#000000",
                  "#FF0000",
                  "#00FF00",
                  "#0000FF",
                  "#FFFF00",
                  "#FF00FF",
                  "#00FFFF",
                  "#808080",
                  "#800000",
                  "#008000",
                ].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                    onClick={() => editor.chain().focus().setColor(color).run()}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Highlight Color Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" title="Highlight">
              <Highlighter className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <h3 className="font-medium">Highlight Color</h3>
              <div className="grid grid-cols-5 gap-2">
                {[
                  "#FFFF00",
                  "#FFCC00",
                  "#FF9900",
                  "#FFCCCC",
                  "#CCFFCC",
                  "#CCCCFF",
                  "#FFCCFF",
                  "#FFFFCC",
                  "#CCFFFF",
                  "#FFFFFF",
                ].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                    onClick={() => editor.chain().focus().toggleHighlight({ color }).run()}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Bubble Menu */}
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden flex"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "bg-gray-200" : ""}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "bg-gray-200" : ""}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "bg-gray-200" : ""}
          >
            <UnderlineIcon className="h-4 w-4" />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <LinkIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-medium">Insert Link</h3>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                />
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => editor.chain().focus().unsetLink().run()}
                    disabled={!editor.isActive("link")}
                  >
                    <Unlink className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                  <Button size="sm" onClick={setLink}>
                    <Check className="h-4 w-4 mr-2" />
                    Insert
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </BubbleMenu>
      )}

      {/* Editor Content */}
      <EditorContent editor={editor} className="prose max-w-none" />
    </div>
  )
}
