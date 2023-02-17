import { Header } from './Header'
import { Footer } from './Footer'
import { Router } from '../router/Router'

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}
