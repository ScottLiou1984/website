export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">MUGII</h4>
            <p className="text-gray-300">
              Modern Japanese cuisine crafted with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-secondary">Home</a></li>
              <li><a href="/locations" className="hover:text-secondary">Locations</a></li>
              <li><a href="/menu" className="hover:text-secondary">Menu</a></li>
              <li><a href="/drinks" className="hover:text-secondary">Drinks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">ADDITIONAL</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/gift-cards" className="hover:text-secondary">Gift Cards</a></li>
              <li><a href="/booking" className="hover:text-secondary">Booking</a></li>
              <li><a href="/" className="hover:text-secondary">Franchise</a></li>
              <li><a href="/" className="hover:text-secondary">Loyalty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">CONTACT</h4>
            <p className="text-gray-300 mb-2">Phone: (555) 123-4567</p>
            <p className="text-gray-300">Email: mugii2026@hotmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 MUGII. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary">Privacy Policy</a>
              <a href="#" className="hover:text-secondary">Terms of Service</a>
              <a href="#" className="hover:text-secondary">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
