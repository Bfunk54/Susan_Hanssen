import React from 'react';
import './Home.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './Resume.css'

export default function Blog() {
        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
            Click anywhere to download
          </Tooltip>
        );

  return (
    <div className='container'>
     
        </div>
  );
}
