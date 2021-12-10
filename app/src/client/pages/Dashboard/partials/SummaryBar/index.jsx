import React from "react";
import { SummaryBar } from "../../../../components";

export default () => {
  const items = [
    { text: 'temperature: 20C' },
    { text: 'humidity: 80%' },
    { text: 'earthMoisture: 20%' },
  ]
  return (
    <SummaryBar summaryItems={items} />
  )
}