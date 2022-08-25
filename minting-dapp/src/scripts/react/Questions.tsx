import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AccordionLayout from "./AccordionLayout";



export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="accordion">
      <AccordionLayout 
        title="What are tarot cards?"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        In the simplest terms, tarot cards are used for <strong className="text-highlight">fortune-telling</strong> to gain insight on one's situation. 
        Each card usually has an underlying meaning, traditionally depicted by the <strong className="text-highlight">symbolisms</strong> on the card's illustration. 
        Tarot cards have a nearly <strong className="text-highlight">600 year history</strong>. <br/>

        The most known deck is the Rider tarot deck comprised of 78 cards, with 22 <strong className="text-highlight">trumps</strong> and 56 <strong className="text-highlight">suit cards</strong>. 
        Many variations exist today. See <a href='https://www.britannica.com/topic/tarot' target='_blank'> detailed explanation <div className="icons text-sm"><FaExternalLinkAlt /></div></a>.
      </AccordionLayout>

      <AccordionLayout 
        title="The story of tarot decks. 🌹"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Many tarot decks today <strong className="text-highlight">depict meaning</strong> that seemingly come from our gut feeling. We associate plants, animals, astrology, 
        planets, gems, jewelry, alchemy, and so on, to something dear to our minds. Some may say that this is a typical <strong className="text-highlight">human behavior</strong>, 
        that we do in order to <strong className="text-highlight">connect with nature</strong>, and even, <strong className="text-highlight">perhaps with God</strong>. 
        Others may say that this is a <strong className="text-highlight">means to an end</strong>. We do this to <strong className="text-highlight">heal</strong> our souls, for comfort and for peace of mind. 
        Whatever it is, both may be right. These are definitions of art 
        after all. <br/><br/>
        
        But tarot cards go a step further. They depict <strong className="text-highlight">symbols</strong> that, 
        we may <strong className="text-highlight">never have seen before</strong>, yet we still understand! 
        This is what  <strong className="text-highlight">Carl Jung</strong> called the <strong className="text-highlight">collective subconscious</strong>. 
        Civilizations across the globe, and civilizations across different eras, all worshipped the Sun. <br/><br/>
        
        I can still clearly remember the day a teacher brought The Magician in class and asked us to analyze the symbolisms. 
        We have never seen the card before, yet collectively, we gave out every single symbolism there was to say. <br/><br/>

        Even if tarot decks originally started in Italy as playing cards, they quickly were adopted for fortune-telling in France 
        because of their rich symbolisms.
      </AccordionLayout>

      <AccordionLayout 
        title="The story of the Rider deck. 🥀"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Surprisingly, the Rider tarot deck is extremely well-thought-out. It has an uncountable amount of symbolisms (which 
        our NFT deck pales in comparison 😅), but we will give an introduction here. <br/><br/>

        First and foremost, each card depicts <strong className="text-highlight">symbolisms</strong> that is most always understood (apart from the 6 of Swords). On top of this, 
        whether the creator intentionally wanted this, each card can be associated with a <strong className="text-highlight">zodiac sign</strong>, 
        a <strong className="text-highlight">ruling planet</strong>, and an <strong className="text-highlight"> alchemical element</strong>.
        This is typical of more modern decks. <br/><br/>

        The genius I think, comes from the <strong className="text-highlight">numerology</strong>. The intricate numerology relates cards together. For example, The Tower (numbered 16) 
        is related to the omnipotent Magician (numbered 1) and the Lovers (numbered 6). The number 6 signifies a journey to harmony. This meaning fits 
        with the underlying meaning of the cards! <br/><br/>

        In addition to this, the trumps are well arranged in a <strong className="text-highlight">cycle</strong>, each card being where it needs to be. 
        At the start of our journey, we are a Fool (Card 0), candide as ever. With each trump comes a timely life lesson. 
        For example, before properly facing the Devil (Card 15), you must face all others before it. 
        At the end of our journey, we face Judgement (Card 20) and the World renews (Card 21). <br/><br/>

        This is in fact, just an introduction. Feel free to join the community to learn more 😜!

      </AccordionLayout>

      <AccordionLayout 
        title="How is this collection organized?"
        index={4}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        This collection is based off of the Rider tarot deck. If you are unfamiliar, <span className="accordion-href" onClick={() => setActiveIndex(1)}>click here</span>. 
        580 NFTs are divided into 6 variations of the whole 78-card deck, and 2 variations of the suits, or minor arcana.
      </AccordionLayout>

      <AccordionLayout 
        title="What are the NFT dimensions?"
        index={5}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Our collection is in PNG format 2560px by 2560px, all hand-drawn. Time and effort was put into them <span className="emoji">😤</span>!
      </AccordionLayout>

    </div>
  )
};