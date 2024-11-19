import React from 'react';
import { Timeline } from './components/Timeline';
import { FeatureCard } from './components/FeatureCard';
import { Gallery } from './components/Gallery';
import { milestones } from './data/milestones';
import { features } from './data/features';
import { galleryItems } from './data/gallery';
import { MapPin, Sparkles, ArrowDown, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5 bg-cover bg-center fixed" />
      <div className="relative">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="relative w-[95%] mx-auto mb-12 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Transforming Ideas into Reality
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                We're a passionate team of innovators dedicated to pushing the boundaries of what's possible. 
                Since our inception, we've been on a mission to revolutionize the industry through cutting-edge 
                technology and unwavering commitment to excellence.
              </p>
              <div className="flex justify-center items-center gap-2 text-blue-400 animate-bounce">
                <ArrowDown className="h-6 w-6" />
                <span className="font-medium">Scroll to explore our journey</span>
                <ArrowDown className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="w-full px-4 py-20">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the principles that drive our success and shape our approach to innovation and excellence.
            </p>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <div className="mb-16 text-center">
            <div className="mb-6 flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition duration-200" />
                <div className="relative bg-white p-4 rounded-full">
                  <MapPin className="h-12 w-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" />
                </div>
              </div>
            </div>
            <h2 className="mb-6 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              How It All Started
            </h2>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-75 blur" />
              <p className="relative mx-auto max-w-2xl text-lg text-gray-700 bg-white/90 rounded-lg p-6 shadow-xl">
                From a small team with big dreams to an industry leader, our journey has been 
                filled with innovation, challenges, and remarkable achievements. Here's how we've 
                grown over the years
                <Sparkles className="inline-block ml-2 h-5 w-5 text-yellow-500" />
              </p>
            </div>
          </div>
          
          <Timeline milestones={milestones} />
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mb-16 text-center">
            <div className="mb-6 flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition duration-200" />
                <div className="relative bg-white p-4 rounded-full">
                  <Award className="h-12 w-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" />
                </div>
              </div>
            </div>
            <h2 className="mb-6 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Achievements
            </h2>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-75 blur" />
              <p className="relative mx-auto max-w-2xl text-lg text-gray-700 bg-white/90 rounded-lg p-6 shadow-xl">
                Explore our proudest moments, awards, and milestone celebrations that mark our journey of excellence
                <Sparkles className="inline-block ml-2 h-5 w-5 text-yellow-500" />
              </p>
            </div>
          </div>

          <Gallery items={galleryItems} />
        </div>
      </div>
    </div>
  );
}

export default App;