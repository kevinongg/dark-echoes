import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
  console.log(episodes);

  /** DETAILED INFORMATION ABOUT THE SELECTED EPISODE */
  /* Create a function using global params that displays the episode details when clicked
    /* Create an if statement that if the selected episode is not true, then return
    /* return....
      /* a "section" and set the classname
        /* an "h2" with "Episode Details"
        /* a "p" tag with "Select an episode to learn more"
    ///// *** RETURN THE PUPPY DETAILS NOW *** /////
    /* return...
      /* a "section" and set the classname
        /* an "h2" with the selectedEpisode.id
        /* a "h3" with  selectedEpisode.title
        /* a "p" with selectedEpisode.description
        /* a "button" with the text "Watch now"
  /* END



  // TIPS: onClick{() => }
  /** LIST OF EPISODE THAT THE USER CAN SELECT */
  /* Create a function using global params that displays the episodes names and add an event listener
     to display episode details when it is click.
    /* Return...
      /* create a "section" and set the classname.
        /* create the "h2"
        /* create the "ul" and set the classname
          /* map episodes, use brackets to map
          /* create an LI to set the episode name in each LI and make an event listener 
             "onclick" to change the selected episode state (setEpisodeList(episode). also set
             a key with the episode id(episode.id)*/
  /* END

  
  /* RETURN HTML */
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main></main>
    </>
  );
}
