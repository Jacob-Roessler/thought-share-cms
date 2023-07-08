import { useContext } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Anime', slug: 'anime' },
  { name: 'Movies', slug: 'movies' },
];

const Header = () => {
  return (
    <div className="drawer md:px-8 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href="/">
              <span className="cursor-pointer font-bold text-4xl text-white">Thought Share</span>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {/* Sidebar content here */}
              <li>
                <Link href={`/tools`}>
                  <span className=" text-white font-semibold">Tools</span>
                </Link>
              </li>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/categories/${category.slug}`}>
                    <span className=" text-white font-semibold">{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link href={`/tools`}>
              <span className=" text-white font-semibold">Tools</span>
            </Link>
          </li>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/categories/${category.slug}`}>
                <span className=" text-white font-semibold">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
