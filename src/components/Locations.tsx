export default function Locations() {
  const locations = [
    {
      id: 1,
      name: 'Downtown',
      address: '123 Main Street, City, ST 12345',
      phone: '(555) 123-4567',
      hours: 'Mon-Thu: 11AM-10PM, Fri-Sat: 11AM-11PM, Sun: 11AM-9PM',
    },
    {
      id: 2,
      name: 'Midtown',
      address: '456 Oak Avenue, City, ST 12345',
      phone: '(555) 234-5678',
      hours: 'Mon-Thu: 11AM-10PM, Fri-Sat: 11AM-11PM, Sun: 11AM-9PM',
    },
    {
      id: 3,
      name: 'Uptown',
      address: '789 Elm Street, City, ST 12345',
      phone: '(555) 345-6789',
      hours: 'Mon-Thu: 11AM-10PM, Fri-Sat: 11AM-11PM, Sun: 11AM-9PM',
    },
  ]

  return (
    <section id="locations" className="py-16 md:py-24 bg-gray-50">
      <div className="container-max">
        <h2 className="section-title">LOCATIONS</h2>
        <p className="section-subtitle">Visit us at one of our restaurants</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {location.name}
              </h3>
              <p className="text-gray-600 mb-3">{location.address}</p>
              <p className="text-gray-600 mb-3 font-semibold">{location.phone}</p>
              <p className="text-sm text-gray-500 mb-6">{location.hours}</p>
              <button className="btn-primary w-full text-sm">
                MAKE RESERVATION
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
