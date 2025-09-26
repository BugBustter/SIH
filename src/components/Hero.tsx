import React from 'react';
import { Calendar, Video, MapPin, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const quickActions = [
    {
      key: 'bookAppointment',
      icon: Calendar,
      color: 'from-green-500 to-green-600',
      href: '#appointments'
    },
    {
      key: 'videoConsultation',
      icon: Video,
      color: 'from-blue-500 to-blue-600',
      href: '#video-consultation'
    },
    {
      key: 'findNearbyHospitals',
      icon: MapPin,
      color: 'from-purple-500 to-purple-600',
      href: '#hospitals'
    },
    {
      key: 'sarthiBooth',
      icon: Bot,
      color: 'from-orange-500 to-orange-600',
      href: '#sarthi-booth'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block text-green-600 animate-fade-in-up">Sarthi</span>
                <span className="block text-gray-800 animate-fade-in-up animation-delay-300">Healthcare</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up animation-delay-600">
                {t('tagline')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-900">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('bookAppointment')}
                </button>
                <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                  {t('emergencyServices')}
                </button>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professionals"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">❤️</span>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-8 left-8 bg-white rounded-2xl shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">24/7 Available</span>
              </div>
            </div>
            <div className="absolute -bottom-8 right-8 bg-white rounded-2xl shadow-lg p-4 animate-float animation-delay-1000">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">AI Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <a
              key={action.key}
              href={action.href}
              className={`group relative bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${1200 + index * 200}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${action.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(action.key)}
              </h3>
              <p className="text-gray-600 text-sm">
                Quick access to {t(action.key).toLowerCase()}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;