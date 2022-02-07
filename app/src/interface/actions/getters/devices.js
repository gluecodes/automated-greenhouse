export const getDevicesInformation = async () => {
  const res = await fetch('/api/devices').then((res) => res.json())

  return res
}
