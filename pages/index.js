import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from '../components/Meta'
import { Box, Typography } from '@mui/material'
export default function Home() {
  return (
    <>
      <Meta />
      <Typography
        variant='h2'
        m={3}
        textAlign="center">
        güncel konular project..
      </Typography>
    </>
  )
}
