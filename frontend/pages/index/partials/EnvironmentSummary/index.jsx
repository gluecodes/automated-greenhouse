import { EnvaironmentSummary } from "../../../../components"

export default () => {
  const items = [
    {
      text: 'pierwszy item'
    },
    {
      text: 'drugi item'
    },
    {
      text: 'trzeci item'
    }
  ]
  
  return (<EnvaironmentSummary items={items}/>)}