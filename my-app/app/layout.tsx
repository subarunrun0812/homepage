export const metadata = {
  title: 'Sasaki Subaru',
  description: 'Sasaki Subaruのプロフィールページです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
