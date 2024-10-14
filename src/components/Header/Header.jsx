import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

const MenuItems = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Services",
    url: "#",
  },
  {
    title: "Products",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "#",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="flex justify-between items-center h-16 text-black bg-white shadow-sm font-mono fixed w-full z-10 border-b border-gray-600">
        <a href="#" className="pl-8">
          LOGO
        </a>
        <div className="pr-8 md:hidden">
          <button onClick={toggle} className="p-4">
            {isOpen ? <X/> : <MenuIcon size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden fixed top-16 right-0 w-1/2 h-screen bg-white text-black border-l border-gray-600 z-50">
            {MenuItems.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-4">
                  <a onClick={()=>setIsOpen(false)} className="p-2 border-b border-gray-600 hover:bg-yellow-400 hover:text-black" href={item.url} key={index}>
                    {item.title}
                  </a>
                </div>
              );
            })}
          </div>
        )}
        <div className="pr-8 md:block hidden">
          {MenuItems.map((item, index) => {
            return (
              <a className="p-4 hover:text-yellow-500" href={item.url} key={index}>
                {item.title}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Header;
