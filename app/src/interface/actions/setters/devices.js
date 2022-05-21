export const toggleDevice = async ({ deviceName }) => {
    try {
        const res = await fetch(`/api/devices/toggleDevice/${deviceName}`)

        return res
    } catch (err) {
        console.error(err)
    }
}