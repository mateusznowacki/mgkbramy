import React from 'react';
import { Phone, Calendar, Wrench } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const ProcessSteps = () => {
  const { t } = useI18n();
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      number: "01",
      title: t('process', 'step1Title'),
      description: t('process', 'step1Desc'),
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "02",
      title: t('process', 'step2Title'),
      description: t('process', 'step2Desc'),
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      number: "03",
      title: t('process', 'step3Title'),
      description: t('process', 'step3Desc'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('process', 'title')}</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow border-4 border-green-500">
                  <div className="text-green-500">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
