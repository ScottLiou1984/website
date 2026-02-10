export default function GiftCards() {
  return (
    <section id="gift-cards" className="py-16 md:py-24 bg-gradient-to-r from-primary to-gray-800 text-white">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">GIFT CARDS</h2>
          <p className="text-xl mb-8 text-gray-200">
            Share the gift of authentic Japanese cuisine with your loved ones. Our gift cards are perfect for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
              BUY GIFT CARD
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
