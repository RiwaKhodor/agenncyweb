import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import PrivacyHero from './components/PrivacyHero';

export default function PrivacyPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PrivacyHero />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-white">
          <p className="text-sm text-gray-500 mb-12">
            {t('privacy.subtitle')}: {t('privacy.website')} | {t('privacy.date')}: {t('privacy.dateValue')}
          </p>
          
          <div className="space-y-12">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section1.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section1.content')}
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section2.title')}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('privacy.section2.content')}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-gray-700 space-y-2">
                <p className="font-semibold text-gray-900">{t('privacy.section2.name')}</p>
                <p>{t('privacy.section2.address')}</p>
                <p>{t('privacy.section2.city')}</p>
                <p>{t('privacy.section2.country')}</p>
                <p>{t('privacy.section2.phone')}: {t('privacy.section2.phoneNumber')}</p>
                <p>{t('privacy.section2.email')}: <a href={`mailto:${t('privacy.section2.emailAddress')}`} className="text-[#6B7F39] hover:underline">{t('privacy.section2.emailAddress')}</a></p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section3.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section3.content')}
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section4.title')}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('privacy.section4.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
                <li>{t('privacy.section4.item1')}</li>
                <li>{t('privacy.section4.item2')}</li>
                <li>{t('privacy.section4.item3')}</li>
                <li>{t('privacy.section4.item4')}</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {t('privacy.section4.note')}
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section5.title')}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('privacy.section5.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
                <li>{t('privacy.section5.item1')}</li>
                <li>{t('privacy.section5.item2')}</li>
                <li>{t('privacy.section5.item3')}</li>
                <li>{t('privacy.section5.item4')}</li>
                <li>{t('privacy.section5.item5')}</li>
                <li>{t('privacy.section5.item6')}</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {t('privacy.section5.purposes')}
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                {t('privacy.section5.legalBasis')}
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                {t('privacy.section5.storage')}
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section6.title')}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('privacy.section6.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
                <li>{t('privacy.section6.item1')}</li>
                <li>{t('privacy.section6.item2')}</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {t('privacy.section6.legalBasis')}
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section7.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section7.content')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section7.purposes')}</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section7.legalBasis')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section7.storage')}
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section8.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section8.content')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section8.doubleOptIn')}</strong> {t('privacy.section8.doubleOptInText')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section8.revocation')}</strong> {t('privacy.section8.revocationText')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section8.legalBasis')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section8.storage')}
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section9.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section9.content')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section9.data')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section9.purposes')}</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section9.legalBasis')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section9.recipients')}</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section9.ipAnonymization')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section9.storage')}</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section9.storageText')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section9.revocation')}</strong> {t('privacy.section9.revocationText')}
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section10.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section10.content')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section10.data')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section10.purposes')}</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section10.legalBasis')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('privacy.section10.revocation')}</strong> {t('privacy.section10.revocationText')}
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section11.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section11.content')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section11.legalBasis')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section11.storage')}
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section12.title')}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('privacy.section12.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
                <li>{t('privacy.section12.item1')}</li>
                <li>{t('privacy.section12.item2')}</li>
                <li>{t('privacy.section12.item3')}</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section13.title')}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('privacy.section13.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
                <li>{t('privacy.section13.item1')}</li>
                <li>{t('privacy.section13.item2')}</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section14.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section14.content')}
              </p>
            </section>

            {/* Section 15 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section15.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section15.content')}
              </p>
            </section>

            {/* Section 16 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section16.title')}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('privacy.section16.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
                <li>{t('privacy.section16.item1')}</li>
                <li>{t('privacy.section16.item2')}</li>
                <li>{t('privacy.section16.item3')}</li>
                <li>{t('privacy.section16.item4')}</li>
                <li>{t('privacy.section16.item5')}</li>
                <li>{t('privacy.section16.item6')}</li>
                <li>{t('privacy.section16.item7')}</li>
              </ul>
            </section>

            {/* Section 17 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section17.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section17.content')}
              </p>
            </section>

            {/* Section 18 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section18.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section18.content')}
              </p>
            </section>

            {/* Section 19 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section19.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section19.content')}
              </p>
            </section>

            {/* Section 20 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.section20.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.section20.content')}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

