import { useDispatch, useSelector } from 'react-redux'
import RouteSetUp from './routes/RouteSetUp'
import { useEffect } from 'react'
import api from '@services/api'
import { userAction } from './stores/slices/user.slice'
import { StoreType } from './stores'
import { Socket, io } from 'socket.io-client'
import { message } from 'antd'
import { User } from './utils/Interfaces/User'

function App() {
  const dispatch = useDispatch()

  const userStore = useSelector((store: StoreType) => store.userStore)

  /* Check Token */
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     api.userApi.authen({
  //       token: localStorage.getItem("token")
  //     })
  //       .then(res => {
  //         // console.log("res.data", res.data);
  //         if (res.status == 200) {
  //           dispatch(userAction.setData(res.data.data))
  //         }
  //       })
  //       .catch(err => {
  //         console.log("err", err);

  //       })
  //   }
  // }, [])

  useEffect(() => {
    if (!userStore.data) {
      let token = localStorage.getItem("token")

      if (token) {
        let socket: Socket = io("http://127.0.0.1:3001", {
          query: {
            token
          }
        })

        socket.on("connectStatus", (data: { status: boolean, message: string }) => {
          if (data.status) {
            console.log(data.message)
          } else {
            console.log(data.message)
          }
        })

        socket.on("disconnect", () => {
          dispatch(userAction.setData(null))

        })

        socket.on("receiveUserData", (user: User) => {
          dispatch(userAction.setData(user))
        })

        dispatch(userAction.setSocket(socket))
      }
    }

  }, [userStore.reload])

  // useEffect(() => {
  //   console.log("userStore.data", userStore.data);
  // }, [userStore.data])

  return (
    <>
      <RouteSetUp />
    </>

  )
}

export default App
