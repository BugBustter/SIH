import React, { useState } from 'react';
import { 
  Star, 
  Calendar, 
  Video, 
  MapPin, 
  Clock,
  Award,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Doctor } from '../types';

const Doctors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiologist',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5327664/pexels-photo-5327664.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      specialty: 'Neurologist',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: '3',
      name: 'Dr. Sunita Patel',
      specialty: 'Pediatrician',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: false
    },
    {
      id: '4',
      name: 'Dr. Amit Singh',
      specialty: 'Orthopedic Surgeon',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: '5',
      name: 'Dr. Meera Gupta',
      specialty: 'Dermatologist',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    }
  ];

  const specialties = [
    { name: 'Cardiology', count: 15, color: 'from-red-500 to-pink-500' },
    { name: 'Neurology', count: 12, color: 'from-purple-500 to-indigo-500' },
    { name: 'Pediatrics', count: 18, color: 'from-blue-500 to-cyan-500' },
    { name: 'Orthopedics', count: 10, color: 'from-green-500 to-emerald-500' },
    { name: 'Dermatology', count: 8, color: 'from-yellow-500 to-orange-500' },
    { name: 'Gynecology', count: 14, color: 'from-pink-500 to-rose-500' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === doctors.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? doctors.length - 3 : prevIndex - 1
    );
  };

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Expert <span className="text-indigo-600">Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with qualified healthcare professionals available for consultations
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.name}
              className={`bg-gradient-to-r ${specialty.color} rounded-xl p-4 text-white text-center hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-2xl font-bold mb-1">{specialty.count}</p>
              <p className="text-sm opacity-90">{specialty.name}</p>
            </div>
          ))}
        </div>

        {/* Doctors Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Available Doctors</h3>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-500 transform hover:scale-105 border border-gray-100">
                    <div className="relative mb-6">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-100"
                      />
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white ${
                        doctor.available ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                    </div>

                    <div className="text-center mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {doctor.name}
                      </h4>
                      <p className="text-indigo-600 font-medium mb-2">{doctor.specialty}</p>
                      
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(doctor.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
                      </div>

                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4" />
                          <span>15+ years</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>2k+ patients</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                          doctor.available
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!doctor.available}
                      >
                        <Calendar className="h-4 w-4 inline mr-2" />
                        {doctor.available ? 'Book Appointment' : 'Not Available'}
                      </button>
                      
                      {doctor.available && (
                        <button className="w-full py-2 px-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300">
                          <Video className="h-4 w-4 inline mr-2" />
                          Video Call
                        </button>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Next: 2:30 PM</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>Clinic A</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Expert Doctors' },
              { number: '50+', label: 'Specialties' },
              { number: '100k+', label: 'Happy Patients' },
              { number: '24/7', label: 'Emergency Care' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need Immediate Medical Attention?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Our emergency team is available 24/7 for urgent consultations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300">
              Emergency Consultation
            </button>
            <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transform hover:scale-105 transition-all duration-300">
              Schedule Regular Checkup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;