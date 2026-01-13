export default function BlogGrid() {
  const posts = [
    {
      image: 'https://readdy.ai/api/search-image?query=social%20media%20marketing%20concept%20with%20smartphone%20showing%20Instagram%20feed%20colorful%20engaging%20content%20posts%20in%20bright%20modern%20workspace%20with%20natural%20lighting%20clean%20aesthetic%20professional%20setting&width=600&height=400&seq=blog-post-001&orientation=landscape',
      category: 'Social Media',
      title: '10 Instagram Strategies to Boost Engagement in 2025',
      excerpt: 'Learn the latest tactics to increase your Instagram engagement and grow your following organically.',
      author: 'Lisa Chen',
      date: 'Jan 12, 2025',
      readTime: '6 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Google%20Ads%20dashboard%20on%20computer%20screen%20showing%20campaign%20performance%20metrics%20and%20analytics%20colorful%20graphs%20in%20modern%20office%20workspace%20with%20natural%20lighting%20professional%20business%20environment&width=600&height=400&seq=blog-post-002&orientation=landscape',
      category: 'PPC',
      title: 'How to Reduce Google Ads Costs While Increasing Conversions',
      excerpt: 'Proven strategies to optimize your Google Ads campaigns for better ROI and lower cost per acquisition.',
      author: 'Marcus Weber',
      date: 'Jan 10, 2025',
      readTime: '7 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=content%20marketing%20concept%20with%20laptop%20showing%20blog%20article%20and%20coffee%20cup%20in%20bright%20contemporary%20workspace%20with%20natural%20lighting%20clean%20minimalist%20design%20professional%20writing%20environment&width=600&height=400&seq=blog-post-003&orientation=landscape',
      category: 'Content Marketing',
      title: 'Content Marketing Trends You Can\'t Ignore This Year',
      excerpt: 'Stay ahead of the curve with these emerging content marketing trends that are reshaping the industry.',
      author: 'Elena Rodriguez',
      date: 'Jan 8, 2025',
      readTime: '5 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=email%20marketing%20campaign%20design%20on%20laptop%20screen%20showing%20beautiful%20newsletter%20template%20with%20engaging%20graphics%20in%20modern%20office%20workspace%20with%20natural%20lighting%20professional%20setting&width=600&height=400&seq=blog-post-004&orientation=landscape',
      category: 'Email Marketing',
      title: 'Email Marketing Automation: A Beginner\'s Guide',
      excerpt: 'Set up powerful email automation workflows that nurture leads and drive sales on autopilot.',
      author: 'Thomas Schmidt',
      date: 'Jan 5, 2025',
      readTime: '8 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=analytics%20dashboard%20on%20multiple%20monitors%20showing%20data%20visualization%20colorful%20charts%20and%20performance%20metrics%20in%20modern%20office%20workspace%20with%20natural%20lighting%20professional%20business%20environment&width=600&height=400&seq=blog-post-005&orientation=landscape',
      category: 'Analytics',
      title: 'GA4 Migration: Everything You Need to Know',
      excerpt: 'Complete guide to migrating from Universal Analytics to GA4 and making the most of new features.',
      author: 'David Kowalski',
      date: 'Jan 3, 2025',
      readTime: '10 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=local%20SEO%20concept%20with%20smartphone%20showing%20Google%20Maps%20and%20local%20business%20listings%20in%20bright%20modern%20workspace%20with%20natural%20lighting%20clean%20aesthetic%20professional%20setting&width=600&height=400&seq=blog-post-006&orientation=landscape',
      category: 'SEO',
      title: 'Local SEO: How to Dominate Your Local Market',
      excerpt: 'Master local SEO strategies to attract more customers in your area and outrank competitors.',
      author: 'Sarah Mitchell',
      date: 'Dec 30, 2024',
      readTime: '7 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=TikTok%20marketing%20on%20smartphone%20screen%20showing%20viral%20video%20content%20and%20engagement%20metrics%20in%20bright%20contemporary%20workspace%20with%20natural%20lighting%20modern%20aesthetic%20professional%20setting&width=600&height=400&seq=blog-post-007&orientation=landscape',
      category: 'Social Media',
      title: 'TikTok Marketing for Businesses: Getting Started',
      excerpt: 'Tap into TikTok\'s massive audience with these proven strategies for business success.',
      author: 'Lisa Chen',
      date: 'Dec 28, 2024',
      readTime: '6 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=conversion%20rate%20optimization%20concept%20with%20laptop%20showing%20A%2FB%20testing%20results%20and%20analytics%20dashboard%20in%20modern%20office%20workspace%20with%20natural%20lighting%20professional%20business%20environment&width=600&height=400&seq=blog-post-008&orientation=landscape',
      category: 'CRO',
      title: 'Conversion Rate Optimization: 15 Quick Wins',
      excerpt: 'Implement these simple CRO tactics today and watch your conversion rates soar.',
      author: 'Marcus Weber',
      date: 'Dec 25, 2024',
      readTime: '5 min read'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=brand%20strategy%20concept%20with%20creative%20mood%20board%20showing%20logo%20designs%20color%20palettes%20and%20typography%20in%20bright%20modern%20studio%20workspace%20with%20natural%20lighting%20professional%20design%20environment&width=600&height=400&seq=blog-post-009&orientation=landscape',
      category: 'Branding',
      title: 'Building a Brand That Stands Out in 2025',
      excerpt: 'Create a memorable brand identity that resonates with your audience and drives loyalty.',
      author: 'Elena Rodriguez',
      date: 'Dec 22, 2024',
      readTime: '9 min read'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-gray-800 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6B7F39] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{post.author}</div>
                      <div className="text-gray-500 text-xs">{post.date}</div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
