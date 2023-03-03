import React from "react";
import "./Home.css";
import "./Statement.css";
import Typography from "@mui/material/Typography";

export default function Statement() {
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="recent"
        style={{
          textAlign: "center",
          marginBottom: "10px",
          width: "28%",
          height: "40px",
          backgroundColor: "rgba(28, 28, 28, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          marginBottom: "20px",
          alignSelf: "flex-start",
        }}
      >
        <h2>Artist's Statement</h2>
      </div>
      <div style={{ width: "92%" }}>
        <Typography style={{ fontSize: "16px" }} variant="p">
          My paintings reflect experiences, feelings and thoughts from life’s
          events. For the most part, the ideas I work with are conundrums; the
          personal dilemmas, conflicts and issues shared by us all, such as
          confusion, vulnerability, loss and joy. My challenge, and enjoyment,
          is in expressing these quandaries in an unexpected way. <br/> <br/> I am a
          figurative painter, using the figure as a conduit to develop a
          narrative that is both a literal story and a metaphor for exploration.
          One such painting is of Prudence, a young child; even her name, with
          its dual meaning of caution, is ironic. She is child-like in her
          costume, naïve to her surroundings, and vulnerable. But she is
          manipulated to create a visual metaphor. She appears ludicrous hidden
          under the shadows of a large military hat, theatrical white make-up
          and exaggerated red lips, but her innocence of life is precarious and
          her only protection is her magic wand. <br/> <br/> Perhaps include a small picture
          of Prudence with the above text wrapped around it? It wasn’t until I
          did a number of paintings in this series that I recognized this little
          person was, in many ways, a metaphor for my own life and the lives of
          many others as we grapple with our personal dilemmas, even as adults.<br/> <br/>
          I frequently use animals, costumes and other symbols to support the
          narrative of story and metaphor, often as representation of strength
          and innocence, such as with toys of play. Recently, I started working
          with birds as a metaphor; showing a nagging annoyance rather than a
          thing of beauty. The bird paintings are extremely powerful - perhaps
          include a small version of each with wrap-around text?<br/> <br/> Ultimately, I
          aspire to fascinate with the unfamiliar. To express a shared thought
          or experience in an image that is intriguing, unique, and somewhat
          quirky.
        </Typography>
      </div>
    </div>
  );
}
