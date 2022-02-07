export const getSensorReadings = async () => {
  const res = await fetch('/api/sensors').then((res) => res.json())

  return res
}
