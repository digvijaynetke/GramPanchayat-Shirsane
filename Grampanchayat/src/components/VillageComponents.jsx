import { useState } from 'react';

// Language translations
const translations = {
  mr: {
    qrPayment: {
      title: 'QR पेमेंट',
      description: 'QR कोड स्कॅन करून पेमेंट करा',
      scanQR: 'QR कोड स्कॅन करा',
      amount: 'रक्कम',
      payNow: 'पेमेंट करा'
    },
    statistics: {
      title: 'आकडेवारी डॅशबोर्ड',
      totalPopulation: 'एकूण लोकसंख्या',
      literacyRate: 'साक्षरता दर',
      totalLand: 'एकूण जमीन',
      educationCenters: 'शिक्षण केंद्र'
    },
    casteTable: {
      title: 'जातीनुसार मतदार सारणी',
      caste: 'जात',
      male: 'पुरुष',
      female: 'महिला',
      total: 'एकूण'
    },
    villageStats: {
      title: 'गावाची आकडेवारी'
    }
  },
  en: {
    qrPayment: {
      title: 'QR Payment',
      description: 'Scan QR code to make payment',
      scanQR: 'Scan QR Code',
      amount: 'Amount',
      payNow: 'Pay Now'
    },
    statistics: {
      title: 'Statistics Dashboard',
      totalPopulation: 'Total Population',
      literacyRate: 'Literacy Rate',
      totalLand: 'Total Land',
      educationCenters: 'Education Centers'
    },
    casteTable: {
      title: 'Caste Wise Voter Table',
      caste: 'Caste',
      male: 'Male',
      female: 'Female',
      total: 'Total'
    },
    villageStats: {
      title: 'Village Statistics'
    }
  }
};

// QR Payment Section Component
export const QRPaymentSection = ({ language = 'mr' }) => {
  const t = translations[language] || translations.mr;
  const [amount, setAmount] = useState('');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4 text-teal-800">
              {t.qrPayment.title}
            </h2>
            <p className="text-center text-gray-700 mb-6">
              {t.qrPayment.description}
            </p>
            
            <div className="bg-white rounded-lg p-6 mb-6 flex justify-center">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                  <path d="M8 6h4v4H8V6zm0 6h4v4H8v-4z" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.qrPayment.amount}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-teal-700 transition duration-300">
                {t.qrPayment.payNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Statistics Dashboard Component
export const StatisticsDashboard = ({ language = 'mr' }) => {
  const t = translations[language] || translations.mr;
  
  const stats = [
    { label: t.statistics.totalPopulation, value: '1606', icon: '👥' },
    { label: t.statistics.literacyRate, value: '-%', icon: '📚' },
    { label: t.statistics.totalLand, value: '-', icon: '🌾' },
    { label: t.statistics.educationCenters, value: '-', icon: '🏫' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.statistics.title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-teal-700 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Caste Wise Voter Table Component
export const CasteWiseVoterTable = ({ language = 'mr' }) => {
  const t = translations[language] || translations.mr;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.casteTable.title}
          </h2>
          
          <div className="space-y-8">
            {/* ग्रामपंचायत माहिती */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-teal-600 text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  🏛️ ग्रामपंचायत माहिती
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">घटक</td>
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">तपशील</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">ग्रामपंचायत स्थापना वर्ष</td>
                      <td className="px-4 py-3 font-medium text-gray-900">१९६२</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">एकूण वार्ड</td>
                      <td className="px-4 py-3 font-medium text-gray-900">०३</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">सदस्य संख्या</td>
                      <td className="px-4 py-3 font-medium text-gray-900">०९</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* लोकसंख्या माहिती */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  👨‍👩‍👧‍👦 लोकसंख्या माहिती
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">घटक</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">पुरुष</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">स्त्रिया</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">एकूण</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">लोकसंख्या</td>
                      <td className="px-4 py-3 font-medium text-gray-900">८१४</td>
                      <td className="px-4 py-3 font-medium text-gray-900">७९२</td>
                      <td className="px-4 py-3 font-bold text-gray-900">१६०६</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">कुटुंब संख्या</td>
                      <td className="px-4 py-3 text-gray-500">-</td>
                      <td className="px-4 py-3 text-gray-500">-</td>
                      <td className="px-4 py-3 font-bold text-gray-900">२९६</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* जातीनुसार लोकसंख्या */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  🧬 जातीनुसार लोकसंख्या
                </h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">वर्ग</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">पुरुष</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">स्त्रिया</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">एकूण</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">अनुसूचित जाती</td>
                        <td className="px-4 py-3 font-medium text-gray-900">५४</td>
                        <td className="px-4 py-3 font-medium text-gray-900">४८</td>
                        <td className="px-4 py-3 font-medium text-gray-900">१०२</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">अनुसूचित जमाती</td>
                        <td className="px-4 py-3 font-medium text-gray-900">२३५</td>
                        <td className="px-4 py-3 font-medium text-gray-900">२३२</td>
                        <td className="px-4 py-3 font-medium text-gray-900">४६७</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">इतर</td>
                        <td className="px-4 py-3 font-medium text-gray-900">५२५</td>
                        <td className="px-4 py-3 font-medium text-gray-900">५१२</td>
                        <td className="px-4 py-3 font-medium text-gray-900">१०३७</td>
                      </tr>
                      <tr className="bg-teal-50 font-bold">
                        <td className="px-4 py-3 text-gray-900">एकूण</td>
                        <td className="px-4 py-3 text-gray-900">८१४</td>
                        <td className="px-4 py-3 text-gray-900">७९२</td>
                        <td className="px-4 py-3 text-gray-900">१६०६</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* आर्थिक स्थिती */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-yellow-600 text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  💰 आर्थिक स्थिती (दारिद्र्यरेषेनुसार)
                </h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">वर्ग</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">दारिद्र्यरेषेखालील कुटुंबे</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">दारिद्र्यरेषेवरील कुटुंबे</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">अनुसूचित जाती</td>
                        <td className="px-4 py-3 font-medium text-gray-900">०७</td>
                        <td className="px-4 py-3 font-medium text-gray-900">१७</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">अनुसूचित जमाती</td>
                        <td className="px-4 py-3 font-medium text-gray-900">३१</td>
                        <td className="px-4 py-3 font-medium text-gray-900">३६</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">इतर</td>
                        <td className="px-4 py-3 font-medium text-gray-900">१५</td>
                        <td className="px-4 py-3 font-medium text-gray-900">२४३</td>
                      </tr>
                      <tr className="bg-yellow-50 font-bold">
                        <td className="px-4 py-3 text-gray-900">एकूण</td>
                        <td className="px-4 py-3 text-gray-900">५३</td>
                        <td className="px-4 py-3 text-gray-900">२९६</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* शौचालय सुविधा */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  🚻 शौचालय सुविधा
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">प्रकार</td>
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">संख्या</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">वैयक्तिक शौचालये</td>
                      <td className="px-4 py-3 font-medium text-gray-900">२२४</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">सार्वजनिक शौचालये</td>
                      <td className="px-4 py-3 font-medium text-gray-900">२ युनिट (८ सीट)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* शैक्षणिक संस्था */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-indigo-600 text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  🏫 शैक्षणिक संस्था
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">संस्था प्रकार</td>
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">संख्या</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">प्राथमिक शाळा</td>
                      <td className="px-4 py-3 font-medium text-gray-900">०२</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">अंगणवाडी केंद्रे</td>
                      <td className="px-4 py-3 font-medium text-gray-900">०२</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* इतर सुविधा */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-red-600 text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  🏦 इतर सुविधा
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">घटक</td>
                      <td className="px-4 py-3 font-semibold text-gray-700 w-1/2">संख्या</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">सहकारी सोसायटी</td>
                      <td className="px-4 py-3 font-medium text-gray-900">०१</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Village Statistics Components (Combined)
export const VillageStatisticsComponents = ({ language = 'mr' }) => {
  return (
    <div>
      <StatisticsDashboard language={language} />
      <CasteWiseVoterTable language={language} />
      <QRPaymentSection language={language} />
    </div>
  );
};

