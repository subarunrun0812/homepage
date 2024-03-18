import React from 'react';

export const metadata = {
  title: 'Sasaki Subaru',
  description: 'Sasaki Subaruのプロフィールページです。',
}

const wholeLayout = {
  backgroundColor: 'lightblue',
  textAlign: 'center',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={wholeLayout}>{children}</body>
    </html>
  )
}
