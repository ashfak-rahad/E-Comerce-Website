export const metadata = {
  title: 'StyleHub - Men & Women Fashion',
  description: 'Discover the latest trends in men and women clothing',
};

export default function RootLayout(props: { children: any }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${metadata.title}</title>
        <meta name="description" content="${metadata.description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>${String(props.children)}</body>
    </html>
  `;
} 