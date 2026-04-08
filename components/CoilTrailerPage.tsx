
import React from 'react';
import { Cog, Shield, ArrowLeft, Info, CheckCircle, Package } from 'lucide-react';

interface CoilTrailerPageProps {
  onBack: () => void;
}

const CoilTrailerPage: React.FC<CoilTrailerPageProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-navy font-bold hover:text-safety-orange transition-colors mb-8 group"
        >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Road Transport
        </button>

        <div className="relative rounded-3xl overflow-hidden h-80 mb-16 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600" 
            alt="Steel Coils Logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
          <div className="absolute bottom-10 left-10">
            <h1 className="text-5xl font-black text-white mb-2">Coiltrailers</h1>
            <p className="text-safety-orange font-bold uppercase tracking-widest">Specialized Steel Logistics</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold text-navy mb-6">What is a coiltrailer?</h2>
            <div className="prose prose-lg text-slate-600 space-y-6">
              <p>
                A coiltrailer is a specially designed trailer used for the safe and efficient transport of large steel or aluminum coils. 
                Standard trailers are not equipped to handle the concentrated weight and round shape of industrial coils, making 
                specialized coiltrailers essential for the metal industry.
              </p>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex gap-6 items-start">
                <div className="bg-navy p-3 rounded-xl text-white">
                    <Info className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-bold text-navy mb-2">The Coil Well</h4>
                    <p className="text-sm leading-relaxed">
                        The defining feature of a coiltrailer is a recessed "well" or "trough" in the center of the floor. 
                        This well allows the circular coil to sit securely inside the trailer frame, significantly lowering the 
                        center of gravity and preventing the cargo from shifting during transit.
                    </p>
                </div>
              </div>
              <p>
                At Allround Transport, we operate a large fleet of modern coiltrailers equipped with heavy-duty lashing points 
                and specialized covers to ensure your steel products remain protected from weather and road debris throughout Europe.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-navy p-8 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="text-safety-orange w-5 h-5" /> Safety First
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-safety-orange flex-shrink-0" />
                  Lowered center of gravity
                </li>
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-safety-orange flex-shrink-0" />
                  Reinforced lashing systems
                </li>
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-safety-orange flex-shrink-0" />
                  Heavy-load axle configuration
                </li>
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-safety-orange flex-shrink-0" />
                  Weatherproof covering
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-100 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Package className="text-navy w-5 h-5" /> Industries Served
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>• Steel Mills</li>
                <li>• Automotive Manufacturing</li>
                <li>• Construction Supply</li>
                <li>• Pipe & Cable Production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoilTrailerPage;
