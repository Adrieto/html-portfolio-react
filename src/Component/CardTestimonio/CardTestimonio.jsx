import {Text, Flex, Box, Image} from '@chakra-ui/react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {colors} from '../../themes/themes.js'

const CardTestimonio=({foto, descripcion})=>{
    return (
        <Flex className='tarjeta-testimonios' flexDirection='column' alignItems='center' textAlign='center' borderStyle='dashed' borderWidth='1px' borderColor={colors.color3} width={['48%','46%','46%','23%']} borderRadius='20px' px='10px' py='15px'  my='20px'>
            
            <Image width='75px' height='75px' borderRadius='50%' my='10px' src={foto} alt="testimonio"/>
            <Flex align="center" justify="center">
                <Box as="span" className="fa fa-star" color={colors.color3} mx="1" my='10px'/>
                <Box as="span" className="fa fa-star" color={colors.color3} mx="1" />
                <Box as="span" className="fa fa-star" color={colors.color3} mx="1" />
                <Box as="span" className="fa fa-star" color={colors.color3} mx="1" />
                <Box as="span" className="fa fa-star" color={colors.color3} mx="1" />
    </Flex>
            <Text as='p' lineHeight='25px'>{descripcion}</Text>
        </Flex>
    )
}

export default CardTestimonio