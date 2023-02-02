import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const HeartInfo = (props) => {
  return (
    <section>
      <span id="heartWidget" className="widget">
        {props.likesCount} ❤️s
      </span>
    </section>
  );
};

HeartInfo.propTypes = {
  likeCount: PropTypes.number
};

export default HeartInfo;