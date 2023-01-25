import { LinkFooter } from '../assets/Link'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export const Footer = () => {
  return (
    <footer className="bg-bgPrimary">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          <div>
            <Logo />
          </div>
          {LinkFooter.map((link) => (
            <div key={link.title}>
              <h3 className="text-red-600 font-bold mb-5">{link.title}</h3>
              <ul>
                {link.links.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex hover:text-red-600"
                  >
                    <span className="mb-2"> {item.name}</span>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
