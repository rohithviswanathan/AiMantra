import WebIcon from "@mui/icons-material/LaptopMac";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import CampaignIcon from "@mui/icons-material/Campaign";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import BrushIcon from "@mui/icons-material/Brush";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const services = [
    {
      icon: <WebIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
      title: "Web Development",
      text: "Your vision, our expertise - the perfect match for a standout online presence!",
      path: "/services/web-development"
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
      title: "Web Designing",
      text: "Your journey to a visually appealing and user-friendly website begins here!",
      path: "/services/web-designing"
    },
    {
      icon: <AndroidIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
      title: "Android Development",
      text: "Where creativity meets code for unparalleled mobile experiences. Your app journey starts here!",
      path: "/services/mobileapp-development"
    },
    {
      icon: <AppleIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
      title: "iOS Development",
      text: "Your journey to the top of the App Store starts here - where expertise meets excellence in iOS development!",
      path: "/services/mobileapp-development"
    },
    {
      icon: <CampaignIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
      title: "Digital Marketing",
      text: "Where innovation meets impact. Your brand, our strategy - a digital synergy like never before!",
      path: "/services/digital-marketing"
    },
    {
      icon: <ContentPasteIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
      title: "Content Marketing",
      text: "At AiMantra, we provide tailored Social Media Marketing services to elevate your brand's online presence, engagement, and results.",
      path: "/services/content-marketing"
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40, color: "#0a2540" }} />,
      title: "UI/UX Design",
      text: "Designing the future with flair! Elevate user experiences and captivate audiences with our expert UI/UX designers.",
      path: "/services/graphic-designing"
    },
];


export const processSteps = [
    {
      step: "We Access",
      icon: <SearchIcon sx={{ color: "#fff" }} />,
      text: "We do end-to-end analysis of a project's scope, scale, deliverables, objectives, and impacts. It also involves assessing the project's stakeholders, risks, timeline, and impacted groups and processes.",
    },
    {
      step: "We Design",
      icon: <DesignServicesIcon sx={{ color: "#fff" }} />,
      text: "We design next-generation UI/UX as per the assessment and by considering targeted audience.",
    },
    {
      step: "We Develop",
      icon: <CodeIcon sx={{ color: "#fff" }} />,
      text: "We manage the end-to-end deployment of the project and monitor continuously for zero downtime.",
    },
    {
      step: "We Manage",
      icon: <ManageAccountsIcon sx={{ color: "#fff" }} />,
      text: "After deploying the project successfully, we manage it completely to provide end-to-end support as per needed.",
    },
];
