import { bottombarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Link, useLocation } from "react-router-dom"

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link: INavLink) => {
        const isActive = pathname === link.route;
        return (
          <Link to={link.route} className={`${isActive && 'bg-primary-500 rounded-[10px]'} flex-col gap-2 p-2 transition flex-center`} key={link.label}>
            <img width={16} height={16} src={link.imgURL} alt={link.label} className={`${isActive && 'invert-white'} `} />
            <p className="tiny-medium text-light-2">{link.label}</p>
          </Link>
        )
      })}
    </section>
  )
}

export default Bottombar