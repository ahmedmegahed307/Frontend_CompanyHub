import { HStack ,Image,Text } from '@chakra-ui/react'

interface Props {
    children:string,
    onClick:()=>void,
    iconUrl:string
}
const NavBarLİnk = ({children,iconUrl,onClick}:Props) => {
  return (

<>
<HStack  onClick={onClick} >
<Image pl={6} src={iconUrl} alt='Dan Abramov' />
<Text color={'gray.500'} fontWeight={'500'} fontSize={'md'}> {children}</Text>
</HStack></>    )
}

export default NavBarLİnk