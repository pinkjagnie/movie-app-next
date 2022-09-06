import Image from "next/image";

function Logo() {
  return (
    
      <Image
        src="/images/movie_app_logo-150-50.svg"
        alt="Movie details app logo"
        width={250}
        height={180}
      />
    
  );
}

export default Logo;