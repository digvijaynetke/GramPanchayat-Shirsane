// Import all reward images
import reward1 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0025.jpg';
import reward2 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0026.jpg';
import reward3 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0027.jpg';
import reward4 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0028.jpg';
import reward5 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0029.jpg';
import reward6 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0030.jpg';
import reward7 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0031.jpg';
import reward8 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0032.jpg';
import reward9 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0033.jpg';
import reward10 from '../images/shirsane imgs/rewards/मुख्यमंत्री पंचायतराज अभियान शिरसाणे गावाची सर्वसाधारण माहिती Photo 2 (2)_page-0034.jpg';

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: reward1,
      title: 'स्वच्छ भारत अभियान (ग्रामीण) जिल्हा परिषद नाशिक सन्मान चिन्ह',
      description: 'स्वच्छ भारत अभियान (ग्रामीण) अंतर्गत जिल्हा परिषद नाशिक यांनी ग्रामपंचायत शिरसाणे यास सन २०२३-२४ साठी सन्मान चिन्ह प्रदान केले. हा पुरस्कार गावातील स्वच्छता, साफसफाई आणि पर्यावरण संवर्धनाच्या कामासाठी मिळाला आहे.',
      date: '२०२३-२४',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 2,
      image: reward8,
      title: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान जिल्हा स्तरीय प्रथम पुरस्कार',
      description: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान अंतर्गत सन २०१६-१७ मध्ये जिल्हा स्तरीय प्रथम पुरस्कार मिळवला. गावातील स्वच्छता, कचरा व्यवस्थापन आणि सार्वजनिक आरोग्य सुधारण्यासाठी केलेल्या कामाची दखल घेऊन हा पुरस्कार प्रदान करण्यात आला.',
      date: '२०१६-१७',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 3,
      image: reward4,
      title: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान डॉ. बाबासाहेब आंबेडकर स्मृती विशेष पुरस्कार',
      description: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान अंतर्गत सन २०१६-१७ मध्ये जिल्हा स्तरीय डॉ. बाबासाहेब आंबेडकर स्मृती विशेष पुरस्कार मिळवला. हा पुरस्कार २५ लक्ष रुपयांचा होता आणि गावातील स्वच्छता उपक्रमातील उत्कृष्ट कामगिरीसाठी प्रदान करण्यात आला.',
      date: '२०१६-१७',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 4,
      image: reward5,
      title: 'जिल्हा परिषद नाशिक तालुका स्मार्ट ग्राम पुरस्कार',
      description: 'जिल्हा परिषद नाशिक यांनी सन २०१७-१८ मध्ये तालुका स्मार्ट ग्राम पुरस्कार प्रदान केला. हा पुरस्कार गावातील डिजिटल सुविधा, तंत्रज्ञानाचा वापर, स्मार्ट सोल्युशन्स आणि आधुनिक विकासासाठी मिळाला आहे.',
      date: '२०१७-१८',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 5,
      image: reward3,
      title: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान जिल्हा स्तरीय प्रथम पुरस्कार',
      description: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान अंतर्गत सन २०१८-१९ मध्ये जिल्हा स्तरीय प्रथम पुरस्कार मिळवला. हा पुरस्कार ५ लक्ष रुपयांचा होता आणि गावातील स्वच्छता, साफसफाई आणि पर्यावरण संवर्धनाच्या कामासाठी प्रदान करण्यात आला.',
      date: '२०१८-१९',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 6,
      image: reward6,
      title: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान विभाग स्तरीय प्रथम पुरस्कार',
      description: 'संत गाडगेबाबा ग्राम स्वच्छता अभियान अंतर्गत सन २०१९-२० मध्ये विभाग स्तरीय प्रथम पुरस्कार मिळवला. हा पुरस्कार १० लक्ष रुपयांचा होता आणि गावातील स्वच्छता उपक्रमातील उत्कृष्ट कामगिरीसाठी प्रदान करण्यात आला. विभाग स्तरावर प्रथम स्थान मिळवणे ही एक मोठी उपलब्धी आहे.',
      date: '२०१९-२०',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 7,
      image: reward7,
      title: 'नुतन माध्यमिक विद्यालय भाटगाव सुवर्ण महोत्सव सन्मानचिन्ह',
      description: 'नुतन माध्यमिक विद्यालय भाटगाव, ता. चांदवड, जि. नाशिक या शाळेच्या सुवर्ण महोत्सव सन्मानचिन्ह प्रदान करण्यात आले. हा सन्मान शिक्षण क्षेत्रातील योगदान आणि शैक्षणिक उत्कृष्टतेसाठी मिळाला आहे.',
      date: 'सुवर्ण महोत्सव',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 8,
      image: reward2,
      title: 'ग्रामपंचायत शिरसाणे पुरस्कार',
      description: 'ग्रामपंचायत शिरसाणे यास विविध क्षेत्रातील उत्कृष्ट कामगिरीसाठी पुरस्कार प्रदान करण्यात आला. हा पुरस्कार गावातील सर्वांगीण विकास, सामाजिक सुधारणा आणि सामुदायिक भागीदारीसाठी मिळाला आहे.',
      date: 'पुरस्कार',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 9,
      image: reward9,
      title: 'ग्रामपंचायत शिरसाणे उपलब्धी',
      description: 'ग्रामपंचायत शिरसाणे याची विविध क्षेत्रातील उपलब्धी आणि यशोगाथा. गावातील विकास, सामाजिक सुधारणा आणि सामुदायिक कामासाठी मिळवलेले सन्मान.',
      date: 'उपलब्धी',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    },
    {
      id: 10,
      image: reward10,
      title: 'ग्रामपंचायत शिरसाणे सन्मान',
      description: 'ग्रामपंचायत शिरसाणे यास विविध क्षेत्रातील उत्कृष्ट कामगिरीसाठी सन्मान प्रदान करण्यात आला. हा सन्मान गावातील सर्वांगीण विकास, सामाजिक सुधारणा आणि सामुदायिक भागीदारीसाठी मिळाला आहे.',
      date: 'सन्मान',
      category: 'पुरस्कार / यशोगाथा',
      village: 'ग्रामपंचायत शिरसाणे'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Sub-heading and Line */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 text-center mb-2">माहिती</p>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
            पुरस्कार / यशोगाथा
          </h2>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {awards.map((award) => (
              <div 
                key={award.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container with Avatar Overlay */}
                <div className="relative">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-[250px] object-cover"
                  />
                  {/* Avatar Icon Overlapping Bottom-Left */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Metadata Bar */}
                <div className="px-4 pt-4 pb-2 space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{award.village}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{award.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{award.category}</span>
                    </div>
                  </div>
                </div>

                {/* Award Title */}
                <div className="px-4 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-3">
                    {award.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-4 pb-6">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

