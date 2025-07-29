import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  Eye,
  Heart,
  ShoppingCart,
  Award,
  Truck,
  Shield,
  Clock,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroSlides = [
    {
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Nội Thất Sang Trọng",
      subtitle: "Cho Ngôi Nhà Của Bạn",
      description:
        "Khám phá bộ sưu tập nội thất cao cấp với thiết kế độc đáo và chất lượng vượt trội",
    },
    {
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Thiết Kế Hiện Đại",
      subtitle: "Phong Cách Đẳng Cấp",
      description:
        "Mang đến không gian sống hoàn hảo với những sản phẩm được tuyển chọn kỹ lưỡng",
    },
    {
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Chất Lượng Vượt Trội",
      subtitle: "Dịch Vụ Hoàn Hảo",
      description:
        "Cam kết mang đến trải nghiệm mua sắm tuyệt vời với dịch vụ chăm sóc khách hàng 5 sao",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Sofa Góc Luxury Milan",
      price: "25.900.000₫",
      originalPrice: "32.900.000₫",
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sofa",
      badge: "Bán Chạy",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Bàn Ăn Gỗ Sồi Tự Nhiên",
      price: "18.500.000₫",
      originalPrice: "23.500.000₫",
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Bàn Ăn",
      badge: "Mới",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Giường Ngủ King Size Premium",
      price: "22.800.000₫",
      originalPrice: "28.800.000₫",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Giường Ngủ",
      badge: "Hot",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Tủ Quần Áo 4 Cánh Hiện Đại",
      price: "15.200.000₫",
      originalPrice: "19.200.000₫",
      image:
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Tủ",
      badge: "Giảm Giá",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Bàn Làm Việc Executive",
      price: "8.900.000₫",
      originalPrice: "11.900.000₫",
      image:
        "https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Bàn Làm Việc",
      badge: "Ưu Đãi",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Ghế Thư Giãn Massage",
      price: "12.500.000₫",
      originalPrice: "16.500.000₫",
      image:
        "https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ghế",
      badge: "Premium",
      rating: 5.0,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Minh Anh",
      role: "CEO Công ty ABC",
      content:
        "Chất lượng sản phẩm tuyệt vời, thiết kế sang trọng và dịch vụ chăm sóc khách hàng rất chu đáo. Tôi đã mua toàn bộ nội thất cho văn phòng mới và rất hài lòng.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "Văn phòng 500m²",
    },
    {
      id: 2,
      name: "Trần Văn Hùng",
      role: "Chủ khách sạn 5 sao",
      content:
        "Đã hợp tác trong nhiều dự án lớn. Sản phẩm luôn đảm bảo chất lượng cao cấp và giao hàng đúng thời hạn cam kết. Đội ngũ tư vấn rất chuyên nghiệp.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "Khách sạn 200 phòng",
    },
    {
      id: 3,
      name: "Lê Thị Mai",
      role: "Kiến trúc sư nội thất",
      content:
        "Là đối tác tin cậy trong các dự án thiết kế nội thất cao cấp. Sản phẩm đa dạng, chất lượng ổn định và luôn theo kịp xu hướng thiết kế mới nhất.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "Hơn 50 dự án",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Chất Lượng Cao Cấp",
      description: "Sản phẩm được chọn lọc từ các thương hiệu uy tín thế giới",
    },
    {
      icon: Truck,
      title: "Giao Hàng Miễn Phí",
      description: "Miễn phí giao hàng và lắp đặt trong nội thành",
    },
    {
      icon: Shield,
      title: "Bảo Hành 5 Năm",
      description: "Cam kết bảo hành chính hãng lên đến 5 năm",
    },
    {
      icon: Clock,
      title: "Hỗ Trợ 24/7",
      description: "Đội ngũ tư vấn chuyên nghiệp hỗ trợ 24/7",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center" data-aos="fade-right">
              <div className="bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 font-bold text-transparent text-3xl">
                LuxuryHome
              </div>
            </div>

            <div
              className="hidden md:block"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="flex items-baseline space-x-6 ml-8">
                {" "}
                {/* Giảm space-x-8 -> space-x-6 để gọn hơn */}
                <a
                  href="#home"
                  className={`group relative font-medium hover:text-amber-600 transition-all duration-300 ${
                    scrollY > 50 ? "text-gray-800" : "text-white"
                  }`} // Sử dụng template literal, thay text-black bằng text-gray-800 cho màu tối nhẹ nhàng hơn
                >
                  Trang Chủ
                  <span className="-bottom-0.5 left-0 absolute bg-amber-600 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                </a>
                <a
                  href="#products"
                  className={`group relative font-medium hover:text-amber-600 transition-all duration-300 ${
                    scrollY > 50 ? "text-gray-800" : "text-white"
                  }`}
                >
                  Sản Phẩm
                  <span className="-bottom-0.5 left-0 absolute bg-amber-600 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                </a>
                <a
                  href="#about"
                  className={`group relative font-medium hover:text-amber-600 transition-all duration-300 ${
                    scrollY > 50 ? "text-gray-800" : "text-white"
                  }`}
                >
                  Giới Thiệu
                  <span className="-bottom-0.5 left-0 absolute bg-amber-600 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                </a>
                <a
                  href="#testimonials"
                  className={`group relative font-medium hover:text-amber-600 transition-all duration-300 ${
                    scrollY > 50 ? "text-gray-800" : "text-white"
                  }`}
                >
                  Đánh Giá
                  <span className="-bottom-0.5 left-0 absolute bg-amber-600 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                </a>
                <a
                  href="#contact"
                  className={`group relative font-medium hover:text-amber-600 transition-all duration-300 ${
                    scrollY > 50 ? "text-gray-800" : "text-white"
                  }`}
                >
                  Liên Hệ
                  <span className="-bottom-0.5 left-0 absolute bg-amber-600 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                </a>
              </div>
            </div>

            <div
              className="hidden md:block"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <button className="bg-gradient-to-r from-amber-600 hover:from-amber-700 to-amber-500 hover:to-amber-600 shadow-lg hover:shadow-xl px-6 py-3 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 transform">
                Tư Vấn Miễn Phí
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 shadow-xl backdrop-blur-lg border-t">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#home"
                className="block hover:bg-amber-50 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-600 transition-all duration-300"
              >
                Trang Chủ
              </a>
              <a
                href="#products"
                className="block hover:bg-amber-50 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-600 transition-all duration-300"
              >
                Sản Phẩm
              </a>
              <a
                href="#about"
                className="block hover:bg-amber-50 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-600 transition-all duration-300"
              >
                Giới Thiệu
              </a>
              <a
                href="#testimonials"
                className="block hover:bg-amber-50 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-600 transition-all duration-300"
              >
                Đánh Giá
              </a>
              <a
                href="#contact"
                className="block hover:bg-amber-50 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-600 transition-all duration-300"
              >
                Liên Hệ
              </a>
              <div className="px-4 py-3">
                <button className="bg-gradient-to-r from-amber-600 to-amber-500 py-3 rounded-full w-full font-semibold text-white">
                  Tư Vấn Miễn Phí
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Slider */}
      <section
        id="home"
        className="relative flex justify-center items-center h-screen overflow-hidden"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-center scale-105 transform"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `translateY(${scrollY * 0.5}px) scale(1.05)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          </div>
        ))}

        <div className="z-10 relative mx-auto px-4 max-w-5xl text-white text-center">
          <div data-aos="fade-up" data-aos-duration="1200">
            <h1 className="mb-6 font-bold text-2xl md:text-7xl leading-tight">
              {heroSlides[currentSlide].title}
              <span className="block bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 text-transparent">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
            <p className="opacity-90 mx-auto mb-10 max-w-3xl text-xl md:text-2xl leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
            <div className="flex sm:flex-row flex-col justify-center gap-6">
              <button className="group flex justify-center items-center gap-3 bg-gradient-to-r from-amber-600 hover:from-amber-700 to-amber-500 hover:to-amber-600 shadow-2xl hover:shadow-amber-500/25 px-10 py-5 rounded-full font-bold text-white text-lg hover:scale-110 transition-all duration-500 transform">
                Khám Phá Ngay
                <ArrowRight
                  size={24}
                  className="transition-transform group-hover:translate-x-1 duration-300"
                />
              </button>
              <button className="group flex justify-center items-center gap-3 hover:bg-white shadow-2xl backdrop-blur-sm px-10 py-5 border-2 border-white rounded-full font-bold text-white hover:text-gray-900 text-lg hover:scale-110 transition-all duration-500 transform">
                <Play
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                Xem Video
              </button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="top-1/2 left-8 z-20 absolute bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white hover:scale-110 transition-all -translate-y-1/2 duration-300 transform"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="top-1/2 right-8 z-20 absolute bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white hover:scale-110 transition-all -translate-y-1/2 duration-300 transform"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider Indicators */}
        <div className="bottom-8 left-1/2 z-20 absolute flex gap-3 -translate-x-1/2 transform">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-amber-400 w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group text-center hover:scale-105 transition-all duration-500 hover:transform"
              >
                <div className="flex justify-center items-center bg-gradient-to-br from-amber-100 to-amber-50 group-hover:shadow-xl mx-auto mb-4 p-6 rounded-2xl w-20 h-20 transition-all duration-500">
                  <feature.icon
                    className="text-amber-600 group-hover:scale-110 transition-transform duration-300"
                    size={32}
                  />
                </div>
                <h3 className="mb-2 font-bold text-gray-900 text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-20 text-center" data-aos="fade-up">
            <h2 className="mb-6 font-bold text-gray-900 text-5xl md:text-6xl">
              Bộ Sưu Tập{" "}
              <span className="bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 text-transparent">
                Đặc Biệt
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
              Khám phá những sản phẩm nội thất cao cấp được thiết kế đặc biệt
              với chất lượng vượt trội và phong cách hiện đại
            </p>
          </div>

          <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white shadow-lg hover:shadow-2xl border border-gray-100 rounded-3xl overflow-hidden transition-all hover:-translate-y-3 duration-500 transform"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="top-4 left-4 absolute">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                        product.badge === "Bán Chạy"
                          ? "bg-gradient-to-r from-red-500 to-red-600"
                          : product.badge === "Mới"
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : product.badge === "Hot"
                          ? "bg-gradient-to-r from-orange-500 to-orange-600"
                          : product.badge === "Premium"
                          ? "bg-gradient-to-r from-purple-500 to-purple-600"
                          : "bg-gradient-to-r from-amber-500 to-amber-600"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <div className="top-4 right-4 absolute">
                    <span className="bg-white/90 shadow-lg backdrop-blur-sm px-3 py-1 rounded-full font-semibold text-gray-800 text-sm">
                      -
                      {Math.round(
                        ((parseFloat(
                          product.originalPrice.replace(/[₫,.]/g, "")
                        ) -
                          parseFloat(product.price.replace(/[₫,.]/g, ""))) /
                          parseFloat(
                            product.originalPrice.replace(/[₫,.]/g, "")
                          )) *
                          100
                      )}
                      %
                    </span>
                  </div>

                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-3">
                      <button className="bg-white/90 hover:bg-amber-600 shadow-xl backdrop-blur-sm p-4 rounded-full text-gray-900 hover:text-white hover:scale-110 transition-all duration-300 transform">
                        <Eye size={20} />
                      </button>
                      <button className="bg-white/90 hover:bg-amber-600 shadow-xl backdrop-blur-sm p-4 rounded-full text-gray-900 hover:text-white hover:scale-110 transition-all duration-300 transform">
                        <Heart size={20} />
                      </button>
                      <button className="bg-white/90 hover:bg-amber-600 shadow-xl backdrop-blur-sm p-4 rounded-full text-gray-900 hover:text-white hover:scale-110 transition-all duration-300 transform">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-amber-50 px-3 py-1 rounded-full font-semibold text-amber-600 text-sm">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star
                        className="fill-current text-yellow-400"
                        size={16}
                      />
                      <span className="font-semibold text-gray-700 text-sm">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-4 font-bold text-gray-900 group-hover:text-amber-600 text-xl transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-bold text-amber-600 text-2xl">
                      {product.price}
                    </span>
                    <span className="text-gray-500 text-lg line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  <button className="bg-gradient-to-r from-amber-600 hover:from-amber-700 to-amber-500 hover:to-amber-600 shadow-lg hover:shadow-xl py-4 rounded-xl w-full font-bold text-white hover:scale-105 transition-all duration-300 transform">
                    Xem Chi Tiết
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="bg-gradient-to-r from-gray-900 hover:from-gray-800 to-gray-800 hover:to-gray-700 shadow-xl hover:shadow-2xl px-12 py-5 rounded-full font-bold text-white text-lg hover:scale-105 transition-all duration-300 transform">
              Xem Tất Cả Sản Phẩm
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="mb-8 font-bold text-gray-900 text-5xl md:text-6xl">
                Tại Sao Chọn{" "}
                <span className="bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 text-transparent">
                  LuxuryHome?
                </span>
              </h2>
              <p className="mb-10 text-gray-600 text-xl leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong ngành nội thất, chúng tôi cam
                kết mang đến những sản phẩm chất lượng cao nhất và dịch vụ tận
                tâm nhất cho khách hàng.
              </p>

              <div className="space-y-8">
                <div
                  className="flex items-start gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg p-4 rounded-2xl">
                    <Star className="text-amber-600" size={28} />
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900 text-2xl">
                      Chất Lượng Cao Cấp
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sản phẩm được chọn lọc kỹ càng từ các nhà sản xuất uy tín
                      trên thế giới với tiêu chuẩn chất lượng khắt khe
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg p-4 rounded-2xl">
                    <Eye className="text-amber-600" size={28} />
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900 text-2xl">
                      Thiết Kế Độc Đáo
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mỗi sản phẩm đều mang đậm dấu ấn riêng biệt và phong cách
                      hiện đại, phù hợp với xu hướng thiết kế mới nhất
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg p-4 rounded-2xl">
                    <Heart className="text-amber-600" size={28} />
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900 text-2xl">
                      Dịch Vụ Tận Tâm
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Đội ngũ tư vấn chuyên nghiệp, hỗ trợ 24/7 và chế độ bảo
                      hành uy tín lên đến 5 năm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Showroom"
                  className="shadow-2xl rounded-3xl hover:scale-105 transition-transform duration-700 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
              </div>

              <div
                className="-bottom-8 -left-8 absolute bg-gradient-to-r from-amber-600 to-amber-500 shadow-2xl p-8 rounded-2xl text-white hover:scale-105 transition-transform duration-300 transform"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="mb-2 font-bold text-4xl">15+</div>
                <div className="opacity-90 text-sm">Năm Kinh Nghiệm</div>
              </div>

              <div
                className="-top-8 -right-8 absolute bg-white shadow-2xl p-8 rounded-2xl hover:scale-105 transition-transform duration-300 transform"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="mb-2 font-bold text-amber-600 text-4xl">
                  10K+
                </div>
                <div className="text-gray-600 text-sm">Khách Hàng Hài Lòng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 text-white"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-20 text-center" data-aos="fade-up">
            <h2 className="mb-6 font-bold text-5xl md:text-6xl">
              Khách Hàng{" "}
              <span className="bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 text-transparent">
                Nói Gì
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl">
              Hơn 10,000 khách hàng đã tin tưởng và hài lòng với sản phẩm cũng
              như dịch vụ của chúng tôi
            </p>
          </div>

          <div className="gap-10 grid grid-cols-1 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-gradient-to-br from-white/10 to-white/5 shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm p-8 border border-white/10 rounded-3xl transition-all hover:-translate-y-2 duration-500 transform"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-current text-amber-400"
                      size={20}
                    />
                  ))}
                </div>

                <p className="mb-8 text-gray-300 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="border-2 border-amber-400 rounded-full w-16 h-16 object-cover"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="font-medium text-amber-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="mb-8 font-bold text-white text-5xl md:text-6xl">
              Sẵn Sàng Trang Trí Ngôi Nhà Của Bạn?
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-amber-100 text-xl leading-relaxed">
              Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận ưu đãi
              đặc biệt lên đến 30% cho đơn hàng đầu tiên
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex sm:flex-row flex-col justify-center gap-6">
              <button className="group flex justify-center items-center gap-3 bg-white hover:bg-gray-100 shadow-2xl px-12 py-5 rounded-full font-bold text-amber-600 text-lg hover:scale-110 transition-all duration-300 transform">
                Đặt Lịch Tư Vấn
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 duration-300"
                />
              </button>
              <button className="group flex justify-center items-center gap-3 hover:bg-white shadow-2xl backdrop-blur-sm px-12 py-5 border-2 border-white rounded-full font-bold text-white hover:text-amber-600 text-lg hover:scale-110 transition-all duration-300 transform">
                <Phone
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                Gọi Ngay: 0123 456 789
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-20 text-center" data-aos="fade-up">
            <h2 className="mb-6 font-bold text-gray-900 text-5xl md:text-6xl">
              Liên Hệ{" "}
              <span className="bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 text-transparent">
                Với Chúng Tôi
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trong việc tạo ra
              không gian sống hoàn hảo
            </p>
          </div>

          <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="space-y-10">
                <div className="group flex items-start gap-6">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg group-hover:shadow-xl p-4 rounded-2xl transition-shadow duration-300">
                    <MapPin className="text-amber-600" size={28} />
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900 text-2xl">
                      Địa Chỉ Showroom
                    </h3>
                    <p className="text-gray-600 text-lg">
                      123 Đường ABC, Quận 1, TP.HCM
                    </p>
                    <p className="text-gray-600 text-lg">
                      456 Đường XYZ, Quận Ba Đình, Hà Nội
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg group-hover:shadow-xl p-4 rounded-2xl transition-shadow duration-300">
                    <Phone className="text-amber-600" size={28} />
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900 text-2xl">
                      Số Điện Thoại
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Hotline: 0123 456 789
                    </p>
                    <p className="text-gray-600 text-lg">
                      Tư vấn: 0987 654 321
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg group-hover:shadow-xl p-4 rounded-2xl transition-shadow duration-300">
                    <Mail className="text-amber-600" size={28} />
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900 text-2xl">
                      Email
                    </h3>
                    <p className="text-gray-600 text-lg">info@luxuryhome.vn</p>
                    <p className="text-gray-600 text-lg">sales@luxuryhome.vn</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              <div className="bg-gradient-to-br from-gray-50 to-white shadow-2xl p-10 border border-gray-100 rounded-3xl">
                <form className="space-y-8">
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <label className="block mb-3 font-bold text-gray-700 text-sm">
                        Họ và Tên
                      </label>
                      <input
                        type="text"
                        className="px-6 py-4 border-2 border-gray-200 focus:border-transparent rounded-xl focus:ring-2 focus:ring-amber-500 w-full text-lg transition-all duration-300"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label className="block mb-3 font-bold text-gray-700 text-sm">
                        Số Điện Thoại
                      </label>
                      <input
                        type="tel"
                        className="px-6 py-4 border-2 border-gray-200 focus:border-transparent rounded-xl focus:ring-2 focus:ring-amber-500 w-full text-lg transition-all duration-300"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-3 font-bold text-gray-700 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-6 py-4 border-2 border-gray-200 focus:border-transparent rounded-xl focus:ring-2 focus:ring-amber-500 w-full text-lg transition-all duration-300"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div>
                    <label className="block mb-3 font-bold text-gray-700 text-sm">
                      Nội Dung
                    </label>
                    <textarea
                      rows={5}
                      className="px-6 py-4 border-2 border-gray-200 focus:border-transparent rounded-xl focus:ring-2 focus:ring-amber-500 w-full text-lg transition-all duration-300 resize-none"
                      placeholder="Nhập nội dung cần tư vấn"
                    ></textarea>
                  </div>

                  <button className="bg-gradient-to-r from-amber-600 hover:from-amber-700 to-amber-500 hover:to-amber-600 shadow-xl hover:shadow-2xl py-5 rounded-xl w-full font-bold text-white text-lg hover:scale-105 transition-all duration-300 transform">
                    Gửi Yêu Cầu Tư Vấn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-12 grid grid-cols-1 md:grid-cols-4 mb-12">
            <div data-aos="fade-up" data-aos-delay="0">
              <div className="bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 mb-6 font-bold text-transparent text-3xl">
                LuxuryHome
              </div>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Nội thất cao cấp cho ngôi nhà hoàn hảo của bạn. Chúng tôi cam
                kết mang đến chất lượng tốt nhất.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full hover:scale-110 transition-all duration-300 transform"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full hover:scale-110 transition-all duration-300 transform"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full hover:scale-110 transition-all duration-300 transform"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="mb-6 font-bold text-amber-400 text-xl">
                Sản Phẩm
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Sofa Cao Cấp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Bàn Ăn Luxury
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Giường Ngủ Premium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Tủ Quần Áo
                  </a>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="mb-6 font-bold text-amber-400 text-xl">Dịch Vụ</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Tư Vấn Thiết Kế
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Giao Hàng Lắp Đặt
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Bảo Hành 5 Năm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 text-lg transition-colors duration-300"
                  >
                    Hỗ Trợ 24/7
                  </a>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="mb-6 font-bold text-amber-400 text-xl">Liên Hệ</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>123 Đường ABC, Q1, HCM</li>
                <li>456 Đường XYZ, Ba Đình, HN</li>
                <li>Hotline: 0123 456 789</li>
                <li>Email: info@luxuryhome.vn</li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 border-gray-700 border-t text-gray-300 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-lg">
              &copy; 2025 LuxuryHome. Tất cả quyền được bảo lưu. Thiết kế bởi
              đội ngũ chuyên nghiệp.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
