'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import getStripe from "@/utils/get-stripe"
import { useSearchParams } from "next/navigation"
import { Box, CircularProgress, Typography } from "@mui/material"

const ResultPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const session_id = searchParams.get('session_id')
    
    const [loading, setLoading] = useState(true)
    const [session, setSession] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCheckoutSession = async () => {
            if(!session_id) return

            try{
                const res = await fetch(`/api/checkout_session?session_id=${session_id}`)
                const sessionData = await res.json()
                if(res.ok) {
                    setSession(sessionData)
                } else {
                    setError(sessionData.error)
                }
            }
            catch (err) {
            setError("An error occurred.")
          }
          finally {
            setLoading(false)
          }
        }

        fetchCheckoutSession()
    }, [session_id])

    if(loading) {
        return (
            <Box width="100vw" sx={{textAlign: 'center', mt: 4}}>
                <CircularProgress />
                <Typography variant="h6">Loading...</Typography>
            </Box>
        )
    }

    if(error) {
        return (
            <Box width="100vw" sx={{textAlign: 'center', mt: 4}}>
                <Typography variant="h6">{error}</Typography>
            </Box>
        )
    }

    return(
        <Box width="100vw" sx={{textAlign: 'center', mt: 4}}>
            {session.payment_status === "paid" ? (
                <>
                    <Typography variant="h4">Thanks for choosing Premium.</Typography>
                    <Box sx= {{mt: 22}}>
                        <Typography variant="h6">Session ID: {session_id}</Typography>
                        <Typography variant="body1">
                            You're Premium!. You will receive a confirmation email with your order details. For now, explore your new features!
                        </Typography>
                    </Box>
                </>
            ) : (
                <>
                    <Typography variant="h4">Payment could not be completed.</Typography>
                        <Box sx= {{mt: 22}}>
                            <Typography variant="body1">
                                Your payment has not been successful, try again or contact your card issuer.
                            </Typography>
                        </Box>
                </>
            )}
        </Box>
    )
}

export default ResultPage()