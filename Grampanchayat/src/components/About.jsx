import { useState } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import VideoPlayer from './VideoPlayer';

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { data, loading } = useHomeData();
  const language = 'mr'; // Default to Marathi

  // Get about data from API or use fallback
  const aboutData = data?.about;
  const title = aboutData?.title?.[language] || aboutData?.title?.mr || 'आपला अभिमान, आपलं गाव';
  const description = aboutData?.description?.[language] || aboutData?.description?.mr || ' हे गाव स्वतःची ग्रामपंचायत असलेले असून वडाळीभोई (7 किमी) आणि चांदवड ही जवळची महत्त्वाची शहरे व बाजारपेठा आहेत. गावाजवळून NH-360 महामार्ग जात असल्याने वाहतूक आणि संपर्काची सोय चांगली आहे.';
  const videoUrl = aboutData?.videoUrl;

  return (
    <>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center">
                <p className="text-lg text-gray-600">लोड होत आहे...</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">
                  {title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
                  {description}
                </p>
            
                {/* Play Button - Only show if video URL exists */}
                {videoUrl && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="w-20 h-20 md:w-24 md:h-24 bg-teal-800 hover:bg-teal-900 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label="Play Video"
                    >
                      <svg 
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" 
                        fill="teal" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {isVideoOpen && videoUrl && (
        <VideoPlayer 
          videoUrl={videoUrl}
          onClose={() => setIsVideoOpen(false)} 
        />
      )}
    </>
  );
};

export default About;
