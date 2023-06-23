import { useEffect } from "react";
import { useSelector } from "react-redux"

export  function Config() {
const data = useSelector((state)=>state.data)

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(data));
  }, [data]);


  return null
}
