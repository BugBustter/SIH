import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Users, 
  Shield, 
  Calendar,
  Video,
  TestTube,
  Pill,
  Activity,
  CreditCard
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'emergencyServices',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      description: '24/7 Emergency medical care with rapid response'
    },
    {
      key: 'onlineConsultation',
      icon: Video,
      color: 'from-blue-500 to-blue-600',
      description: 'Connect with doctors from anywhere, anytime'
    },
    {
      key: 'labTests',
      icon: TestTube,
      color: 'from-green-500 to-green-600',
      description: 'Comprehensive diagnostic testing with quick results'
    },
    {
      key: 'pharmacy',
      icon: Pill,
      color: 'from-purple-500 to-purple-600',
      description: 'Online pharmacy with home delivery'
    },
    {
      key: 'healthCheckup',
      icon: Activity,
      color: 'from-orange-500 to-orange-600',
      description: 'Regular health monitoring and preventive care'
    },
    {
      key: 'insurance',
      icon: CreditCard,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Health insurance assistance and claims'
    }
  ];

  const specialties = [
    { name: 'Cardiology', icon: Heart, patients: '10K+' },
    { name: 'Neurology', icon: Brain, patients: '8K+' },
    { name: 'Ophthalmology', icon: Eye, patients: '12K+' },
    { name: 'General Medicine', icon: Stethoscope, patients: '15K+' },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions powered by technology and delivered with care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.key}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-gray-100`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(service.key)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Hover effect overlay */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-green-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specialties Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Medical Specialties
            </h3>
            <p className="text-green-100 text-lg">
              Expert care across multiple medical disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={specialty.name}
                className={`text-center group animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                  <specialty.icon className="h-12 w-12 mx-auto mb-4 text-green-100 group-hover:text-white transition-colors duration-300" />
                  <h4 className="text-lg font-semibold mb-2">{specialty.name}</h4>
                  <p className="text-green-100 text-sm mb-2">Patients Served</p>
                  <p className="text-2xl font-bold">{specialty.patients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            {t('bookAppointment')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;