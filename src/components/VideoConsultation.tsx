import React, { useState, useRef, useEffect } from 'react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff,
  Monitor,
  Settings,
  Users,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoConsultation: React.FC = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isInCall, setIsInCall] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Get user media for video preview
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: true 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    if (isVideoOn) {
      startVideo();
    }
  }, [isVideoOn]);

  const handleStartCall = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setIsInCall(true);
    }, 2000);
  };

  const handleEndCall = () => {
    setIsInCall(false);
    setIsConnecting(false);
  };

  return (
    <section id="video-consultation" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Video <span className="text-blue-600">Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with healthcare professionals through secure video calls
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Interface */}
          <div className="relative">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
              {isVideoOn ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <div className="text-center">
                    <VideoOff className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Camera is off</p>
                  </div>
                </div>
              )}
              
              {/* Call Status Overlay */}
              {isConnecting && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p>Connecting to doctor...</p>
                  </div>
                </div>
              )}

              {isInCall && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Call in progress</span>
                </div>
              )}

              {/* Doctor's Video (when in call) */}
              {isInCall && (
                <div className="absolute top-4 right-4 w-32 h-24 bg-gray-700 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/5327664/pexels-photo-5327664.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-4 rounded-full transition-all duration-300 ${
                  isVideoOn 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setIsAudioOn(!isAudioOn)}
                className={`p-4 rounded-full transition-all duration-300 ${
                  isAudioOn 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              </button>

              <button
                onClick={isInCall || isConnecting ? handleEndCall : handleStartCall}
                disabled={isConnecting}
                className={`p-4 rounded-full transition-all duration-300 ${
                  isInCall || isConnecting
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isInCall || isConnecting ? <PhoneOff className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
              </button>

              <button className="p-4 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300">
                <Monitor className="h-5 w-5" />
              </button>

              <button className="p-4 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Telemedicine Made Simple
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Experience healthcare consultations from the comfort of your home with our secure video platform.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Video,
                  title: 'HD Video Quality',
                  description: 'Crystal clear video calls for better diagnosis'
                },
                {
                  icon: Users,
                  title: 'Secure & Private',
                  description: 'End-to-end encrypted consultations'
                },
                {
                  icon: Calendar,
                  title: 'Easy Scheduling',
                  description: 'Book appointments with your preferred doctors'
                },
                {
                  icon: Monitor,
                  title: 'Screen Sharing',
                  description: 'Share test results and medical documents'
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start space-x-4 animate-fade-in-right`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoConsultation;