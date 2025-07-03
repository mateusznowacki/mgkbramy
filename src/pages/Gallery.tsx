import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectGallery from '../components/ProjectGallery';
import { useI18n } from '../lib/i18n';

const Gallery = () => {
  const { t } = useI18n();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const projects = [
    { 
      id: 1,
      category: t('gallery', 'modernCategory'),
      title: t('gallery', 'modernTitle1'),
      images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]
    },
    { 
      id: 2,
      category: t('gallery', 'classicCategory'),
      title: t('gallery', 'classicTitle1'),
      images: ["gate1.jpg", "gate2.jpg", "gate3.jpg"]
    },
    { 
      id: 3,
      category: t('gallery', 'securityCategory'),
      title: t('gallery', 'securityTitle1'),
      images: ["security1.jpg", "security2.jpg", "security3.jpg", "security4.jpg", "security5.jpg"]
    },
    { 
      id: 4,
      category: t('gallery', 'decorativeCategory'),
      title: t('gallery', 'decorativeTitle1'),
      images: ["panel1.jpg", "panel2.jpg", "panel3.jpg"]
    },
    { 
      id: 5,
      category: t('gallery', 'privacyCategory'),
      title: t('gallery', 'privacyTitle1'),
      images: ["privacy1.jpg", "privacy2.jpg", "privacy3.jpg", "privacy4.jpg"]
    },
    { 
      id: 6,
      category: t('gallery', 'railingsCategory'),
      title: t('gallery', 'railingsTitle1'),
      images: ["railing1.jpg", "railing2.jpg"]
    },
    { 
      id: 7,
      category: t('gallery', 'modernCategory'),
      title: t('gallery', 'modernTitle2'),
      images: ["modern1.jpg", "modern2.jpg", "modern3.jpg", "modern4.jpg"]
    },
    { 
      id: 8,
      category: t('gallery', 'classicCategory'),
      title: t('gallery', 'classicTitle2'),
      images: ["classic1.jpg", "classic2.jpg", "classic3.jpg"]
    },
    { 
      id: 9,
      category: t('gallery', 'securityCategory'),
      title: t('gallery', 'securityTitle2'),
      images: ["industrial1.jpg", "industrial2.jpg", "industrial3.jpg", "industrial4.jpg", "industrial5.jpg"]
    }
  ];

  const openProjectGallery = (project: any) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const closeProjectGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in gradient-text text-white">{t('gallery', 'heroTitle')}</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6 animate-scale-in delay-200"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 animate-fade-in delay-300">
            {t('gallery', 'heroDesc')}
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-500 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full opacity-20 animate-float delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-green-600 rounded-full opacity-40 animate-float delay-200"></div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProjectGallery(project)}
              >
                <div className="bg-gradient-to-br from-slate-600 to-slate-800 h-64 rounded-lg overflow-hidden relative hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center text-white transform transition-all duration-500 group-hover:scale-110">
                      <h3 className="text-lg font-semibold mb-2 animate-slide-up">{project.title}</h3>
                      <p className="text-green-400 animate-slide-up delay-100">{project.category}</p>
                      <div className="mt-2 text-sm opacity-75 animate-slide-up delay-200">
                        {project.images.length} {t('gallery', 'imagesLabel')} • {t('gallery', 'clickToView')}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-bounce-in pulse-glow">
                    {project.images.length} {t('gallery', 'photosLabel')}
                  </div>
                  
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 animate-fade-in">{t('gallery', 'inspired')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            {t('gallery', 'inspiredDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <a href="/quote" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {t('gallery', 'getQuote')}
            </a>
            <a href="/contact" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {t('gallery', 'contact')}
            </a>
          </div>
        </div>
      </section>

      {/* Project Gallery Modal */}
      {selectedProject && (
        <ProjectGallery
          project={selectedProject}
          isOpen={isGalleryOpen}
          onClose={closeProjectGallery}
        />
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
