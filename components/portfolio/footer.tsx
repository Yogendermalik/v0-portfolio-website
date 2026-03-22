import Link from "next/link"

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        {"Loosely designed in "}
        <Link
          href="https://www.figma.com/"
          className="font-medium text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Figma
        </Link>
        {" and coded in "}
        <Link
          href="https://code.visualstudio.com/"
          className="font-medium text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visual Studio Code
        </Link>
        {" by yours truly. Built with "}
        <Link
          href="https://nextjs.org/"
          className="font-medium text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </Link>
        {" and "}
        <Link
          href="https://tailwindcss.com/"
          className="font-medium text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </Link>
        {", deployed with "}
        <Link
          href="https://vercel.com/"
          className="font-medium text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </Link>
        {". All text is set in the "}
        <Link
          href="https://fonts.google.com/specimen/Inter"
          className="font-medium text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Inter
        </Link>
        {" typeface."}
      </p>
    </footer>
  )
}
