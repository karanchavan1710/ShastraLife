import { Box, Typography, Avatar, IconButton, Card, CardContent } from "@mui/material";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { DiGithub } from "react-icons/di";

const teamMembers = [
  {
    id: 1,
    name: "Karan Chavan",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 2,
    name: "Aditi Sharma",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Sneha Patil",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const TeamPage = () => {
  return (
    <Box className="!w-full !max-w-6xl !mx-auto !p-6">
      <Typography variant="h4" className="!font-bold !text-center !mb-6">
        🚀 Meet Our Team
      </Typography>

      <Box className="!grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 !gap-6">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="!relative !overflow-hidden !rounded-xl !shadow-lg !transition-transform !duration-300 hover:!scale-105 !text-center"
          >
            {/* Team Member Image */}
            <Avatar
              src={member.image}
              alt={member.name}
               loading="lazy"
              className="!w-32 !h-32 !mx-auto !mt-4 !border-4 !border-gray-200"
            />

            {/* Content */}
            <CardContent>
              <Typography variant="h6" className="!font-semibold">
                {member.name}
              </Typography>
              <Typography variant="body2" className="!text-gray-600">
                {member.role}
              </Typography>

              {/* Social Icons */}
              <Box className="!flex !justify-center !gap-3 !mt-3">
                <IconButton component="a" href={member.linkedin} color="primary">
                  <LiaLinkedin />
                </IconButton>
                <IconButton component="a" href={member.twitter} color="primary">
                  <BsTwitter />
                </IconButton>
                <IconButton component="a" href={member.github} color="primary">
                  <DiGithub />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamPage;
