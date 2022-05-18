export const getDevicesInformation = async () => {
  try {
    const res = await fetch('/api/devices').then((res) => res.json())

    return res
  } catch (err) {
    console.log(err)
  }

}
