export default function NewsletterCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#6B7F39] to-[#5a6b2f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
          <i className="ri-mail-line text-3xl text-white"></i>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Never Miss an Update
        </h2>

        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest digital marketing insights, tips, and strategies delivered straight to your inbox every week.
        </p>

        {/* Newsletter Form */}
        <form className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-white focus:bg-white outline-none text-gray-800 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-[#6B7F39] rounded-full font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            Join 5,000+ marketers getting weekly insights. Unsubscribe anytime.
          </p>
        </form>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">5,000+</div>
            <div className="text-sm text-white/80">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Weekly</div>
            <div className="text-sm text-white/80">Updates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-white/80">Free</div>
          </div>
        </div>
      </div>
    </section>
  );
}
