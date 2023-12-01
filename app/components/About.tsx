import { useState } from 'react';
import { aboutMeText } from '../data/aboutMe';
import { splitIntoLines } from '../utils/splitParagraph';

const About = () => {
  const [isLongVersion, setIsLongVersion] = useState<boolean>();
  const aboutMeLines = splitIntoLines(aboutMeText, 32);
  return (
    <section
      id="about"
      className="pt-32 h-screen w-full text-center bg-neutral-950"
    >
      <div className="border-2 rounded-full h-40 bg-neutral-700 w-40 mx-auto my-4"></div>

      <div className="flex w-56 justify-center mx-auto text-center text-sm my-4">
        <p className="my-auto text-emerald-200">Version:</p>
        <div className="w-40 h-6 mx-auto rounded-full flex relative font-light box-border border border-neutral-500">
          <div
            onClick={() => setIsLongVersion(false)}
            className="w-1/2 flex h-full rounded-l-full bg-neutral-900"
          >
            <p className="m-auto"> Short</p>
          </div>
          <div
            className="w-1/2 flex h-full rounded-r-full bg-neutral-900"
            onClick={() => setIsLongVersion(true)}
          >
            <p className="m-auto">Long</p>
          </div>
          <div
            className={`${
              isLongVersion ? 'right-0' : 'right-20'
            } absolute duration-500 shadow-lg shadow-black h-full w-1/2 border border-emerald-500 bg-white bg-opacity-20 rounded-full`}
          ></div>
        </div>
      </div>
      {isLongVersion ? (
        <div
          className="mt-4 h-[50vh] font-light relative overflow-hidden crawl-container shadow-black shadow-inner border-y border-emerald-400 rounded-lg"
          style={{
            backgroundImage: 'url(./space.jpg)', // Adjust the path as needed
            backgroundSize: 'cover', // Cover the entire area
            backgroundPosition: 'center', // Center the background image
          }}
        >
          {aboutMeLines.map((line, index) => (
            <div
              key={line}
              className="crawl-line text-xl font-bold text-yellow-300"
              style={{
                opacity: 1 - index * 0.1, // Decrease opacity for each subsequent line
                transform: `translateY(${index * 10}vh) scale(${
                  1 - index * 0.05
                })`, // Move up and scale down each line
                animationDelay: `${index * 2}s`, // Delay each line's animation
              }}
            >
              {line}
            </div>
          ))}
        </div>
      ) : (
        <p
          className={`mt-4 h-[50vh] font-light p-8 duration-300 border-y bg-neutral-900 shadow-inner shadow-black border-emerald-400 rounded-lg`}
        >
          {aboutMeText}
        </p>
      )}
    </section>
  );
};

export default About;
