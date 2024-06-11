'use client';



interface LogoTitleProps{
  disable?: boolean
}


const LogoTitle:React.FC<LogoTitleProps> = ({disable = false}) => {
  
  

  if (disable) {
    return null;
}
 

  return ( 
      <>
          
          </>
  );
}
 
export default LogoTitle;