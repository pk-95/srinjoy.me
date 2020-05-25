import React, {FunctionComponent} from 'react'

import { Image, Link, Box, PseudoBox, Heading, Text, Tooltip, Flex, useColorMode, IconButton } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const BackgroundImage = styled(Image)`
  object-fit: cover;
`

type ButtonData = {
  label: string,
  link: string,
  external?: boolean
}

type CardProps = {
  className?: string
  title: string
  subtitle?: string
  imagePath?: string
  text?: string
  buttonData?: ButtonData
}

const MyCard:FunctionComponent<CardProps> = ({className, title, subtitle, imagePath, buttonData, text}) => {
  const router = useRouter()
  const {colorMode, toggleColorMode} = useColorMode();

  const pushProjectPage = () => {
    router.push("/"+buttonData.link)
  }

  return (
    <PseudoBox
      maxW="md"
      overflow="hidden"
      borderWidth="1px"
      rounded="lg"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      position="relative"
      onClick={pushProjectPage}
      transition="all .25s ease-in-out"
      cursor="pointer"
      _hover={{transform: "scale(1.016)"}}>

      <BackgroundImage src={imagePath} maxH="250px" />
      <Box p={2} >
        <Flex flexDirection="column" height="100%">
          <Heading as="h4" size="md" fontWeight="bold">
            {title}
          </Heading>

          <Flex>
            <Text py={2} display="flex" flexGrow={1}>
              {text}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </PseudoBox>
  )
}

export default MyCard