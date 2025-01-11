export default function Footer() {
    return (
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-600">
              Bringing ideas to life with sleek, functional websites that deliver a great user experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>dsandesh263@gmail.com</li>
                <li>+977 9811333383</li>
                <li>Biratnagar, Nepal</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} SANDESH DHAKAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  