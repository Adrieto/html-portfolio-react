import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: "Mona sans, Helvetica Neue, Helvetica, sans-serif",
    heading: "Mona sans, Helvetica Neue, Helvetica, sans-serif",
  },
  colors: {
    color1: 'rgb(16,24,32)',  // "Negro"
    color2: 'rgb(249,249,249)', // "Blanco"
    color3: 'rgb(254,231,21)', // "Amarillo"
  },

  styles: {
    global: {
      'h1': {
        fontSize: ['2xl', '3xl', '4xl'],
        fontWeight: 'bold',
        color: 'color2',
      },
      'h2': {
        fontSize: ['lg', 'xl', '2xl'],
        fontWeight: 'semibold',
        // color: 'none'
      },
      'h3': {
        fontSize: 'sm',
        fontWeight: 'semibold',
      },
      'p': {
        fontSize: ['md', 'md', 'lg'],
        lineHeight: ['25px', '30px', '35px', '40px'],
        color: 'color2',
      },
      'section': {
        px: ['2%', '4%', '8%', '10%', null, '15%'],
        my: ['50px', null, null, null, '80px', '90px'],
      },
      'body': {
        bg: 'color1',
      },
      'a': {
        fontSize: [null, null, null, '14px', '16px', '18px'],
        fontWeight: 600,
        _hover: {
          cursor: 'pointer',
          textDecoration: 'underline',
        },
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        bg: 'color3',
        color: 'color1',
        borderColor:'color1',
        borderStyle:'solid',
        borderWidth:'1px',
        _hover: {
          bg: 'color1', //ESTA PROPIEDAD NO SE APLICA, NO ENTIENDO CUAL PUEDE SER EL PROBLEMA. CREO QUE CHAKRA TIENE ALGUN ESTILO PREDEFINIDO QUE NO LO PUEDO SOBREESCRIBIR...
          color:'color3' //ESTA PROPIEDAD SI SE APLICA
        },
      },
    },
  },
});

export default theme;

  // Definir colores en formato rgb()
export const colors = {
    color1: 'rgb(16,24,32)',  // "Negro"
    color2: 'rgb(249,249,249)', // "Blanco"
    color3: 'rgb(254,231,21)', // "Amarillo"
};
