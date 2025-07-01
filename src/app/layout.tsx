import '../../globals.css'

export const metadata = {
  title: 'Fady Kuzman',
  description: 'Portfolio of Fady Kuzman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
