import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const reviews = [
  { name: 'Patricia Kulakowska', country: 'Local Guide · 19 reviews', rating: 5, text: 'Thanks for speed désert team i came Alone they Give me clean car and Nice buggy good staff dubai is always best' },
  { name: 'Salim Benomari', country: '14 reviews', rating: 5, text: 'A huge thank you to the Speed Desert team for this wonderful day; I highly recommend this place. Guaranteed thrills!' },
  { name: 'Yohann', country: '7 reviews', rating: 5, text: 'Had a great time with the 700 Raptors, I highly recommend the Speed Desert team!!' },
  { name: 'MUHAMMAD ZEESHAN', country: '1 review · 2 photos', rating: 5, text: 'One of the best Company for the buggy rental the camp is so luxury. The staff is so friendly and the guides are professionals they\'re giving you good line for driving and the bugs are clean and perfect and that\'s amazing. They do the private tours which is one of the top things in Dubai speed desert We recommend to all those those they want to enjoy self drive. They have the Both things if you want you can drive by yourself to their camp or if you want they can provide you with the pick and rob both side from our side 5 x 5 for speed desert.' },
  { name: 'Эмилия Тарба', country: 'Local Guide · 20 reviews · 38 photos', rating: 5, text: 'One of the best companies for buggy! The camp is super luxurious, the staff are very friendly, and the guides are true professionals. They show you the perfect driving lines, and the buggies are clean, powerful, and in excellent condition. It was an amazing experience from start to finish!' },
  { name: 'Mohammad alqadhi', country: 'Local Guide · 14 reviews · 2 photos', rating: 5, text: 'This is honestly the best place to rent buggies. The prices are super affordable, the buggies are really clean, and everything is well maintained. The guide is amazing and takes you to the best spots for an unforgettable experience. Highly recommend to anyone looking for a fun and safe adventure' },
  { name: 'Oliwia Kowalska', country: '7 reviews · 10 photos', rating: 5, text: 'today im come speed desert and this was the best activity in dubai , thank you lalit 💖🫶🏼 ...' },
  { name: 'T G', country: '4 reviews', rating: 5, text: 'The great time with speed desert amazing buggies and staff good prices' },
  { name: 'Nadem', country: '2 reviews', rating: 5, text: 'Good for good time we love speed desert' },
  { name: 'Diane Pridmore', country: '1 review', rating: 5, text: 'Great experience with quad bike speed desert best' },
  { name: 'Mattéo BLETTERIE', country: '4 reviews · 1 photo', rating: 5, text: 'A must-do activity in Dubai, the location is simply magnificent, whether at sunrise or sunset. The Canam was very enjoyable to drive, and the French-speaking contact was attentive, accommodating, and always responsive. I highly recommend that tourists try this fantastic desert speed experience.' },
  { name: 'Asmaa Bouchakour', country: '11 reviews · 1 photo', rating: 5, text: 'A huge thank you to Speed Desert, special mention to Mukram and Hassan. The Can-Am vehicles are fantastic! Thank you for everything, I\'ll be back and I highly recommend them!' },
  { name: 'Quentin Allix', country: '8 reviews', rating: 5, text: 'Perfect experience with mokarem. I highly recommend speed desert' },
  { name: 'Nacho Dato Van Den Berg', country: '10 reviews · 1 photo', rating: 5, text: 'Amazing desert buggy experience! The team was professional, the buggies were powerful and well-maintained, and the views at sunset were unbelievable. Highly recommended for anyone visiting Dubai!' },
  { name: 'yasmina khelouf', country: 'Local Guide · 33 reviews · 8 photos', rating: 5, text: 'We had a fantastic family time in the desert in a buggy, and in the evening, a wonderful barbecue!! Even the little ones loved it 🤩 Every time I go to Dubai, I book through SPEED DESERT! You guys are truly amazing! See you soon 👌 ...' },
  { name: 'Zaheer Mullajee', country: '11 reviews · 5 photos', rating: 5, text: 'The best experience we\'ve had in Dubai! Highly recommend to get the dune buggy\'s and dune bash on your own! So much fun!!! The team that helped us were super kind, patient and accommodating.\n\nWe will definitely do this again!' },
  { name: 'Julija Gruden', country: '5 reviews · 3 photos', rating: 5, text: 'We had a great time today with Speed Desert buggies in the open desert drive. It was better then we expected. The team is friendly and helpful, the guide is a fast driver and we enjoyed driving wild over the dunes. The girls were thrilled by the encounter with the falcon in the middle of the beautiful red desert.' },
  { name: 'Saltanat Kairzhanova', country: 'Local Guide · 62 reviews · 12 photos', rating: 5, text: 'Had real fun driving a quad bike .Raju was a perfect guide , reasonable prices. Driving in dunes are much more fun than in another countries .' },
  { name: 'Megan Pillay', country: '11 reviews · 2 photos', rating: 5, text: 'Absolutely amazing experience will 100% go again- we hired 2 x 2 seater Can Ams XRS RR turbos for 2 hours, we swapped drivers a few times between the 4 of us. Our guide Hassan lead the way and we followed up and down dunes and even caught a magical dessert sunset.' },
  { name: 'Zain', country: '7 reviews', rating: 5, text: 'Had a lot of fun with the guide Babar in the dunes' },
  { name: 'Floris de Raadt', country: 'Local Guide · 22 reviews · 8 photos', rating: 5, text: 'After trying several buggy rental companies .....I can share that Speed desert is the best option. Mohammed did everything to make our ride in the dunes unforgettable. Lot\'s of fun and at the same time very safe. He is not only offering rentals of buggy.... His main purpose is to create memories for live.' },
  { name: 'Muhammad Kamran', country: '2 reviews · 2 photos', rating: 5, text: 'Very good place and all bike and buggy is new' },
  { name: 'Szilárd Portik', country: 'Local Guide · 63 reviews · 54 photos', rating: 5, text: 'Best place to rent a buggy' },
  { name: 'Alexandru Paval', country: 'Local Guide · 15 reviews · 4 photos', rating: 5, text: 'Had an amazing experience at Speed Desert!\nWe booked the desert safari with a buggy ride and it turned out even better than expected. The camp setup was super clean and organized, the staff were friendly, and the whole vibe felt safe, fun, and very well managed.\n\nThe buggy ride was the highlight — flying over the dunes with friends, perfect mix of adrenaline and beautiful views. The guides were patient, made sure we were comfortable, and took great photos for us as well.\n\nThe camp itself had great energy, good food, and a chill atmosphere to relax after the ride.\n\nHighly recommend if you want a fun, memorable desert experience with friends!' },
  { name: 'Fidan Bagirova', country: '3 reviews', rating: 5, text: 'I am very glad to see this place.\nKamran is the best guide, showed very interesting places in the safari, took photos of everyone 🥺🥰 ...' },
  { name: 'Microfix Dubai', country: '1 review', rating: 5, text: 'Had an unforgettable time on the desert safari and buggy ride! Aamir was an outstanding guide — friendly, knowledgeable, and made sure we felt safe and had fun the entire time. The buggy experience was thrilling, the views were stunning, and everything was perfectly organized. Highly recommend this tour and Aamir for anyone looking for an epic desert adventure!' },
  { name: 'Teddy Martin', country: 'Local Guide · 14 reviews · 1 photo', rating: 5, text: 'Very good experience this safari.\nAhmed Bla is a friendly driver who delivers thrilling experiences!!' },
  { name: 'rizki oki bonita', country: 'Local Guide · 67 reviews · 53 photos', rating: 5, text: 'What a nice trip in Dubai experience desert safari, was perfect handle by Hasan and closing with BBQ night.' },
  { name: 'Abdulla AbuDaqqa', country: '5 reviews', rating: 5, text: 'Very good place amazing experience zeshan number one speed desert top' },
  { name: 'David L-R', country: 'Local Guide · 17 reviews · 4 photos', rating: 5, text: 'Best place to desert safari ever' }
]

const row1 = [...reviews, ...reviews]

function Stars({ count }) {
  return <div className="review-stars">{'★'.repeat(count)}</div>
}

function MarqueeRow({ items, direction = 'left', speed = 35 }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-row">
      <motion.div
        className="marquee-track"
        animate={{ x: direction === 'left' ? [0, -50 * items.length + '%'] : [-50 * items.length + '%', 0] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: speed, ease: 'linear' } }}
      >
        {doubled.map((r, i) => (
          <div className="review-card" key={i}>
            <Stars count={r.rating} />
            <p className="review-text">"{r.text}"</p>
            <div className="review-author">
              <strong>{r.name}</strong>
              <span>{r.country}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function TestimonialsPage() {
  useEffect(() => {
    document.title = 'Testimonials | Speed Desert Adventure Dubai'
  }, [])

  return (
    <main className="testimonials-page">
      <section className="testimonials-hero">
        <div className="testimonials-hero-photo" />
        <motion.div className="testimonials-hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span>REAL EXPERIENCES</span>
          <h1>What Our<br /><em>Riders Say</em></h1>
          <p>Hundreds of adventurers have trusted Speed Desert Adventure for unforgettable desert experiences.</p>
        </motion.div>
      </section>

      <section className="testimonials-marquee-section">
        <SectionHeading eyebrow="TRUSTED BY RIDERS WORLDWIDE" title="Guest" accent="Reviews" />
        <div className="marquee-container">
          <MarqueeRow items={row1} direction="left" speed={90} />
        </div>
      </section>

      <section className="testimonials-stats">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <strong>500+</strong><span>Happy riders</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
          <strong>4.9</strong><span>Average rating</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
          <strong>15+</strong><span>Years of service</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
          <strong>30+</strong><span>Countries served</span>
        </motion.div>
      </section>
    </main>
  )
}
