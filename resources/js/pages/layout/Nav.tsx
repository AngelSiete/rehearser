export default function Nav() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/faq" className="text-white hover:text-gray-300">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}