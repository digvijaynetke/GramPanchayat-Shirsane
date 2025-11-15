import PageHero from '../PageHero';
import mandirImage from '../../images/back.jpg';
import noticeImage4_old from '../../images/shirsane imgs/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0004.jpg';
import noticeImage5_old from '../../images/shirsane imgs/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0005.jpg';
import noticeImage6_new from '../../images/shirsane imgs/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0006.jpg';

const TemplePage = () => {
  const temples = [
    {
      id: 1,
      image: noticeImage4_old,
      title: '🙏 हनुमान मंदिर (Hanuman Mandir)',
      description: 'आपल्या गावाचं हनुमान मंदिर हे फक्त एक प्रार्थनास्थळ नाही, तर ते गावाच्या श्रद्धेचं आणि शक्तीचं प्रतीक आहे. प्रत्येक संकटात आणि अडचणीत हनुमंताचा आशीर्वाद घेण्यासाठी आपण इथे एकत्र येतो',
      date: '२०२४',
      category: 'सूचना फलक',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 2,
      image: noticeImage5_old,
      title: 'गणपती मंदिर (Ganpati Mandir)',
      description: 'गणपती बाप्पाचं मंदिर हे आमच्या गावाचं बुद्धी, यश आणि मंगल कार्याचं ऊर्जास्रोत आहे. कोणत्याही शुभ कार्याची सुरुवात करण्यापूर्वी विघ्नहर्त्याचा आशीर्वाद घेण्यासाठी इथे गावकऱ्यांची गर्दी जमते.',
      date: '२०२४',
      category: 'सूचना फलक',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 3,
      image: noticeImage6_new,
      title: 'ग्रामपंचायत सूचना',
      description: 'गाव म्हणजे केवळ जागा नाही, तर ती आपली ओळख आहे आणि आपली संस्कृती जपणारं मूळ आहे.',
      date: '२०२४',
      category: 'सूचना फलक',
      village: 'ग्रामपंचायत शिरसाणे'
    }
  ];

  return (
    <div>
      <PageHero 
        title="मंदिर" 
        subtitle="माहिती"
        image={mandirImage}
      />
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
            मंदिर
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temples.map((temple) => (
              <div
                key={temple.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-teal-800 mb-3">
                    {temple.name}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {temple.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{temple.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TemplePage;

