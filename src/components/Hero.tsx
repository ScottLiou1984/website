export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
          BRINGING SOME OF JAPAN'S <br /> BEST RAMEN TO YOU
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Bringing authentic Japanese flavors to your city along with traditional and modern Japanese food made with fresh high-quality ingredients and elevated technique.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">
            VISIT AFURI
          </button>
          <button className="btn-secondary">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  )
}
