export const getSensorReadings = async () => {
  try {
    const res = await fetch('/api/sensors').then((res) => res.json())
  
    return res
  } catch (err) {
    console.log(err)
  }

}
