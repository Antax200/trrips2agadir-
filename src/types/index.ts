export interface Tour {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  duration: string;
  price: number;
  category: 'Tours' | 'Excursions' | 'Activites';
  imageUrl: string;
  gallery: string[];
  highlights: string[];
  included: string[];
  itinerary: { time: string; activity: string }[];
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  tourName: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'safety' | 'equipment' | 'experience' | 'other';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BookingFormData {
  tourId: string;
  date: Date;
  participants: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  tourId: string;
  tourTitle: string;
}

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Agadir Boat Trip',
    slug: 'sahara-desert-adventure',
    description: 'Enjoy a full day at sea, cruising along the stunning Agadir coast. Indulge in a delicious Moroccan lunch, bask in the sun, and swim in the refreshing waters of the Atlantic.',
    shortDescription: 'Sail Agadir coast, enjoy Moroccan lunch, and swim in the Atlantic',
    duration: '4 hours',
    price: 45,
    category: 'Tours',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/half-day-agadir-boat-trip.jpeg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-boat-trip-with-lunch.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/boat-trip-in-agadir.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-boat-experience-scaled.jpeg',
      'https://toursinagadir.com/wp-content/uploads/2021/08/promenade-en-mer-agadir-1534254096.jpg'
    ],
    highlights: [
      'Delight in a Moroccan-style barbecue with fresh fish',
      'Explore the scenic landscapes of Agadir from the sea',
      'Enjoy free time for swimming and fishing',
      'Spectacular panoramic views of Beach'
    ],
    included: [
      'Pick-up and drop-off from your Agadir hotel',
      'Meal and drinks',
      'Fishing tools',
      'Swimming break',
      'All taxes and fees',
      'Hotel pickup and drop-off'
    ],
    itinerary: [
      { time: '09:30', activity: 'Hotel pickup from your reception in Agadir' },
      { time: '--:--', activity: 'Arrive at Agadir Marina and board the boat' },
      { time: '--:--', activity: 'Sail along the coast, observe local fishermen' },
      { time: '--:--', activity: 'Try your hand at fishing with provided gear' },
      { time: '--:--', activity: 'Enjoy a Moroccan meal prepared by the crew' },
      { time: '--:--', activity: 'Take a refreshing swim in the sea' },
      { time: '13:30', activity: 'Cruise back to the marina and drive back to your hotel' }
    ],
    rating: 4.8
  },
  {
    id: '2',
    title: 'Quad Bike Agadir',
    slug: 'coastal-sunset-tour',
    description: `Embark on an exhilarating adventure and explore the countryside areas surrounding Agadir in a thrilling and fun way, riding a quad bike. Experience the excitement of traversing Berber rural areas and pre-Saharian terrain, and complete your journey with a delicious Berber-style breakfast.

Your adventure begins with a pick-up from your hotel in Agadir at the scheduled time. You'll then drive south of Agadir to reach a Berber village where you'll meet your guide.

Upon arrival, you'll receive a brief introduction to off-road quad biking techniques, as well as practical advice. You'll be provided with glasses and helmets before jumping on your quad bike and starting your adventure.

The journey kicks off with a ride through Berber villages, farmlands, and picturesque argan and fig forests. You may even have the opportunity to encounter nomads as you navigate the sunny sand dunes.

On the return drive to the starting point, you'll make a stop for a homemade Berber-style breakfast. Enjoy mint tea with Argan oil, Amlou (Moroccan dip peanut butter), honey, and homemade bread, recharging your energy for the remainder of the excursion.

After savoring your breakfast, you'll continue back to the point of departure to meet your driver, who will take you back to your hotel.

This half-day activity ensures maximum fun on a four-wheeled machine, providing an unforgettable experience.`,
    shortDescription: "Ride through Agadir's dunes on a powerful quad bike — thrill, views, and pure adventure await",
    duration: '3 hours',
    price: 40,
    category: 'Activites',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-quad-bike-experience.jpeg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-quad-biking.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-quad-bike.jpeg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/ea/cb/f5.jpg',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bf/25/be.jpg'
    ],
    highlights: [
      'Quad biking on the Saharian terrain',
      'Berbers breakfast-style tea break',
      'Quad biking along the Atlantic Ocean',
      'Photo opportunities at scenic viewpoints'
    ],
    included: [
      'Hotel Pick-up and drop-off',
      '15 Minutes Quad orientation session',
      '90 Minutes Quad biking',
      'Helmet and goggles',
      'Mint Tea & Snacks',
      'All Taxes & Fees included'
    ],
    itinerary: [
      { time: '--:--', activity: 'Hotel pickup at your chosen time' },
      { time: '--:--', activity: '30-minute drive to the quad bike base.' },
      { time: '--:--', activity: 'Safety gear and quick briefing provided.' },
      { time: '--:--', activity: 'Ride through Argan forests, dunes, and along the coast.' },
      { time: '--:--', activity: 'Short break during the ride.' },
      { time: '--:--', activity: 'Return to base, clean-up, and head back.' },
      { time: '--:--', activity: 'Hotel drop-off' }
    ],
    rating: 4.7
  },
  {
    id: '3',
    title: 'Sandboarding Agadir Trip',
    slug: 'mountain-valley-explorer',
    description: `Discover the thrill of sandboarding on the golden dunes near Agadir. Glide down soft desert hills with stunning ocean views in the background—perfect for adventure seekers and nature lovers alike.

Your day begins with pickup from your hotel in Agadir or Taghazout (10 AM or 2 PM), followed by a scenic drive through Taghazout, Tamrakht, and Tamri.

Arrive at the Timlalin dunes near Taboga Beach for a quick sandboarding briefing before you hit the slopes. Slide, surf, and enjoy the adrenaline rush as you take in panoramic views of the wild beach.

Recharge with a tasty local snack and tea break. If time allows, cap off the day with a breathtaking sunset before heading back to your hotel.`,
    shortDescription: "Slide down Agadir's golden dunes in a fun, unforgettable sandboarding adventure",
    duration: '6 hours',
    price: 55,
    category: 'Activites',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/4e/d2/48.jpg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-sandboarding.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-sandboarding-trip-1920x1440.webp',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/sandboarding-in-agadir.jpeg',
      'https://veronikasadventure.com/wp-content/uploads/2024/02/3_sandboarding-in-agadir.jpg'
    ],
    highlights: [
      'Sand surfing in the desert-style setting of Agadir.',
      'Enjoy a delicious Moroccan lunch at a local house in the banana village.',
      'Take in the panoramic view of the wild beach.',
      'Relax and recharge with Moroccan mint tea and snacks.',
    ],
    included: [
      'Hotel Pick-up and drop-off',
      'Sand Boarding Boards',
      'Mint Tea & Snacks',
      'All Taxes & Fees included',
    ],
    itinerary: [
      { time: '-:-', activity: 'Hotel pickup' },
      { time: '-:-', activity: '1-hour scenic drive to Tamri (Banana Village).' },
      { time: '-:-', activity: 'Enjoy a local lunch in the village.' },
      { time: '-:-', activity: 'Head to the oceanfront sand dunes.' },
      { time: '-:-', activity: 'Get a quick sandboarding intro, then ride the dunes freely.' },
      { time: '-:-', activity: 'Take in stunning coastal views.' },
      { time: '-:-', activity: 'Return to base' },
      { time: '-:-', activity: 'Hotel drop-off' }
    ],
    rating: 4.6
  },
  {
    id: '4',
    title: 'Berber Night Show in Agadir – Fantasia Show',
    slug: 'family-fun-adventure',
    description: `Immerse yourself in an unforgettable evening on the outskirts of Agadir, where you will indulge in a delicious Moroccan meal while being captivated by an authentic Berber show.

Prepare to witness acrobats on horseback, mesmerizing pirouettes, and much more!

Berber Night with Fantasia Show:

We will pick you up from your hotel at 7 pm and head to a local camp to begin our extraordinary Berber evening. As we settle into this genuine setting, we will have the opportunity to observe riders from all over the country as they prepare for the performance.

The Berber show is a mesmerizing fusion of dance, music, and culture that envelops us in a true Moroccan ambiance.

Experience a variety of folk styles, including acrobats on horseback, captivating belly dancers, awe-inspiring fire eaters, and enchanting snake charmers.

All of this will be accompanied by the captivating sounds of typical Berber music.

Upon arrival, you will be welcomed by Moroccan dancers and escorted to a beautiful Caidal Tent, where you will indulge in a true Moroccan dining experience.

Delight in traditional Moroccan dishes such as Harira Soup, dates, Traditional Moroccan Tagine, Couscous with meat, a variety of seven vegetables, and Moroccan pastries served with aromatic Moroccan Mint Tea.

Throughout your meal, you will be entertained by exceptional Gnaoua acrobats, mesmerizing snake charmers, dynamic fire eaters, alluring belly dancers, and captivating Berber dancers.

Our musicians, who have traveled from various regions of Morocco, will showcase their unique styles and share the rich history of Berber music with you.

Finally, we invite you to our stadium, where you will be enthralled by the Agadir Fantasia Show and Berber night show, leaving you with lasting memories of this captivating experience.`,
    shortDescription: 'Experience a magical Berber night with music, dance, and the thrilling Fantasia show',
    duration: '2 hours',
    price: 45,
    category: 'Tours',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/fantasia-show-in-Agadir.webp',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/couscous-and-berber-night-show-in-Agadir.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/dinner-and-show-in-Agadir.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/berber-night-show-in-Agadir.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/fantasia-night-show-in-Agadir.jpg'
    ],
    highlights: [
      'Taste Traditional Berber Food',
      'Mesmerizing Belly Dancing and Berber Dancing',
      'Fantasia Show',
      'Acrobats and Snake Charmers',
      'Acrobats and Snake Charmers'
    ],
    included: [
      'Hotel Pick-up and drop-off',
      'Entrance ticket to Berber Night Show',
      'Moroccan Dinner',
      'Moroccan Soup (Harira)',
      'Souvenir photos',
      'All Taxes and Fees'
    ],

    itinerary: [
      { time: '07:00', activity: 'Hotel pickup' },
      { time: '-:-', activity: 'Drive to the camp and see performers preparing for the show.' },
      { time: '-:-', activity: 'Enjoy a vibrant Berber show with music, dance, acrobats, fire eaters, snake charmers, and belly dancers.' },
      { time: '-:-', activity: 'Savor a traditional Moroccan dinner under a Caidal tent: Harira soup, tagine, couscous, pastries, and mint tea.' },
      { time: '-:-', activity: 'Be entertained throughout dinner by live musicians and performers.' },
      { time: '-:-', activity: 'End the evening with the thrilling Fantasia horse show.' },
      { time: '-:-', activity: 'Hotel drop-off' }
    ],
    rating: 4.9
  },
  {
    id: '5',
    title: 'Essaouira day trip from Agadir',
    slug: 'Essaouira day trip',
    description: `Embark on a full-day excursion from Agadir to the beautiful coastal city of Essaouira. Explore the charming medina, admire the Portuguese-style architecture, and soak in the vibrant atmosphere of this UNESCO World Heritage Site.

You will be picked up from the reception of your hotel in Agadir at 7:30 am (8:15 am for hotels in Taghazout).

Enjoy a rest stop on the road to Essaouira, where you can use restrooms, stretch your legs, or get a drink.

Witness the unique sight of goats climbing argan trees during the "Goats on the Tree" stop.

Arrive in Essaouira, the old Portuguese city, around 11 am. Begin your city tour with a knowledgeable guide.

Explore the medina of Essaouira, including its colorful landscapes, Grand Mosque, terraces, cafes, and the souk. Immerse yourself in the local culture and heritage.

Visit the ramparts of the Kasbah and Scala, where you can admire panoramic views of the Atlantic Ocean and the port of Essaouira. Explore the municipal market and the jewelry and craft complex.

Enjoy approximately 2 hours of free time in Essaouira to discover the city at your own pace and find a place to eat.

Meet your guide at the agreed meeting point and begin the journey back to Agadir.

Return to your hotel in Agadir around 7 pm.`,
    shortDescription: 'Escape to the coastal charm of Essaouira — explore its medina, sea breeze',
    duration: '2 hours',
    price: 35,
    category: 'Excursions',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/essaouira-guided-day-trip-from-agadir.jpg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-to-essaouira-day-trip.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/essaouira-guided-day-trip-from-agadir.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/essaouira-guided-day-trip.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/essaouira-excursion-from-agadir.jpg'
    ],
    highlights: [
      'Travel along the charming Atlantic coast, enjoying scenic views of the ocean and Argan trees',
      'Experience the vibrant atmosphere of Essaouira s medina.',
      'Explore the ramparts of the Kasbah and Scala, offering panoramic views of the city and the Atlantic',
      'Visit the local souk and discover a variety of handcrafted items.',
      'Have free time to enjoy the sunny beaches of Essaouira.'
    ],
    included: [
      'Hotel Pick-up and Drop-off',
      'Local Guide',
      'All Taxes & Fees included',
      'Souvenir photos',
      'Hotel pickup and drop-off'
    ],
    itinerary: [
      { time: '-:-', activity: '7:30 AM: Pickup from Agadir hotel (8:15 AM for Taghazout).' },
      { time: '-:-', activity: 'Rest stop along the way + see goats climbing Argan trees.' },
      { time: '11:00', activity: 'Arrive in Essaouira, guided city tour begins.' },
      { time: '-:-', activity: 'Enjoy 2 hours of free time for lunch and exploring.' },
      { time: '-:-', activity: 'Meet your guide for the return trip.' },
      { time: '-:-', activity: 'Return to base' },
      { time: '19:00', activity: ' Drop-off at your hotel in Agadir.' }
    ],
    rating: 4.8
  },
  {
    id: '6',
    title: 'Agadir Camel Ride',
    slug: 'Agadir camel riding',
    description: `Embark on a memorable camel ride experience in Agadir, starting with a convenient pick-up from your hotel at your chosen time. You'll be transported to a nearby ranch where you'll meet the majestic camels. Spend two hours exploring the outskirts of this incredible Moroccan city in the most traditional way, riding atop these characteristic desert animals.

As you embark on your camel ride, you'll have the opportunity to admire Agadir's beautiful beach and take in the stunning views of the Atlantic Ocean. Along the way, make a stop at a Berber camp, where you can indulge in a delightful mint tea experience. Immerse yourself in the culture and traditions of the historically nomadic desert Berber people, gaining insights into their way of life.

After making the most of this unique experience, your camel riding tour of Agadir will conclude at the original departure point. You'll then be transported back to your hotel. If you have chosen the morning tour, you can expect to be dropped off around midday. For those who have booked the afternoon tour, the return time is around 5:00 PM.`,
    shortDescription: "Enjoy a peaceful camel ride through Agadir's scenic landscapes — a must-do Moroccan experience",
    duration: '3 hours',
    price: 23,
    category: 'Activites',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-camel-tour.jpg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/camel-ride-experience-in-agadir-1920x1280.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-camel-ride-experience.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-camel-ride.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-camel-tour.jpg'
    ],
    highlights: [
      'Camel ride alongside Agadir`s beautiful beach',
      'Enjoying a mint tea experience at a Berber camp',
      'Photo opportunities at scenic viewpoints'
    ],
    included: [
      'Hotel Pick-up and drop-off',
      'Camel ride tour',
      'Mint Tea',
      'Mint Tea & Snacks',
      'All Taxes & Fees included'
    ],
    itinerary: [
      { time: '--:--', activity: 'Pick-up from the reception of your hotel at the selected time.' },
      { time: '--:--', activity: 'A gentle 15-minute drive to the ranch.' },
      { time: '--:--', activity: 'Upon arrival at the ranch, choose your camel for the experience and mount it gently.' },
      { time: '--:--', activity: "Enjoy the sway of the camel as you ride between the eucalyptus trees and along the path to the Souss River, passing by the King's Palace." },
      { time: '--:--', activity: "Return to the ranch after the camel ride and indulge in a Moroccan mint tea accompanied by snacks." },
      { time: '--:--', activity: "After the tea break, you'll be transported back to the reception of your hotel, concluding the camel ride excursion." },
      { time: '--:--', activity: 'Hotel drop-off' }
    ],
    rating: 4.7
  },
  {
    id: '7',
    title: 'Paradise Valley And Immouzzer From Agadir',
    slug: 'Paradise Valley And Immouzzer',
    description: `Embark on a half-day excursion from Agadir to Imouzzer Valley and Paradise Valley. Imouzzer Valley is a picturesque region known for its lush greenery, palm trees, argan trees, limestone gorges, and magnificent waterfalls.

On this trip, you'll have the opportunity to admire the scenic beauty of the High Atlas Mountain range and explore Berber villages along the way. If you visit on a Thursday, you'll also get to experience a rural souk (market).

You'll be picked up from the reception of your hotel in Agadir or Taghazout.

The excursion starts with a visit to the Botanic Garden and the local women's Argan corporation, where you can learn about the production of argan oil.

Enjoy a panoramic view stop between the Atlas Mountains and a beautiful oasis, providing an opportunity for breathtaking photos.

Arrive at Paradise Valley and embark on a 15-minute hike to reach the spring source and the natural swimming pool. This tranquil oasis is perfect for relaxation, swimming, sunbathing, or simply enjoying the beautiful surroundings.

Take your time to unwind and make the most of your free time in Paradise Valley.
Journey back to your hotel and be dropped off at the reception in Agadir or Taghazout, concluding the excursion.`,
    shortDescription: 'Discover hidden waterfalls and natural pools in Paradise Valley and Immouzzer.',
    duration: '3 hours',
    price: 23,
    category: 'Excursions',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/paradise-valley-from-agadir.jpeg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/immouzzer-and-paradise-valley-from-agadir.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/immouzzer-day-trip.webp',
      'https://media-hosting.imagekit.io/dc3a488b7a21463c/Reastaurant-et-baignade-Vallee-du-paradis-Agadir.jpg?Expires=1841933413&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bBBlgbLN2F0R3CKTU17Bsw1bhOpdXL7F6M22tt8i45pFahwT-IDQ86FN9RFgjzD6bBLJzSvR8tr1IyEdVMfZ97PNeHdqKd6zGsigHzec-b8lNSI5b2f7zpMWEFsfPVgiD9mw5-rtWWw9su~tvJfxVY~Li9qMePRVHcKicSuM2rm2INGWnIuntCM~J-iy0JFo-47ObfPIg48bWqA2zTMpYhK7VvY10Irw--JThJrqlQBvXMjvTkxhbJe9EsSScIBXqwQj8mhMGcCcZtYGB9k9r8ve3Svi8R41Vr60QOFJH1c25vhHFzfTyqSfCkX61MmCq8y8yu5schqM08AKd-Bz8g__',
      'https://media-hosting.imagekit.io/53071008d9af49a2/paradise.jpg?Expires=1841933406&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g3k4v7BUpe~BJhYFNKyNNMkqk6YZc9KhtSsh6Zifb14J4E~YVoNl8HDFj2snTKVD3yPO1LNTqmCfdNblDmxOLc0JaKgm~rcE9eNotR0v2H~1wX-n6LRhPbrj54j51QyXlKmMU4Hzzs-bEsF7tHs7X24m6ultEbe27iKHanQ8x4so6UGZOox78pBSkM3iQM25Pe18jwOUoqNpgKAlQSXGzcMkPIAiuv-OxF52cSZbi09J7l2YW~seD~0EYYzOC3SSDnM5fGR9oqkahPdQDD6TUNaQHXolDDoW7aIvEMHQARnmdjEktJK9SfIAoUDPx2vm1tGJQIZ04fbZH2kfEnRb~w__'
    ],
    highlights: [
      'Half-day trip to Imouzzer Valley with transportation from Agadir.',
      'Sit back and enjoy the scenic drive along mountain roads while your guide provides information.',
      'Marvel at the peaks of the High Atlas mountain range.',
      'Capture stunning photos amidst the breathtaking gorge scenery of the valley.',
      'Visit a countryside market if your excursion falls on a Thursday.',
    ],
    included: [
      'Hotel pickup and drop-off',
      'Driver-guide',
      'All taxes, fees, and handling charges',
    ],
    itinerary: [
      { time: '--:--', activity: 'Pick up from the reception of your hotel in Agadir or Taghazout.' },
      { time: '--:--', activity: "Visit the Botanic Garden and the local women's Argan corporation." },
      { time: '--:--', activity: 'Enjoy a panoramic view stop between the Atlas Mountains and an oasis.' },
      { time: '--:--', activity: 'Arrive at Paradise Valley and take a short hike to the spring source and natural swimming pool.' },
      { time: '--:--', activity: 'Enjoy free time in Paradise Valley to relax, swim, sunbathe, or explore.' },
      { time: '--:--', activity: 'Return journey to your hotel and drop off at the reception in Agadir or Taghazout.' },
      { time: '--:--', activity: 'Hotel drop-off' }
    ],
    rating: 4.8
  },
  {
    id: '8',
    title: 'Agadir Traditional Hammam And Massage',
    slug: 'Agadir Traditional hammam',
    description: `If you are looking for a unique and rejuvenating experience, visit this traditional hammam and indulge in a traditional Berber ritual. It's the perfect way to relax and unwind!

Pamper yourself with a well-deserved break by treating yourself to a relaxing massage and enjoying a hammam session. You will be picked up from your hotel and taken to a wellness center located in the city center. Once there, immerse yourself in the hammam, also known as the Moroccan bath, in the welcoming ambiance of the center.

After the hammam, experience the relaxation and revitalization of a 60-minute Berber massage with essential oils. This massage will help energize your body and leave your skin feeling rejuvenated, thanks to the nourishing properties of Argan oil. It's a great opportunity to release any tension in your muscles, especially if you lead an active lifestyle. Discover the numerous benefits of argan oil, renowned for its positive effects on the body and skin.

At the end of this blissful and relaxing experience, you will be transported back to your hotel, feeling refreshed and revitalized.`,
    shortDescription: 'Relax and recharge with a traditional Moroccan hammam and soothing massage',
    duration: '3 hours',
    price: 35,
    category: 'Activites',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-traditional-hammam.jpg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-traditional-massage.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-massage.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-hammam-and-massage-1920x1440.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/traditional-hammam-and-massage-in-agadir.jpg'
    ],
    highlights: [
      'Enjoy a relaxing hammam session',
      'Experience a rejuvenating Berber massage with essential oils',
    ],
    included: [
      'Towel',
      'Locker',
      'Exfoliation session',
      'Hammam 30 mn',
      'Massage 60 mn',
      'Moroccan tea',
    ],
    itinerary: [
      { time: '--:--', activity: 'Choose your preferred time: 9 AM, 11 AM, 2 PM, or 4 PM..' },
      { time: '--:--', activity: 'Hotel pickup and transfer to a city-center wellness spa.' },
      { time: '--:--', activity: 'Enjoy a traditional Berber hammam session.' },
      { time: '--:--', activity: 'Followed by a 60-minute massage with essential oils and Argan oil.' },
      { time: '--:--', activity: 'Relax, unwind, and feel rejuvenated.' },
      { time: '--:--', activity: 'Return transfer to your hotel.' },
      { time: '--:--', activity: 'Hotel drop-off' }
    ],
    rating: 4.9
  },
  {
    id: '9',
    title: 'Agadir To Taroudant & Tiout Trip',
    slug: 'Agadir To Taroudant',
    description: `Experience a full-day excursion from Agadir to Tiout and Taroudant, immersing yourself in the rich history and cultural heritage of these fascinating Moroccan destinations.

You will be picked up from your hotel in Agadir at 9 am.

Embark on a scenic drive towards Taroudant, a fortified city located approximately one and a half hours away. As you travel, you will cross the majestic Atlas Mountain range and make a brief stop at a citrus fruit and banana plantation in the Souss Valley.

Upon arrival in Taroudant, marvel at the elegant gateways that lead to the walled city. Pass through the 11th-century red-colored walls surrounding the medina and indulge in a delicious Moroccan breakfast, consisting of natural orange juice, mint tea, and pastries.

Take a leisurely walk through the bustling streets of Taroudant until you reach Assarag Square, the heart of the city. Here, you will find the market, offering traditional handicrafts, rugs, spices, and Argan oil. Take your time to explore and interact with local market sellers.

After the visit to Taroudant, continue your journey to Tiout, known for its Oasis and the Kasbah (fortress). Enjoy a flavorsome lunch at the Panoramic Kasbah of Tiout, consisting of Tajine and Couscous.

Following the lunch break, take a stroll through the palm trees and opt for a donkey ride, immersing yourself in the ambiance of the Oasis. The Kasbah of Tiout is also famous for being the filming location of the movie "Ali Baba and the Forty Thieves" in the 1950s.

Around 5 pm, depart from Tiout and make your way back to your hotel in Agadir, where you will be dropped off.`,
    shortDescription: 'Discover the silver city of Taroudant and the stunning landscapes of Tafraout',
    duration: '8 hours',
    price: 35,
    category: 'Excursions',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/taroudant-et-tiout-trip.jpg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/taroudant-et-tiout-day-trip.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-to-taroudant-et-tiout-day-trip.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/kasbah-of-tiout.jpg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/city-wall-of-taroudant.jpg'
    ],
    highlights: [
      'Visit the Ramparts of Taroudant and explore its medina.',
      'Explore the Oasis of Tiout, boasting 3,000 palm trees.',
      'Immerse yourself in the atmosphere of "Ali Baba and the Forty Thieves.',
      'Experience a donkey ride in the Oasis of Tiout.',
    ],
    included: [
      'Free Hotel Pick-up and Drop-off from Agadir',
      'Local Guide',
      'Lunch Meal (Couscous & Tajine)',
      'All taxes and fees'
    ],
    itinerary: [
      { time: '08:00', activity: 'Hotel pickup in Agadir' },
      { time: '-:-', activity: 'Visit a traditional pottery house.' },
      { time: '-:-', activity: "Enjoy a 20-minute off-road drive along the coast, stopping at fishermen's cave homes." },
      { time: '-:-', activity: 'Spot birds at Souss Massa river, possibly flamingos.' },
      { time: '-:-', activity: "Explore Tiznit's old Medina and fortified walls." },
      { time: '-:-', activity: 'Have a home-cooked lunch in Rsmouka (Tajine & Couscous).' },
      { time: '-:-', activity: 'Visit the small Sahara dunes with an optional camel ride.' }
    ],
    rating: 4.7
  },
  {
    id: '10',
    title: 'Small Desert Trip From Agadir Massa River & Tiznit',
    slug: 'souss-massa-safari',
    description: `Embark on a thrilling adventure to explore the small desert near Agadir. Experience the beauty of the coastal region, visit a fisherman village, and immerse yourself in the culture of the Berber people. Enjoy a delicious traditional lunch and have the opportunity to explore the small Sahara dunes.

Begin your journey with a visit to the fisherman village on the wild beach of Sidi R'bat. Explore the fishermen's caves and enjoy the tranquility of the isolated beach.

Drive along a rally way on sand dunes and sandy terrain, offering a unique experience on the side of the Atlantic Ocean.

Stop at the Massa river, located in the National Park of birds. If you're lucky, you may spot some migrating birds.

Continue the drive towards the walled city of Tiznit. Witness the walls and ramparts of the old city and take a walk in the old Medina. Browse the handmade Berber silver jewelry, a specialty of Tiznit.

After visiting Tiznit, head towards the Atlas Mountains for a lunch break in a local Berber house. Enjoy a meal of Tajine and Couscous, accompanied by seasonal fruits and mint tea. Vegetarian meals can be requested.

Following lunch, you'll have free time in the small Sahara dunes to take photos and enjoy the desert scenery. Optional camel rides are available for an additional cost of 5€ per person.

Depart from the small Sahara and travel to the Youssef Ben Tachafine reservoir. From the top of the hill, enjoy a panoramic view of the surrounding area, capturing the essence of everyday Moroccan countryside life.

Begin the return journey back to Agadir, taking in the beautiful landscapes along the way.

Arrive back at your hotel in Agadir around 5 pm.`,
    shortDescription: 'Embark on a thrilling adventure to explore the small desert near Agadir',
    duration: '6 hours',
    price: 45,
    category: 'Tours',
    imageUrl: 'https://www.excursionmarket.com/uploads/tour/65d3a5a01fbd7358/en/webp/7cbaeafb-60b9-47ba-a0d9-f4b03f6ec11c-671af1600f4cd-358.webp',
    gallery: [
      'https://www.excursionmarket.com/uploads/tour/65d3a5a01fbd7358/en/webp/7cbaeafb-60b9-47ba-a0d9-f4b03f6ec11c-671af1600f4cd-358.webp',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/souss-massa-day-tour.jpeg',
      'https://desert-stories.com/wp-content/uploads/2024/09/UNADJUSTEDNONRAW_thumb_1fd2.jpg',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/ea/cb/f5.jpg'
    ],
    highlights: [
      'Experience a thrilling rally drive along the Atlantic coast.',
      'Visit a fisherman village and explore the wild beach of Sidi Rbat.',
      'Discover the walled city of Tiznit and wander through its old Medina.',
      'Enjoy a traditional lunch in a local Berber house in the Atlas Mountains.',
      'Explore the small Sahara dunes and have the opportunity for a camel ride.'
    ],
    included: [
      'Hotel pickup and drop-off',
      'Lunch Meal (Couscous & Tajine)',
      'All taxes and fees'
    ],
    itinerary: [
      { time: '08:00', activity: 'Hotel pickup in Agadir' },
      { time: '-:-', activity: 'Visit a traditional pottery house.' },
      { time: '-:-', activity: "Enjoy a 20-minute off-road drive along the coast, stopping at fishermen's cave homes." },
      { time: '-:-', activity: 'Spot birds at Souss Massa river, possibly flamingos.' },
      { time: '-:-', activity: "Explore Tiznit's old Medina and fortified walls." },
      { time: '-:-', activity: 'Have a home-cooked lunch in Rsmouka (Tajine & Couscous).' },
      { time: '-:-', activity: 'Visit the small Sahara dunes with an optional camel ride.' }
    ],
    rating: 4.8
  },
  {
    id: '11',
    title: 'Taghazout Camel Ride',
    slug: 'taghazout-camel-ride',
    description: `Experience the magic of a camel ride in Taghazout, a delightful excursion that allows you to immerse yourself in the natural beauty of the area.

Over the course of a couple of hours, you will embark on a journey along the unspoilt 6 km Taghazout beach, offering breathtaking views of the majestic Atlas Mountains.

Feel the warmth of the Moroccan sun and the soft sands beneath you as you create unforgettable memories.

Your adventure begins with a convenient pick-up from your hotel, followed by a scenic drive to the Ranch, where the camel ride will take place.

Enjoy the enchanting experience of a camel ride, as you explore the Ranch, meander along the beach, and venture up the trails into the mountains.

Be captivated by the awe-inspiring vistas that unfold before your eyes. This camel ride offers a unique opportunity to escape the crowds and immerse yourself in a desert-style adventure.

Whether you choose to embark on this excursion in the early morning or the afternoon, you can expect a delightful journey through the dunes and forests of Taghazout on traditional transport.

Allow the gentle sway of the camels to carry you along, accompanied by an experienced guide who will ensure your comfort and safety throughout the ride.

At the conclusion of the camel ride, you will be transferred back to your hotel, taking with you memories of an unforgettable experience.`,
    shortDescription: 'Experience a magical camel ride along Taghazout beach with stunning views of the Atlas Mountains',
    duration: '4 hours',
    price: 29,
    category: 'Activites',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/taghazoute-camel-ride.jpeg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/camel-ride-in-taghazoute.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/camel-riding-in-taghazoute.jpeg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/4c/3f/3f.jpg',
      'https://www.seamester.com/wp-content/uploads/2018/10/GOPR0419.jpg'
    ],
    highlights: [
      'Camel ride along the Atlantic Ocean',
      'Enjoy Moroccan Mint Tea and snacks during the excursion',
      'Breathtaking views of the Atlas Mountains',
      'Explore the beautiful Taghazout beach',
      'Traditional desert-style adventure'
    ],
    included: [
      'Taghazout Hotel Pick-up and Drop-off',
      'Camel ride tour',
      'Moroccan Mint Tea and Snacks',
      'Experienced guide',
      'All taxes and fees'
    ],
    itinerary: [
      { time: '--:--', activity: 'Pick-up from the reception of your hotel at the selected time.' },
      { time: '--:--', activity: 'A gentle 20-minute drive to the ranch.' },
      { time: '--:--', activity: 'Upon arrival at the ranch, choose your camel for the experience and mount it gently.' },
      { time: '--:--', activity: 'Enjoy the sway of the camel.' },
      { time: '--:--', activity: 'Return to the ranch after the camel ride and indulge in a Moroccan mint tea.' },
      { time: '--:--', activity: "After the tea break, you'll be transported back to the reception of your hotel, concluding the camel ride excursion." }
    ],
    rating: 4.7
  },
  {
    id: '12',
    title: 'Agadir Camel Ride In Sunset Time With The Barbecue',
    slug: 'agadir-camel-ride-sunset-barbecue',
    description: `Experience the enchantment of a sunset camel ride during your stay in Agadir. You'll be picked up from your hotel and driven to the ranch, where you'll embark on a memorable journey riding camel. Enjoy the stunning views as you ride around the ranch, along the Souss River, and along the Atlantic Ocean, reaching the beautiful beach of Agadir.

You'll be picked up from the reception of your hotel at the designated time.

A short and pleasant 10-minute drive will take you to the ranch near the king's palace.

Upon arrival at the ranch, you'll have the opportunity to choose your camel and begin your gentle ride.

Experience the sway and rhythm of the camels as you traverse through eucalyptus trees and follow the path along the Souss River, passing by the king's palace.

After the camel ride, it's time to indulge in a delicious and nutritious Moroccan barbecue meal. You'll be served a traditional tagine or barbecue, accompanied by salad, mint tea, and seasonal fruits.

Following the barbecue, you'll be returned to the reception of your hotel, concluding the camel ride experience.`,
    shortDescription: 'Experience a magical sunset camel ride with a traditional Moroccan barbecue dinner',
    duration: '5 hours',
    price: 34,
    category: 'Tours',
    imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/82/03.jpg',
    gallery: [
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/8d/dd/90.jpg',
      'https://www.excursionmarket.com/uploads/tour/65d5ba7498630358/en/webp/1-camel-6-671afb6b6b7ea-358.webp',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/camel-ride-and-barbecue-in-agadir.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/sunset-time-with-barbecue-in-agadir.jpeg'
    ],
    highlights: [
      'Ride a friendly camel through sand dunes surrounded by stunning natural landscapes',
      'Escape the hustle and bustle of Agadir and enjoy a peaceful experience',
      'Taste an authentic Moroccan tagine or barbecue for dinner',
      'Watch the beautiful sunset over the Souss River',
      'Experience the traditional Berber hospitality'
    ],
    included: [
      'Hotel Pick up and Drop-off',
      'Camel ride tour',
      'Tajine and Barbecue',
      'All Taxes & Fees included',
      'Traditional mint tea'
    ],
    itinerary: [
      { time: '--:--', activity: 'Pick up from the reception of your hotel at the chosen time.' },
      { time: '--:--', activity: "A short 10-minute drive to the ranch near the king's palace." },
      { time: '--:--', activity: 'Select your camel for the ride and embark on the adventure.' },
      { time: '--:--', activity: "Enjoy the gentle sway of the camels as you ride through eucalyptus trees and along the Souss River, passing by the king's palace." },
      { time: '--:--', activity: 'After the camel ride, savor a delicious and nutritious Moroccan barbecue meal, accompanied by salad, mint tea, and seasonal fruits.' },
      { time: '--:--', activity: 'Return to the reception of your hotel, marking the end of the camel ride experience.' }
    ],
    rating: 4.9
  },
  {
    id: '13',
    title: 'Buggy Tour In Agadir',
    slug: 'buggy-tour-agadir',
    description: `Get ready for an adrenaline-pumping adventure as you explore the Sahara Desert at full throttle on a thrilling buggy ride. Buckle up and get ready to pass through Berber villages, dunes, beaches, and much more, while also enjoying a delicious traditional breakfast along the way.

Your adventure begins with a pick-up from your hotel in Agadir at the scheduled time. You'll then head south of Agadir towards a Berber village to meet your guide.

Upon arrival, you'll receive a brief introduction to off-road buggy techniques and practical advice. You'll be provided with glasses and helmets before jumping on your buggy and starting your adventure.

The journey kicks off with a drive through Berber villages, farmlands, and picturesque argan and fig forests. You may even have the chance to encounter nomads as you navigate the sunny sand dunes.

To conclude the tour, you'll make a stop at a Berber camp, where you'll indulge in a delicious traditional breakfast. Savor mint tea, argan oil, amlou (Moroccan sauce), honey, and artisan bread, replenishing your energy for the rest of the excursion.

After enjoying your breakfast and recharging, you'll head back to the point of departure to meet your driver, who will take you back to your hotel.

This half-day activity promises an exhilarating experience on a four-wheeled machine, ensuring maximum fun and adventure.`,
    shortDescription: 'Experience an adrenaline-pumping buggy ride through the Sahara Desert and Berber villages',
    duration: '4 hours',
    price: 60,
    category: 'Activites',
    imageUrl: 'https://www.agadir-experience.com/wp-content/uploads/2023/06/buggy-tour-in-agadir.jpeg',
    gallery: [
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-buggy-tour.jpeg',
      'https://www.agadir-experience.com/wp-content/uploads/2023/06/agadir-buggy-tour-experience.jpeg',
      'https://i0.wp.com/agadiradventuretours.com/wp-content/uploads/2024/04/Agadir-Dune-Buggy-003.jpg?fit=640%2C853&ssl=1',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/91/ca/9a.jpg'
    ],
    highlights: [
      'Buggy ride through the Saharan terrain',
      'Buggy driving along the Atlantic Ocean',
      'Berbers breakfast-style tea break',
      'Explore Berber villages and farmlands',
      'Experience the thrill of off-road adventure'
    ],
    included: [
      'Hotel pick up and drop off',
      'Buggy tour 2h',
      'Mint Tea',
      'Snacks',
      'Safety equipment (helmet, goggles, head dust-cover)',
      'All taxes and fees'
    ],
    itinerary: [
      { time: '--:--', activity: 'Pick-up from the reception of your hotel in Agadir at the selected time.' },
      { time: '--:--', activity: 'A 30-minute drive south of Agadir to reach the buggy garage.' },
      { time: '--:--', activity: 'Collect your safety equipment, including head dust-cover, helmet, and goggles.' },
      { time: '--:--', activity: 'Receive a quick orientation session for first-time buggy riders.' },
      { time: '--:--', activity: 'Embark on your buggy tour, cruising through the mesmerizing Argan trees, sand dunes, and along the Atlantic Ocean.' },
      { time: '--:--', activity: 'Take a small break to rest and stretch your legs before completing the buggy trip.' },
      { time: '--:--', activity: 'After the thrilling buggy adventure, return to the garage, where an air pressure cleaning will remove all dust and sand from the buggies.' },
      { time: '--:--', activity: 'Arrive back at the reception of your hotel in Agadir, concluding the buggy excursion.' }
    ],
    rating: 4.8
  }
];
