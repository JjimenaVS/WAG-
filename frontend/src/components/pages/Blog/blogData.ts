import dogSpecies from "../../../assets/img/blogDogIcon.png";
import catSpecies from "../../../assets/img/blogCatIcon.png";
import otherSpecies from "../../../assets/img/blogOtherIcon.png";
import catOwnerImg from "../../../assets/img/petOwnerCat2.png";

import houseIcon from "../../../assets/img/icons/houseIcon.png";
import foodIcon from "../../../assets/img/icons/foodIcon.png";
import doctorIcon from "../../../assets/img/icons/doctorIcon.png";
import timeIcon from "../../../assets/img/icons/timeIcon.png";
import petIcon from "../../../assets/img/icons/petIcon.png";

import dogHero from "../../../assets/img/dogHero.png";
import catHero from "../../../assets/img/catHero.png";
import othersHero from "../../../assets/img/othersHero.png";

import SmallPetCareBasics from "../../../assets/img/SmallPetCareBasics.jpg"
import RabbitCareBasics from "../../../assets/img/RabbitCareBasics.jpg"
import MaintainingaHealthyAquarium from "../../../assets/img/MaintainingaHealthyAquarium.jpg"
import CaringforPetBirds from "../../../assets/img/CaringforPetBirds.jpg"
import BasicRabbitCare from "../../../assets/img/BasicRabbitCare.jpg"
import TemperatureAndHabitatControl from "../../../assets/img/TemperatureAndHabitatControl.jpg"
import HamsterCareBasics from "../../../assets/img/HamsterCareBasics.jpg"
import ReptileCareEssentials from "../../../assets/img/ReptileCareEssentials.jpg"
import GuineaPigCare from "../../../assets/img/GuineaPigCare.jpg"
import SafeHandlingForSmallPets from "../../../assets/img/SafeHandlingForSmallPets.jpg"
import FeedingSmallAnimals from "../../../assets/img/FeedingSmallAnimals.jpg"
import CleaningPetHabitats from "../../../assets/img/CleaningPetHabitats.jpg"

import UnderstandingCatBehavior from "../../../assets/img/UnderstandingCatBehavior.jpg"
import CatCareBasics from "../../../assets/img/CatCareBasics.jpg"
import IndoorEnrichmentIdeas from "../../../assets/img/IndoorEnrichmentIdeas.jpg"
import LitterBoxCare from "../../../assets/img/LitterBoxCare.jpg"
import CatGroomingBasics from "../../../assets/img/CatGroomingBasics.jpg"
import CatHydrationTips from "../../../assets/img/CatHydrationTips.jpg"
import IntroducingaNewCat from "../../../assets/img/IntroducingaNewCat.jpg"
import CatScratchingNeeds from "../../../assets/img/CatScratchingNeeds.jpg"
import SeniorCatCare from "../../../assets/img/SeniorCatCare.jpg"


import PreventingHeatstroke from "../../../assets/img/PreventingHeatstroke.jpg"
import DailyExerciseNeeds from "../../../assets/img/DailyExerciseNeeds.jpg"
import UnderstandingDogAnxiety from "../../../assets/img/UnderstandingDogAnxiety.jpg"
import ToxicFoodsforDogs from "../../../assets/img/Toxic Foods for Dogs.jpg"
import DogGroomingBasics from "../../../assets/img/DogGroomingBasics.jpg"
import PuppyTrainingTips from "../../../assets/img/PuppyTrainingTips.jpg"
import DogDentalCare from "../../../assets/img/DogDentalCare.jpg"
import SafeWalksforDogs from "../../../assets/img/SafeWalksforDogs.jpg"
import DogSocialization from "../../../assets/img/DogSocialization.jpg"
import SeniorDogCare from "../../../assets/img/SeniorDogCare.jpg"

export const blogImages = {
  catOwnerImg,
};

export const speciesHeroImages = {
  dog: dogHero,
  cat: catHero,
  others: othersHero,
};

export const species = [
  {
    name: "Dog",
    image: dogSpecies,
    link: "/blog/dog",
  },
  {
    name: "Cat",
    image: catSpecies,
    link: "/blog/cat",
  },
  {
    name: "Others",
    image: otherSpecies,
    link: "/blog/others",
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
    icon: houseIcon,
    title: "5. Create a Routine",
    description: "Set regular times for meals, walks and rest to build stability.",
  },
  {
    icon: petIcon,
    title: "6. Build a Bond",
    description: "Spend quality time, show love and build trust every day.",
  },
];

export const articles = [
  {
    slug: "toxic-foods-for-dogs",
    species: "dog",
    title: "Toxic Foods for Dogs",
    image: ToxicFoodsforDogs,
    description:
      "Some everyday foods can be dangerous for dogs, like chocolate, grapes, and onions. Knowing what to avoid helps prevent serious health problems.",
    content: [
      "Some everyday foods can be dangerous for dogs and may cause digestive problems, poisoning, or serious health complications.",
      "Chocolate, grapes, raisins, onions, garlic, alcohol, caffeine, and xylitol are examples of foods that should be avoided because they may affect the digestive system, nervous system, liver, kidneys, or general health of the dog.",
      "If your dog eats something potentially toxic, it is important to contact a veterinarian as soon as possible. Quick attention can help reduce the risk of serious complications.",
      "Prevention is one of the best ways to protect your pet. Keep unsafe foods away from your dog, avoid giving leftovers without checking ingredients, and teach family members which foods are not safe.",
    ],
  },
  {
    slug: "understanding-dog-anxiety",
    species: "dog",
    title: "Understanding Dog Anxiety",
    image: UnderstandingDogAnxiety,
    description:
      "Dogs can experience anxiety due to separation, noise, or changes in routine. Identifying the signs early helps you support their emotional well-being.",
    content: [
      "Dogs can experience anxiety due to separation, loud noises, unfamiliar spaces, or sudden changes in their routine.",
      "Some signs of anxiety include excessive barking, hiding, pacing, shaking, destructive behavior, loss of appetite, or constantly following their owner around the house.",
      "Understanding the cause of anxiety is important because each dog may react differently. Some dogs need more structure, while others may need gradual exposure, enrichment, or professional guidance.",
      "Creating a stable routine, offering positive reinforcement, providing safe spaces, and consulting a veterinarian can help improve your dog’s emotional well-being.",
    ],
  },
  {
    slug: "daily-exercise-needs",
    species: "dog",
    title: "Daily Exercise Needs",
    image: DailyExerciseNeeds,
    description:
      "Regular exercise keeps your dog healthy, active, and mentally stimulated. The amount varies depending on breed and age.",
    content: [
      "Daily exercise is important for a dog’s physical and mental health.",
      "The amount of exercise depends on the dog’s breed, age, size, energy level, and health condition. Some dogs need long walks and active play, while others require shorter and calmer activities.",
      "Walks, games, training, and outdoor activities help reduce stress, prevent boredom, and support a healthy lifestyle.",
      "Exercise should always be adapted to your dog’s needs. Puppies, senior dogs, and dogs with health conditions may need a different routine than young and active dogs.",
    ],
  },
  {
    slug: "preventing-heatstroke",
    species: "dog",
    title: "Preventing Heatstroke",
    image: PreventingHeatstroke,
    description:
      "Dogs are sensitive to high temperatures and can overheat quickly. Provide water, shade, and avoid walks during peak heat hours.",
    content: [
      "Dogs can overheat quickly, especially during hot weather, intense physical activity, or when they stay in places without enough ventilation.",
      "To reduce the risk of heatstroke, provide fresh water, shade, and avoid walking your dog during the hottest hours of the day.",
      "Signs of heatstroke may include excessive panting, weakness, drooling, vomiting, confusion, or collapse.",
      "If you suspect heatstroke, move your dog to a cooler place and contact a veterinarian immediately. Acting fast can save your dog’s life.",
    ],
  },{
    slug: "dog-grooming-basics",
    species: "dog",
    title: "Dog Grooming Basics",
    image: DogGroomingBasics,
    description:
      "Regular grooming helps keep your dog clean, comfortable, and healthy while preventing skin and coat problems.",
    content: [
      "Grooming is more than appearance; it helps maintain skin, coat, ears, and nails in good condition.",
      "Brushing removes loose hair and helps prevent tangles, especially in long-haired breeds.",
      "Bathing, nail trimming, and ear cleaning should be done according to each dog’s needs.",
    ],
  },
  {
    slug: "puppy-training-tips",
    species: "dog",
    title: "Puppy Training Tips",
    image: PuppyTrainingTips,
    description:
      "Early training helps puppies learn routines, social skills, and basic commands in a positive way.",
    content: [
      "Puppy training should begin with simple routines, patience, and positive reinforcement.",
      "Basic commands such as sit, stay, and come help build communication between owner and puppy.",
      "Consistency is important because puppies learn through repetition and clear limits.",
    ],
  },
  {
    slug: "dog-dental-care",
    species: "dog",
    title: "Dog Dental Care",
    image: DogDentalCare,
    description:
      "Dental care is essential to prevent bad breath, gum problems, and other health issues in dogs.",
    content: [
      "Dental care helps prevent plaque, tartar, gum disease, and bad breath.",
      "Brushing your dog’s teeth with pet-safe toothpaste can support oral health.",
      "Regular veterinary checkups help detect dental problems early.",
    ],
  },
  {
    slug: "safe-walks-for-dogs",
    species: "dog",
    title: "Safe Walks for Dogs",
    image: SafeWalksforDogs,
    description:
      "Safe walks require proper equipment, hydration, and attention to your dog’s behavior and surroundings.",
    content: [
      "Walks are important for exercise, exploration, and mental stimulation.",
      "Use a comfortable collar or harness and keep your dog under control in public spaces.",
      "Avoid hot pavement, unsafe areas, and situations that may cause stress or aggression.",
    ],
  },
  {
    slug: "dog-socialization",
    species: "dog",
    title: "Dog Socialization",
    image: DogSocialization,
    description:
      "Socialization helps dogs feel more confident around people, animals, places, and new situations.",
    content: [
      "Socialization allows dogs to become familiar with different people, animals, sounds, and environments.",
      "Positive experiences help reduce fear and improve behavior.",
      "Socialization should be gradual and adapted to each dog’s personality.",
    ],
  },
  {
    slug: "senior-dog-care",
    species: "dog",
    title: "Senior Dog Care",
    image: SeniorDogCare,
    description:
      "Older dogs need special attention, including gentle exercise, regular checkups, and comfortable routines.",
    content: [
      "Senior dogs may need changes in diet, exercise, and daily routine.",
      "Regular veterinary visits are important to detect age-related conditions early.",
      "Comfortable resting areas and gentle activity help maintain quality of life.",
    ],
  },
  /* CAT ARTICLES */
  {
    slug: "cat-care-basics",
    species: "cat",
    title: "Cat Care Basics",
    image: CatCareBasics,
    description:
      "Learn basic care tips to keep your cat healthy, comfortable, and safe at home.",
    content: [
      "Cats need a clean, safe, and calm environment to feel comfortable.",
      "Fresh water, appropriate food, a clean litter box, and regular veterinary care are essential for their well-being.",
      "Cats also need enrichment. Toys, scratching posts, climbing areas, and hiding spaces help support their natural behavior.",
      "A predictable routine can help reduce stress, especially when there are changes at home or new people, pets, or spaces.",
    ],
  },
  {
    slug: "understanding-cat-behavior",
    species: "cat",
    title: "Understanding Cat Behavior",
    image: UnderstandingCatBehavior,
    description:
      "Cats communicate through body language, sounds, and habits. Learning these signs helps improve your relationship with them.",
    content: [
      "Cats communicate through body posture, tail movement, ear position, sounds, and daily habits.",
      "Understanding these signs can help you recognize when your cat feels relaxed, stressed, playful, afraid, or uncomfortable.",
      "For example, hiding, avoiding contact, sudden aggression, or changes in eating and litter box habits may indicate stress or health problems.",
      "Observing your cat carefully and respecting their space can help build trust and improve your relationship.",
    ],
  },
  {
    slug: "indoor-enrichment-ideas",
    species: "cat",
    title: "Indoor Enrichment Ideas",
    image: IndoorEnrichmentIdeas,
    description:
      "Indoor cats need stimulation to stay active and happy. Toys, climbing spaces, and playtime help prevent boredom.",
    content: [
      "Indoor cats need mental and physical stimulation.",
      "Toys, scratching posts, climbing spaces, and window views can improve their environment.",
      "Daily playtime helps prevent boredom and supports healthy behavior.",
    ],
  },
  {
    slug: "litter-box-care",
    species: "cat",
    title: "Litter Box Care",
    image: LitterBoxCare,
    description:
      "A clean and accessible litter box helps prevent stress and supports good hygiene for your cat.",
    content: [
      "Cats prefer clean and accessible litter boxes.",
      "The litter box should be cleaned frequently and placed in a quiet area.",
      "Changes in litter box habits may indicate stress or health issues.",
    ],
  },
  {
    slug: "cat-grooming-basics",
    species: "cat",
    title: "Cat Grooming Basics",
    image: CatGroomingBasics,
    description:
      "Regular brushing, nail care, and coat observation help keep cats comfortable and healthy.",
    content: [
      "Cats groom themselves, but many still benefit from regular brushing.",
      "Brushing helps remove loose hair and reduce hairballs.",
      "Checking nails, ears, and coat condition can help detect problems early.",
    ],
  },
  {
    slug: "cat-hydration-tips",
    species: "cat",
    title: "Cat Hydration Tips",
    image: CatHydrationTips,
    description:
      "Good hydration supports kidney and urinary health. Water fountains and wet food can help increase intake.",
    content: [
      "Hydration is important for kidney and urinary health in cats.",
      "Some cats prefer moving water, so fountains can encourage drinking.",
      "Wet food can also contribute to daily water intake.",
    ],
  },
  {
    slug: "introducing-a-new-cat",
    species: "cat",
    title: "Introducing a New Cat",
    image: IntroducingaNewCat,
    description:
      "Introducing a new cat takes patience, space, and gradual contact to reduce stress and conflict.",
    content: [
      "Introducing a new cat should be done gradually.",
      "Separate spaces, scent exchange, and controlled meetings can reduce stress.",
      "Patience is key because cats need time to adapt.",
    ],
  },
  {
    slug: "cat-scratching-needs",
    species: "cat",
    title: "Cat Scratching Needs",
    image: CatScratchingNeeds,
    description:
      "Scratching is a natural behavior that helps cats stretch, mark territory, and maintain their claws.",
    content: [
      "Scratching is a normal and healthy behavior for cats.",
      "It helps them stretch, mark territory, and maintain their claws.",
      "Providing scratching posts can protect furniture and support natural behavior.",
    ],
  },
  {
    slug: "senior-cat-care",
    species: "cat",
    title: "Senior Cat Care",
    image: SeniorCatCare,
    description:
      "Older cats need regular health checks, comfortable spaces, and routines adapted to their changing needs.",
    content: [
      "Senior cats may need changes in diet, activity, and environment.",
      "Regular veterinary care helps detect age-related conditions.",
      "Soft resting areas and easy access to food, water, and litter boxes can improve comfort.",
    ],
  },

  /* OTHER PETS ARTICLES */
  {
    slug: "rabbit-care-basics",
    species: "others",
    title: "Rabbit Care Basics",
    image: RabbitCareBasics,
    description:
      "Rabbits need proper food, space, hygiene, and gentle handling to stay healthy and comfortable.",
    content: [
      "Rabbits need a safe space, proper food, clean water, and regular hygiene care.",
      "A rabbit’s diet should include hay as an essential part of daily feeding, along with appropriate fresh foods and veterinarian-approved pellets.",
      "They also need space to move, explore, and exercise. Keeping them in small spaces for long periods can affect their physical and emotional health.",
      "Gentle handling is important because rabbits can be sensitive and may become stressed if they are held incorrectly.",
    ],
  },
  {
    slug: "small-pet-care-basics",
    species: "others",
    title: "Small Pet Care Basics",
    image: SmallPetCareBasics,
    description:
      "Different pets have different care needs. Learn how to provide a safe and appropriate environment.",
    content: [
      "Pets such as rabbits, birds, reptiles, and small mammals have specific care needs.",
      "Their diet, housing, temperature, hygiene, and handling requirements may vary greatly depending on the species.",
      "Before adopting an exotic or less common pet, it is important to learn about its needs and consult a specialist when necessary.",
      "Good care begins with understanding the animal’s natural behavior and providing an environment that supports its health and comfort.",
    ],
  },  {
    slug: "maintaining-a-healthy-aquarium",
    species: "others",
    title: "Maintaining a Healthy Aquarium",
    image: MaintainingaHealthyAquarium,
    description:
      "Fish depend on clean water and stable conditions to survive. Regular tank maintenance and proper feeding are essential.",
    content: [
      "Fish depend on stable water conditions to stay healthy.",
      "Regular water testing, cleaning, and proper filtration are important.",
      "Overfeeding and poor maintenance can quickly affect fish health.",
    ],
  },
  {
    slug: "caring-for-pet-birds",
    species: "others",
    title: "Caring for Pet Birds",
    image: CaringforPetBirds,
    description:
      "Birds require mental stimulation, a proper diet, and social interaction. A clean cage and space to move are important.",
    content: [
      "Pet birds need a clean cage, proper food, and mental stimulation.",
      "Social interaction is important for their emotional well-being.",
      "Toys, perches, and safe movement space help support natural behaviors.",
    ],
  },
  {
    slug: "basic-rabbit-care",
    species: "others",
    title: "Basic Rabbit Care",
    image: BasicRabbitCare,
    description:
      "Rabbits need a balanced diet, space to move, and gentle handling. Regular care keeps them healthy and active.",
    content: [
      "Rabbits need a safe space, clean water, and a diet rich in hay.",
      "They require daily movement and gentle handling.",
      "Regular care helps prevent stress and illness.",
    ],
  },
  {
    slug: "temperature-and-habitat-control",
    species: "others",
    title: "Temperature and Habitat Control",
    image: TemperatureAndHabitatControl,
    description:
      "Small animals are sensitive to temperature and environmental changes. Keeping a stable habitat is key.",
    content: [
      "Small animals and exotic pets can be sensitive to temperature changes.",
      "Their habitat should be stable, clean, and appropriate for the species.",
      "Monitoring temperature and humidity helps prevent health problems.",
    ],
  },
  {
    slug: "hamster-care-basics",
    species: "others",
    title: "Hamster Care Basics",
    image: HamsterCareBasics,
    description:
      "Hamsters need proper bedding, a safe enclosure, exercise opportunities, and gentle interaction.",
    content: [
      "Hamsters need a secure enclosure with appropriate bedding.",
      "Exercise wheels, tunnels, and hiding places support their natural behavior.",
      "Gentle handling helps reduce stress.",
    ],
  },
  {
    slug: "reptile-care-essentials",
    species: "others",
    title: "Reptile Care Essentials",
    image: ReptileCareEssentials,
    description:
      "Reptiles need specific lighting, temperature, humidity, and diet according to their species.",
    content: [
      "Reptiles have specific environmental needs.",
      "Lighting, temperature, humidity, and diet must match the species.",
      "Specialized care is important to keep reptiles healthy.",
    ],
  },
  {
    slug: "guinea-pig-care",
    species: "others",
    title: "Guinea Pig Care",
    image: GuineaPigCare,
    description:
      "Guinea pigs are social animals that need companionship, hay, vitamin C, and space to move.",
    content: [
      "Guinea pigs are social animals and benefit from companionship.",
      "They need hay, fresh water, vitamin C, and appropriate vegetables.",
      "A spacious and clean enclosure supports their health.",
    ],
  },
  {
    slug: "safe-handling-small-pets",
    species: "others",
    title: "Safe Handling for Small Pets",
    image: SafeHandlingForSmallPets,
    description:
      "Small pets can be fragile, so gentle handling helps prevent stress, fear, and injuries.",
    content: [
      "Small pets should be handled gently and carefully.",
      "Improper handling can cause stress or injury.",
      "Learning the correct way to hold each species helps protect their well-being.",
    ],
  },
  {
    slug: "feeding-small-animals",
    species: "others",
    title: "Feeding Small Animals",
    image: FeedingSmallAnimals,
    description:
      "Different small animals need different diets. Understanding their food needs helps prevent health problems.",
    content: [
      "Each small animal species has different nutritional needs.",
      "Some require hay, others seeds, pellets, insects, or fresh vegetables.",
      "Incorrect feeding can cause digestive and health problems.",
    ],
  },
  {
    slug: "cleaning-pet-habitats",
    species: "others",
    title: "Cleaning Pet Habitats",
    image: CleaningPetHabitats,
    description:
      "Clean habitats reduce odors, stress, and disease risks for small animals, birds, fish, and reptiles.",
    content: [
      "Clean habitats are essential for preventing illness and stress.",
      "Food remains, waste, and dirty bedding should be removed regularly.",
      "The cleaning routine depends on the species and type of enclosure.",
    ],
  },
];
