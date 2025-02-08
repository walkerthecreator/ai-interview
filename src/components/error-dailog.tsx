// 'use client'
import { XCircle, Home, Mail, Frown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function ErrorDialog() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <Frown className="w-16 h-16 text-red-300 mx-auto " />
                    <CardTitle className="text-2xl font-bold">It's not you, it's us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-gray-400 mb-4">
                        We're experiencing some technical difficulties. Our team has been notified and is working on a fix.
                    </p>
                    <Button
                        onClick={() => router.push('/')}
                        className="w-full mb-4 "
                    >
                        <Home className="mr-2 h-4 w-4" /> Go back to homepage
                    </Button>
                </CardContent>
                <CardFooter className="justify-center">
                    <div className="text-sm text-gray-500 flex flex-col items-center">
                        <p className="flex items-center text-base">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact support: {' '}
                        </p>
                        <a href="mailto:nitinjaswal2616@gmail.com" className="text-blue-500 hover:underline ml-1">
                            nitinjaswal2616@gmail.com
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

