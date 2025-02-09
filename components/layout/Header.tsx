import React from 'react'
import Link from 'next/link'
import { Box } from '@kalidao/reality'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Menu } from '@design/Menu'
import { header, logo } from '@components/dao-dashboard/layout/layout.css'

export default function Header() {
  return (
    <Box className={header}>
      <Link href="/" passHref>
        <Box as="a" className={logo}>
          LexBridge
        </Box>
      </Link>
      <Box display={'flex'} gap="2" alignItems={'center'}>
        <ConnectButton label="Login" />
        <Menu />
      </Box>
    </Box>
  )
}
