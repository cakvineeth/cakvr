// Renders the plain-text format staff write in Manager Pro:
// "## " / "### " headings, "- " bullet lists, blank line between paragraphs,
// and "![caption](https://…)" on its own line for an image.
// Text is rendered as React children, never as HTML, so posts can't inject markup.

const IMAGE_BLOCK = /^!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)$/

export default function BlogContent({ content }: { content: string }) {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="space-y-5 text-[17px] leading-8 text-gray-700">
      {blocks.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="pt-2 text-xl font-semibold text-ca-darkBlue">
              {block.slice(4)}
            </h3>
          )
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="pt-4 text-2xl font-bold text-ca-darkBlue">
              {block.slice(3)}
            </h2>
          )
        }
        const image = IMAGE_BLOCK.exec(block)
        if (image) {
          return (
            <figure key={i} className="my-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image[2]} alt={image[1]} loading="lazy" className="w-full rounded-xl" />
              {image[1] && <figcaption className="mt-2 text-center text-sm text-gray-500">{image[1]}</figcaption>}
            </figure>
          )
        }
        const lines = block.split("\n")
        if (lines.every((line) => /^\s*[-*] /.test(line))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-ca-purple">
              {lines.map((line, j) => (
                <li key={j}>{line.replace(/^\s*[-*] /, "")}</li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="whitespace-pre-line">
            {block}
          </p>
        )
      })}
    </div>
  )
}
