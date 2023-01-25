import { Header } from './Header'
import { Footer } from './Footer'
import { Router } from '../router/Router'

export const Layout = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}
