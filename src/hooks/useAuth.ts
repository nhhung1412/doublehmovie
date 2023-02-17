import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<any | null>({})
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        })
    })
    return { currentUser }

}