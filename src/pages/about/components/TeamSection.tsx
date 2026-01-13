export default function TeamSection() {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=professional%20confident%20female%20CEO%20founder%20in%20modern%20office%20wearing%20business%20casual%20attire%20smiling%20warmly%20with%20natural%20lighting%20clean%20background%20portrait%20photography&width=400&height=500&seq=team-ceo-001&orientation=portrait',
      bio: 'Visionary leader with 15+ years in digital marketing'
    },
    {
      name: 'Marcus Weber',
      role: 'Head of Strategy',
      image: 'https://readdy.ai/api/search-image?query=professional%20male%20marketing%20strategist%20in%20contemporary%20office%20space%20wearing%20smart%20casual%20clothing%20confident%20expression%20natural%20lighting%20clean%20minimalist%20background%20portrait%20photography&width=400&height=500&seq=team-strategy-002&orientation=portrait',
      bio: 'Strategic thinker specializing in growth marketing'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Creative Director',
      image: 'https://readdy.ai/api/search-image?query=creative%20female%20art%20director%20in%20modern%20studio%20space%20wearing%20stylish%20casual%20attire%20friendly%20smile%20with%20natural%20lighting%20clean%20aesthetic%20background%20portrait%20photography&width=400&height=500&seq=team-creative-003&orientation=portrait',
      bio: 'Award-winning designer with a passion for branding'
    },
    {
      name: 'Thomas Schmidt',
      role: 'Head of SEO',
      image: 'https://readdy.ai/api/search-image?query=professional%20male%20SEO%20specialist%20in%20bright%20office%20environment%20wearing%20casual%20business%20attire%20approachable%20expression%20natural%20lighting%20minimalist%20background%20portrait%20photography&width=400&height=500&seq=team-seo-004&orientation=portrait',
      bio: 'Technical SEO expert driving organic growth'
    },
    {
      name: 'Lisa Chen',
      role: 'Social Media Lead',
      image: 'https://readdy.ai/api/search-image?query=energetic%20female%20social%20media%20manager%20in%20creative%20workspace%20wearing%20modern%20casual%20clothing%20bright%20smile%20with%20natural%20lighting%20clean%20contemporary%20background%20portrait%20photography&width=400&height=500&seq=team-social-005&orientation=portrait',
      bio: 'Social media strategist with viral campaign expertise'
    },
    {
      name: 'David Kowalski',
      role: 'Head of Analytics',
      image: 'https://readdy.ai/api/search-image?query=professional%20male%20data%20analyst%20in%20modern%20office%20setting%20wearing%20smart%20casual%20attire%20confident%20friendly%20expression%20natural%20lighting%20clean%20background%20portrait%20photography&width=400&height=500&seq=team-analytics-006&orientation=portrait',
      bio: 'Data scientist turning insights into action'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B7F39]/10 rounded-full mb-6">
            <i className="ri-user-star-line text-[#6B7F39]"></i>
            <span className="text-sm font-medium text-[#6B7F39]">Our Team</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet The Experts Behind Your Success
          </h2>

          <p className="text-lg text-gray-600">
            A diverse team of strategists, creatives, and analysts dedicated to your growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>

              <div className="text-[#6B7F39] font-medium mb-3">
                {member.role}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want to join our talented team?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B7F39] text-white rounded-full font-medium hover:bg-[#5a6b2f] transition-colors whitespace-nowrap"
          >
            View Open Positions
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
