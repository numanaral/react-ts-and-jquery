const MouseWatcher = () => {
  const [xy, setXY] = useState({ x: null, y: null });

  const updatePosition = e => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add the effect.
    window.addEventListener('mousemove', updatePosition);
    
    // Remove the effect
    return () => {
      window.addEventListener('mousemove', updatePosition);
    }
  }, [])

  return (
    <div>
      Coords: {xy.x} {xy.y}
    </div>
  )
}


const PageComponent = () => {
  return (
    <div>
      {/* other items ... */}
      <MouseWatcher></MouseWatcher>
      {/* other items ... */}
    </div>
  )
}
