export default function FoodShowcase() {
  const items = [
    {
      id: 1,
      title: 'RAMEN',
      description: 'Light crisp flavors with a balance of depth and richness define the AFURI ramen experience. Our broth is packed with naturally derived umami and layered aromatic flavors from fresh high-quality ingredients.',
      subtitle: 'らー め ん',
    },
    {
      id: 2,
      title: 'SUSHI',
      description: 'A full sushi menu with sushi rolls and hand rolls highlighting fresh high-quality, sustainably sourced fish prepared with precision and care. We bring a Japanese dining experience directly to your city.',
      subtitle: '寿司',
    },
    {
      id: 3,
      title: '& MORE',
      description: 'A wide range of dishes including small plates, rice bowls, and dessert highlighting elements of traditional and modern Japanese cuisine with fresh high-quality ingredients, and elevated technique.',
      subtitle: 'など',
    },
  ]

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <h2 className="section-title">OUR SPECIALTIES</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div key={item.id} className="text-center">
              <p className="text-sm text-secondary mb-3">{item.subtitle}</p>
              <h3 className="text-3xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
              <button className="btn-primary text-sm">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
