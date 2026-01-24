import { useTranslation } from 'react-i18next';

export default function ContactInfo() {
  const { t } = useTranslation();
  
  const contactMethods = [
    {
      icon: 'ri-map-pin-line',
      title: t('contact.info.visit'),
      details: ['Hünensteig 12', '12169 Berlin'],
      link: '#map'
    },
    {
      icon: 'ri-phone-line',
      title: t('contact.info.call'),
      details: ['030 30135316'],
      link: 'tel:+493030135316'
    },
    {
      icon: 'ri-mail-line',
      title: t('contact.info.email'),
      details: ['mail@agenncy.de'],
      link: 'mailto:mail@agenncy.de'
    },
    {
      icon: 'ri-time-line',
      title: t('contact.info.hours'),
      details: [t('contact.info.hoursTime'), t('contact.info.hoursClosed')],
      link: null
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {t('contact.info.title')}
        </h2>

        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#6B7F39]/10 flex items-center justify-center flex-shrink-0">
                <i className={`${method.icon} text-xl text-[#6B7F39]`}></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {method.link ? (
                      <a href={method.link} className="hover:text-[#6B7F39] transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-[#6B7F39]/5 to-cyan-50/30 rounded-3xl p-8 lg:p-10 shadow-sm border border-[#6B7F39]/10">
        <div className="w-14 h-14 rounded-full bg-[#6B7F39]/10 flex items-center justify-center mb-6">
          <i className="ri-star-line text-2xl text-[#6B7F39]"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t('contact.info.why.title')}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {t('contact.info.why.description')}
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-[#6B7F39] text-xl mt-0.5"></i>
            <p className="text-gray-700">{t('contact.info.why.point1')}</p>
          </div>
          <div className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-[#6B7F39] text-xl mt-0.5"></i>
            <p className="text-gray-700">{t('contact.info.why.point2')}</p>
          </div>
          <div className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-[#6B7F39] text-xl mt-0.5"></i>
            <p className="text-gray-700">{t('contact.info.why.point3')}</p>
          </div>
        </div>
      </div>

      {/* Quick Response */}
      <div className="bg-gradient-to-br from-[#1A2B4A] to-[#2A3B5A] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
            <i className="ri-customer-service-2-line text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">
            {t('contact.info.assistance')}
          </h3>
          <p className="text-white/90 mb-6">
            {t('contact.info.assistanceDesc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+493030135316" className="flex items-center gap-2 text-white font-semibold hover:text-cyan-400 transition-colors cursor-pointer">
              <i className="ri-phone-line"></i>
              <span>030 30135316</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
