import { useDispatch, useSelector } from 'react-redux'
import RouteSetUp from './routes/RouteSetUp'
import { useEffect } from 'react'
import { userAction } from './stores/slices/user.slice'
import { StoreType } from './stores'
import { Socket, io } from 'socket.io-client'
import { User } from './utils/Interfaces/User'
import { Receipt } from './utils/Interfaces/Receipt'
import { Modal } from 'antd'

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

        /* Cash Pay */
        socket.on("cash-status", (status: boolean) => {
          if (status) {
            // Modal.success({
            //   title: "Đã thanh toán thành công",
            //   content: "Cảm ơn bạn đã mua hàng",
            //   onOk: () => {
            //     console.log("đã vào!")
            //     window.location.href = "/purchase-history"
            //   }
            // })
            window.location.href = "/paid";
          }
        })

        socket.on("payQr", (url: string | null) => {
          dispatch(userAction.setCartPayQr(url))
          if (!url) {
            Modal.confirm({
              title: "Payment failed !",
              content: "Do you want to pay again?",
              onOk: () => {
                socket.emit("payZalo", {
                  receiptId: userStore.cart?.id,
                  userId: userStore.data?.id
                })
              }
            })
          }
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
