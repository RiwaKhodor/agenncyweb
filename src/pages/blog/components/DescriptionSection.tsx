import { useTranslation } from 'react-i18next';

export default function DescriptionSection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
          {t('blog.description')}
        </p>
      </div>
    </section>
  );
}

