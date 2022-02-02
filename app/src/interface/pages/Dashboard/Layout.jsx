import React from 'react';
import { SummaryBar } from './partials';
import { Cards } from './partials';
import { Background } from '../../components';

export default () => {
  return (
    <Background>
      <SummaryBar />
      <Cards />
    </Background>
  );
};
