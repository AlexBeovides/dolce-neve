import '../styles/ParallaxText.scss'

export const ParallaxText=({ innerText }: { innerText: string }) => {
  return (
    <div className='parallax-text'>
      <span>
        {innerText}
      </span>
    </div>
  );
}
