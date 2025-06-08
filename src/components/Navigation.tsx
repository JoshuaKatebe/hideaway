import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <p className="text-white hover:text-gray-300">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/properties">
            <p className="text-white hover:text-gray-300">Properties</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="text-white hover:text-gray-300">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;