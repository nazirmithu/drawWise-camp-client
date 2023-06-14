export const getRole = async email =>{
    const response = await fetch(`https://draw-wise-camp-server.vercel.app/users/${email}`)
    const user = await response.json()
    return user?.role 
}