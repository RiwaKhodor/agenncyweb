import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import ImpressumHero from './components/ImpressumHero';

export default function ImpressumPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ImpressumHero />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-white space-y-12">
            {/* Section 1 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('impressum.section1.title')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.provider')}</p>
                  <p>{t('impressum.section1.name')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.address')}</p>
                  <p>{t('impressum.section1.street')}<br />{t('impressum.section1.city')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.contact')}</p>
                  <p>
                    {t('impressum.section1.phone')}: {t('impressum.section1.phoneNumber')}<br />
                    {t('impressum.section1.email')}: <a href={`mailto:${t('impressum.section1.emailAddress')}`} className="text-[#6B7F39] hover:underline">{t('impressum.section1.emailAddress')}</a><br />
                    {t('impressum.section1.website')}: <a href={`https://${t('impressum.section1.websiteUrl')}`} target="_blank" rel="noopener noreferrer" className="text-[#6B7F39] hover:underline">{t('impressum.section1.websiteUrl')}</a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.legalForm')}</p>
                  <p>{t('impressum.section1.legalFormValue')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.representative')}</p>
                  <p>{t('impressum.section1.representativeName')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.taxNumber')}</p>
                  <p>{t('impressum.section1.taxNumberValue')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.responsible')}</p>
                  <p>{t('impressum.section1.responsibleText')}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{t('impressum.section1.profession')}</p>
                  <p>{t('impressum.section1.professionValue')}</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('impressum.section2.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.section2.content')}
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('impressum.section3.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.section3.content')}
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('impressum.section4.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.section4.content')}
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('impressum.section5.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.section5.content')}
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('impressum.section6.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.section6.content')}
              </p>
            </section>

            {/* Date */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                {t('impressum.date')}: {t('impressum.dateValue')}
              </p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

