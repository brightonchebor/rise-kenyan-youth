import React, { useState } from 'react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: 'src/assets/gallery/image52.jpg',
      title: 'Technology Training Session',
      category: 'technology',
      description: 'Students learning digital skills and computer literacy'
    },
    {
      id: 2,
      url: 'src/assets/gallery/image86.jpg',
      title: 'Graduation Ceremony',
      category: 'graduation',
      description: 'Celebrating our successful graduates'
    },
    {
      id: 3,
      url: 'src/assets/gallery/image83.jpg',
      title: 'Community Workshop',
      category: 'community',
      description: 'Engaging with local communities for sustainable development'
    },
    {
      id: 4,
      url: 'src/assets/gallery/image17.jpg',
      title: 'STEM Education Program',
      category: 'education',
      description: 'Hands-on science and mathematics learning'
    },
    {
      id: 5,
      url: 'src/assets/gallery/image79.jpg',
      title: 'Leadership Development',
      category: 'leadership',
      description: 'Building tomorrow\'s leaders through mentorship'
    },
    {
      id: 6,
      url: 'src/assets/gallery/image46.jpg',
      title: 'Digital Skills Training',
      category: 'technology',
      description: 'Advanced computer programming and web development'
    },
    {
      id: 7,
      url: 'src/assets/gallery/image58.jpg',
      title: 'Team Building Activities',
      category: 'community',
      description: 'Fostering collaboration and teamwork'
    },
    {
      id: 8,
      url: 'src/assets/gallery/image20.jpg',
      title: 'Scholarship Award Ceremony',
      category: 'graduation',
      description: 'Recognizing academic excellence and achievement'
    },
    {
      id: 9,
      url: 'src/assets/gallery/image74.jpg',
      title: 'Classroom Learning',
      category: 'education',
      description: 'Interactive learning environment'
    },
    {
      id: 10,
      url: 'src/assets/gallery/image30.jpg',
      title: 'Youth Conference',
      category: 'leadership',
      description: 'Annual youth leadership conference'
    },
    {
      id: 11,
      url: 'src/assets/gallery/image13.jpg',
      title: 'Mobile Learning Lab',
      category: 'technology',
      description: 'Bringing technology to remote communities'
    },
    {
      id: 12,
      url: 'src/assets/gallery/image55.jpg',
      title: 'Success Stories',
      category: 'graduation',
      description: 'Celebrating transformed lives and achievements'
    }
  ];



  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover the moments that define our journey - from transformative learning experiences 
            to celebrating achievements that strengthen communities across Kenya.
          </p>
        </div>



        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600 font-medium">Photos Captured</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-gray-600 font-medium">Events Documented</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 font-medium">Success Stories</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="text-gray-600 font-medium">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
            >
              ✕
            </button>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;