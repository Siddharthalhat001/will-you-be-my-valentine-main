"use client";
import { useState } from "react";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpg";
import photo6 from "./assets/photo6.jpg";
import photo7 from "./assets/photo7.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  // cap the yes button size so it stays reasonable on small screens
  const yesButtonSize = Math.min(noCount * 20 + 16, 48);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No way... you're joking, right? 😳",
      "Are you sure you want to break my heart like that Cutiepie? 😋💔",
      "What if I give you a thousand kisses first? 😘💋",
      "Shontu Mona please? I'll be the best Husband ever! 🥺🤵‍♂️",
      "I'll even throw in your favorite Tiramisu cake... 🍰☕",
      "And a death by chocolate for my favorite person? 🍫💀",
      "PLEASE BABEYAA, have mercy on me! 🙏🥺",
      "How can you say no to me? 🤷‍♂️🥺",
      "I'm fading away from the cuteness overload... 🥺✨",
      "The light is leaving my eyes! Goodbye, cruel world! 😵💫",
      "You are now haunted by the ghost of someone who loves you too much. 👻💘",
      "Please, babe, make my day? 🥺🌞",
      "Look at this pout! :(((( 🍓🥺",
      "BABDIII PLEASE, I'LL DO ANYTHING! 🙏🔥",
      "I am legally deceased until you say yes. ⚰️👻",
      "Still a no? My ghost is very sad. 👻💔😭",
      "Cutiepie… one yes and I promise to worship the ground your cute little feet walk on forever 😍🙇‍♂️🌸",
      "Babeyaa, my heart is doing somersaults waiting for your yes… don’t let it fall on its face pleaseeee 🤸‍♂️💓",
      "Babe, imagine how happy your personal simp would be if you just said yes right now 🥺💕🥰",
      "Shontu Mona, queen of my entire universe, one little yes and I’ll write poems about your eyelashes 👑✍️",
      "Babdi if you say yes I’ll become the world’s most obedient golden retriever husband, paws and all 🐶❤️🐾",
      "Cutiepie I’m already planning our victory cuddle session… don’t cancel it with a noooo 🛋️🤗",
      "Please Babeyaa, my soul will file for divorce from happiness if you don’t say yes 📝💔",
      "Babe… I’m blinking at you in Morse code: Y-E-S P-L-E-A-S-E 😭✨",
      "Shontu Mona, even your no is cute but I’m begging for the yes version today 🥺💖",
      "Babdi my love language is ‘whatever my wife wants’ so technically you HAVE to say yes 😇💍",
      "Cutiepie if you say yes I’ll let you win every argument for the next 30 days (huge sacrifice) 🏆😅",
      "Babeyaa I’m sending you emergency heart emojis until you rescue me with a yes 💘💘💘 🚨💌",
      "Babe, scientists say one yes from you can reverse climate change in my chest cavity 🥺🌍🔬❤️",
      "Shontu Mona please… my pout is reaching championship levels, it deserves a gold medal (aka your yes) 🥇😣",
      "Babdi I’m ready to trade my dignity, sleep schedule, and last bite of all foods for one yes from you 🍕😅",
      "Cutiepie, say yes and I’ll serenade you with the most off-key but 100% loving version of your favorite song 🎤🎶",
      "Babeyaa my ghost will keep sending you forehead kisses from the afterlife if you don’t save me now 👻😘",
      "Babe I’m one ‘no’ away from legitimately turning into a tiny dramatic Victorian lady fainting on the couch 😵‍💫👒",
      "Shontu Mona, wife of my dreams, light of my life, please don’t make me survive on your virtual hugs onlyyy 🤗💡",
      "Babdi… imagine the forehead kisses, back scratches, and ‘I love you more’ fights we could have if you just… say… yes? 🥺💗💏",      "Wait… you're still here? 👀💕",
      "I see determination, but I have more heartfelt pleas… 🥺✨",
      "This is it. The final stand. Say yes? 🙏❤️‍🔥",    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      className="-mt-16 flex h-screen flex-col items-center justify-center relative overflow-hidden bg-black"
      // always provide a sensible background on small screens; the collage is shown on md+
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${photo3}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* collage only visible on medium+ screens */}
      <div className="hidden md:absolute md:inset-0 md:w-full md:h-full md:flex md:gap-1 md:p-2">
        <div className="flex-1 h-full overflow-hidden">
          <img src={photo1} alt="photo1" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 h-full flex flex-col gap-1 overflow-hidden">
          <img src={photo2} alt="photo2" className="w-full h-1/3 object-cover" />
          <img src={photo3} alt="photo3" className="w-full h-1/3 object-cover" />
          <img src={photo4} alt="photo4" className="w-full h-1/3 object-cover" />
        </div>
        <div className="flex-1 h-full overflow-hidden">
          <img src={photo5} alt="photo5" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 h-full flex flex-col gap-1 overflow-hidden">
          <img src={photo6} alt="photo6" className="w-full h-1/2 object-cover" />
          <img src={photo7} alt="photo7" className="w-full h-1/2 object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you Cutie Pie!! ;))</div>
        </>
      ) : (
        <>
          {noCount < 38 ? (
            <>
              <img
                className="h-28 md:h-[200px]"
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                alt="cute gif"
              />
              <h1 className="my-4 text-2xl md:text-4xl text-center text-white">Priti will you be my valentine?</h1>
              <div className="flex w-full max-w-xl flex-col md:flex-row items-center gap-3">
                <button
                  className={`w-full md:w-auto mr-0 md:mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="w-full md:w-auto rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 whitespace-normal text-center text-sm md:text-base"
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
          ) : (
            <button
              className="w-full h-full rounded bg-green-500 font-bold text-white hover:bg-green-700 flex items-center justify-center text-6xl md:text-[9rem]"
              onClick={() => setYesPressed(true)}
            >
              YES!!! 💚
            </button>
          )}
        </>
      )}
      </div>
    </div>
  );
}
