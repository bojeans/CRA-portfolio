import CollapsibleText from "../utils/CollapsibleText";

const NonTechnical = () => {
  return (
    <div className="w-full md:w-1/3 px-4">
      <div className="rounded-lg shadow-md p-4 mb-4 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-2">
          <span className="border-b border-gray-500">Hobbies/Interests</span>
        </h2>
        <ul className="list-none font-serif">
          <li className="mb-4">
            <strong className="title">Coding Career</strong> -
            <span className="rounded-md inline-block  px-2 py-1">
              <CollapsibleText
                text="Reasonably flexible, accepting that this is largerly going to
                revolve around my first few years in the industry as I'd like to
                work towards becoming a senior fullstack dev since that's where
                the bulk of the opportunities and demands is. In my coding spare
                time (once I've developed a couple of more impressive projects
                for this portfolio page) I'll look at picking up lessons on
                kaggle.com/learn python/AI/machine learning as well as some
                blockchain dev courses as they peak my interest."
                maxLength={100}
                buttonColor="blue"
              />
            </span>
          </li>
          <li className="mb-4">
            <strong className="title">Recognised Education</strong> -
            <span className="rounded-md inline-block px-2 py-1">
              <CollapsibleText
                text="Bachelor of Management Studies - University of Waikato. Majoring
                in Information Systems & Strategic Management."
                maxLength={100}
                buttonColor="blue"
              />
            </span>
            <span className="rounded-md inline-block px-2">
              <CollapsibleText
                text="NZ Diploma in Web Development and Design – Developers Institute
                NZ (although this tertiary institution & former employer of mine
                is sadly now insolvent)"
                maxLength={100}
                buttonColor="blue"
              />
            </span>
          </li>
          <li className="mb-4">
            <strong className="title">Sports</strong> -
            <span className="rounded-md inline-block px-2 py-1">
              <CollapsibleText
                text="
                Swimming, football, union, league, cricket. Mostly just a
                spectator these days. As a teenager I swam competitively and
                made it to nationals, before retiring to focus on University.
                Still play football socially and enjoy watching the NRL and EPL
                from time to time."
                maxLength={100}
                buttonColor="blue"
              />
            </span>
          </li>
          <li className="mb-4">
            <strong className="title">Travel</strong> -
            <span className="rounded-md inline-block px-2 py-1">
              <CollapsibleText
                text="
                Probably my biggest passion nowadays, 30+ countries. Definitely
                an addiction once you get started. Apparently I have an
                Adventurer personality type so probably explains it a little.
                Some notable highlights: hiking Salkantay trek Machu Picchu.
                Ayahuasca Retreat in the Amazon jungle. Motorbiking Ha Giang
                Loop (northern Vietnam). Mountain biking down ‘death road’ in
                Bolivia. Hiking Patagonia mountains. Oktoberfest in Munich, St
                Paddys in Dublin & San Fermin in Pamplona."
                maxLength={100}
                buttonColor="blue"
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NonTechnical;
