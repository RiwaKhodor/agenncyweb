export default function AchievementsSection() {
  const achievements = [
    {
      icon: 'ri-trophy-line',
      title: 'Best Digital Agency 2023',
      organization: 'Berlin Marketing Awards',
      year: '2023'
    },
    {
      icon: 'ri-medal-line',
      title: 'Top SEO Agency Germany',
      organization: 'Digital Excellence Awards',
      year: '2023'
    },
    {
      icon: 'ri-award-line',
      title: 'Innovation in Marketing',
      organization: 'European Marketing Summit',
      year: '2022'
    },
    {
      icon: 'ri-star-line',
      title: 'Client Satisfaction Award',
      organization: 'Agency Review Platform',
      year: '2022'
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Best Social Media Campaign',
      organization: 'Social Media Excellence',
      year: '2021'
    },
    {
      icon: 'ri-vip-crown-line',
      title: 'Rising Star Agency',
      organization: 'German Marketing Association',
      year: '2020'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#6B7F39] to-[#5a6b2f] border-t-4 border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <i className="ri-award-line text-white"></i>
            <span className="text-sm font-medium text-white">Recognition</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Awards & Achievements
          </h2>

          <p className="text-lg text-white/90">
            Our work has been recognized by leading industry organizations and publications.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <i className={`${achievement.icon} text-2xl text-white`}></i>
              </div>

              <div className="text-sm text-white/70 mb-2">{achievement.year}</div>

              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>

              <p className="text-white/80 text-sm">
                {achievement.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
