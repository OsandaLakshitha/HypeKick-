import React from 'react';
import { ShoppingBag, ArrowRight, Truck, RefreshCw, Zap } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-800/40 via-gray-900/60 to-black/80 rounded-3xl p-12 md:p-20 border border-gray-700/50 backdrop-blur-xl overflow-hidden">
          {/* Inner background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-transparent to-gray-800/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl animate-pulse delay-500" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-6xl md:text-7xl font-lobster text-white mb-6 leading-tight">
              Ready to Step Up?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-chakra max-w-3xl mx-auto">
              Don't just walk the streets—own them. 
            </p>
            <p className="text-lg text-gray-300 mb-12 font-chakra max-w-2xl mx-auto">
              Join thousands of sneakerheads who've elevated their style with HypeKick. Limited drops, exclusive designs, and the freshest kicks await.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                <span className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm text-white rounded-full text-lg font-semibold border border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600">
                Get Early Access
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                    <Truck className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Free Shipping</h4>
                <p className="text-gray-300 text-sm">On orders over $150</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                    <RefreshCw className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Easy Returns</h4>
                <p className="text-gray-300 text-sm">30-day return policy</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-500/30">
                    <Zap className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Exclusive Drops</h4>
                <p className="text-gray-300 text-sm">First access to new releases</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-lobster text-white mb-4">
                Stay in the Loop
              </h3>
              <p className="text-gray-300 mb-6 font-chakra">
                Get notified about exclusive drops, sales, and the latest sneaker trends
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 rounded-full border border-gray-600/30 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm text-white rounded-full font-semibold border border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Trusted by 50K+ customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <span className="text-sm">Secure checkout</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                <span className="text-sm">Fast worldwide shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts link for Lobster and Chakra Petch fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Chakra+Petch:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default CallToActionSection;