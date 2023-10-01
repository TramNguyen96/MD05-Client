import { useDispatch, useSelector } from 'react-redux'
import RouteSetUp from './routes/RouteSetUp'
import { useEffect } from 'react'
import { userAction } from './stores/slices/user.slice'
import { StoreType } from './stores'
import { Socket, io } from 'socket.io-client'
import { User } from './utils/Interfaces/User'
import { Receipt } from './utils/Interfaces/Receipt'

function App() {
  const dispatch = useDispatch()

  const userStore = useSelector((store: StoreType) => store.userStore)

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

        /* User */
        socket.on("receiveUserData", (user: User) => {
          dispatch(userAction.setData(user))
        })

        /* Receipt */
        socket.on("receiveReceipt", (receipts: Receipt[]) => {
          dispatch(userAction.setReceipt(receipts))
        })

        /* Cart */
        socket.on("receiveCart", (cart: Receipt) => {
          dispatch(userAction.setCart(cart))
        })

        dispatch(userAction.setSocket(socket))
      }
    }

  }, [userStore.reload])

  // useEffect(() => {
  //   console.log("userStore.cart", userStore.cart);
  // }, [userStore.cart])

  // useEffect(() => {
  //   console.log("userStore.receipt", userStore.receipt);
  // }, [userStore.receipt])

  return (
    <>
      <RouteSetUp />
    </>

  )
}

export default App
