import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Star,
  Route,
  Search,
  Filter
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Hospital, SarthiBooth } from '../types';

const LocationFinder: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [sarthiBooths, setSarthiBooths] = useState<SarthiBooth[]>([]);
  const [activeTab, setActiveTab] = useState<'hospitals' | 'booths'>('hospitals');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  // Mock hospital data
  const mockHospitals: Hospital[] = [
    {
      id: '1',
      name: 'Sarthi General Hospital',
      address: '123 Health Street, Medical District',
      phone: '+91 98765 43210',
      distance: 2.5,
      lat: 28.6139,
      lng: 77.2090
    },
    {
      id: '2',
      name: 'Sarthi Emergency Center',
      address: '456 Care Avenue, Downtown',
      phone: '+91 98765 43211',
      distance: 1.8,
      lat: 28.6129,
      lng: 77.2080
    },
    {
      id: '3',
      name: 'Sarthi Specialty Clinic',
      address: '789 Wellness Road, City Center',
      phone: '+91 98765 43212',
      distance: 3.2,
      lat: 28.6149,
      lng: 77.2100
    }
  ];

  // Mock Sarthi Booth data
  const mockSarthiBooths: SarthiBooth[] = [
    {
      id: '1',
      name: 'Sarthi Booth - Central Plaza',
      address: 'Central Plaza, Ground Floor',
      phone: '+91 98765 43213',
      distance: 0.8,
      services: ['Basic Health Check', 'BP Monitoring', 'Consultation', 'Prescription'],
      lat: 28.6135,
      lng: 77.2085
    },
    {
      id: '2',
      name: 'Sarthi Booth - Mall Complex',
      address: 'City Mall, Level 2',
      phone: '+91 98765 43214',
      distance: 1.2,
      services: ['Health Screening', 'Telemedicine', 'Medicine Pickup', 'Reports'],
      lat: 28.6125,
      lng: 77.2095
    },
    {
      id: '3',
      name: 'Sarthi Booth - Metro Station',
      address: 'Metro Station Complex',
      phone: '+91 98765 43215',
      distance: 2.1,
      services: ['Quick Check', 'Emergency Support', 'Health Advice'],
      lat: 28.6155,
      lng: 77.2105
    }
  ];

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          // Use default location (Delhi)
          setUserLocation({ lat: 28.6139, lng: 77.2090 });
        }
      );
    }

    // Load mock data
    setHospitals(mockHospitals);
    setSarthiBooths(mockSarthiBooths);
  }, []);

  const handleGetDirections = (lat: number, lng: number, name: string) => {
    if (userLocation) {
      const url = `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${lat},${lng}`;
      window.open(url, '_blank');
    } else {
      const url = `https://www.google.com/maps/search/${encodeURIComponent(name)}`;
      window.open(url, '_blank');
    }
  };

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBooths = sarthiBooths.filter(booth =>
    booth.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booth.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="hospitals" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Nearby <span className="text-purple-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Locate the nearest hospitals and Sarthi booths with real-time directions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('hospitals')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'hospitals'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              {t('findNearbyHospitals')}
            </button>
            <button
              onClick={() => setActiveTab('booths')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'booths'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              {t('sarthiBooth')}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={`Search ${activeTab === 'hospitals' ? 'hospitals' : 'Sarthi booths'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg shadow-sm"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Filter className="h-5 w-5 text-gray-400 hover:text-purple-600 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'hospitals' ? (
            filteredHospitals.map((hospital, index) => (
              <div
                key={hospital.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-gray-100`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium text-gray-700">4.8</span>
                    </div>
                    <span className="text-sm text-gray-500">{hospital.distance} km</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {hospital.name}
                </h3>
                
                <p className="text-gray-600 mb-4 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{hospital.address}</span>
                </p>

                <div className="flex items-center space-x-2 mb-4 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{hospital.phone}</span>
                </div>

                <div className="flex items-center space-x-2 mb-6 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">24/7 Available</span>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleGetDirections(hospital.lat, hospital.lng, hospital.name)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Route className="h-4 w-4" />
                    <span>Directions</span>
                  </button>
                  <button className="px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            filteredBooths.map((booth, index) => (
              <div
                key={booth.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-gray-100`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Navigation className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-500">{booth.distance} km</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {booth.name}
                </h3>
                
                <p className="text-gray-600 mb-4 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{booth.address}</span>
                </p>

                <div className="flex items-center space-x-2 mb-4 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{booth.phone}</span>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {booth.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleGetDirections(booth.lat, booth.lng, booth.name)}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Route className="h-4 w-4" />
                    <span>Directions</span>
                  </button>
                  <button className="px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Map Integration Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interactive Map Coming Soon</h3>
            <p className="text-purple-100 mb-6">
              We're working on an interactive map feature to make finding locations even easier
            </p>
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFinder;