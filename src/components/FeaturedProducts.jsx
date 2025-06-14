import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Air Hype Max",
      price: "$189",
      originalPrice: "$249",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      colors: ["#000000", "#FFFFFF", "#FF6B6B", "#4ECDC4"]
    },
    {
      id: 2,
      name: "Street Runner Pro",
      price: "$159",
      originalPrice: "$199",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 87,
      badge: "New",
      colors: ["#2C3E50", "#E74C3C", "#F39C12", "#9B59B6"]
    },
    {
      id: 3,
      name: "Urban Legend",
      price: "$219",
      originalPrice: "$279",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 203,
      badge: "Limited",
      colors: ["#34495E", "#E67E22", "#1ABC9C", "#8E44AD"]
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-lobster text-white mb-4">
            Featured Kicks
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-chakra">
            Discover our most coveted sneakers. Each pair crafted for those who dare to stand out.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                  product.badge === 'Best Seller' ? 'bg-red-500 text-white' :
                  product.badge === 'New' ? 'bg-green-500 text-white' :
                  'bg-purple-500 text-white'
                }`}>
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500">
                <Heart size={18} />
              </button>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                    Quick View
                  </button>
                  <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-300">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>

                {/* Colors */}
                <div className="flex space-x-2 mb-4">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-white/30 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="relative z-10 max-w-7xl mx-auto mt-32 pb-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-lobster text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-chakra">
            Real stories from real sneakerheads who live and breathe the HypeKick lifestyle.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/10">
            <div className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                alt="Customer"
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Marcus Johnson</h4>
                <p className="text-gray-400 text-sm">@marcusj_kicks</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              "These Air Hype Max are absolutely insane! The quality is unmatched and I get compliments everywhere I go. HypeKick definitely knows what they're doing."
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Purchased: Air Hype Max</span>
              <span className="mx-2">•</span>
              <span>2 weeks ago</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/10">
            <div className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b372?w=60&h=60&fit=crop&crop=face"
                alt="Customer"
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Sarah Chen</h4>
                <p className="text-gray-400 text-sm">@sarahc_style</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              "Finally found my perfect sneakers! The Street Runner Pro fits like a glove and the style is exactly what I was looking for. Customer service was amazing too!"
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Purchased: Street Runner Pro</span>
              <span className="mx-2">•</span>
              <span>1 month ago</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/10">
            <div className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                alt="Customer"
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Alex Rivera</h4>
                <p className="text-gray-400 text-sm">@alexr_urban</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              "Urban Legend exceeded all my expectations. The limited edition colorway is fire and the comfort level is incredible. Worth every penny!"
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Purchased: Urban Legend</span>
              <span className="mx-2">•</span>
              <span>3 weeks ago</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400 font-chakra">Happy Customers</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
            <div className="text-gray-400 font-chakra">Average Rating</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">25K+</div>
            <div className="text-gray-400 font-chakra">Reviews</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-400 font-chakra">Satisfaction</div>
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-purple-500/30">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-lobster text-white mb-4">
              Join the HypeKick Community
            </h3>
            <p className="text-gray-300 mb-6 font-chakra">
              Share your style with #HypeKickVibes and get featured on our social media
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105">
                Follow @HypeKick
              </button>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Share Your Style
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-50" />
    </section>
  );
};

export default FeaturedProducts;