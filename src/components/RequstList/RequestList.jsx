import { useState } from "react"
import styles from "../RequstList/RequestList.module.css"

export default function RequestList({values}){
    return(
        <div>
            {values.map((request)=>(
                <div className={styles.requestBox}>
                    <h1 className={styles.name}>name: {request.name}</h1>
                    <h1 className={styles.phone}>phone: {request.phone}</h1>
                    <h1 className={styles.email}>email: {request.email}</h1>
                    <h1 className={styles.email}>Date: {request.date}</h1>
                    <br/>
                    <button className={styles.deleteButton}
                    value={request.reqId}
                    onClick={()=>{request.deleteFunction(event); setDeletion(request.status)}}>Delete Requst</button>
                    <br/>
                    <hr/>
                </div>
            ))}
        </div>
    )
}