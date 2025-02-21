import type { Metadata } from 'next';
import React, { FC } from 'react';

export const metadata: Metadata = {
    title: 'locked',
    description: "we are secure.",
    robots: {follow: false, index: false},
    referrer: "strict-origin"
}

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased tracking-tight">
                {children}
            </body>
        </html>
    );
};

export default RootLayout;