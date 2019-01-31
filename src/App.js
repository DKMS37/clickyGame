import React from "react";
import Wrapper from "./components/Wrapper";

import EmojiCard from "./components/EmojiCard";
import friends from "./emoji.json";

function App() {

  return (
    <Wrapper>
      < EmojiCard
        image={friends[0].image}
      />
      < EmojiCard
        image={friends[10].image}
      />
      < EmojiCard
        image={friends[2].image}
      />
      < EmojiCard
        image={friends[3].image}
      />
      < EmojiCard
        image={friends[4].image}
      />
      < EmojiCard
        image={friends[5].image}
      />
      < EmojiCard
        image={friends[6].image}
      />
      < EmojiCard
        image={friends[7].image}
      />
      < EmojiCard
        image={friends[8].image}
      />
      < EmojiCard
        image={friends[9].image}
      />
      < EmojiCard
        image={friends[11].image}
      />
      < EmojiCard
        image={friends[1].image}
      />
    </Wrapper>
  );
}

export default App;