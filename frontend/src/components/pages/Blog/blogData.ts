import dogSpecies from "../../../assets/img/blogDogIcon.png";
import catSpecies from "../../../assets/img/blogCatIcon.png";
import otherSpecies from "../../../assets/img/blogOtherIcon.png";
import catOwnerImg from "../../../assets/img/petOwnerCat2.png";

import houseIcon from "../../../assets/img/icons/houseIcon.png";
import foodIcon from "../../../assets/img/icons/foodIcon.png";
import doctorIcon from "../../../assets/img/icons/doctorIcon.png";
import calendarIcon from "../../../assets/img/icons/calendarIcon.png";
import timeIcon from "../../../assets/img/icons/timeIcon.png";
import petIcon from "../../../assets/img/icons/petIcon.png";

export const blogImages = {
  catOwnerImg,
};

export const species = [
  {
    name: "Dog",
    image: dogSpecies,
    link: "/dog",
  },
  {
    name: "Cat",
    image: catSpecies,
    link: "/cat",
  },
  {
    name: "Others",
    image: otherSpecies,
    link: "/others",
  },
];

export const ownerTips = [
  {
    icon: houseIcon,
    title: "1. Prepare Your Home",
    description: "Make your space safe, clean and comfortable for your new pet.",
  },
  {
    icon: foodIcon,
    title: "2. Get Essentials",
    description: "Gather the basic food, water, bed, toys and hygiene supplies.",
  },
  {
    icon: doctorIcon,
    title: "3. Find a Vet",
    description: "Choose a trusted veterinarian and schedule a first visit.",
  },
  {
    icon: timeIcon,
    title: "4. Be Patient",
    description: "Give your pet time to adjust to their new home and routine.",
  },
  {
    icon:houseIcon,
    title: "5. Create a Routine",
    description: "Set regular times for meals, walks and rest to build stability.",
  },
  {
    icon: petIcon,
    title: "6. Build a Bond",
    description: "Spend quality time, show love and build trust every day.",
  },
];