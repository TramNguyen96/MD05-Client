import { useDispatch, useSelector } from 'react-redux'
import RouteSetUp from './routes/RouteSetUp'
import { useEffect } from 'react'
import api from '@services/api'
import { userAction } from './stores/slices/user.slice'

function App() {
  const dispatch = useDispatch()

  /* Check Token */
  useEffect(() => {
    if (localStorage.getItem("token")) {
      api.userApi.authen({
        token: localStorage.getItem("token")
      })
        .then(res => {
          // console.log("res.data", res.data);
          if (res.status == 200) {
            dispatch(userAction.setData(res.data.data))
          }
        })
        .catch(err => {
          console.log("err", err);

        })
    }
  }, [])

  return (
    <>
      <RouteSetUp />
    </>

  )
}

export default App
