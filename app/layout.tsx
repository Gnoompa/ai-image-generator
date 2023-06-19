import Header from '@/components/Header';
import PromptInput from '@/components/PromptInput';
import '../styles/globals.css';
import ClientProvider from "@/components/ClientProvider"



export const metadata = {
  title: 'AI Art Factory',
  description: 'An AI Art Generator powered by DALL.E 2, Chat GPT & Microsoft Azure! ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
        <Header />
        <PromptInput />
        {children}
        </ClientProvider>
      </body>
    </html>
  )
}
