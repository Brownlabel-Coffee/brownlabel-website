import SceneContainer from './SceneContainer';
import ScrollCoffeeBean from './ScrollCoffeeBean';
import FloatingBeansParticles from './FloatingBeansParticles';

export default function Hero3D({ isPaused = false }) {
  return (
    <SceneContainer camera={{ position: [0, 0, 4.6], fov: 40 }} isPaused={isPaused}>
      <ScrollCoffeeBean />
      <FloatingBeansParticles count={6} />
    </SceneContainer>
  );
}
