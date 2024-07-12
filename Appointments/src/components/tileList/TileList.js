import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from '../tile/Tile';

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles?.map((tile) => (
        <Tile tiles={tile} />
      ))}
    </div>
  );
};

TileList.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
