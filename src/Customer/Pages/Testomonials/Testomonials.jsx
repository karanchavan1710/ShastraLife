import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    review: "Amazing service! Highly recommend to everyone.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    review: "Fantastic experience, the product quality is top-notch!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Mark Johnson",
    review: "The team was incredibly helpful. Would buy again!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Lisa Brown",
    review: "Fast delivery and excellent customer support.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Michael Williams",
    review: "The best purchase I’ve made this year!",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Emily Davis",
    review: "Superb quality and great attention to detail.",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Chris Wilson",
    review: "Very satisfied with my order. Will buy again!",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Sophia Martinez",
    review: "A truly fantastic experience, exceeded expectations!",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "David Clark",
    review: "Perfectly delivered, exactly as advertised.",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Olivia Thomas",
    review: "The customer service was extremely helpful and kind.",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const Testimonials = () => {
  return (
    <Box className="!mx-auto !mt-10 !p-4 md:!p-10 !bg-gradient-to-br !from-gray-800 !to-gray-900 !text-white">
      <Typography variant="h4" className="!text-center !mb-8 !font-bold !text-white !uppercase">
        What Our Customers Say
      </Typography>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {testimonials.slice(0, 5).map((testimonial, index) => (
          <Paper
            key={index}
            className="!p-3 md:!p-5 !flex !flex-col !items-center !rounded-2xl !shadow-lg !border border-white/20 !bg-white/10 !backdrop-blur-lg !transition-transform !duration-300 hover:!scale-105 hover:!shadow-xl"
          >
            <Avatar src={testimonial.img} className="!w-16 !h-16 !mb-3 !shadow-md"  loading="lazy"/>
            <Rating value={5} readOnly className="!mb-2" />
            <Typography className="!font-semibold !text-white">{testimonial.name}</Typography>
            <Typography className="!text-sm !text-gray-300 !text-center !mt-2">{testimonial.review}</Typography>
          </Paper>
        ))}
      </div>
    </Box>
  );
};

export default Testimonials;
