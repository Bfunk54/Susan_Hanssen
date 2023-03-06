import React from "react";
import "./Home.css";
import "./Bio.css";
import Typography from "@mui/material/Typography";

export default function Bio() {
  return (
    <div
      className="container bio"
      style={{
        marginTop: "100px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="bioHeader"
        style={{
          textAlign: "center",
          marginBottom: "10px",
          width: "20%",
          height: "40px",
          backgroundColor: "rgba(41, 44, 49, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          marginBottom: "20px",
          alignSelf: "flex-start",
          paddingTop: "4px",
        }}
      >
        <h2>Bio</h2>
      </div>
      <div
        style={{
          marginBottom: "10px",
          width: "92%",
          padding: "20px",
          backgroundColor: "rgba(41, 44, 49, 0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          marginBottom: "20px",
          alignSelf: "center",
          textAlign: "left",
        }}
      >
        <Typography style={{ fontSize: "16px" }} variant="p">
          Susan Hanssen has been an award-winning painter for several years and
          she is well known in south Florida for her unique and exciting work.
          As a signature member of the National Watercolor Society, the American
          Watercolor Society, and the Florida Watercolor Society, Susan has
          twice won medals at prestigious American Watercolor Exhibitions in New
          York.
          <br />
          <br />
          Susan is primarily a figurative painter: using the figure as a
          conduit, she develops a narrative that is both a literal story and a
          metaphor. The resulting images are highly accomplished, haunting and
          full of whimsy. Most recently, Susan has transitioned from paper to
          large canvas, strengthening further the impact of her work. More
          often, she creates a series of paintings centred around a particular
          theme that simultaneously illustrates and examines the power and
          dynamic of her art, such as in her solo show at the Coral Springs
          Museum of Art that celebrated her Sheep series whilst endorsing her
          considerable achievements in Fort Lauderdale.
          <br />
          <br /> Susan has taught numerous, highly successful workshops across
          Florida and New Mexico. Following her recent move to Florida’s Palm
          Coast, she is now expanding the range and scope of her work.
          <br />
          <br /> Susan’s work can be viewed on her website at
          www.susanhanssen.com or on Instagram (@susanfrosthanssen).
        </Typography>
      </div>
      <div
        className="awardsHeader"
        style={{
          textAlign: "center",
          marginBottom: "10px",
          width: "40%",
          height: "40px",
          backgroundColor: "rgba(41, 44, 49, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          marginBottom: "20px",
          alignSelf: "flex-start",
          textAlign: "center",
          "@media (max-width: 992px)": {
            height: "80px",
          },
        }}
      >
        <h2>Awards and Exhibitions</h2>
      </div>
      <div
        style={{
          marginBottom: "10px",
          width: "82%",
          padding: "20px",
          backgroundColor: "rgba(41, 44, 49, 0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          marginBottom: "20px",
          alignSelf: "center",
          textAlign: "left",
        }}
      >
        <Typography style={{ fontSize: "18px" }} variant="p">
          <span className="years">2023</span>- Juried into Fallbrook 14th Annual
          Signature American Watermedia Exhibition
          <br />
          <br />
          <span className="lines" />
          <span className="years">2022</span>- American Watercolor Society 155th
          Annual International Exhibition NYC
          <br />
          Bud &Gretchen Marble Medal
          <br />
          <br />
          - First Place Business for the Arts of Broward/ Art & Stroll
          <br />
          <br />
          - 51st Florida Watercolor Society The Kim Minichiello Memorial Award
          <br />
          <br />
          - Juried into Fallbrook 13th Annual Signature American Watermedia
          Exhibition
          <br />
          <br />
          <span className="lines" />
          <span className="years">2021</span>- Juried into Fallbrook 12th Annual
          Signature American Watermedia Exhibiton
          <br />
          <br />
          <span className="lines" />
          <span className="years">2018</span>- Southern Watercolor Society 41st
          Annual Juried Exhibition
          <br />
          Watercolor Society of Alabama Award
          <br />
          <br />
          - 47th Florida Watercolor Society Guy Beattie Award
          <br />
          <br />
          - Honorable Mention Coral Springs Museum Annual Regional Exhibition
          <br />
          <br />
          <span className="lines" />
          <span className="years">2017</span>- Juried into American Watercolor
          Society 150th Annual International Exhibition NYC
          <br />
          <br />
          <span className="lines" />
          <span className="years">2016</span>- American Watercolor Society 149th
          Annual International Exhibition NYC
          <br />
          Carl Folke Sahlin Medal
          <br />
          <br />
          - Juried into Fallbrook 7th Annual Signature American Watermedia
          Exhibition
          <br />
          Merchandise Award
          <br />
          <br />
          <span className="lines" />
          <span className="years">2015</span>- Juried into American Watercolor
          Society 148th Annual International Exhibition NYC
          <br />
          <br />
          - 44th Florida Watercolor Society Exhibition The Carol Ann Sherman
          Memorial Award
          <br />
          <br />
          <span className="lines" />
          <span className="years">2013</span>- 42nd Florida Watercolor Society
          Exhibition Best in Show
          <br />
          <br />
          <span className="lines" />
          <span className="years">2012</span>- 41st Florida Watercolor Society
          Exhibition Alan R. Chiara Memorial Award
          <br />
          <br />
          <span className="lines" />
          <span className="years">2011</span>- 40th Florida Watercolor Society
          Exhibition Merchandise Award
          <br />
          <br />
          <span className="lines" />
          <span className="years">2010</span>- 39th Florida Watercolor Society
          Exhibition Best In Show
          <br />
          <br />
        </Typography>
      </div>
    </div>
  );
}
