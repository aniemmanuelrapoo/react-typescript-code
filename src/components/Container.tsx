type ContainerProps ={
   styles: React.CSSProperties
}

const Container = ({styles}: ContainerProps) => {
  return (
    <div style={styles}>
      Text Content goes here
    </div>
  )
}

export default Container