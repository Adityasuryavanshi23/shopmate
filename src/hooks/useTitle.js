import { useEffect } from "react"

export const useTitle = (title) => {

useEffect(()=>{
  document.title = `Ecommerce | ${title}`
})



  return (
   null
  )
}
