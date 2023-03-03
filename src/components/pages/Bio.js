import React from "react";
import "./Home.css";
import "./Bio.css";
import Typography from "@mui/material/Typography";

export default function Bio() {
  return (
    <div className="container" style={{marginTop: '100px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div
              className="recent"
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "20%",
                height: "40px",
                backgroundColor: "rgba(28, 28, 28, 0.55)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
                marginBottom: '20px',
                alignSelf: 'flex-start'
              }}
            >
      <h2>Bio</h2>
      </div>
      <div style={{width: '92%'}}>
      <Typography style={{fontSize: '16px'}} variant="p">
        Susan Hanssen has been an award-winning painter for several years and
        she is well known in south Florida for her unique and exciting work. As
        a signature member of the National Watercolor Society, the American
        Watercolor Society, and the Florida Watercolor Society, Susan has twice
        won medals at prestigious American Watercolor Exhibitions in New York.<br/>
        <br/>Susan is primarily a figurative painter: using the figure as a conduit,
        she develops a narrative that is both a literal story and a metaphor.
        The resulting images are highly accomplished, haunting and full of
        whimsy. Most recently, Susan has transitioned from paper to large
        canvas, strengthening further the impact of her work. More often, she
        creates a series of paintings centred around a particular theme that
        simultaneously illustrates and examines the power and dynamic of her
        art, such as in her solo show at the Coral Springs Museum of Art that
        celebrated her Sheep series whilst endorsing her considerable
        achievements in Fort Lauderdale.<br/><br/> Susan has taught numerous, highly
        successful workshops across Florida and New Mexico. Following her recent
        move to Florida’s Palm Coast, she is now expanding the range and scope
        of her work.<br/><br/> Susan’s work can be viewed on her website at
        www.susanhanssen.com or on Instagram (@susanfrosthanssen).
      </Typography>
      </div>
    </div>
  );
}
