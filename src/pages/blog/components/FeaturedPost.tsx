export default function FeaturedPost() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B7F39]/10 rounded-full mb-8">
          <i className="ri-star-line text-[#6B7F39]"></i>
          <span className="text-sm font-medium text-[#6B7F39]">Featured Article</span>
        </div>

        {/* Featured Post Card */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-50 rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20digital%20marketing%20strategy%20concept%20with%20laptop%20showing%20analytics%20dashboard%20colorful%20graphs%20and%20data%20visualization%20in%20bright%20contemporary%20workspace%20with%20clean%20minimalist%20aesthetic%20and%20natural%20lighting%20professional%20business%20setting&width=800&height=600&seq=blog-featured-001&orientation=landscape"
              alt="Featured Post"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-[#6B7F39] text-white text-xs font-medium rounded-full">
                SEO Strategy
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Complete Guide to SEO in 2025: Strategies That Actually Work
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Discover the latest SEO strategies and techniques that are driving real results in 2025. From AI-powered optimization to voice search, learn what's working now.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20female%20marketing%20expert%20headshot%20portrait%20in%20modern%20office%20with%20natural%20lighting%20clean%20background%20confident%20friendly%20expression%20business%20casual%20attire&width=100&height=100&seq=author-001&orientation=squarish"
                alt="Author"
                className="w-12 h-12 rounded-full object-cover object-top"
              />
              <div>
                <div className="font-medium text-gray-900">Sarah Mitchell</div>
                <div className="text-sm text-gray-500">Head of SEO • Jan 15, 2025</div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#6B7F39] font-medium hover:gap-3 transition-all group"
            >
              Read Full Article
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
