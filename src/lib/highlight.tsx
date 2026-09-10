const METRIC_RE = /(\d[\d,]*\.?\d*%|\d[\d,]*\+|sub-\d+[-\s]?(?:ms|seconds?))/gi

export function Highlight({ text }: { text: string }) {
  const parts = text.split(METRIC_RE)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span className="metric" key={i}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}
