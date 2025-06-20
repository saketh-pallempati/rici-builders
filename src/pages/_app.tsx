import type { AppProps } from 'next/app'
import { Roboto } from "next/font/google";
import '@/styles/footer.css'
import '@/styles/globals.css'
import '@/styles/responsive.css'
import '@/styles/modern-portfolio.css'
import '@/styles/quote-modal.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
