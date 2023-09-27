import './CardCollection.scss'

export default function CardCollection() {
    return (
        <div className='card-collection'>
            <div className="container">
                <div className="circle">
                    <img src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2Fe52b88ce20896801a51f5602a7740ee0493c0f31_800x800.png?alt=media&token=1b6dccff-9f8f-40e5-a06b-816aa73b55cb" />
                </div>
                <div className='text'>
                    <h1 className="shoeName"> DW WOMEN'S WATCH</h1>
                </div>
            </div>

            <div className="container">
                <div className="circle">
                    <img src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2Fini9tdha5okxs2natdma_800x800.png?alt=media&token=b95a092c-43e2-4d3d-97fd-fdfd5ce505f1" />
                </div>
                <div className='text'>
                    <h1 className="shoeName"> DW MEN'S WATCH</h1>
                </div>
            </div>

            <div className="container">
                <div className="circle">
                    <img src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2Fu9mpwt0td2wbpj8oiwwx_800x800.png?alt=media&token=d08b772a-e490-498b-b35a-91e1d002146f" />
                </div>
                <div className='text'>
                    <h1 className="shoeName"> DW GIFT SET</h1>
                </div>
            </div>

        </div>
    )
}
