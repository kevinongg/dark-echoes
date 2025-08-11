import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
  console.log(episodes);

  /** DETAILED INFORMATION ABOUT THE SELECTED EPISODE */
  // Create a function using global params that displays the episode details when clicked
  const EpisodeDetails = () => {
    // Create an if statement that if the selected episode is not true, then return
    if (!selectedEpisode) {
      // return....
      return (
        // a "section" and set the classname
        // an "h2" with "Episode Details"
        // a "p" tag with "Select an episode to learn more"
        <section className="episode-details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more</p>
        </section>
      );
    }
    ///// *** RETURN THE PUPPY DETAILS NOW *** /////
    // return...
    return (
      // a "section" and set the classname
      // an "h2" with the selectedEpisode.id
      // a "h3" with  selectedEpisode.title
      // a "p" with selectedEpisode.description
      // a "button" with the text "Watch now"
      <section className="episode-details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </section>
      // END
    );
  };

  // TIPS: onClick{() => }
  /** LIST OF EPISODE THAT THE USER CAN SELECT */
  /* Create a function using global params that displays the episodes names and add an event listener
    to display episode details when it is click. */
  const EpisodeNameList = () => {
    // Return...
    return (
      /* create a "section" and set the classname.
            /* create the "h2" and name it "Episodes"
            /* create the "ul" and set the classname
              /* map the state episodes, use brackets to map
              /* create an LI to set the episode title in each LI and make an event listener in the LI
                 "onclick" to update the selectedEpisode state (setSelectedEpisode(episode). also set
                 a key with the episode id(episode.id)*/
      <section className="episode-list">
        <h2>Episodes</h2>
        <ul className="episode-list"></ul>
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </section>
    );
  };
  /* END

  
  /* RETURN HTML */
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeNameList />
        <EpisodeDetails />
      </main>
    </>
  );
}
