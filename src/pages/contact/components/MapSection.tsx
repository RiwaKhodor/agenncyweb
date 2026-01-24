import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type MapMode = 'light' | 'dark';

export default function MapSection() {
  const { t } = useTranslation();
  const [mapMode, setMapMode] = useState<MapMode>('light');

  // Map location: Hünensteig 12, 12169 Berlin, Germany
  // Share link: https://maps.app.goo.gl/hkTPicfep9C53T8f9
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.412400328662!2d13.340930600000002!3d52.4535583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85a98164c32f3%3A0x8001fd9f1dc8527d!2sH%C3%BCnensteig%2012%2C%2012169%20Berlin%2C%20Germany!5e0!3m2!1sen!2slb!4v1769273028304!5m2!1sen!2slb';

  const getMapUrl = (mode: MapMode) => {
    // Return the clean map embed URL - same for both light and dark modes
    // Dark mode is handled via CSS filter
    return mapEmbedUrl;
  };

  const getMapStyle = (mode: MapMode) => {
    switch (mode) {
      case 'dark':
        return { filter: 'invert(1) hue-rotate(180deg) brightness(0.85) contrast(1.1)' };
      default:
        return {};
    }
  };

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Mode Selector */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setMapMode('light')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              mapMode === 'light'
                ? 'bg-[#1A2B4A] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <i className="ri-sun-line mr-2"></i>
            {t('about.map.light')}
          </button>
          <button
            onClick={() => setMapMode('dark')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              mapMode === 'dark'
                ? 'bg-[#1A2B4A] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <i className="ri-moon-line mr-2"></i>
            {t('about.map.dark')}
          </button>
        </div>

        {/* Map Container with Border */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden border-4 border-gray-200 shadow-xl">
          <iframe
            key={mapMode}
            src={getMapUrl(mapMode)}
            width="100%"
            height="100%"
            style={{ border: 0, ...getMapStyle(mapMode) }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Agenncy Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
