
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  project: {
    title: string;
    category: string;
    images: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
          <div className="text-white">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-green-400">{project.category}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-400 transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Image */}
        <div className="relative h-full flex items-center justify-center pt-20 pb-16">
          <div className="relative max-w-4xl max-h-full">
            <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg overflow-hidden">
              <div className="aspect-video w-full max-w-4xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white text-xl">
                Project Image {currentImageIndex + 1}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-400 transition-colors p-2 bg-black bg-opacity-50 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-400 transition-colors p-2 bg-black bg-opacity-50 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-center space-x-2 overflow-x-auto">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-green-400'
                      : 'border-gray-600 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-xs">
                    {index + 1}
                  </div>
                </button>
              ))}
            </div>
            <div className="text-center text-white mt-2 text-sm">
              {currentImageIndex + 1} of {project.images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
