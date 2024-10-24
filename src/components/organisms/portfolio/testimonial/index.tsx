"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight } from "@/src/animation";
import { TESTIMONIALS } from "@/src/constants/testimonials";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { RoleText } from "@/src/components/atoms/role-text";

export default function TestimonialSection() {
  const slideCount = Math.ceil(TESTIMONIALS.length / 2);

  return (
    <section className="bg-slate-200 flex items-center py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsLeft}
          viewport={{ amount: 0 }}
        >
          <RoleText text="testimonials" className="mb-16" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsRight}
          viewport={{ amount: 0 }}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1} // Keep this for responsiveness
            speed={1500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={false}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* Create two columns for each slide */}
            {Array.from({ length: slideCount }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {TESTIMONIALS.slice(index * 2, index * 2 + 2).map(
                    (testimonial, idx) => (
                      <div
                        key={idx}
                        className="flex items-start bg-white p-5 rounded-sm shadow-md border-[0.1px] border-teal-600"
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={1000}
                          height={1000}
                          className="object-cover rounded-full w-24 h-24 mr-5"
                        />
                        <div>
                          <p className="text-zinc-500">{testimonial.text}</p>
                          <h3 className="font-semibold mt-2">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
