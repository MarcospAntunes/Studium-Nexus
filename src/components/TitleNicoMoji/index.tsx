import localFont from 'next/font/local';
import Title from './TitleNicoMoji.style';
import Children from '@/types/children.type';

const NicoMoji = localFont({
  src: [
    {
      path: '../../../public/fonts/NicoMoji-Regular.ttf',
      weight: '300',
    },
  ],
  variable: '--font-NicoMoji'
})

function TitleNicoMoji({ children }: Children): JSX.Element {
  return (
    <Title className={NicoMoji.className}>
      {children}
    </Title>
  )
}

export default TitleNicoMoji;