import { signOut } from '@firebase/auth'
import React from 'react'
import { auth } from '../firebase/firebase-config'

function Chat(props) {

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <section className='hero'>
            <nav>
                <h2>Welcome</h2>
                <h2>{props.user?.email}</h2>
                <button onClick={logout}>Logout</button>
            </nav>

        </section>
    )
}
export default Chat
