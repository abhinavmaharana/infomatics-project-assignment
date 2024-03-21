import React from 'react'
import { Card,CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function CardBuilder({ title, subtitle, children }) {
  return (
    <div className="h-full flex justify-center items-center text-left">
        <Card className="flex flex-col">
            <CardHeader className='space-y-4'>
                <CardTitle className='ibm-plex-sans-regular text-lg'>{title}</CardTitle>
                <CardDescription className='ibm-plex-sans-regular text-sm'>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
                {children}
            </CardContent>
        </Card>
    </div>
  )
}
