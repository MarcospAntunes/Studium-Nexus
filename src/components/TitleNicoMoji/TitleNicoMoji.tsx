import localFont from 'next/font/local';
import Title from './TitleNicoMoji.style';

const NicoMoji = localFont({
    src: [
      {
        path: '../../../public/fonts/NicoMoji-Regular.ttf',
        weight: '300',
      },
    ],
    variable: '--font-NicoMoji'
  })

function TitleNicoMoji({ children }: any) {
    return (
        <Title className={NicoMoji.className}>
            {children}
        </Title>
    )
}

export default TitleNicoMoji;