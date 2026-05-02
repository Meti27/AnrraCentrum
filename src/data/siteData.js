import {
  FaRoad,
  FaTrain,
  FaWater,
  FaTools,
  FaTruck,
  FaSnowplow,
} from "react-icons/fa";

export const navLinks = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "fleet", href: "#fleet" },
  { key: "contact", href: "#contact" },
];

export const services = [
  {
    key: "railway",
    icon: FaTrain,
    image: "/images/tren.jpg",
  },
  {
    key: "roads",
    icon: FaRoad,
    image: "/images/cement-flatting-truck.jpg",
  },
  {
    key: "maintenance",
    icon: FaTools,
    image: "/images/road-cleaning-truck.jpg",
  },
  {
    key: "winter",
    icon: FaSnowplow,
    image: "/images/snow-clearing-truck.jpg",
  },
  {
    key: "sewer",
    icon: FaWater,
    image: "/images/pipeline-work.jpg",
  },
  {
    key: "machinery",
    icon: FaTruck,
    image: "/images/kamiona.jpg",
  },
];

export const projects = [
  {
    key: "sleeperTransport",
    categoryKey: "railwayInfra",
    image: "/images/tren.jpg",
  },
  {
    key: "railwayVehicle",
    categoryKey: "railwayWorks",
    image: "/images/railway-vehicle.jpg",
  },
  {
    key: "asphalt",
    categoryKey: "roadConstruction",
    image: "/images/cement-flatting-truck.jpg",
  },
  {
    key: "compaction",
    categoryKey: "roadWorks",
    image: "/images/cement-roller.jpg",
  },
  {
    key: "pipeline",
    categoryKey: "waterSewer",
    image: "/images/pipeline-work.jpg",
  },
  {
    key: "snow",
    categoryKey: "maintenance",
    image: "/images/snow-clearing-truck.jpg",
  },
];

export const fleetItems = [
  {
    titleKey: "heavyFleet",
    labelKey: "heavyFleetLabel",
    image: "/images/kamiona.jpg",
  },
  {
    titleKey: "loader",
    labelKey: "loaderLabel",
    image: "/images/traktor.jpg",
  },
  {
    titleKey: "roadside",
    labelKey: "roadsideLabel",
    image: "/images/traktor-per-pastrim.jpg",
  },
  {
    titleKey: "cleaning",
    labelKey: "cleaningLabel",
    image: "/images/road-cleaning-truck.jpg",
  },
  {
    titleKey: "crane",
    labelKey: "craneLabel",
    image: "/images/crane.jpg",
  },
  {
    titleKey: "railway",
    labelKey: "railwayLabel",
    image: "/images/railway-vehicle.jpg",
  },
];

export const stats = [
  { value: "2005", labelKey: "established" },
  { value: "20+", labelKey: "experience" },
  { value: "6", labelKey: "services" },
  { value: "24/7", labelKey: "readiness" },
];